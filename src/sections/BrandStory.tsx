import ScrollReveal from '../components/reactbits/ScrollReveal';
import FadeContent from '../components/reactbits/FadeContent';

export default function BrandStory() {
  return (
    <section
      id="story"
      className="relative min-h-screen flex items-center justify-center py-32 md:py-40"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, rgba(58,134,255,0.4), transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <FadeContent blur duration={1}>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/60 mb-8 block">
            El Oficio
          </span>
        </FadeContent>

        <ScrollReveal
          text="Cada reloj TimeEmpire nace de una visión. Modificaciones Seiko ensambladas a mano que fusionan la ingeniería japonesa con una expresión audaz e individual. Cada pieza se crea con cuidado, una a la vez, para quienes se niegan a conformarse con lo ordinario. Tu tiempo merece una declaración."
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight text-cream/90 tracking-tight"
        />

        <FadeContent delay={0.3} className="mt-16 md:mt-20">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-accent/20" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-gray-500">
              Seiko Mods Artesanales
            </span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-accent/20" />
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
