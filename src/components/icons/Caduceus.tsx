import React from 'react';
import { cn } from '../../utils/cn';

interface CaduceusProps {
  className?: string;
}

/**
 * Caduceus icon using the external Wikimedia SVG URL.
 * Uses CSS masking to allow for dynamic coloring and transparent background.
 * Defaults to a professional medical blue (blue-600).
 */
export const Caduceus: React.FC<CaduceusProps> = ({ className }) => {
  const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/5/57/Caduceus.svg";

  return (
    <div 
      className={cn("bg-blue-600", className)}
      style={{
        maskImage: `url('${logoUrl}')`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
        WebkitMaskImage: `url('${logoUrl}')`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        width: '100%',
        height: '100%',
        minWidth: '24px',
        minHeight: '24px'
      }}
      aria-hidden="true"
    />
  );
};