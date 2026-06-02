import { Radio, Cpu, Send, Bell, HeartHandshake } from 'lucide-react'

const steps = [
  { icon: Radio, label: 'Sense', description: 'Goggles read motion, light and humidity' },
  { icon: Cpu, label: 'Process', description: 'ESP32 combines sensor signals' },
  { icon: Send, label: 'Send', description: 'Bluetooth transmits to the app' },
  { icon: Bell, label: 'Alert', description: 'App detects unusual changes' },
  { icon: HeartHandshake, label: 'Act', description: 'Caregiver knows when to check in' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-100 pt-24 md:pt-32">
          <span className="section-label">How It Works</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug max-w-xl">
            How the design works
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            JagaMinda starts with the smart goggles. A motion sensor reads tilt, movement and sudden impact to detect unstable walking or falls. Light and environmental sensors monitor exposure around the wearer. The key technology is our custom graphene oxide coated Aluminium Nitride sensor. Aluminium Nitride responds to light, while graphene oxide reacts strongly to moisture in the air. When these conditions change, the sensor produces small electrical changes that can be measured. An ESP32 chip inside the goggles reads these signals, combines them with motion data and sends the readings by Bluetooth to the caregiver app. The app compares the readings with the wearer's normal pattern and turns unusual changes into simple alerts.
          </p>

          {/* Process flow */}
          <div className="mt-16 sm:mt-20">
            {/* Desktop flow */}
            <div className="hidden sm:grid grid-cols-5 gap-0">
              {steps.map((step, i) => (
                <div key={step.label} className="relative flex flex-col items-center text-center">
                  {/* Connecting line */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-5 left-1/2 w-full h-px bg-slate-100" />
                  )}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                    <step.icon size={16} strokeWidth={1.5} />
                  </div>
                  <span className="mt-3 text-xs font-semibold text-navy tracking-wide">
                    {step.label}
                  </span>
                  <span className="mt-1 text-[11px] text-slate-400 leading-snug max-w-[10rem]">
                    {step.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile flow */}
            <div className="flex sm:hidden flex-col gap-0">
              {steps.map((step, i) => (
                <div key={step.label}>
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 flex-shrink-0">
                      <step.icon size={14} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-navy">{step.label}</span>
                      <p className="text-xs text-slate-400">{step.description}</p>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-6 bg-slate-100 ml-[18px]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* System flow image */}
          <div className="mt-16 sm:mt-20">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-50">
              <img
                src="/images/jagaminda-system-flow.png"
                alt="JagaMinda system flow diagram showing data path from wearable sensing through processing to caregiver alerts"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('img-placeholder')
                  e.target.parentElement.innerHTML =
                    '<div class="text-center p-8"><p class="text-slate-300 text-sm">jagaminda-system-flow.png</p></div>'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
