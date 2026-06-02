import { Glasses, Shield, Eye, Activity } from 'lucide-react'
import useInView from '../hooks/useInView'

const features = [
  {
    icon: Glasses,
    title: 'Wearable familiarity',
    copy: 'Monitoring happens through something the wearer already knows, not a separate medical device.',
  },
  {
    icon: Shield,
    title: 'Patent pending sensor',
    copy: 'A custom graphene oxide coated Aluminium Nitride sensor that responds to light and humidity, combined with motion sensing.',
  },
  {
    icon: Activity,
    title: 'Daily sensing',
    copy: 'Tracks walking stability, falls, light exposure and environmental changes throughout the day.',
  },
  {
    icon: Eye,
    title: 'Caregiver action',
    copy: 'The companion app turns sensor signals into clear alerts instead of raw data, so families know when to check in.',
  },
]

export default function Differentiator() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 md:py-32 bg-navy-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
            {/* Left: copy */}
            <div>
              <span className="section-label">What Sets It Apart</span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-navy tracking-tight leading-snug">
                What makes JagaMinda different
              </h2>
              <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
                Many dementia care tools solve one problem at a time. JagaMinda is built around the smart goggles, combining daily sensing with caregiver action in one wearable system. It is an affordable, discreet sensing system that helps families notice small changes earlier, without making an older loved one feel constantly watched.
              </p>
            </div>

            {/* Right: feature cards */}
            <div className={`grid grid-cols-2 gap-4 stagger-children ${inView ? 'visible' : ''}`}>
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group bg-white rounded-xl border border-slate-100 p-5 shadow-card hover:shadow-card-hover hover:border-slate-200 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center group-hover:bg-navy transition-colors duration-300">
                    <f.icon size={16} strokeWidth={1.5} className="text-navy-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-navy">{f.title}</h3>
                  <p className="mt-1.5 text-[12px] text-slate-400 leading-relaxed">{f.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
