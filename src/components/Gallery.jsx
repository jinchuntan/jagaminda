import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import useInView from '../hooks/useInView'

const galleryItems = [
  {
    src: '/images/jagaminda-goggles-hero.jpg',
    alt: 'Completed smart goggles prototype showing the final wearable form with integrated sensing hardware',
    caption: 'Completed smart goggles prototype',
  },
  {
    src: '/images/Image1.jpg',
    alt: 'Smart goggles front angle showing sensor board, PCB and wiring on clear safety frame',
    caption: 'Sensor board and PCB wiring detail',
  },
  {
    src: '/images/Image2.jpg',
    alt: 'Smart goggles side profile showing 3D printed arms, wiring harness and battery compartment',
    caption: 'Side profile with 3D printed arms',
  },
  {
    src: '/images/Image3.jpg',
    alt: 'Smart goggles rear view in lab setting showing the full wearable form factor',
    caption: 'Rear view in lab environment',
  },
  {
    src: '/images/jagaminda-system-flow.png',
    alt: 'System flow diagram showing data path from wearable sensing to caregiver support and alerts',
    caption: 'System flow from wearable sensing to caregiver support',
  },
  {
    src: '/images/custom-sensor-development-process-infographic.png',
    alt: 'Custom sensor development process infographic showing the stages of building the graphene oxide coated Aluminium Nitride sensor',
    caption: 'Custom sensor development process',
  },
  {
    src: '/images/sensor-fabrication-and-testing-overview.png',
    alt: 'Sensor fabrication and testing overview showing wire bonding, PCB assembly and validation results',
    caption: 'Sensor fabrication and validation',
  },
  {
    src: '/images/jagaminda-caregiver-app-and-dashboard-overview.png',
    alt: 'Caregiver app and dashboard overview showing alert cards, readings and the user interface design',
    caption: 'Caregiver app and dashboard overview',
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
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-100 pt-24 md:pt-32">
          <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
            <span className="section-label">Evidence</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug max-w-xl">
              Prototype evidence
            </h2>
          </div>

          <div className={`mt-14 grid sm:grid-cols-2 gap-4 stagger-children ${inView ? 'visible' : ''}`}>
            {galleryItems.map((item, i) => (
              <button
                key={item.caption}
                onClick={() => setLightboxIndex(i)}
                className={`group text-left ${i === 0 ? 'sm:col-span-2' : ''}`}
              >
                <div
                  className={`${
                    i === 0 ? 'aspect-[2/1]' : 'aspect-[4/3]'
                  } rounded-xl overflow-hidden bg-slate-50 cursor-zoom-in relative`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain p-3 group-hover:scale-[1.03] transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('img-placeholder')
                      const filename = item.src.split('/').pop()
                      e.target.parentElement.innerHTML =
                        `<div class="text-center p-6"><p class="text-slate-300 text-sm">${filename}</p></div>`
                    }}
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-300 rounded-xl" />
                </div>
                <p className="mt-3 text-[13px] text-slate-400 group-hover:text-navy transition-colors">
                  {item.caption}
                </p>
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
