import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

function RevealWord({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = (index / total) * 0.75;
  const end = start + 0.25;

  const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
  const blurValue = useTransform(scrollYProgress, [start, end], [4, 0]);
  const filter = useTransform(blurValue, (v: number) => `blur(${v}px)`);

  return (
    <motion.span
      className="inline-block"
      style={{ opacity, filter, marginRight: '0.35em' }}
    >
      {word}
    </motion.span>
  );
}

interface ScrollRevealProps {
  text: string;
  className?: string;
}

export default function ScrollReveal({
  text,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 25%', 'end 0%'],
  });

  const words = text.split(' ');

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <RevealWord
          key={i}
          word={word}
          index={i}
          total={words.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}
