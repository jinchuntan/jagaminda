import { useState } from 'react'
import useInView from '../hooks/useInView'

const points = ['PCB and wire bonding', 'Casing design', 'Packaged sensor module', 'Wearable integration', 'ESP32 control']

const sensorImages = [
  {
    src: '/images/custom-sensor-development-process-infographic.png',
    alt: 'Custom sensor development process infographic showing the stages from material selection through fabrication to integration',
    label: 'Development process',
  },
  {
    src: '/images/Image1.jpg',
    alt: 'Smart goggles front angle showing sensor board and PCB wiring',
    label: 'Sensor board detail',
  },
  {
    src: '/images/Image2.jpg',
    alt: 'Smart goggles side profile showing 3D printed arms and wiring',
    label: 'Side profile',
  },
]

export default function SensorInnovation() {
  const [activeImg, setActiveImg] = useState(0)
  const [ref, inView] = useInView()

  return (
    <section id="sensor" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-100 pt-24 md:pt-32">
          <span className="section-label">Core Innovation</span>
          <div ref={ref} className={`grid md:grid-cols-2 gap-16 md:gap-20 items-start fade-in-up ${inView ? 'visible' : ''}`}>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug">
                The custom sensor is the difference
              </h2>
              <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
                JagaMinda is not only an app and not only a smartwatch. Its main innovation is the sensing module built into the goggles. The patent pending architecture combines a graphene oxide coated Aluminium Nitride sensor with motion and light sensing to monitor changes that may be missed in daily care.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                {points.map((point, i) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <span className="text-[11px] font-bold text-slate-300">0{i + 1}</span>
                    <span className="text-sm text-slate-500">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 relative">
                {sensorImages.map((img, i) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute inset-0 w-full h-full ${i === 0 ? 'object-contain p-4' : 'object-cover'} transition-opacity duration-500 ${
                      i === activeImg ? 'opacity-100' : 'opacity-0'
                    }`}
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                ))}
              </div>
              {/* Image selector tabs */}
              <div className="mt-3 flex gap-2">
                {sensorImages.map((img, i) => (
                  <button
                    key={img.label}
                    onClick={() => setActiveImg(i)}
                    className={`text-[11px] px-3 py-1.5 rounded-full transition-all ${
                      i === activeImg
                        ? 'bg-navy text-white'
                        : 'bg-slate-50 text-slate-400 hover:text-navy hover:bg-slate-100'
                    }`}
                  >
                    {img.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
