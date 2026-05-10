import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import './VoiceTestimonial.css';

interface TranscriptLine {
  text: string;
  start: number; // seconds
  end: number;   // seconds
}

interface VoiceTestimonialProps {
  audioSrc: string;
  name: string;
  time: string;
  avatar?: string;
  transcript: TranscriptLine[];
}

const VoiceTestimonial: React.FC<VoiceTestimonialProps> = ({ audioSrc, name, avatar, transcript }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    
    const updateProgress = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setProgress((currentTime / duration) * 100);

        // Find the active transcript line
        const activeLine = transcript.find(
          line => currentTime >= line.start && currentTime <= line.end
        );
        setCurrentText(activeLine ? activeLine.text : "");
      }
    };

    audioRef.current.addEventListener('timeupdate', updateProgress);
    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentText("");
    });

    return () => {
      audioRef.current?.pause();
      audioRef.current?.removeEventListener('timeupdate', updateProgress);
    };
  }, [audioSrc, transcript]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const bars = Array.from({ length: 25 });

  return (
    <div className="vn-wrapper-outer">
      <div className="vn-main-row">
        {/* The WhatsApp Bubble */}
        <div className="vn-card">
          <div className="vn-avatar-wrapper">
            {avatar ? <img src={avatar} alt={name} /> : <div className="vn-default-avatar">👤</div>}
          </div>

          <button className="vn-play-btn" onClick={togglePlay}>
            {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
          </button>

          <div className="vn-content">
            <div className="vn-waveform">
              {bars.map((_, i) => {
                const barProgress = (i / bars.length) * 100;
                return (
                  <div 
                    key={i} 
                    className={`vn-bar ${progress > barProgress ? 'active' : ''}`}
                    style={{ height: `${Math.random() * 12 + 6}px` }} 
                  />
                );
              })}
            </div>
            {/* <div className="vn-footer">
              <span className="vn-duration">{time}</span>
              <span className="vn-status">✓✓</span>
            </div> */}
          </div>
        </div>

        {/* The Transcript Sidecar */}
        <div className={`vn-transcript-area ${currentText ? 'visible' : ''}`}>
           <p>{currentText}</p>
        </div>
      </div>
      <p className="vn-label">{name}</p>
    </div>
  );
};

export default VoiceTestimonial;