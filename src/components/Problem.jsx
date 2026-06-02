import { Clock, HelpCircle, Puzzle } from 'lucide-react'
import useInView from '../hooks/useInView'

const cards = [
  {
    icon: Clock,
    title: 'Late recognition',
    copy: 'Early signs like unsteady walking, missed meals or sleep changes are easy to overlook until they become serious.',
  },
  {
    icon: HelpCircle,
    title: 'Caregiver uncertainty',
    copy: 'Families often struggle to know when a change in behaviour should become a reason to seek help.',
  },
  {
    icon: Puzzle,
    title: 'Fragmented tools',
    copy: 'Existing tools focus on one part of care such as reminders, fall tracking or clinic screening but rarely connect them.',
  },
]

export default function Problem() {
  const [ref, inView] = useInView()

  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
            {/* Left: heading + copy */}
            <div>
              <span className="section-label">The Problem</span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-navy tracking-tight leading-snug">
                The care gap starts at home
              </h2>
              <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
                For many families, the hardest part of dementia care is not knowing when small changes at home should become a reason to act. Most monitoring tools solve only one piece of the problem.
              </p>
            </div>

            {/* Right: 3 cards */}
            <div className={`space-y-4 stagger-children ${inView ? 'visible' : ''}`}>
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="group bg-white rounded-xl border border-slate-100 p-5 shadow-card hover:shadow-card-hover hover:border-slate-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 group-hover:bg-navy transition-colors duration-300">
                      <card.icon size={18} strokeWidth={1.5} className="text-navy-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-navy">{card.title}</h3>
                      <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{card.copy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
