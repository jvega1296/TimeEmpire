import BlurText from '../components/reactbits/BlurText';
import Aurora from '../components/reactbits/Aurora';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20">
      <Aurora />

      {/* Radial spotlight */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(58,134,255,0.12) 0%, rgba(255,0,110,0.06) 50%, transparent 70%)',
            animation: 'pulse-glow 6s ease-in-out infinite',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center max-w-4xl">
        {/* Logo */}
        <img
          src={`${import.meta.env.BASE_URL}logo-full.png`}
          alt="VEGA"
          className="w-[220px] sm:w-[280px] md:w-[360px] mb-10 md:mb-14"
        />

        {/* Brand headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight leading-tight mb-6">
          <BlurText
            text="Para los que nacieron para destacar, no para encajar"
            delay={100}
            stepDuration={0.35}
          />
        </h1>

        {/* Brand positioning */}
        <p className="text-base sm:text-lg md:text-xl tracking-wide text-gray-400 font-light mb-10 md:mb-12 max-w-2xl">
          Lujo curado con actitud. Relojes, moda y accesorios que dicen lo que las palabras no pueden.
        </p>

        {/* Primary CTA */}
        <a
          href="#relojes"
          className="font-mono inline-flex items-center gap-3 bg-accent hover:bg-accent-muted text-white px-10 md:px-14 py-4 md:py-5 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-[0_0_40px_rgba(58,134,255,0.25)] hover:shadow-[0_0_60px_rgba(58,134,255,0.35)]"
        >
          Explorar la Colección
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        {/* Category hints */}
        <div className="mt-8 flex items-center gap-4 md:gap-6">
          {['Relojes', 'Moda', 'Accesorios'].map((cat, i) => (
            <span key={cat} className="flex items-center gap-4 md:gap-6">
              {i > 0 && <span className="text-accent/30 text-xs">&#x2022;</span>}
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-gray-500">{cat}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-600">
          Desliza
        </span>
        <div
          className="w-px h-8"
          style={{
            background: 'linear-gradient(to bottom, rgba(58,134,255,0.4), transparent)',
            animation: 'scroll-hint 2.5s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
