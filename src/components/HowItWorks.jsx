import { Radio, Cpu, Send, Bell, HeartHandshake, ChevronRight } from 'lucide-react'

const steps = [
  { icon: Radio, label: 'Sense', description: 'Goggles read motion, light and humidity' },
  { icon: Cpu, label: 'Process', description: 'ESP32 combines sensor signals' },
  { icon: Send, label: 'Send', description: 'Bluetooth transmits to the app' },
  { icon: Bell, label: 'Alert', description: 'App detects unusual changes' },
  { icon: HeartHandshake, label: 'Act', description: 'Caregiver knows when to check in' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            How the design works
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            JagaMinda starts with the smart goggles. A motion sensor reads tilt, movement and sudden impact to detect unstable walking or falls. Light and environmental sensors monitor exposure around the wearer. The key technology is our custom graphene oxide coated Aluminium Nitride sensor. Aluminium Nitride responds to light, while graphene oxide reacts strongly to moisture in the air. When these conditions change, the sensor produces small electrical changes that can be measured. An ESP32 chip inside the goggles reads these signals, combines them with motion data and sends the readings by Bluetooth to the caregiver app. The app compares the readings with the wearer's normal pattern and turns unusual changes into simple alerts.
          </p>
        </div>

        {/* Process flow */}
        <div className="mt-16">
          {/* Desktop: horizontal flow */}
          <div className="hidden sm:flex items-start justify-center gap-2">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center text-center flex-1 min-w-0 max-w-[8rem]">
                  <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center text-navy-600">
                    <step.icon size={24} />
                  </div>
                  <span className="mt-3 text-sm font-semibold text-navy">
                    {step.label}
                  </span>
                  <span className="mt-1 text-xs text-slate-500 leading-snug">
                    {step.description}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight
                    size={20}
                    className="text-slate-300 flex-shrink-0 mt-4"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="flex sm:hidden flex-col items-center gap-1">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                <div className="flex items-center gap-4 w-full max-w-xs">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-600 flex-shrink-0">
                    <step.icon size={20} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-navy">
                      {step.label}
                    </span>
                    <p className="text-xs text-slate-500 leading-snug">
                      {step.description}
                    </p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-5 bg-slate-200 my-1 ml-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* System flow image */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
            <img
              src="/images/jagaminda-system-flow.png"
              alt="JagaMinda system flow diagram showing data path from wearable sensing through processing to caregiver alerts"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.classList.add('img-placeholder')
                e.target.parentElement.innerHTML =
                  '<div class="text-center p-8"><p class="text-slate-400 text-sm">System flow diagram</p><p class="text-slate-300 text-xs mt-1">jagaminda-system-flow.png</p></div>'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
