
import React from 'react';

const WaveAnimation = () => {
  return (
    <div className="wave-container absolute bottom-0 left-0 right-0 h-32 overflow-hidden -z-10">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave-animation">
          <use
            xlinkHref="#wave-path"
            x="48"
            y="0"
            fill="rgba(51, 204, 255, 0.05)"
          />
        </g>
        <g className="wave-animation" style={{ animationDelay: '0.2s' }}>
          <use
            xlinkHref="#wave-path"
            x="48"
            y="3"
            fill="rgba(51, 204, 255, 0.03)"
          />
        </g>
        <g className="wave-animation" style={{ animationDelay: '0.4s' }}>
          <use
            xlinkHref="#wave-path"
            x="48"
            y="5"
            fill="rgba(51, 204, 255, 0.01)"
          />
        </g>
      </svg>
    </div>
  );
};

export default WaveAnimation;
