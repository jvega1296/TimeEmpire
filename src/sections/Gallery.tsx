import FadeContent from '../components/reactbits/FadeContent';

const galleryItems = [
  {
    title: 'Seiko Mod',
    subtitle: 'Who cares I\'m already late',
    gradient: 'from-surface-lighter via-surface-light/40 to-surface',
    hasImage: true,
  },
  {
    title: 'Moda Premium',
    subtitle: 'Diseñador Europeo',
    gradient: 'from-accent/15 via-surface-light/40 to-black',
    hasImage: false,
  },
  {
    title: 'Joyería Fina',
    subtitle: 'Trébol Clásico',
    gradient: 'from-secondary/15 via-surface-light/30 to-black',
    hasImage: false,
  },
  {
    title: 'Alta Gama',
    subtitle: 'Accesorios Selectos',
    gradient: 'from-hot/15 via-surface-lighter/30 to-surface',
    hasImage: false,
  },
  {
    title: 'Estilo Italiano',
    subtitle: 'Colección Exclusiva',
    gradient: 'from-accent/10 via-surface-light/40 to-surface',
    hasImage: false,
  },
  {
    title: 'Próximamente',
    subtitle: 'Nuevas Marcas',
    gradient: 'from-surface-lighter via-surface-light/50 to-surface',
    hasImage: false,
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
        {/* Content */}
        {item.hasImage ? (
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-accent/10 flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}watch-hero.png`}
              alt=""
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>
        ) : (
          <div className="text-center px-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-hot/20" />
            </div>
          </div>
        )}

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
      className="py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10 md:mb-14">
        <FadeContent blur>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/60 mb-5 block">
            Galería
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream tracking-tight">
            Nuestras Marcas
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
