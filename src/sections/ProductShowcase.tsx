import SpotlightCard from '../components/reactbits/SpotlightCard';
import FadeContent from '../components/reactbits/FadeContent';
import GradientText from '../components/reactbits/GradientText';

const heroWatch = {
  name: 'Who cares I\'m already late',
  tagline: 'Seiko Mod',
  description:
    'Una rebelión divertida contra la puntualidad. Este Seiko mod cuenta con un movimiento automático NH35 ensamblado a mano, dial personalizado y cristal de zafiro. Para quienes ponen sus propias reglas sobre el tiempo.',
  price: '$3,500 MXN',
  accent: 'from-surface-light/40 to-surface-lighter/20',
};

export default function ProductShowcase() {
  return (
    <section id="collection" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeContent blur className="text-center mb-20 md:mb-28">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/60 mb-5 block">
            La Colección
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight">
            <GradientText>Único en su Tipo</GradientText>
          </h2>
        </FadeContent>

        {/* Hero Product */}
        <FadeContent direction="up" className="mb-16">
          <SpotlightCard
            spotlightColor="rgba(58, 134, 255, 0.12)"
            className={`bg-gradient-to-b ${heroWatch.accent} border border-white/5 rounded-3xl p-10 md:p-16 group cursor-pointer transition-all duration-500 hover:border-accent/15`}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left: Watch Image */}
              <div className="flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}watch-hero.png`}
                  alt="Who cares I'm already late"
                  className="w-full max-w-[350px] mx-auto drop-shadow-[0_0_60px_rgba(58,134,255,0.25)]"
                />
              </div>

              {/* Right: Content */}
              <div className="text-center lg:text-left mt-8 lg:mt-0">
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/70">
                  {heroWatch.tagline}
                </span>

                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mt-6 mb-5">
                  {heroWatch.name}
                </h3>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                  {heroWatch.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-6 md:gap-8">
                  <span className="font-mono text-2xl md:text-3xl text-cream font-light tracking-wide">
                    {heroWatch.price}
                  </span>
                  <span className="font-mono text-sm tracking-[0.2em] uppercase text-accent/70 group-hover:text-accent transition-colors duration-500 border border-accent/20 px-6 py-2">
                    Apartalo Ya
                  </span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </FadeContent>

        {/* Coming Soon Teaser */}
        <FadeContent delay={0.2} className="text-center">
          <div className="border border-white/5 rounded-2xl p-12 md:p-16 bg-gradient-to-b from-surface-lighter/10 to-transparent">
            <div className="max-w-xl mx-auto">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/50 mb-4 block">
                Próximamente
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-cream/70 mb-4">
                Más Creaciones Únicas
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cada reloj TimeEmpire es una obra de arte limitada. Nuevos Seiko mods próximamente. Únete a nuestra lista para enterarte primero.
              </p>
              <div className="mt-6">
                <a
                  href="#purchase"
                  className="font-mono text-xs tracking-[0.25em] uppercase text-accent/60 hover:text-accent transition-colors duration-500 border-b border-accent/20 pb-1"
                >
                  Avísame
                </a>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
