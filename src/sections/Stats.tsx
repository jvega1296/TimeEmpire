import Counter from '../components/reactbits/Counter';
import FadeContent from '../components/reactbits/FadeContent';

const stats = [
  { value: 3, suffix: '', label: 'Categorías' },
  { value: 10, suffix: '+', label: 'Marcas Premium' },
  { value: 100, suffix: '%', label: 'Satisfacción' },
  { value: 24, suffix: 'hrs', label: 'Atención WhatsApp' },
];

export default function Stats() {
  return (
    <section className="py-28 md:py-36 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeContent blur className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-tight">
            TimeEmpire en Números
          </h2>
        </FadeContent>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat, index) => (
            <FadeContent
              key={stat.label}
              delay={index * 0.1}
              className="text-center"
            >
              <div className="font-mono text-4xl md:text-5xl lg:text-6xl text-cream mb-3">
                <Counter
                  to={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              <p className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-gray-500">
                {stat.label}
              </p>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
