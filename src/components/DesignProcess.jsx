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

export default function DesignProcess() {
  const [ref, inView] = useInView()

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <span className="section-label">Design Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-navy tracking-tight leading-snug max-w-xl">
            From concept to working prototype
          </h2>
        </div>

        {/* Timeline */}
        <div className={`mt-16 relative stagger-children ${inView ? 'visible' : ''}`}>
          {/* Vertical line — desktop only */}
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-navy-200 via-navy-100 to-transparent" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative grid grid-cols-[auto_1fr] gap-6 sm:gap-8 group"
              >
                {/* Number circle + line */}
                <div className="flex flex-col items-center">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-navy-200 flex items-center justify-center group-hover:border-navy group-hover:bg-navy transition-all duration-300">
                    <span className="text-[11px] font-bold text-navy-400 group-hover:text-white transition-colors duration-300">
                      0{i + 1}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-slate-100 sm:bg-transparent mt-2" />
                  )}
                </div>

                {/* Content card */}
                <div className="pb-10 sm:pb-12">
                  <div className="bg-white rounded-xl border border-slate-100 p-5 sm:p-6 shadow-card group-hover:shadow-card-hover group-hover:border-slate-200 transition-all duration-300 -mt-1.5">
                    <h3 className="text-[15px] font-semibold text-navy group-hover:text-navy-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-lg">
                      {step.copy}
                    </p>
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
