import { ArrowDown, ExternalLink } from 'lucide-react'

const tags = ['Smart goggles', 'Custom sensor', 'Caregiver alerts', 'Patent pending']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-navy tracking-tight leading-[1.1]">
              JagaMinda
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Smart goggles with custom sensing hardware for earlier dementia care at home.
            </p>
            <p className="mt-6 text-base text-slate-500 leading-relaxed max-w-lg">
              JagaMinda helps families notice small changes earlier by combining wearable sensing, a patent pending custom sensor and a caregiver app that turns readings into clear alerts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 bg-navy text-white px-5 sm:px-7 py-3 rounded-full text-sm font-medium hover:bg-navy-700 transition-colors"
              >
                View how it works
                <ArrowDown size={16} />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy px-5 sm:px-7 py-3 rounded-full text-sm font-medium hover:bg-navy-50 transition-colors"
              >
                Try caregiver demo
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-navy-600 bg-navy-50 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-lg">
              <img
                src="/images/jagaminda-goggles-hero.jpg"
                alt="JagaMinda smart goggles prototype showing the completed wearable sensing device"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('img-placeholder')
                  e.target.parentElement.innerHTML =
                    '<div class="text-center p-8"><p class="text-slate-400 text-sm">Hero image</p><p class="text-slate-300 text-xs mt-1">jagaminda-goggles-hero.jpg</p></div>'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
