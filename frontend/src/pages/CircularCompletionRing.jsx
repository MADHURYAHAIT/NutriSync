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
          <stop offset="0%" style={{ stopColor: '#a8003b' }} />
          <stop offset="22%" style={{ stopColor: ' #00a19c' }} />
          <stop offset="33%" style={{ stopColor: ' #348e04' }} />
          <stop offset="46%" style={{ stopColor: '#e9850a' }} />
          <stop offset="70%" style={{ stopColor: ' #089781' }}/>
          <stop offset="86%" style={{ stopColor: '#b2b805' }} />
          <stop offset="100%" style={{ stopColor: ' #3f0499' }}/>
           
        </linearGradient>
        <filter id="shadow">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="3"
            floodColor="#000"
            floodOpacity="0.9"
          />
        </filter>
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
        transform={`rotate(-90 ${radius} ${radius})`} // Rotate the circle by 90 degrees
        filter="url(#shadow)" // Apply the shadow filter
      />
    </svg>
  );
};

export default CircularCompletionRing;