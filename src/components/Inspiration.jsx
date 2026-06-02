import { Heart } from 'lucide-react'

export default function Inspiration() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-start sm:items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
            <Heart size={20} className="text-navy-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Built from a family experience
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          I started JagaMinda because my grandmother had dementia. At home, the hardest part was not knowing when forgetfulness, a missed meal or a change in behaviour should become a reason to seek help. When I looked for monitoring tools, many were too expensive, too clinical or not made for everyday families. That gap pushed me to design something I would have wanted for my own grandmother. A gentle pair of smart goggles that could watch for small changes at home, support caregivers and make early action feel less frightening.
        </p>
      </div>
    </section>
  )
}
