import { Link } from 'react-router-dom'
import { ArrowRight, Activity, ShieldAlert, Brain } from 'lucide-react'
import useInView from '../hooks/useInView'

export default function DemoTeaser() {
  const [ref, inView] = useInView()

  return (
    <section id="demo" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-100 pt-24 md:pt-32">
          <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
            <span className="section-label">Interactive Demo</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug max-w-xl">
              See the caregiver dashboard in action
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
              Experience how JagaMinda turns sensor readings into clear, actionable caregiver alerts. Try the full interactive demo.
            </p>
          </div>

          {/* Preview card */}
          <div className={`mt-14 fade-in-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="rounded-2xl border border-slate-100 overflow-hidden bg-gradient-to-br from-navy-50/30 to-white hover:border-slate-200 transition-all group">
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

                {/* Right: text + mini readings + CTA */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    {[Activity, ShieldAlert, Brain].map((Icon, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                        <Icon size={14} strokeWidth={1.5} />
                      </div>
                    ))}
                    <span className="text-[11px] text-slate-300">+5 more sensors</span>
                  </div>

                  <h3 className="text-lg font-semibold text-navy">
                    Real-time monitoring dashboard
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    8 sensor readings, severity-based alerts, scenario simulation and detailed next-step guidance for caregivers.
                  </p>

                  <Link
                    to="/demo"
                    className="mt-8 inline-flex items-center gap-2 bg-navy text-white text-[13px] font-medium px-6 py-2.5 rounded-full hover:bg-navy-700 transition-colors self-start"
                  >
                    Launch full demo
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
