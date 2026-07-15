import React, { useState } from 'react';
import './Architecture.css';

const Architecture = () => {
  const [activeLayer, setActiveLayer] = useState<'frontend' | 'backend' | 'db'>('frontend');

  return (
    <div className="architecture-section">
      <h2>How I Architect Systems</h2>
      <p className="section-subtitle">Click a layer to see how I build solid, distributed web applications.</p>
      
      <div className="architecture-tabs">
        <button 
          className={activeLayer === 'frontend' ? 'active' : ''} 
          onClick={() => setActiveLayer('frontend')}
        >
          Frontend (UX & State)
        </button>
        <button 
          className={activeLayer === 'backend' ? 'active' : ''} 
          onClick={() => setActiveLayer('backend')}
        >
          Backend & APIs
        </button>
        <button 
          className={activeLayer === 'db' ? 'active' : ''} 
          onClick={() => setActiveLayer('db')}
        >
          Database & Security
        </button>
      </div>

      <div className="architecture-display">
        {activeLayer === 'frontend' && (
          <div className="architecture-details">
            <h3>Responsive & Fast Client Layers</h3>
            <ul>
              <li><strong>Frameworks:</strong> Next.js & React for optimized rendering.</li>
              <li><strong>State:</strong> Clean global context or lightweight state containers for zero-lag interactions.</li>
              <li><strong>Styles:</strong> Tailwind CSS for highly maintainable, modern, utility-first design systems.</li>
            </ul>
          </div>
        )}
        {activeLayer === 'backend' && (
          <div className="architecture-details">
            <h3>Robust Distributed Backend Services</h3>
            <ul>
              <li><strong>Runtime:</strong> Node.js & Express for high-concurrency event loops.</li>
              <li><strong>Integrations:</strong> Custom webhook handlers and escrow API integrations.</li>
              <li><strong>Performance:</strong> Aggressive route caching and minimal payload overhead.</li>
            </ul>
          </div>
        )}
        {activeLayer === 'db' && (
          <div className="architecture-details">
            <h3>Secure Data Warehousing</h3>
            <ul>
              <li><strong>Database:</strong> MongoDB for flexible, document-based schemas.</li>
              <li><strong>Security:</strong> Strong data sanitization to block injection, combined with CORS-protected environments.</li>
              <li><strong>Backups:</strong> Auto-scaling storage clusters designed for high availability.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Architecture;