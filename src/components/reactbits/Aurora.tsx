interface AuroraProps {
  className?: string;
}

export default function Aurora({ className = '' }: AuroraProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute w-[60vw] h-[60vw] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(58,134,255,0.3), transparent 70%)',
          top: '-20%',
          left: '-10%',
          animation: 'aurora-float 20s ease-in-out infinite',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute w-[50vw] h-[50vw] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,110,0.2), transparent 70%)',
          bottom: '-20%',
          right: '-10%',
          animation: 'aurora-float 25s ease-in-out infinite reverse',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute w-[35vw] h-[35vw] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(255,214,10,0.15), transparent 60%)',
          top: '40%',
          right: '15%',
          animation: 'aurora-float 18s ease-in-out infinite',
          animationDelay: '-5s',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
}
