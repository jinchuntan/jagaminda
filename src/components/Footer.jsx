import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <img
              src="/images/jagaminda-logo.png"
              alt="JagaMinda logo"
              className="h-8 w-auto"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div>
              <span className="font-bold text-navy">JagaMinda</span>
              <p className="text-sm text-slate-500">
                Smart goggles for earlier dementia care at home.
              </p>
            </div>
          </div>

          {/* GitHub link */}
          <a
            href="https://github.com/jinchuntan/jagaminda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-navy transition-colors"
          >
            <Github size={18} />
            View on GitHub
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} JagaMinda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
