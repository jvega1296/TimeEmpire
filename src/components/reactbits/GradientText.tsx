import type { ReactNode, CSSProperties } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#3a86ff', '#ff006e', '#ffd60a', '#3a86ff'],
  animationSpeed = 8,
}: GradientTextProps) {
  const style: CSSProperties = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: `gradient-shift ${animationSpeed}s ease infinite`,
  };

  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
}
