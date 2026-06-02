import { useState } from 'react'
import { Radio, Cpu, Send, Bell, HeartHandshake } from 'lucide-react'
import useInView from '../hooks/useInView'

const steps = [
  {
    icon: Radio,
    label: 'Sense',
    short: 'Goggles read motion, light and humidity',
    detail: 'A motion sensor reads tilt, movement and sudden impact to detect unstable walking or falls. Light and environmental sensors monitor exposure around the wearer.',
  },
  {
    icon: Cpu,
    label: 'Process',
    short: 'ESP32 combines sensor signals',
    detail: 'The key technology is our custom graphene oxide coated Aluminium Nitride sensor. When light or humidity conditions change, it produces measurable electrical changes. An ESP32 chip reads these alongside motion data.',
  },
  {
    icon: Send,
    label: 'Send',
    short: 'Bluetooth transmits to the app',
    detail: 'The ESP32 combines sensor readings and transmits them by Bluetooth to the companion caregiver app. No internet connection is required for the wearable itself.',
  },
  {
    icon: Bell,
    label: 'Alert',
    short: 'App detects unusual changes',
    detail: 'The app compares new readings with the wearer\'s normal pattern. When a value moves outside the expected range, the system raises a clear alert instead of showing raw numbers.',
  },
  {
    icon: HeartHandshake,
    label: 'Act',
    short: 'Caregiver knows when to check in',
    detail: 'Each alert explains what changed and suggests a next step, helping caregivers decide whether to check in, adjust a routine or speak with a doctor.',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [ref, inView] = useInView()
  const [flowRef, flowInView] = useInView()

  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <span className="section-label">How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-navy tracking-tight leading-snug max-w-xl">
            From sensor to caregiver action
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            JagaMinda starts with the smart goggles. Aluminium Nitride responds to light, while graphene oxide reacts strongly to moisture in the air. These signals combine with motion data and reach the caregiver as clear, actionable alerts.
          </p>
        </div>

        {/* Interactive process flow */}
        <div ref={flowRef} className={`mt-16 sm:mt-20 fade-in-up ${flowInView ? 'visible' : ''}`}>
          {/* Desktop flow — step cards */}
          <div className="hidden sm:grid grid-cols-5 gap-3">
            {steps.map((step, i) => (
              <button
                key={step.label}
                onClick={() => setActiveStep(i)}
                className={`relative rounded-xl border p-4 text-left transition-all duration-300 ${
                  activeStep === i
                    ? 'bg-navy border-navy text-white shadow-elevated'
                    : 'bg-white border-slate-100 shadow-card hover:shadow-card-hover hover:border-slate-200'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300 ${
                  activeStep === i
                    ? 'bg-white/15'
                    : 'bg-navy-50'
                }`}>
                  <step.icon size={16} strokeWidth={1.5} className={activeStep === i ? 'text-white' : 'text-navy-400'} />
                </div>
                <span className={`text-xs font-semibold tracking-wide ${
                  activeStep === i ? 'text-white' : 'text-navy'
                }`}>
                  {step.label}
                </span>
                <p className={`mt-1 text-[11px] leading-snug ${
                  activeStep === i ? 'text-white/70' : 'text-slate-400'
                }`}>
                  {step.short}
                </p>
                {/* Step number */}
                <span className={`absolute top-3 right-3 text-[10px] font-bold ${
                  activeStep === i ? 'text-white/30' : 'text-slate-200'
                }`}>
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="flex sm:hidden flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.label}>
                <button
                  onClick={() => setActiveStep(i)}
                  className="flex items-center gap-4 w-full text-left group"
                >
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    activeStep === i
                      ? 'bg-navy border-navy text-white'
                      : 'bg-white border-slate-200 text-slate-400 group-hover:border-navy group-hover:text-navy'
                  }`}>
                    <step.icon size={15} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-navy">{step.label}</span>
                    <p className="text-xs text-slate-400">{step.short}</p>
                  </div>
                </button>
                {i < steps.length - 1 && (
                  <div className="w-px h-6 bg-slate-100 ml-5" />
                )}
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="mt-8 bg-white rounded-xl border border-slate-100 shadow-card p-6 sm:p-8 lightbox-enter" key={activeStep}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center">
                {(() => {
                  const StepIcon = steps[activeStep].icon
                  return <StepIcon size={14} className="text-navy-400" strokeWidth={1.5} />
                })()}
              </div>
              <span className="text-sm font-semibold text-navy">{steps[activeStep].label}</span>
              <span className="text-[10px] font-bold text-slate-300">Step 0{activeStep + 1}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
              {steps[activeStep].detail}
            </p>
          </div>
        </div>

        {/* System flow image */}
        <div className="mt-16 sm:mt-20">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-50 shadow-card">
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
    </section>
  )
}
