import React, { useEffect, useRef, useState } from 'react';
import './PixelName.css';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  color: string;
  size: number;
}

const PixelName: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | undefined>(undefined);

  const text = "DEXTRUS";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const initParticles = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const w = container.offsetWidth;
      const h = container.offsetHeight || 400;
      
      canvas.width = w;
      canvas.height = h;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Use the actual text color from CSS
      const computedStyle = getComputedStyle(container);
      const textColor = computedStyle.color || '#000000';

      const fontSize = Math.min(w / 6, 180);
      ctx.font = `900 ${fontSize}px Inter`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'white'; 
      ctx.fillText(text, w / 2, h / 2);

      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;
      particles.current = [];

      const gap = 3; // Denser pixels
      for (let y = 0; y < h; y += gap) {
        for (let x = 0; x < w; x += gap) {
          const index = (y * w + x) * 4;
          if (data[index + 3] > 128) {
            particles.current.push({
              x: 0,
              y: 0,
              originX: Math.random() * w,
              originY: Math.random() * h, // Start within canvas for visibility test
              targetX: x,
              targetY: y,
              color: textColor,
              size: Math.random() * 3 + 1
            });
          }
        }
      }
    };

    initParticles();
    const resizeObserver = new ResizeObserver(() => initParticles());
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start forming when top of section is 20% into the screen
      // Fully formed when section is in the middle
      const start = windowHeight * 0.9;
      const end = windowHeight * 0.2;
      
      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const pCount = particles.current.length;
      const t = scrollProgress;
      const ease = t * t * (3 - 2 * t);
      
      for (let i = 0; i < pCount; i++) {
        const p = particles.current[i];
        
        // At progress 0, they are scattered randomly
        // At progress 1, they are at target
        const currentX = p.originX + (p.targetX - p.originX) * ease;
        const currentY = p.originY + (p.targetY - p.originY) * ease;
        
        ctx.fillStyle = p.color;
        ctx.fillRect(currentX, currentY, p.size, p.size);
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [scrollProgress]);

  return (
    <div className="pixel-name-section" ref={containerRef} style={{ zIndex: 10, position: 'relative' }}>
      <canvas ref={canvasRef} className="pixel-canvas" />
    </div>
  );
};

export default PixelName;
