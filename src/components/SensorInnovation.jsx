const points = ['PCB and wire bonding', 'Casing design', 'Packaged sensor module', 'Wearable integration', 'ESP32 control']

export default function SensorInnovation() {
  return (
    <section id="sensor" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-100 pt-24 md:pt-32">
          <span className="section-label">Core Innovation</span>
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
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

            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50">
              <img
                src="/images/custom-sensor-development-process-infographic.png"
                alt="Custom sensor development process infographic showing the stages from material selection through fabrication to integration"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('img-placeholder')
                  e.target.parentElement.innerHTML =
                    '<div class="text-center p-8"><p class="text-slate-300 text-sm">custom-sensor-development-process-infographic.png</p></div>'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
