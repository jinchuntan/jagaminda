import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Glasses, Cpu, Shield, Sparkles } from 'lucide-react'

const badges = [
  { label: 'Smart goggles', icon: Glasses, className: 'top-6 left-6 float-slow' },
  { label: 'Custom sensor', icon: Cpu, className: 'top-6 right-6 float-slow-delay' },
  { label: 'Patent pending', icon: Shield, className: 'bottom-20 left-6 float-slow-delay-2' },
  { label: 'Caregiver alerts', icon: Sparkles, className: 'bottom-20 right-6 float-slow' },
]

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
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-50 border border-navy-100 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-navy-400 animate-pulse" />
              <span className="text-[11px] font-medium text-navy-500 tracking-wide">Design engineering project</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.75rem] font-bold text-navy tracking-tightest leading-[1.08]">
              Smart goggles for earlier dementia care
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed font-light max-w-lg">
              JagaMinda combines wearable sensing, a patent pending custom sensor and a caregiver app that turns readings into clear alerts for families.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-medium px-6 py-3 rounded-full hover:bg-navy-700 transition-colors shadow-card"
              >
                Explore how it works
                <ArrowDown size={14} />
              </a>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-navy border border-slate-200 px-6 py-3 rounded-full hover:border-navy-300 hover:bg-navy-50 transition-all"
              >
                Try caregiver demo
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Tags row */}
            <div className="mt-10 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full"
                >
                  <badge.icon size={11} strokeWidth={2} />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: hero image carousel with floating badges */}
          <div
            className="relative group"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Gradient background glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-navy-50 via-medical-50/50 to-navy-50/30 rounded-3xl blur-xl opacity-60" />

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 relative shadow-elevated">
                {heroImages.map((img, i) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute inset-0 w-full h-full object-cover carousel-slide ${
                      i === current ? 'opacity-100' : 'opacity-0'
                    }`}
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                ))}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
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

              {/* Floating label badges — hidden on small screens */}
              <div className="hidden lg:block">
                {badges.map((badge) => (
                  <div
                    key={badge.label}
                    className={`absolute ${badge.className} bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-card border border-white/80 flex items-center gap-2 pointer-events-none`}
                  >
                    <badge.icon size={13} className="text-navy-400" strokeWidth={1.5} />
                    <span className="text-[11px] font-medium text-navy-700">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
