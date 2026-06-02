import { Glasses, Cpu, Smartphone } from 'lucide-react'
import useInView from '../hooks/useInView'

const cards = [
  {
    icon: Glasses,
    title: 'Smart goggles',
    copy: 'A wearable frame that carries the sensing hardware without asking the older adult to operate a separate medical device.',
  },
  {
    icon: Cpu,
    title: 'Custom sensor',
    copy: 'A graphene oxide coated Aluminium Nitride sensor that responds to light and humidity changes.',
  },
  {
    icon: Smartphone,
    title: 'Caregiver app',
    copy: 'A companion app that translates sensor readings into clear alerts and next steps.',
  },
]

export default function Solution() {
  const [ref, inView] = useInView()

  return (
    <section id="solution" className="pb-24 md:pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <span className="section-label">The Solution</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug max-w-xl">
            A protective layer that families can understand
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            JagaMinda is worn like everyday eyewear, but the frame carries a small sensing system. The goggles monitor movement, falls, light exposure and environmental changes. The caregiver app receives the readings and turns them into simple alerts, so families know what changed and when to check in.
          </p>
        </div>

        <div className={`mt-16 grid sm:grid-cols-3 gap-12 sm:gap-8 stagger-children ${inView ? 'visible' : ''}`}>
          {cards.map((card) => (
            <div key={card.title} className="group">
              <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-navy-400 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                <card.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {card.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
