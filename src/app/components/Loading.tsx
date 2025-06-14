"use client";

import Spinner from "./Spinner";

interface LoadingProps {
  fullScreen?: boolean;
  size?: "sm" | "md" | "lg";
  isInverted?: boolean;
  className?: string;
}

export default function Loading({ 
  fullScreen = false, 
  size = "md",
  isInverted = false,
  className = ""
}: LoadingProps) {
  const containerClasses = fullScreen 
    ? "min-h-screen flex items-center justify-center bg-[#edeae1]"
    : "flex-grow flex items-center justify-center p-8";

  return (
    <div className={`${containerClasses} ${className}`}>
      <Spinner size={size} isInverted={isInverted} />
    </div>
  );
}
