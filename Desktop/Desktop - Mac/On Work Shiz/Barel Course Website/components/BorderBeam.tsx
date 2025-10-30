'use client';

import { motion } from 'framer-motion';

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

export default function BorderBeam({
  className = '',
  size = 300,
  duration = 8,
  delay = 0,
  colorFrom = 'rgba(255, 255, 255, 0.6)',
  colorTo = 'rgba(147, 197, 253, 0.6)',
  reverse = false,
  initialOffset = 0,
  borderWidth = 3,
}: BorderBeamProps) {
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{
        borderRadius: 'inherit',
        maskImage: 'radial-gradient(ellipse, black 40%, transparent 70%)',
      }}
    >
      {/* Top border */}
      <motion.div
        className="absolute top-0 left-0"
        style={{
          width: `${size}px`,
          height: `${borderWidth}px`,
          background: `linear-gradient(90deg, transparent 0%, ${colorFrom} 25%, ${colorTo} 50%, ${colorFrom} 75%, transparent 100%)`,
          filter: 'blur(1px)',
          boxShadow: `0 0 ${size / 10}px ${colorTo}`,
        }}
        animate={{
          x: reverse ? ['0%', '100%'] : ['100%', '0%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay,
          ease: 'linear',
        }}
      />
      
      {/* Right border */}
      <motion.div
        className="absolute top-0 right-0"
        style={{
          width: `${borderWidth}px`,
          height: `${size}px`,
          background: `linear-gradient(180deg, transparent 0%, ${colorFrom} 25%, ${colorTo} 50%, ${colorFrom} 75%, transparent 100%)`,
          filter: 'blur(1px)',
          boxShadow: `0 0 ${size / 10}px ${colorTo}`,
        }}
        animate={{
          y: reverse ? ['0%', '100%'] : ['100%', '0%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay: delay + duration * 0.25,
          ease: 'linear',
        }}
      />
      
      {/* Bottom border */}
      <motion.div
        className="absolute bottom-0 right-0"
        style={{
          width: `${size}px`,
          height: `${borderWidth}px`,
          background: `linear-gradient(90deg, transparent 0%, ${colorFrom} 25%, ${colorTo} 50%, ${colorFrom} 75%, transparent 100%)`,
          filter: 'blur(1px)',
          boxShadow: `0 0 ${size / 10}px ${colorTo}`,
        }}
        animate={{
          x: reverse ? ['0%', '-100%'] : ['-100%', '0%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay: delay + duration * 0.5,
          ease: 'linear',
        }}
      />
      
      {/* Left border */}
      <motion.div
        className="absolute bottom-0 left-0"
        style={{
          width: `${borderWidth}px`,
          height: `${size}px`,
          background: `linear-gradient(180deg, transparent 0%, ${colorFrom} 25%, ${colorTo} 50%, ${colorFrom} 75%, transparent 100%)`,
          filter: 'blur(1px)',
          boxShadow: `0 0 ${size / 10}px ${colorTo}`,
        }}
        animate={{
          y: reverse ? ['0%', '-100%'] : ['-100%', '0%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay: delay + duration * 0.75,
          ease: 'linear',
        }}
      />
    </motion.div>
  );
}
