import { useRef, useState, type ReactNode, type MouseEvent } from 'react';

interface MagnetProps {
  children: ReactNode;
  className?: string;
  padding?: number;
  magnetStrength?: number;
}

export default function Magnet({
  children,
  className = '',
  padding = 100,
  magnetStrength = 0.3,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    const maxDist = Math.max(rect.width, rect.height) / 2 + padding;

    if (distance < maxDist) {
      setPosition({ x: distX * magnetStrength, y: distY * magnetStrength });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      {children}
    </div>
  );
}
