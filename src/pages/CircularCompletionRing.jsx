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
      />
    </svg>
  );
};

export default CircularCompletionRing;
