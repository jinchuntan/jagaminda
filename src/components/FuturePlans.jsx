import { ArrowRight, Rocket, Award } from 'lucide-react'
import useInView from '../hooks/useInView'

export default function FuturePlans() {
  const [ref, inView] = useInView()

  return (
    <section id="future" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <span className="section-label">Looking Ahead</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-navy tracking-tight leading-snug max-w-xl">
            Next steps and recognition
          </h2>
        </div>

        <div className={`mt-14 grid md:grid-cols-2 gap-6 stagger-children ${inView ? 'visible' : ''}`}>
          {/* Future plans card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-7 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center mb-5">
              <Rocket size={18} strokeWidth={1.5} className="text-navy-400" />
            </div>
            <h3 className="text-lg font-semibold text-navy">Future plans</h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Our next step is to test JagaMinda with elder caregiver pairs and use their feedback to refine the goggles for comfort, battery life, sensor accuracy and fewer false alerts. We will validate alert thresholds with clinicians and dementia care partners, then prepare the design for safe long term use and small batch production. We will partner with clinics, care homes and dementia organisations to pilot it in real homes. A patent application is pending and the supporting paper is under review by a Q1 journal.
            </p>
            <a
              href="https://github.com/jinchuntan/jagaminda"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-navy hover:text-navy-600 transition-colors group"
            >
              Follow progress on GitHub
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Awards card */}
          <div className="bg-gradient-to-br from-navy-50/60 to-white rounded-2xl border border-navy-100/40 p-7 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center mb-5">
              <Award size={18} strokeWidth={1.5} className="text-navy" />
            </div>
            <h3 className="text-lg font-semibold text-navy">Recognition</h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              JagaMinda was nominated for the MindSpark 2025 Grand Finale under the AvantMind Matters programme, recognising youth teams developing community driven solutions for dementia awareness, care and inclusivity at Monash University Malaysia.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-400 bg-navy-100/50 px-2.5 py-1 rounded-full">
                MindSpark 2025
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-400 bg-navy-100/50 px-2.5 py-1 rounded-full">
                Patent pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
