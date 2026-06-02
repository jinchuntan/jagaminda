import { Glasses, Cpu, Smartphone, ArrowRight } from 'lucide-react'
import useInView from '../hooks/useInView'

const cards = [
  {
    icon: Glasses,
    title: 'Smart goggles',
    copy: 'A wearable frame that carries the sensing hardware without asking the older adult to operate a separate medical device.',
    highlight: true,
  },
  {
    icon: Cpu,
    title: 'Custom sensor',
    copy: 'A graphene oxide coated Aluminium Nitride sensor that responds to light and humidity changes alongside motion sensing.',
    highlight: false,
  },
  {
    icon: Smartphone,
    title: 'Caregiver app',
    copy: 'A companion app that translates sensor readings into clear alerts and next steps for families.',
    highlight: false,
  },
]

export default function Solution() {
  const [ref, inView] = useInView()

  return (
    <section id="solution" className="py-24 md:py-32 bg-navy-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-label">The Solution</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-navy tracking-tight leading-snug">
              A three-part system families can understand
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
              JagaMinda is worn like everyday eyewear. The frame carries a sensing system that monitors movement, falls, light and environmental changes. The caregiver app turns readings into simple alerts.
            </p>
          </div>
        </div>

        <div className={`mt-16 grid sm:grid-cols-3 gap-6 stagger-children ${inView ? 'visible' : ''}`}>
          {cards.map((card, i) => (
            <div key={card.title} className="relative">
              <div
                className={`group bg-white rounded-2xl border p-7 shadow-card hover:shadow-card-hover transition-all duration-300 h-full ${
                  card.highlight
                    ? 'border-navy-200/60 ring-1 ring-navy-100/50'
                    : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                {card.highlight && (
                  <span className="absolute -top-3 left-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white bg-navy px-3 py-1 rounded-full">
                    Core invention
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  card.highlight
                    ? 'bg-navy text-white'
                    : 'bg-navy-50 text-navy-400 group-hover:bg-navy group-hover:text-white'
                }`}>
                  <card.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{card.copy}</p>
              </div>

              {/* Connecting arrow — desktop only */}
              {i < cards.length - 1 && (
                <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-100 shadow-card items-center justify-center">
                  <ArrowRight size={11} className="text-navy-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
