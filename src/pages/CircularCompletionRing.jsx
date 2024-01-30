// CircularCompletionRing.jsx

import React, { useEffect, useRef } from 'react';

const CircularCompletionRing = ({ radius, strokeWidth, percentage }) => {
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - percentage) / 100) * circumference;

  const ringRef = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;
    ring.style.strokeDasharray = `${circumference} ${circumference}`;
    ring.style.strokeDashoffset = progress;
  }, [circumference, progress]);

  return (
    <svg
      className="circular-completion-ring"
      width={radius * 2}
      height={radius * 2}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#910A67' }} />
           <stop offset="25%" style={{ stopColor: ' #05a39e' }} />
          <stop offset="50%" style={{ stopColor: '#a32c05' }} />
          <stop offset="75%" style={{ stopColor: ' #016d5d' }}/>
           <stop offset="100%" style={{ stopColor: ' #39166f' }}/>
           
        </linearGradient>
      </defs>
      <circle
        className="ring-background"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <circle
        className="ring-progress"
        ref={ringRef}
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
        stroke="url(#gradient)" // Apply the gradient as a stroke
        fill="transparent"
      />
    </svg>
  );
};

export default CircularCompletionRing;
