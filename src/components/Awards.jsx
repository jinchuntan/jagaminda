import { Award } from 'lucide-react'

export default function Awards() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-navy-50 mb-6">
          <Award size={24} className="text-navy-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy">
          Recognition
        </h2>
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
          JagaMinda was nominated for the MindSpark 2025 Grand Finale under the AvantMind Matters programme, recognising youth teams developing community driven solutions for dementia awareness, care and inclusivity at Monash University Malaysia.
        </p>
      </div>
    </section>
  )
}
