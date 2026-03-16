import FadeContent from '../components/reactbits/FadeContent';
import GradientText from '../components/reactbits/GradientText';
import ShinyText from '../components/reactbits/ShinyText';
import Magnet from '../components/reactbits/Magnet';

export default function CallToAction() {
  return (
    <section
      id="purchase"
      className="relative py-20 md:py-28 overflow-hidden"
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
            Tu Siguiente Pieza
          </span>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8">
            <GradientText>El Estilo No Espera</GradientText>
          </h2>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-12 md:mb-16">
            Relojes artesanales, ropa de diseñador y accesorios exclusivos. Todo en un solo lugar. Envíos a todo México.
          </p>

          <Magnet magnetStrength={0.2} padding={150}>
            <a
              href="https://wa.me/521TUNUMERO?text=Hola%2C%20me%20interesa%20un%20reloj%20VEGA"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono inline-flex items-center gap-3 bg-gradient-to-r from-accent to-hot hover:from-accent-muted hover:to-hot text-white px-10 md:px-14 py-4 md:py-5 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-500 group shadow-[0_0_40px_rgba(58,134,255,0.3)]"
            >
              <ShinyText
                text="Contáctanos por WhatsApp"
                speed={4}
                color="#ffffff"
                shineColor="#ffffff"
              />
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
            Pago seguro &middot; Envíos a todo México &middot; Atención por WhatsApp
          </p>
        </FadeContent>
      </div>
    </section>
  );
}
