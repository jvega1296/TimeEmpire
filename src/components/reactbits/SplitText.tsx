import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitType?: 'chars' | 'words';
  threshold?: number;
}

export default function SplitText({
  text,
  className = '',
  delay = 50,
  duration = 0.8,
  splitType = 'chars',
  threshold = 0.1,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const items = splitType === 'chars' ? text.split('') : text.split(' ');

  return (
    <span ref={ref} className={className}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={item === ' ' ? { width: '0.3em' } : undefined}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration,
            delay: i * (delay / 1000),
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </span>
  );
}
