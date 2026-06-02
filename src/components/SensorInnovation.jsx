import { useState } from 'react'
import { Cpu, Box, Wrench, Wifi } from 'lucide-react'
import useInView from '../hooks/useInView'

const highlights = [
  {
    icon: Cpu,
    title: 'Graphene oxide coated AlN sensor',
    copy: 'Aluminium Nitride responds to light while graphene oxide reacts to moisture, creating a dual-sensing material.',
  },
  {
    icon: Wrench,
    title: 'Wire bonded PCB',
    copy: 'The sensor is bonded to a printed circuit board using wire bonding for reliable electrical connection.',
  },
  {
    icon: Box,
    title: '3D printed protective casing',
    copy: 'A custom enclosure protects the sensor while keeping the sensing area exposed to the environment.',
  },
  {
    icon: Wifi,
    title: 'ESP32 data handling',
    copy: 'An ESP32 microcontroller reads all sensor signals, combines them and transmits via Bluetooth.',
  },
]

const sensorImages = [
  {
    src: '/images/custom-sensor-development-process-infographic.png',
    alt: 'Custom sensor development process infographic',
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
    <section id="sensor" className="py-24 md:py-32 bg-navy-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <span className="section-label">Core Innovation</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-navy tracking-tight leading-snug max-w-xl">
            The custom sensor is the difference
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            JagaMinda is not only an app and not only a smartwatch. Its main innovation is the sensing module built into the goggles. The patent pending architecture combines a graphene oxide coated Aluminium Nitride sensor with motion and light sensing to monitor changes that may be missed in daily care.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: large image with tabs */}
          <div className={`fade-in-left ${inView ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-card relative">
              {sensorImages.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full ${i === 0 ? 'object-contain p-4' : 'object-cover'} transition-opacity duration-500 ${
                    i === activeImg ? 'opacity-100' : 'opacity-0'
                  }`}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              {sensorImages.map((img, i) => (
                <button
                  key={img.label}
                  onClick={() => setActiveImg(i)}
                  className={`text-[11px] px-3.5 py-1.5 rounded-full transition-all ${
                    i === activeImg
                      ? 'bg-navy text-white shadow-card'
                      : 'bg-white text-slate-400 border border-slate-100 hover:text-navy hover:border-slate-200'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className={`space-y-4 stagger-children ${inView ? 'visible' : ''}`}>
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-xl border border-slate-100 p-5 shadow-card hover:shadow-card-hover hover:border-slate-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 group-hover:bg-navy transition-colors duration-300">
                    <item.icon size={18} strokeWidth={1.5} className="text-navy-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{item.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
