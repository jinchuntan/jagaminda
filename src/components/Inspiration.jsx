import { Quote } from 'lucide-react'
import useInView from '../hooks/useInView'

export default function Inspiration() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <span className="section-label">Motivation</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-navy tracking-tight leading-snug max-w-xl">
            Built from a family experience
          </h2>

          <div className="mt-12 max-w-3xl">
            <div className="relative bg-gradient-to-br from-navy-50/60 to-white rounded-2xl border border-navy-100/40 p-8 sm:p-10 md:p-12 shadow-card">
              <Quote size={32} className="text-navy-200 mb-6" strokeWidth={1} />
              <blockquote>
                <p className="text-base sm:text-lg md:text-xl text-navy-700/80 leading-[1.8] font-light">
                  I started JagaMinda because my grandmother had dementia. At home, the hardest part was not knowing when forgetfulness, a missed meal or a change in behaviour should become a reason to seek help. When I looked for monitoring tools, many were too expensive, too clinical or not made for everyday families. That gap pushed me to design something I would have wanted for my own grandmother. A gentle pair of smart goggles that could watch for small changes at home, support caregivers and make early action feel less frightening.
                </p>
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-sm font-semibold text-navy">JC</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">JagaMinda Team</p>
                  <p className="text-[12px] text-slate-400">Monash University Malaysia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
