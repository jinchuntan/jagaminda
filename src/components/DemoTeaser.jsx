import { Link } from 'react-router-dom'
import { ArrowRight, Activity, ShieldAlert, Brain, Droplets, Footprints } from 'lucide-react'
import useInView from '../hooks/useInView'

const sensorIcons = [Activity, ShieldAlert, Brain, Droplets, Footprints]

export default function DemoTeaser() {
  const [ref, inView] = useInView()

  return (
    <section id="demo" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <span className="section-label">Interactive Demo</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-navy tracking-tight leading-snug max-w-xl">
            See the caregiver dashboard in action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            Experience how JagaMinda turns sensor readings into clear, actionable caregiver alerts.
          </p>
        </div>

        {/* Preview card */}
        <div className={`mt-14 fade-in-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          <div className="rounded-2xl border border-slate-100 overflow-hidden bg-white shadow-card hover:shadow-card-hover hover:border-slate-200 transition-all duration-300 group">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: preview image */}
              <div className="aspect-[4/3] md:aspect-auto bg-slate-50 overflow-hidden">
                <img
                  src="/images/jagaminda-caregiver-app-and-dashboard-overview.png"
                  alt="JagaMinda caregiver dashboard preview"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>

              {/* Right: text + sensor icons + CTA */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  {sensorIcons.map((Icon, i) => (
                    <div key={i} className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center">
                      <Icon size={14} strokeWidth={1.5} className="text-navy-400" />
                    </div>
                  ))}
                  <span className="text-[11px] text-slate-300 ml-1">+3 more</span>
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-400/60 mb-3">
                  Companion caregiver app demo
                </span>
                <h3 className="text-lg font-semibold text-navy">
                  Real-time monitoring dashboard
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  8 sensor readings, severity-based alerts, scenario simulation and detailed next-step guidance for caregivers.
                </p>

                <Link
                  to="/demo"
                  className="mt-8 inline-flex items-center gap-2 bg-navy text-white text-[13px] font-medium px-6 py-3 rounded-full hover:bg-navy-700 transition-colors self-start shadow-card"
                >
                  Launch full demo
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
