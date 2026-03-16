import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: 'words' | 'chars';
  direction?: 'top' | 'bottom';
  threshold?: number;
  stepDuration?: number;
}

export default function BlurText({
  text,
  className = '',
  delay = 150,
  animateBy = 'words',
  direction = 'bottom',
  threshold = 0.1,
  stepDuration = 0.4,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const items = animateBy === 'words' ? text.split(' ') : text.split('');
  const yFrom = direction === 'bottom' ? 12 : -12;

  return (
    <span ref={ref} className={className}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={animateBy === 'words' ? { marginRight: '0.3em' } : undefined}
          initial={{ opacity: 0, filter: 'blur(12px)', y: yFrom }}
          animate={
            isInView
              ? { opacity: 1, filter: 'blur(0px)', y: 0 }
              : {}
          }
          transition={{
            duration: stepDuration,
            delay: i * (delay / 1000),
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </span>
  );
}
