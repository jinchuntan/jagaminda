import { ArrowRight } from 'lucide-react'

export default function FuturePlans() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Next steps
        </h2>
        <p className="mt-8 text-base sm:text-lg text-slate-600 leading-relaxed">
          Our next step is to test JagaMinda with elder caregiver pairs and use their feedback to refine the goggles for comfort, battery life, sensor accuracy and fewer false alerts. We will validate alert thresholds with clinicians and dementia care partners, then prepare the design for safe long term use and small batch production. We will partner with clinics, care homes and dementia organisations to pilot it in real homes. A patent application is pending and the supporting paper is under review by a Q1 journal. Our goal is to make JagaMinda an affordable wearable that helps families act earlier and improve the lives of people who use it.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/jinchuntan/jagaminda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-navy-600 transition-colors"
          >
            Follow progress on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
