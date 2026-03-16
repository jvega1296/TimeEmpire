import Counter from '../components/reactbits/Counter';
import FadeContent from '../components/reactbits/FadeContent';

const stats = [
  { value: 8, suffix: '+', label: 'Horas de Ensamblaje' },
  { value: 150, suffix: '+', label: 'Componentes Individuales' },
  { value: 28800, suffix: '', label: 'Latidos por Hora' },
  { value: 100, suffix: 'M', label: 'Resistencia al Agua' },
];

export default function Stats() {
  return (
    <section className="py-28 md:py-36 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeContent blur className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-tight">
            Precisión en Cada Detalle
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
