import { CircuitBoard, Box, Package, Watch, Cpu } from 'lucide-react'

const points = [
  { icon: CircuitBoard, label: 'PCB and wire bonding' },
  { icon: Box, label: 'Casing design' },
  { icon: Package, label: 'Packaged sensor module' },
  { icon: Watch, label: 'Wearable integration' },
  { icon: Cpu, label: 'ESP32 control' },
]

export default function SensorInnovation() {
  return (
    <section id="sensor" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              The custom sensor is the difference
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              JagaMinda is not only an app and not only a smartwatch. Its main innovation is the sensing module built into the goggles. The patent pending architecture combines a graphene oxide coated Aluminium Nitride sensor with motion and light sensing to monitor changes that may be missed in daily care.
            </p>

            {/* Engineering breakdown points */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3">
              {points.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-3 bg-white rounded-xl px-3 sm:px-4 py-3 border border-slate-100"
                >
                  <point.icon size={18} className="text-navy-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700 break-words">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sensor development infographic */}
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
              <img
                src="/images/custom-sensor-development-process-infographic.png"
                alt="Custom sensor development process infographic showing the stages from material selection through fabrication to integration"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('img-placeholder')
                  e.target.parentElement.innerHTML =
                    '<div class="text-center p-8"><p class="text-slate-400 text-sm">Sensor development infographic</p><p class="text-slate-300 text-xs mt-1">custom-sensor-development-process-infographic.png</p></div>'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
