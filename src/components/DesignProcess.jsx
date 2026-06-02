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
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-100 pt-24 md:pt-32">
          <span className="section-label">Design Process</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug max-w-xl">
            From concept to working prototype
          </h2>

          <div className="mt-16 space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="grid grid-cols-[auto_1fr] gap-6 sm:gap-8"
              >
                {/* Number + line */}
                <div className="flex flex-col items-center">
                  <span className="text-[11px] font-bold text-slate-300 w-7 h-7 flex items-center justify-center">
                    0{i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-slate-100 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 sm:pb-14">
                  <h3 className="text-base font-semibold text-navy -mt-0.5">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-lg">
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
