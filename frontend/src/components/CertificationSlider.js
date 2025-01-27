import React from 'react';
import { certificationLogos } from '../assets/images';
import './CertificationSlider.css';

function CertificationSlider() {
  return (
    <div className="certification-slider-container">
      <div className="slider">
        <div className="slide-track">
          {/* Double the logos for seamless loop */}
          {[...Object.entries(certificationLogos), ...Object.entries(certificationLogos)].map(([key, src], index) => (
            <div className="slide" key={`${key}-${index}`}>
              <img src={src} alt={`${key} certification`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CertificationSlider; 