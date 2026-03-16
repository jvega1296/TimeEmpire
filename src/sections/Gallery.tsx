import FadeContent from '../components/reactbits/FadeContent';

const galleryItems = [
  {
    title: 'Vista Frontal',
    subtitle: 'Detalle del Dial',
    gradient: 'from-surface-lighter via-surface-light/40 to-surface',
  },
  {
    title: 'Movimiento',
    subtitle: 'NH35 Automático',
    gradient: 'from-surface-light via-surface/60 to-black',
  },
  {
    title: 'Perfil',
    subtitle: 'Arquitectura de la Caja',
    gradient: 'from-surface-lighter/80 via-surface-light/30 to-black',
  },
  {
    title: 'Detalle de Corona',
    subtitle: 'Corona Atornillada',
    gradient: 'from-surface-light via-surface-lighter/30 to-surface',
  },
  {
    title: 'Manecillas y Marcadores',
    subtitle: 'Elementos Luminosos',
    gradient: 'from-surface-lighter via-surface-light/40 to-surface',
  },
  {
    title: 'En Muñeca',
    subtitle: 'Foto de Estilo',
    gradient: 'from-surface-lighter via-surface-light/50 to-surface',
  },
];

function GalleryCard({
  item,
}: {
  item: (typeof galleryItems)[number];
}) {
  return (
    <div className="group shrink-0 w-[300px] md:w-[380px] snap-center">
      <div
        className={`aspect-[3/4] rounded-2xl bg-gradient-to-b ${item.gradient} border border-white/5 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-accent/15`}
      >
        {/* Watch image */}
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-accent/10 flex items-center justify-center">
          <img
            src="/watch-hero.png"
            alt=""
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
        </div>

        {/* Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(58,134,255,0.08), rgba(255,0,110,0.04), transparent 70%)',
          }}
        />
      </div>
      <div className="mt-5 px-1">
        <h4 className="font-serif text-lg text-cream">{item.title}</h4>
        <p className="text-xs text-gray-500 tracking-wider mt-1">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 md:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 md:mb-20">
        <FadeContent blur>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/60 mb-5 block">
            Galería
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream tracking-tight">
            Cada Ángulo, Cada Detalle
          </h2>
        </FadeContent>
      </div>

      {/* Horizontal scroll gallery with snap scrolling */}
      <div
        className="flex gap-6 md:gap-8 px-6 md:px-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {galleryItems.map((item) => (
          <GalleryCard key={item.title} item={item} />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-accent/20" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-600">
            Arrastra para explorar
          </span>
        </div>
      </div>
    </section>
  );
}
