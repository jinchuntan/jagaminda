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
  walkingStability: { label: 'Walking stability', value: 'Stable', icon: Activity, color: 'text-green-600', bg: 'bg-green-50' },
  fallStatus: { label: 'Fall status', value: 'No fall detected', icon: ShieldAlert, color: 'text-green-600', bg: 'bg-green-50' },
  lightExposure: { label: 'Light exposure', value: 'Moderate', icon: Sun, color: 'text-amber-600', bg: 'bg-amber-50' },
  humidityTrend: { label: 'Humidity trend', value: 'Elevated', icon: Droplets, color: 'text-amber-600', bg: 'bg-amber-50' },
  recentActivity: { label: 'Recent activity', value: '5,230 steps', icon: Footprints, color: 'text-blue-600', bg: 'bg-blue-50' },
  sleep: { label: 'Sleep', value: '7 hr 45 min', icon: Moon, color: 'text-blue-600', bg: 'bg-blue-50' },
  cognitiveCheck: { label: 'Cognitive check', value: '72 out of 100', icon: Brain, color: 'text-amber-600', bg: 'bg-amber-50' },
  riskLevel: { label: 'Risk level', value: 'Moderate', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' },
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
      walkingStability: { value: 'Unstable', color: 'text-red-600', bg: 'bg-red-50' },
      recentActivity: { value: '1,820 steps', color: 'text-amber-600', bg: 'bg-amber-50' },
      riskLevel: { value: 'Elevated', color: 'text-red-600', bg: 'bg-red-50' },
    },
    alertIndex: 4,
  },
  {
    readings: {
      sleep: { value: '4 hr 20 min', color: 'text-red-600', bg: 'bg-red-50' },
      cognitiveCheck: { value: '61 out of 100', color: 'text-red-600', bg: 'bg-red-50' },
      humidityTrend: { value: 'High', color: 'text-red-600', bg: 'bg-red-50' },
    },
    alertIndex: 0,
  },
  {
    readings: {
      fallStatus: { value: 'Fall detected', color: 'text-red-600', bg: 'bg-red-50' },
      lightExposure: { value: 'Low', color: 'text-amber-600', bg: 'bg-amber-50' },
      riskLevel: { value: 'High', color: 'text-red-600', bg: 'bg-red-50' },
    },
    alertIndex: 1,
  },
]

function SeverityBadge({ severity }) {
  const styles = {
    low: 'bg-blue-50 text-blue-700',
    moderate: 'bg-amber-50 text-amber-700',
    elevated: 'bg-red-50 text-red-700',
  }
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[severity]}`}>
      {severity}
    </span>
  )
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
    <section id="demo" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Try the caregiver app demo
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            See how readings from the smart goggles become clear caregiver alerts.
          </p>
        </div>

        {/* Demo container */}
        <div className="mt-12 bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
          {/* Profile bar */}
          <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center">
                <User size={20} className="text-navy-600" />
              </div>
              <div>
                <p className="font-semibold text-navy text-sm">Edward Miller</p>
                <p className="text-xs text-slate-500">Age 72 · At home</p>
              </div>
            </div>
            <button
              onClick={simulateReading}
              disabled={simulating}
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-navy-700 transition-colors disabled:opacity-60"
            >
              <RefreshCw size={14} className={simulating ? 'animate-spin' : ''} />
              Simulate new reading
            </button>
          </div>

          <div className="p-4 sm:p-6 grid md:grid-cols-5 lg:grid-cols-3 gap-6">
            {/* Readings grid */}
            <div className="md:col-span-3 lg:col-span-2">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                Current readings
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {Object.entries(readings).map(([key, r]) => (
                  <div
                    key={key}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 bg-white border border-slate-100 transition-colors`}
                  >
                    <div className={`w-9 h-9 rounded-lg ${r.bg} flex items-center justify-center flex-shrink-0`}>
                      <r.icon size={18} className={r.color} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">{r.label}</p>
                      <p className={`text-sm font-semibold ${r.color}`}>{r.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts panel */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <Bell size={14} />
                Alerts
              </h3>
              <div className="space-y-3">
                {alerts.map((alert, i) => (
                  <button
                    key={`${alert.title}-${i}`}
                    onClick={() => setSelectedAlert(alert)}
                    className="w-full text-left bg-white rounded-xl px-4 py-3 border border-slate-100 hover:border-navy-200 hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-slate-800 group-hover:text-navy">
                        {alert.title}
                      </p>
                      <ChevronRight size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <SeverityBadge severity={alert.severity} />
                      <span className="text-xs text-slate-400">{alert.time}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="px-6 pb-5">
            <p className="text-xs text-slate-400 text-center">
              This demo shows how JagaMinda could present sensor readings to caregivers. It is not a diagnostic tool.
            </p>
          </div>
        </div>

        {/* Alert detail modal */}
        {selectedAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl max-w-sm sm:max-w-md w-full p-5 sm:p-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedAlert(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
                aria-label="Close alert detail"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <SeverityBadge severity={selectedAlert.severity} />
                <span className="text-xs text-slate-400">{selectedAlert.time}</span>
              </div>
              <h3 className="text-lg font-bold text-navy mt-2">
                {selectedAlert.title}
              </h3>
              <div className="mt-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  What happened
                </p>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {selectedAlert.explanation}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Suggested next step
                </p>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {selectedAlert.nextStep}
                </p>
              </div>
              <button
                onClick={() => setSelectedAlert(null)}
                className="mt-6 w-full bg-navy text-white text-sm font-medium py-2.5 rounded-xl hover:bg-navy-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
