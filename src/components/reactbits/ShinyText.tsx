import type { ReactNode, CSSProperties } from 'react';

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export default function ShinyText({
  children,
  className = '',
  speed = 3,
}: ShinyTextProps) {
  const style: CSSProperties = {
    backgroundImage:
      'linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 70%)',
    backgroundSize: '200% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    animation: `shine ${speed}s linear infinite`,
    color: 'inherit',
  };

  return (
    <span className={`inline-block ${className}`} style={style}>
      {children}
    </span>
  );
}
