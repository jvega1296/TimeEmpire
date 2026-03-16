import SpotlightCard from '../components/reactbits/SpotlightCard';
import FadeContent from '../components/reactbits/FadeContent';
import GradientText from '../components/reactbits/GradientText';

const categories = [
  {
    id: 'relojes',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
        <path d="M24 24L24 14" strokeLinecap="round" />
        <path d="M24 24L30 28" strokeLinecap="round" />
        <rect x="18" y="6" width="12" height="4" rx="1" />
        <rect x="18" y="38" width="12" height="4" rx="1" />
      </svg>
    ),
    title: 'Relojes',
    subtitle: 'Seiko Mods',
    description: 'Modificaciones artesanales Seiko con personalidad única. Cada pieza ensamblada a mano.',
    featured: true,
    gradient: 'from-accent/10 via-surface-light/40 to-surface',
    hasImage: true,
  },
  {
    id: 'moda',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M16 10L10 16v22c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4V16l-6-6" />
        <path d="M10 16h28" />
        <path d="M32 22c0 4.4-3.6 8-8 8s-8-3.6-8-8" />
      </svg>
    ),
    title: 'Moda',
    subtitle: 'Ropa de Diseñador',
    description: 'Piezas seleccionadas de las mejores marcas: Hugo Boss, Louis Vuitton, Versace.',
    featured: false,
    gradient: 'from-hot/10 via-surface-light/40 to-surface',
    hasImage: false,
  },
  {
    id: 'accesorios',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M24 6L28 14L36 16L30 22L32 30L24 26L16 30L18 22L12 16L20 14L24 6Z" />
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
    title: 'Accesorios',
    subtitle: 'Joyería y Complementos',
    description: 'Accesorios de diseñador que complementan tu estilo. Van Cleef & Arpels y más.',
    featured: false,
    gradient: 'from-secondary/10 via-surface-light/40 to-surface',
    hasImage: false,
  },
];

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
    <section id="relojes" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeContent blur className="text-center mb-20 md:mb-28">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/60 mb-5 block">
            Explorar
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight">
            <GradientText>Nuestras Colecciones</GradientText>
          </h2>
        </FadeContent>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-28">
          {categories.map((category, index) => (
            <FadeContent key={category.id} delay={index * 0.1} direction="up">
              <SpotlightCard
                spotlightColor={
                  category.featured
                    ? 'rgba(58, 134, 255, 0.12)'
                    : 'rgba(255, 0, 110, 0.08)'
                }
                className={`bg-gradient-to-b ${category.gradient} border border-white/5 rounded-2xl p-8 md:p-10 h-full group cursor-pointer transition-all duration-500 hover:border-accent/15 relative`}
              >
                {/* Coming Soon Badge */}
                {!category.featured && (
                  <div className="absolute top-6 right-6">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent/60 bg-accent/5 px-3 py-1 border border-accent/20 rounded-full">
                      Próximamente
                    </span>
                  </div>
                )}

                <div className="flex flex-col h-full">
                  {/* Icon or Image */}
                  <div className="mb-6 flex items-center justify-center">
                    {category.hasImage ? (
                      <div className="w-32 h-32 flex items-center justify-center">
                        <img
                          src={`${import.meta.env.BASE_URL}watch-hero.png`}
                          alt={category.title}
                          className="w-28 h-28 object-contain drop-shadow-[0_0_30px_rgba(58,134,255,0.2)]"
                        />
                      </div>
                    ) : (
                      <div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent text-accent/40 group-hover:text-accent/70 transition-colors duration-500">
                        {category.icon}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center flex-1 flex flex-col">
                    <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2">
                      {category.title}
                    </h3>
                    <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent/70 mb-4">
                      {category.subtitle}
                    </span>
                    <p className="text-sm text-gray-400 leading-relaxed flex-1">
                      {category.description}
                    </p>

                    {/* Featured product price */}
                    {category.featured && (
                      <div className="mt-6">
                        <span className="font-mono text-lg text-cream/80">
                          Desde $3,500 MXN
                        </span>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="mt-6">
                      <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent/60 group-hover:text-accent transition-colors duration-500 border-b border-accent/20 pb-1 inline-block">
                        {category.featured ? 'Ver más' : 'Notificarme'}
                      </span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>

        {/* Featured Watch Product */}
        <FadeContent direction="up" className="mb-16">
          <div className="text-center mb-12">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/60 mb-3 block">
              Producto Destacado
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-cream tracking-tight">
              Nuestro Ícono
            </h3>
          </div>

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

        {/* Watch Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
          {[
            {
              icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.2}>
                  <circle cx="24" cy="24" r="18" />
                  <circle cx="24" cy="24" r="6" />
                  <path d="M24 6v6M24 36v6M6 24h6M36 24h6" />
                </svg>
              ),
              title: 'Movimiento NH35',
              detail: 'Automático japonés · 41hrs reserva de marcha',
            },
            {
              icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.2}>
                  <path d="M24 4L4 18v12l20 14 20-14V18L24 4z" />
                  <path d="M24 4v28M4 18l20 14M44 18L24 32" />
                </svg>
              ),
              title: 'Cristal de Zafiro',
              detail: 'Resistente a rayaduras · Capa antirreflejante',
            },
            {
              icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.2}>
                  <path d="M8 36c0 0 4-8 16-8s16 8 16 8" />
                  <path d="M12 30c0 0 3-6 12-6s12 6 12 6" />
                  <path d="M16 24c0 0 2-4 8-4s8 4 8 4" />
                  <circle cx="24" cy="40" r="3" />
                </svg>
              ),
              title: '100M Resistencia',
              detail: 'Corona atornillada · Apto para natación',
            },
            {
              icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.2}>
                  <rect x="8" y="8" width="32" height="32" rx="4" />
                  <path d="M8 24h32M24 8v32" />
                  <circle cx="16" cy="16" r="2" fill="currentColor" />
                  <circle cx="32" cy="32" r="2" fill="currentColor" />
                </svg>
              ),
              title: 'Dial Personalizado',
              detail: 'Ensamblado a mano · Pieza única',
            },
          ].map((spec, i) => (
            <FadeContent key={spec.title} delay={i * 0.1} direction="up">
              <div className="text-center p-6 border border-white/5 rounded-xl bg-gradient-to-b from-white/[0.02] to-transparent group hover:border-accent/10 transition-all duration-500">
                <div className="text-accent/50 group-hover:text-accent/80 transition-colors duration-500 flex justify-center mb-4">
                  {spec.icon}
                </div>
                <h4 className="font-mono text-sm text-cream tracking-wide mb-2">
                  {spec.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {spec.detail}
                </p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
