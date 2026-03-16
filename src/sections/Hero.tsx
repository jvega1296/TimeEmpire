import BlurText from '../components/reactbits/BlurText';
import Aurora from '../components/reactbits/Aurora';
import MetallicPaint from '../components/reactbits/MetallicPaint';
import vegaLogo from '../assets/vega-logo.svg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20">
      <Aurora />

      {/* Radial spotlight behind the watch */}
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
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* Brand name - Metallic Paint effect */}
        <div className="w-[95vw] max-w-[550px] aspect-[4/1] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px]">
          <MetallicPaint
            imageSrc={vegaLogo}
            seed={42}
            scale={3}
            patternSharpness={1.2}
            noiseScale={0.5}
            speed={0.18}
            liquid={0.6}
            brightness={1.6}
            contrast={1.2}
            refraction={0.02}
            blur={0.006}
            chromaticSpread={1.8}
            fresnel={2.5}
            angle={0}
            waveAmplitude={1}
            distortion={0.8}
            contour={0.4}
            lightColor="#ffffff"
            darkColor="#6d4db3"
            tintColor="#7c3aed"
          />
        </div>

        {/* Divider line */}
        <div
          className="w-16 h-px my-2 md:my-4"
          style={{
            background: 'linear-gradient(90deg, transparent, #3a86ff 50%, #ff006e, transparent)'
          }}
        />

        {/* Tagline */}
        <div className="text-lg sm:text-xl md:text-2xl tracking-[0.25em] uppercase text-gray-400 font-light">
          <BlurText
            text="Para los que nacieron para destacar, no para encajar"
            delay={200}
            stepDuration={0.5}
          />
        </div>

        {/* Watch image */}
        <div className="mt-10 md:mt-14 relative flex items-center justify-center">
          {/* Dramatic glow behind watch */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(58,134,255,0.15), rgba(255,0,110,0.08), transparent)',
              filter: 'blur(40px)',
            }}
          />
          <img
            src={`${import.meta.env.BASE_URL}watch-hero.png`}
            alt="Who cares I'm already late - Seiko Mod Watch"
            className="relative w-[320px] md:w-[450px] lg:w-[500px] drop-shadow-[0_0_80px_rgba(58,134,255,0.3)]"
            style={{ animation: 'pulse-glow 6s ease-in-out infinite' }}
          />
        </div>

        {/* CTA */}
        <a
          href="#relojes"
          className="font-mono mt-8 md:mt-12 text-xs tracking-[0.25em] uppercase text-accent/70 hover:text-accent transition-colors duration-500 border-b border-accent/20 pb-1"
        >
          Explorar Colección
        </a>
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
            animation: 'scroll-hint 2.5s ease-in-out infinite'
          }}
        />
      </div>
    </section>
  );
}
