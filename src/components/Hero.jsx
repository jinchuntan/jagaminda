import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'

const tags = ['Smart goggles', 'Custom sensor', 'Caregiver alerts', 'Patent pending']

const heroImages = [
  {
    src: '/images/jagaminda-goggles-hero.jpg',
    alt: 'JagaMinda smart goggles prototype — front view showing the completed wearable with integrated sensing hardware',
  },
  {
    src: '/images/Image1.jpg',
    alt: 'JagaMinda smart goggles — front angle showing sensor board, PCB and wiring on clear safety frame',
  },
  {
    src: '/images/Image2.jpg',
    alt: 'JagaMinda smart goggles — side profile showing 3D printed arms, wiring harness and battery compartment',
  },
  {
    src: '/images/Image3.jpg',
    alt: 'JagaMinda smart goggles — rear view in the lab showing the full wearable form factor',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % heroImages.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + heroImages.length) % heroImages.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [paused, next])

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

        {/* Hero image carousel */}
        <div
          className="mt-12 md:mt-16 relative group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden bg-slate-50 relative">
            {heroImages.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover carousel-slide ${
                  i === current ? 'opacity-100' : 'opacity-0'
                }`}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            ))}
          </div>

          {/* Carousel controls */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-500 hover:text-navy hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-500 hover:text-navy hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
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
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-navy border border-slate-200 px-6 py-2.5 rounded-full hover:border-navy hover:bg-navy-50 transition-all"
            >
              Try demo
            </Link>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1">
          {tags.map((tag, i) => (
            <span key={tag} className="text-[11px] font-medium text-slate-300 tracking-wide">
              {tag}{i < tags.length - 1 && <span className="ml-4 text-slate-200">&middot;</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
