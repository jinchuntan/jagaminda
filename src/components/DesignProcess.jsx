import { Search, Glasses, Cpu, Wrench, Smartphone } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Survey and care journey mapping',
    copy: 'We began by studying the daily routine of older adults and the moments where families worry most, including walking, falls, light exposure and changes in the home environment.',
  },
  {
    icon: Glasses,
    title: 'Wearable concept',
    copy: 'We made the smart goggles the centre of the design because eyewear is familiar and can carry sensors without asking the user to operate a separate medical device.',
  },
  {
    icon: Cpu,
    title: 'Sensor development',
    copy: 'We fabricated the Aluminium Nitride based sensor, bonded it to a printed circuit board and designed a casing to protect it while keeping the sensing area exposed.',
  },
  {
    icon: Wrench,
    title: 'Prototype integration',
    copy: 'We connected the sensing hardware to the ESP32 system and integrated the module into the smart goggles frame.',
  },
  {
    icon: Smartphone,
    title: 'App and alert flow',
    copy: 'We linked the goggles to a caregiver app so sensor readings could become simple alerts instead of raw graphs.',
  },
]

export default function DesignProcess() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          From concept to working prototype
        </h2>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-6 md:left-8 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-10 sm:space-y-12">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex gap-4 sm:gap-6 md:gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white border-2 border-navy-100 flex items-center justify-center shadow-sm">
                    <step.icon size={20} className="text-navy-600 sm:w-[22px] sm:h-[22px]" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-0.5 sm:pt-1 md:pt-3 pb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-navy-400 uppercase tracking-wider">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {step.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
