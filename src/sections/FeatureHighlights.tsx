import FadeContent from '../components/reactbits/FadeContent';

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        stroke="currentColor"
        strokeWidth={1}
      >
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="6" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" />
      </svg>
    ),
    title: 'Movimiento Seiko NH35',
    description:
      'Movimiento automático japonés confiable con 41 horas de reserva de marcha. Ensamblado a mano y regulado para máxima precisión.',
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path d="M24 4L4 18v12l20 14 20-14V18L24 4z" />
        <path d="M24 4v28M4 18l20 14M44 18L24 32" />
      </svg>
    ),
    title: 'Cristal de Zafiro',
    description:
      'Cristal de zafiro resistente a rayaduras con capa antirreflejante. Legibilidad impecable que perdura.',
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path d="M8 36c0 0 4-8 16-8s16 8 16 8" />
        <path d="M12 30c0 0 3-6 12-6s12 6 12 6" />
        <path d="M16 24c0 0 2-4 8-4s8 4 8 4" />
        <circle cx="24" cy="40" r="3" />
      </svg>
    ),
    title: 'Resistente al Agua 100M',
    description:
      'Juntas de ingeniería y corona atornillada que protegen tu reloj. Apto para natación y deportes acuáticos.',
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        stroke="currentColor"
        strokeWidth={1}
      >
        <rect x="8" y="8" width="32" height="32" rx="4" />
        <path d="M8 24h32M24 8v32" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <circle cx="32" cy="32" r="2" fill="currentColor" />
      </svg>
    ),
    title: 'Dial Personalizado',
    description:
      'Cada dial es una expresión artística única. Modificaciones ensambladas a mano que hacen tu reloj irrepetible.',
  },
];

export default function FeatureHighlights() {
  return (
    <section
      id="features"
      className="py-28 md:py-40 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeContent blur className="text-center mb-20 md:mb-28">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/60 mb-5 block">
            Artesanía
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream tracking-tight">
            Hecho a la Perfección
          </h2>
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {features.map((feature, index) => (
            <FadeContent
              key={feature.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
              className="flex gap-6 md:gap-8 group"
            >
              <div className="shrink-0 text-accent/40 group-hover:text-accent/70 transition-colors duration-500 mt-1">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-cream mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
