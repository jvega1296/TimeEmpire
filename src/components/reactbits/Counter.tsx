import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export default function Counter({
  to,
  duration = 2,
  className = '',
  suffix = '',
  prefix = '',
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const durationMs = duration * 1000;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{value}{suffix}
    </span>
  );
}
