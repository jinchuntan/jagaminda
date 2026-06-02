import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Sensor', href: '#sensor' },
  { label: 'Demo', href: '#demo' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/images/jagaminda-logo.png"
            alt="JagaMinda logo"
            className="h-7 w-auto"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <span className="font-semibold text-navy text-sm tracking-wide">JagaMinda</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-slate-400 hover:text-navy transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-navy transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-50">
          <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-400 hover:text-navy py-3 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
