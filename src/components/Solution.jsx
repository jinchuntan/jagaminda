import { Glasses, Cpu, Smartphone } from 'lucide-react'

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
  return (
    <section id="solution" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            A protective layer that families can understand
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            JagaMinda is worn like everyday eyewear, but the frame carries a small sensing system. The goggles monitor movement, falls, light exposure and environmental changes. The caregiver app receives the readings and turns them into simple alerts, so families know what changed and when to check in.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-600">
                <card.icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">
                {card.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {card.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
