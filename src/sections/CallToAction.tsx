import FadeContent from '../components/reactbits/FadeContent';
import GradientText from '../components/reactbits/GradientText';
import ShinyText from '../components/reactbits/ShinyText';
import Magnet from '../components/reactbits/Magnet';

export default function CallToAction() {
  return (
    <section
      id="purchase"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, rgba(58,134,255,0.4), rgba(255,0,110,0.2), transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">
        <FadeContent blur>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/60 mb-8 block">
            Hazlo Tuyo
          </span>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8">
            <GradientText>El Tiempo a Tu Manera</GradientText>
          </h2>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-12 md:mb-16">
            Seiko mods artesanales hechos uno a la vez. Desde $3,500 MXN.
            Sé parte de algo diferente.
          </p>

          <Magnet magnetStrength={0.2} padding={150}>
            <a
              href="#collection"
              className="font-mono inline-flex items-center gap-3 bg-gradient-to-r from-accent to-hot hover:from-accent-muted hover:to-hot text-white px-10 md:px-14 py-4 md:py-5 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-500 group shadow-[0_0_40px_rgba(58,134,255,0.3)]"
            >
              <ShinyText speed={4}>
                Apártalo Ya
              </ShinyText>
              <svg
                className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Magnet>

          <p className="mt-8 text-xs text-gray-600 tracking-wider">
            Hecho a mano por pedido &middot; 1 año de garantía &middot; Envíos en México
          </p>
        </FadeContent>
      </div>
    </section>
  );
}
