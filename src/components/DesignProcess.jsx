import { useState } from 'react'
import useInView from '../hooks/useInView'

const steps = [
  {
    title: 'Survey and care journey mapping',
    copy: 'We began by studying the daily routine of older adults and the moments where families worry most, including walking, falls, light exposure and changes in the home environment.',
  },
  {
    title: 'Wearable concept',
    copy: 'We made the smart goggles the centre of the design because eyewear is familiar and can carry sensors without asking the user to operate a separate medical device.',
  },
  {
    title: 'Sensor development',
    copy: 'We fabricated the Aluminium Nitride based sensor, bonded it to a printed circuit board and designed a casing to protect it while keeping the sensing area exposed.',
  },
  {
    title: 'Prototype integration',
    copy: 'We connected the sensing hardware to the ESP32 system and integrated the module into the smart goggles frame.',
  },
  {
    title: 'App and alert flow',
    copy: 'We linked the goggles to a caregiver app so sensor readings could become simple alerts instead of raw graphs.',
  },
]

function AnimatedNumber({ n, inView }) {
  const [display, setDisplay] = useState(0)

  if (inView && display < n) {
    setTimeout(() => setDisplay((d) => Math.min(d + 1, n)), n === 1 ? 0 : (n - 1) * 120)
  }

  return <span>0{inView ? display : 0}</span>
}

export default function DesignProcess() {
  const [expandedStep, setExpandedStep] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-100 pt-24 md:pt-32">
          <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
            <span className="section-label">Design Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug max-w-xl">
              From concept to working prototype
            </h2>
          </div>

          <div className={`mt-16 space-y-0 stagger-children ${inView ? 'visible' : ''}`}>
            {steps.map((step, i) => (
              <button
                key={step.title}
                onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                className="grid grid-cols-[auto_1fr] gap-6 sm:gap-8 w-full text-left group"
              >
                {/* Number + line */}
                <div className="flex flex-col items-center">
                  <span className={`text-[11px] font-bold w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
                    expandedStep === i
                      ? 'bg-navy text-white'
                      : 'text-slate-300 group-hover:text-navy'
                  }`}>
                    0{i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-slate-100 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 sm:pb-14">
                  <h3 className={`text-base font-semibold -mt-0.5 transition-colors duration-300 ${
                    expandedStep === i ? 'text-navy' : 'text-navy group-hover:text-navy-600'
                  }`}>
                    {step.title}
                  </h3>
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedStep === i ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0 sm:max-h-40 sm:opacity-100 sm:mt-2'
                  }`}>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
                      {step.copy}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
