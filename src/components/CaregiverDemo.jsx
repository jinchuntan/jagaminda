import { useState } from 'react'
import {
  Activity,
  ShieldAlert,
  Sun,
  Droplets,
  Footprints,
  Moon,
  Brain,
  AlertTriangle,
  Bell,
  ChevronRight,
  X,
  RefreshCw,
  User,
} from 'lucide-react'

const initialReadings = {
  walkingStability: { label: 'Walking stability', value: 'Stable', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  fallStatus: { label: 'Fall status', value: 'No fall detected', icon: ShieldAlert, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  lightExposure: { label: 'Light exposure', value: 'Moderate', icon: Sun, color: 'text-amber-500', bg: 'bg-amber-50' },
  humidityTrend: { label: 'Humidity trend', value: 'Elevated', icon: Droplets, color: 'text-amber-500', bg: 'bg-amber-50' },
  recentActivity: { label: 'Recent activity', value: '5,230 steps', icon: Footprints, color: 'text-slate-500', bg: 'bg-slate-50' },
  sleep: { label: 'Sleep', value: '7 hr 45 min', icon: Moon, color: 'text-slate-500', bg: 'bg-slate-50' },
  cognitiveCheck: { label: 'Cognitive check', value: '72 out of 100', icon: Brain, color: 'text-amber-500', bg: 'bg-amber-50' },
  riskLevel: { label: 'Risk level', value: 'Moderate', icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-amber-50' },
}

const alertPool = [
  {
    title: 'Unusual sleep pattern detected',
    time: '2 hours ago',
    severity: 'moderate',
    explanation: 'The goggles recorded a shorter sleep duration than the wearer\'s usual pattern over the past three nights.',
    nextStep: 'Check in with the wearer, review whether anything has changed in the evening routine and consider noting the pattern for the next GP visit.',
  },
  {
    title: 'Declining cognitive trend',
    time: '6 hours ago',
    severity: 'elevated',
    explanation: 'The cognitive check score has decreased gradually over the past week compared with the wearer\'s baseline.',
    nextStep: 'Review the wearer\'s recent activity and mood, discuss with family members and consider scheduling a follow-up appointment.',
  },
  {
    title: 'Low activity alert',
    time: '1 day ago',
    severity: 'moderate',
    explanation: 'Daily step count has dropped below the wearer\'s normal range for two consecutive days.',
    nextStep: 'Check in with the wearer to understand if there is a reason for reduced movement and encourage gentle activity if appropriate.',
  },
  {
    title: 'Humidity exposure increased',
    time: '3 hours ago',
    severity: 'low',
    explanation: 'The custom sensor detected a rise in humidity levels around the wearer compared with the usual indoor readings.',
    nextStep: 'Check the home environment for dampness or ventilation issues and ensure the wearer is comfortable.',
  },
  {
    title: 'Unstable walking pattern',
    time: '45 minutes ago',
    severity: 'elevated',
    explanation: 'The goggles detected a change in movement stability compared with the wearer\'s usual pattern.',
    nextStep: 'Check in with the wearer, review recent activity and consider arranging a GP visit if the pattern continues.',
  },
]

const simulatedChanges = [
  {
    readings: {
      walkingStability: { value: 'Unstable', color: 'text-red-500', bg: 'bg-red-50' },
      recentActivity: { value: '1,820 steps', color: 'text-amber-500', bg: 'bg-amber-50' },
      riskLevel: { value: 'Elevated', color: 'text-red-500', bg: 'bg-red-50' },
    },
    alertIndex: 4,
  },
  {
    readings: {
      sleep: { value: '4 hr 20 min', color: 'text-red-500', bg: 'bg-red-50' },
      cognitiveCheck: { value: '61 out of 100', color: 'text-red-500', bg: 'bg-red-50' },
      humidityTrend: { value: 'High', color: 'text-red-500', bg: 'bg-red-50' },
    },
    alertIndex: 0,
  },
  {
    readings: {
      fallStatus: { value: 'Fall detected', color: 'text-red-500', bg: 'bg-red-50' },
      lightExposure: { value: 'Low', color: 'text-amber-500', bg: 'bg-amber-50' },
      riskLevel: { value: 'High', color: 'text-red-500', bg: 'bg-red-50' },
    },
    alertIndex: 1,
  },
]

function SeverityDot({ severity }) {
  const colors = {
    low: 'bg-blue-400',
    moderate: 'bg-amber-400',
    elevated: 'bg-red-400',
  }
  return <span className={`inline-block w-1.5 h-1.5 rounded-full ${colors[severity]}`} />
}

export default function CaregiverDemo() {
  const [readings, setReadings] = useState(initialReadings)
  const [alerts, setAlerts] = useState([alertPool[2], alertPool[3]])
  const [selectedAlert, setSelectedAlert] = useState(null)
  const [simIndex, setSimIndex] = useState(0)
  const [simulating, setSimulating] = useState(false)

  const simulateReading = () => {
    setSimulating(true)
    setTimeout(() => {
      const change = simulatedChanges[simIndex % simulatedChanges.length]
      setReadings((prev) => {
        const next = { ...prev }
        Object.entries(change.readings).forEach(([key, updates]) => {
          next[key] = { ...prev[key], ...updates }
        })
        return next
      })
      const newAlert = { ...alertPool[change.alertIndex], time: 'Just now' }
      setAlerts((prev) => [newAlert, ...prev].slice(0, 5))
      setSimIndex((i) => i + 1)
      setSimulating(false)
    }, 600)
  }

  return (
    <section id="demo" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-100 pt-24 md:pt-32">
          <span className="section-label">Interactive Demo</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug max-w-xl">
            Try the caregiver app demo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            See how readings from the smart goggles become clear caregiver alerts.
          </p>

          {/* Demo container */}
          <div className="mt-14 rounded-2xl border border-slate-100 overflow-hidden bg-white">
            {/* Profile bar */}
            <div className="border-b border-slate-50 px-5 sm:px-6 py-4 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <User size={15} className="text-slate-400" />
                </div>
                <div>
                  <p className="font-medium text-navy text-sm">Edward Miller</p>
                  <p className="text-[11px] text-slate-400">Age 72 · At home</p>
                </div>
              </div>
              <button
                onClick={simulateReading}
                disabled={simulating}
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-medium px-5 py-2 rounded-full hover:bg-navy-700 transition-colors disabled:opacity-50"
              >
                <RefreshCw size={13} className={simulating ? 'animate-spin' : ''} />
                Simulate new reading
              </button>
            </div>

            <div className="p-5 sm:p-6 grid md:grid-cols-5 lg:grid-cols-3 gap-6">
              {/* Readings grid */}
              <div className="md:col-span-3 lg:col-span-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">
                  Current readings
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {Object.entries(readings).map(([key, r]) => (
                    <div
                      key={key}
                      className="flex items-center gap-3 rounded-lg px-3.5 py-2.5 bg-slate-50/60 transition-colors"
                    >
                      <r.icon size={15} className={`${r.color} flex-shrink-0`} strokeWidth={1.5} />
                      <div className="min-w-0">
                        <p className="text-[11px] text-slate-400">{r.label}</p>
                        <p className={`text-sm font-medium ${r.color}`}>{r.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alerts panel */}
              <div className="md:col-span-2 lg:col-span-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4 flex items-center gap-2">
                  <Bell size={12} />
                  Alerts
                </p>
                <div className="space-y-2">
                  {alerts.map((alert, i) => (
                    <button
                      key={`${alert.title}-${i}`}
                      onClick={() => setSelectedAlert(alert)}
                      className="w-full text-left rounded-lg px-3.5 py-2.5 bg-slate-50/60 hover:bg-slate-50 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm text-slate-600 group-hover:text-navy transition-colors">
                          {alert.title}
                        </p>
                        <ChevronRight size={13} className="text-slate-300 mt-0.5 flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <SeverityDot severity={alert.severity} />
                        <span className="text-[11px] text-slate-300">{alert.time}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 pb-4">
              <p className="text-[11px] text-slate-300 text-center">
                This demo shows how JagaMinda could present sensor readings to caregivers. It is not a diagnostic tool.
              </p>
            </div>
          </div>

          {/* Alert detail modal */}
          {selectedAlert && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
              onClick={() => setSelectedAlert(null)}
            >
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-sm sm:max-w-md w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedAlert(null)}
                  className="absolute top-5 right-5 text-slate-300 hover:text-slate-600 transition-colors"
                  aria-label="Close alert detail"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2">
                  <SeverityDot severity={selectedAlert.severity} />
                  <span className="text-[11px] text-slate-400 capitalize">{selectedAlert.severity}</span>
                  <span className="text-[11px] text-slate-300">· {selectedAlert.time}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mt-3">
                  {selectedAlert.title}
                </h3>
                <div className="mt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                    What happened
                  </p>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {selectedAlert.explanation}
                  </p>
                </div>
                <div className="mt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                    Suggested next step
                  </p>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {selectedAlert.nextStep}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedAlert(null)}
                  className="mt-8 w-full bg-navy text-white text-sm font-medium py-2.5 rounded-full hover:bg-navy-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
