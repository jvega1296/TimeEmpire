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
        <path d="M24 4L28 12L36 14L30 20L32 28L24 24L16 28L18 20L12 14L20 12L24 4Z" />
        <circle cx="24" cy="24" r="6" />
      </svg>
    ),
    title: 'Calidad Premium',
    description:
      'Cada producto en nuestra colección pasa por un proceso riguroso de selección. Solo lo mejor llega a tus manos.',
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
        <circle cx="24" cy="24" r="4" fill="currentColor" />
        <path d="M24 20v-8M24 32v8M14 24h-8M42 24h-8" />
      </svg>
    ),
    title: 'Piezas Exclusivas',
    description:
      'Artículos únicos y ediciones limitadas que no encontrarás en cualquier lugar. Destaca del resto.',
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
        <rect x="8" y="14" width="32" height="24" rx="2" />
        <path d="M8 20h32" />
        <path d="M16 28h4" />
        <path d="M14 10l10 4 10-4" />
      </svg>
    ),
    title: 'Envíos en México',
    description:
      'Entrega segura a todo México. Tu pedido protegido y rastreado de principio a fin.',
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
        <rect x="8" y="12" width="32" height="28" rx="4" />
        <path d="M8 20h32" />
        <circle cx="16" cy="28" r="1.5" fill="currentColor" />
        <circle cx="24" cy="28" r="1.5" fill="currentColor" />
        <circle cx="32" cy="28" r="1.5" fill="currentColor" />
        <circle cx="16" cy="34" r="1.5" fill="currentColor" />
        <circle cx="24" cy="34" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'Atención Personal',
    description:
      'Servicio personalizado por WhatsApp. Te asesoramos para encontrar la pieza perfecta.',
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
            Por Qué Elegirnos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream tracking-tight">
            La Experiencia VEGA
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
