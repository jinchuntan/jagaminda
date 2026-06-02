import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-navy-50/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/images/jagaminda-logo.png"
                alt="JagaMinda logo"
                className="h-7 w-auto"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <span className="font-semibold text-navy text-[15px] tracking-tight">JagaMinda</span>
            </div>
            <p className="mt-2 text-[13px] text-slate-400">
              Smart goggles for earlier dementia care at home.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#how-it-works"
              className="text-[13px] text-slate-400 hover:text-navy transition-colors"
            >
              How it works
            </a>
            <a
              href="#sensor"
              className="text-[13px] text-slate-400 hover:text-navy transition-colors"
            >
              Sensor
            </a>
            <a
              href="https://github.com/jinchuntan/jagaminda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-slate-400 hover:text-navy transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[11px] text-slate-300">
            &copy; {new Date().getFullYear()} JagaMinda. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-300">
            Monash University Malaysia
          </p>
        </div>
      </div>
    </footer>
  )
}
