import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/images/jagaminda-logo.png"
                alt="JagaMinda logo"
                className="h-6 w-auto"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <span className="font-semibold text-navy text-sm">JagaMinda</span>
            </div>
            <p className="mt-1 text-[13px] text-slate-300">
              Smart goggles for earlier dementia care at home.
            </p>
          </div>

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

        <p className="mt-8 text-[11px] text-slate-300">
          &copy; {new Date().getFullYear()} JagaMinda
        </p>
      </div>
    </footer>
  )
}
