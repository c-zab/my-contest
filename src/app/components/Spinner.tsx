"use client";

import { useEffect, useState } from "react";

interface SpinnerProps {
  isInverted?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Spinner({ isInverted = false, size = "md" }: SpinnerProps) {
  const [animationDuration, setAnimationDuration] = useState(1);

  useEffect(() => {
    // Generate a random duration between 0.5s and 1.1s (500ms to 1100ms)
    const randomDuration = 0.5 + Math.random() * 0.6;
    setAnimationDuration(parseFloat(randomDuration.toFixed(3)));
  }, []);

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14"
  };
  
  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]}`}>
      <svg 
        className="animate-spin" 
        viewBox="0 0 50 50"
        style={{ animationDuration: `${animationDuration}s` }}
      >
        <circle
          className={`${isInverted ? 'stroke-white' : 'stroke-[#E21837]'}`}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeDasharray="80"
          strokeDashoffset="60"
        />
      </svg>
    </div>
  );
} 