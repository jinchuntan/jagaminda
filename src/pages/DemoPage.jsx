import { useState, useEffect } from 'react'
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
  RefreshCw,
  User,
  RotateCcw,
  TrendingDown,
  Clock,
} from 'lucide-react'
import DemoNavbar from '../components/DemoNavbar'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function SeverityDot({ severity }) {
  const colors = { low: 'bg-blue-400', moderate: 'bg-amber-400', elevated: 'bg-red-400' }
  return <span className={`inline-block w-2 h-2 rounded-full ${colors[severity]}`} />
}

function SeverityBadge({ severity }) {
  const styles = {
    low: 'bg-blue-50 text-blue-600',
    moderate: 'bg-amber-50 text-amber-600',
    elevated: 'bg-red-50 text-red-600',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full capitalize ${styles[severity]}`}>
      <SeverityDot severity={severity} />
      {severity}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DemoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'JagaMinda — Caregiver Dashboard Demo'
    return () => { document.title = 'JagaMinda' }
  }, [])

  const [readings, setReadings] = useState(initialReadings)
  const [alerts, setAlerts] = useState([alertPool[2], alertPool[3]])
  const [selectedAlert, setSelectedAlert] = useState(null)
  const [simIndex, setSimIndex] = useState(0)
  const [simulating, setSimulating] = useState(false)
  const [changedKeys, setChangedKeys] = useState(new Set())

  const simulateReading = () => {
    setSimulating(true)
    setTimeout(() => {
      const change = simulatedChanges[simIndex % simulatedChanges.length]
      const newChangedKeys = new Set(Object.keys(change.readings))
      setChangedKeys(newChangedKeys)
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
      // Auto-select the new alert
      setSelectedAlert({ ...alertPool[change.alertIndex], time: 'Just now' })
      setTimeout(() => setChangedKeys(new Set()), 2000)
    }, 600)
  }

  const resetDemo = () => {
    setReadings(initialReadings)
    setAlerts([alertPool[2], alertPool[3]])
    setSimIndex(0)
    setChangedKeys(new Set())
    setSelectedAlert(null)
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      <DemoNavbar
        onSimulate={simulateReading}
        onReset={resetDemo}
        simulating={simulating}
        canReset={simIndex > 0}
      />

      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-12">

        {/* ---- Patient Header ---- */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center">
                <User size={20} className="text-navy-400" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-navy">Edward Miller</h1>
                <p className="text-sm text-slate-400">Age 72 · At home</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-300">Last updated</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Clock size={12} className="text-slate-300" />
                  <p className="text-sm text-slate-500">2 minutes ago</p>
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-300">Overall risk</p>
                <p className={`text-sm font-semibold mt-0.5 transition-colors duration-500 ${readings.riskLevel.color}`}>
                  {readings.riskLevel.value}
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[11px] uppercase tracking-wide text-slate-300">Device status</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <p className="text-sm text-emerald-600">Connected</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Sensor Readings Grid ---- */}
        <div className="mt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">
            Current readings
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(readings).map(([key, r]) => (
              <div
                key={key}
                className={`bg-white rounded-xl border p-5 transition-all duration-500 ${
                  changedKeys.has(key)
                    ? 'border-amber-200 ring-1 ring-amber-100 reading-card-pulse'
                    : 'border-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-9 h-9 rounded-lg ${r.bg} flex items-center justify-center transition-colors duration-500`}>
                    <r.icon size={16} className={`${r.color} transition-colors duration-500`} strokeWidth={1.5} />
                  </div>
                  {changedKeys.has(key) && (
                    <TrendingDown size={14} className="text-amber-400 animate-pulse" />
                  )}
                </div>
                <p className="mt-4 text-[11px] text-slate-400">{r.label}</p>
                <p className={`mt-1 text-lg font-semibold transition-colors duration-500 ${r.color}`}>
                  {r.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Alerts Section ---- */}
        <div className="mt-8 grid lg:grid-cols-5 gap-6">
          {/* Alert List */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4 flex items-center gap-2">
              <Bell size={12} />
              Recent alerts ({alerts.length})
            </p>
            <div className="space-y-3">
              {alerts.map((alert, i) => (
                <button
                  key={`${alert.title}-${i}`}
                  onClick={() => setSelectedAlert(alert)}
                  className={`w-full text-left bg-white rounded-xl border p-4 transition-all group ${
                    selectedAlert && selectedAlert.title === alert.title && selectedAlert.time === alert.time
                      ? 'border-navy ring-1 ring-navy/10'
                      : alert.time === 'Just now'
                        ? 'border-amber-200 bg-amber-50/30'
                        : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-600 group-hover:text-navy transition-colors">
                        {alert.title}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <SeverityDot severity={alert.severity} />
                        <span className="text-[11px] text-slate-400 capitalize">{alert.severity}</span>
                        <span className="text-[11px] text-slate-300">· {alert.time}</span>
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-slate-300 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Alert Detail Panel */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">
              Alert detail
            </p>
            {selectedAlert ? (
              <div className="bg-white rounded-xl border border-slate-100 p-6 lg:p-8 lightbox-enter">
                <div className="flex items-center justify-between mb-6">
                  <SeverityBadge severity={selectedAlert.severity} />
                  <span className="text-[11px] text-slate-300 flex items-center gap-1.5">
                    <Clock size={11} />
                    {selectedAlert.time}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-navy">
                  {selectedAlert.title}
                </h3>

                <div className="mt-8 grid sm:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 mb-3">
                      What happened
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {selectedAlert.explanation}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 mb-3">
                      Suggested next step
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {selectedAlert.nextStep}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-slate-100 p-8 lg:p-12 flex flex-col items-center justify-center min-h-[240px] text-center">
                <Bell size={24} className="text-slate-200 mb-3" />
                <p className="text-sm text-slate-300">
                  Select an alert to view details
                </p>
                <p className="text-[11px] text-slate-200 mt-1">
                  Click any alert on the left to see the full explanation and recommended action
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ---- How to use this demo ---- */}
        <div className="mt-8 bg-white rounded-xl border border-slate-100 p-6 lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">
            How to use this demo
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <span className="text-[11px] font-bold text-slate-300 mt-0.5">01</span>
              <div>
                <p className="text-sm font-medium text-navy">Simulate a new reading</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Click the simulate button in the top bar. The goggles will send a new set of sensor data.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[11px] font-bold text-slate-300 mt-0.5">02</span>
              <div>
                <p className="text-sm font-medium text-navy">Watch readings change</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Changed values will highlight in amber. The overall risk level updates automatically.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[11px] font-bold text-slate-300 mt-0.5">03</span>
              <div>
                <p className="text-sm font-medium text-navy">Review the alert</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Click an alert to see what happened and what the caregiver should do next.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Disclaimer ---- */}
        <div className="mt-8 lg:mt-12 text-center pb-4">
          <p className="text-[11px] text-slate-300">
            This demo shows how JagaMinda could present sensor readings to caregivers. It is not a diagnostic tool.
          </p>
        </div>
      </main>
    </div>
  )
}
