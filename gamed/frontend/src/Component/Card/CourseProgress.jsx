import React, { useState, useEffect } from 'react'
import "../../Styles/CourseProgressCardStyles.css"

const CourseProgress = ({
  progress = 65,
  size = 225,
  strokeWidth = 30,
  color = '#9D80CC',
  emptyColor = 'rgba(255, 255, 255, 0.46)', // Default: transparent white
  className
}) => {
  const [dashOffset, setDashOffset] = useState(0);

    // Ensure progress is within 0-100 range
    const validProgress = Math.max(0, Math.min(100, progress));

    // Calculate circumference and radius
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    // Calculate strokeDashoffset based on progress
    useEffect(() => {
        const progressInPixels = circumference * (1 - validProgress / 100);
        setDashOffset(progressInPixels);
    }, [validProgress, circumference]);

    // Calculate the SVG arc parameters.
    const viewBox = `0 0 ${size} ${size}`;
    const center = size / 2;

    const combinedClassNames = `loading-ring ${className || ''}`;

  return (
    <React.Fragment>
      <article id='course-progress-card'>
        <header>Course Progress</header>
        <svg
            className={combinedClassNames}
            viewBox={viewBox}
            width={size}
            height={size}
        >
            {/* Background Circle (Empty Progress) */}
            <circle
                cx={center}
                cy={center}
                r={radius}
                stroke={emptyColor}
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={circumference}
                style={{
                    transform: 'rotate(-90deg)',
                    transformOrigin: `${center}px ${center}px`,
                }}
            />

            {/* Foreground Arc (Progress) */}
            <circle
                cx={center}
                cy={center}
                r={radius}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                style={{
                    transition: 'stroke-dashoffset 0.3s ease', // Smooth transition
                    transform: 'rotate(-90deg)',
                    transformOrigin: `${center}px ${center}px`,
                }}
            />

            {/* Display the progress text */}
            <text
                x={center}
                y={center}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={size / 3} // Adjust font size relative to the size
                fill={color}
                className="loading-ring-text"
            >
                {validProgress}%
            </text>
        </svg>
      </article> 
    </React.Fragment>
  )
}

export default CourseProgress
