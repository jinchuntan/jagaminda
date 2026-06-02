import useInView from '../hooks/useInView'

export default function Inspiration() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-100 pt-24 md:pt-32">
          <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
            <span className="section-label">Motivation</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug max-w-xl">
              Built from a family experience
            </h2>
            <blockquote className="mt-8 max-w-2xl">
              <p className="text-base sm:text-lg text-slate-400 leading-[1.8] italic">
                "I started JagaMinda because my grandmother had dementia. At home, the hardest part was not knowing when forgetfulness, a missed meal or a change in behaviour should become a reason to seek help. When I looked for monitoring tools, many were too expensive, too clinical or not made for everyday families. That gap pushed me to design something I would have wanted for my own grandmother. A gentle pair of smart goggles that could watch for small changes at home, support caregivers and make early action feel less frightening."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
