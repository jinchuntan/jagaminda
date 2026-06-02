import useInView from '../hooks/useInView'

export default function Problem() {
  const [ref, inView] = useInView()

  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-100 pt-24 md:pt-32">
          <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
            <span className="section-label">The Problem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug max-w-xl">
              The care gap starts at home
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              For many families, the hardest part of dementia care is knowing when forgetfulness, a missed routine or a change in behaviour should become a reason to seek help. Existing tools often focus on only one part of care, such as reminders, fall tracking, location monitoring or clinic screening. JagaMinda brings daily sensing and caregiver action into one wearable system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
