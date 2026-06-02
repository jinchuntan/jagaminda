import { ArrowDown } from 'lucide-react'

const tags = ['Smart goggles', 'Custom sensor', 'Caregiver alerts', 'Patent pending']

export default function Hero() {
  return (
    <section className="pt-28 pb-8 md:pt-36 md:pb-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-navy tracking-tightest leading-[1.08]">
            JagaMinda
          </h1>
          <p className="mt-5 text-lg sm:text-xl md:text-[1.35rem] text-slate-400 leading-relaxed font-light">
            Smart goggles with custom sensing hardware for earlier dementia care at home.
          </p>
        </div>

        {/* Hero image */}
        <div className="mt-12 md:mt-16">
          <div className="aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden bg-slate-50">
            <img
              src="/images/jagaminda-goggles-hero.jpg"
              alt="JagaMinda smart goggles prototype showing the completed wearable sensing device"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.classList.add('img-placeholder')
                e.target.parentElement.innerHTML =
                  '<div class="text-center p-8"><p class="text-slate-300 text-sm">jagaminda-goggles-hero.jpg</p></div>'
              }}
            />
          </div>
        </div>

        {/* Below the image */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-sm sm:text-[15px] text-slate-400 leading-relaxed max-w-lg">
            JagaMinda helps families notice small changes earlier by combining wearable sensing, a patent pending custom sensor and a caregiver app that turns readings into clear alerts.
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-medium px-6 py-2.5 rounded-full hover:bg-navy-700 transition-colors"
            >
              How it works
              <ArrowDown size={14} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-navy border border-slate-200 px-6 py-2.5 rounded-full hover:border-navy hover:bg-navy-50 transition-all"
            >
              Try demo
            </a>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1">
          {tags.map((tag, i) => (
            <span key={tag} className="text-[11px] font-medium text-slate-300 tracking-wide">
              {tag}{i < tags.length - 1 && <span className="ml-4 text-slate-200">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
