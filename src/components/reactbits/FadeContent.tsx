import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeContentProps {
  children: ReactNode;
  className?: string;
  blur?: boolean;
  duration?: number;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const directionOffset = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
  none: { x: 0, y: 0 },
};

export default function FadeContent({
  children,
  className = '',
  blur = false,
  duration = 0.8,
  threshold = 0.1,
  delay = 0,
  direction = 'up',
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        filter: blur ? 'blur(10px)' : 'none',
        ...offset,
      }}
      animate={
        isInView
          ? { opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
