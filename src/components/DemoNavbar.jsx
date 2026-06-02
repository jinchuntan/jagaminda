import { Link } from 'react-router-dom'
import { ArrowLeft, RefreshCw, RotateCcw } from 'lucide-react'

export default function DemoNavbar({ onSimulate, onReset, simulating, canReset }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-14">
        {/* Left: back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] text-slate-400 hover:text-navy transition-colors"
        >
          <ArrowLeft size={14} />
          <span className="hidden sm:inline">Back to JagaMinda</span>
        </Link>

        {/* Center: title */}
        <div className="flex items-center gap-2">
          <img
            src="/images/jagaminda-logo.png"
            alt="JagaMinda logo"
            className="h-5 w-auto"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <span className="text-[13px] font-semibold text-navy">Caregiver Dashboard</span>
        </div>

        {/* Right: controls */}
        <div className="flex items-center gap-2">
          {canReset && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 text-[13px] text-slate-400 hover:text-navy px-3 py-1.5 rounded-full border border-slate-100 hover:border-slate-200 transition-all"
            >
              <RotateCcw size={12} />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}
          <button
            onClick={onSimulate}
            disabled={simulating}
            className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-medium px-5 py-1.5 rounded-full hover:bg-navy-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw size={13} className={simulating ? 'animate-spin' : ''} />
            <span className="hidden sm:inline">Simulate new reading</span>
            <span className="sm:hidden">Simulate</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
