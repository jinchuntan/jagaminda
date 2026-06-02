import { ArrowRight } from 'lucide-react'

export default function FuturePlans() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <span className="section-label">Looking Ahead</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug max-w-xl">
          Next steps
        </h2>
        <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
          Our next step is to test JagaMinda with elder caregiver pairs and use their feedback to refine the goggles for comfort, battery life, sensor accuracy and fewer false alerts. We will validate alert thresholds with clinicians and dementia care partners, then prepare the design for safe long term use and small batch production. We will partner with clinics, care homes and dementia organisations to pilot it in real homes. A patent application is pending and the supporting paper is under review by a Q1 journal. Our goal is to make JagaMinda an affordable wearable that helps families act earlier and improve the lives of people who use it.
        </p>
        <div className="mt-6">
          <a
            href="https://github.com/jinchuntan/jagaminda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-slate-400 hover:text-navy transition-colors"
          >
            Follow progress on GitHub
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
