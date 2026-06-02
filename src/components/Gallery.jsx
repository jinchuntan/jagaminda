import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import useInView from '../hooks/useInView'

const galleryItems = [
  {
    src: '/images/jagaminda-goggles-hero.jpg',
    alt: 'Completed smart goggles prototype showing the final wearable form with integrated sensing hardware',
    caption: 'Completed smart goggles prototype',
    label: 'Prototype',
    featured: true,
  },
  {
    src: '/images/jagaminda-system-flow.png',
    alt: 'System flow diagram showing data path from wearable sensing to caregiver support and alerts',
    caption: 'System flow from wearable sensing to caregiver support',
    label: 'System',
    featured: false,
  },
  {
    src: '/images/custom-sensor-development-process-infographic.png',
    alt: 'Custom sensor development process infographic',
    caption: 'Custom sensor development process',
    label: 'Sensor',
    featured: false,
  },
  {
    src: '/images/sensor-fabrication-and-testing-overview.png',
    alt: 'Sensor fabrication and testing overview showing wire bonding, PCB assembly and validation results',
    caption: 'Sensor fabrication and validation',
    label: 'Testing',
    featured: false,
  },
  {
    src: '/images/jagaminda-caregiver-app-and-dashboard-overview.png',
    alt: 'Caregiver app and dashboard overview',
    caption: 'Caregiver app and dashboard overview',
    label: 'App',
    featured: false,
  },
]

function Lightbox({ items, index, setIndex, onClose }) {
  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length)
  }, [items.length, setIndex])

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % items.length)
  }, [items.length, setIndex])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, goPrev, goNext])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4 lightbox-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
          aria-label="Close lightbox"
        >
          <X size={22} />
        </button>

        <div className="relative">
          <img
            src={items[index].src}
            alt={items[index].alt}
            className="w-full max-h-[80vh] object-contain rounded-xl"
          />

          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between text-white/60 text-sm px-1">
          <p>{items[index].caption}</p>
          <p className="text-white/40 text-xs">{index + 1} / {items.length}</p>
        </div>

        <div className="mt-4 flex gap-2 justify-center overflow-x-auto pb-2">
          {items.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setIndex(i)}
              className={`flex-shrink-0 w-14 h-10 rounded-md overflow-hidden transition-all ${
                i === index ? 'ring-2 ring-white opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
            >
              <img src={item.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <span className="section-label">Prototype Evidence</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-navy tracking-tight leading-snug max-w-xl">
            From concept to working hardware
          </h2>
        </div>

        <div className={`mt-14 stagger-children ${inView ? 'visible' : ''}`}>
          {/* Featured large card */}
          <button
            onClick={() => setLightboxIndex(0)}
            className="group text-left w-full mb-6"
          >
            <div className="bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover hover:border-medical-200 overflow-hidden transition-all duration-300">
              <div className="aspect-[2.2/1] bg-slate-50 overflow-hidden relative">
                <img
                  src={galleryItems[0].src}
                  alt={galleryItems[0].alt}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-400 bg-navy-50 px-2 py-0.5 rounded-full">
                    {galleryItems[0].label}
                  </span>
                  <p className="mt-2 text-sm font-medium text-navy group-hover:text-navy-600 transition-colors">
                    {galleryItems[0].caption}
                  </p>
                </div>
                <span className="text-[11px] text-slate-300">Click to expand</span>
              </div>
            </div>
          </button>

          {/* Grid of remaining items */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.slice(1).map((item, i) => (
              <button
                key={item.caption}
                onClick={() => setLightboxIndex(i + 1)}
                className="group text-left"
              >
                <div className="bg-white rounded-xl border border-slate-100 shadow-card hover:shadow-card-hover hover:border-medical-200 overflow-hidden transition-all duration-300">
                  <div className="aspect-[4/3] bg-slate-50 overflow-hidden relative">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('img-placeholder')
                        const filename = item.src.split('/').pop()
                        e.target.parentElement.innerHTML =
                          `<div class="text-center p-4"><p class="text-slate-300 text-xs">${filename}</p></div>`
                      }}
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-300" />
                  </div>
                  <div className="p-3.5">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-navy-400 bg-navy-50 px-2 py-0.5 rounded-full">
                      {item.label}
                    </span>
                    <p className="mt-2 text-[13px] text-slate-500 group-hover:text-navy transition-colors leading-snug">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={galleryItems}
          index={lightboxIndex}
          setIndex={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  )
}
