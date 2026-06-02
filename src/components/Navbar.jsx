import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Sensor', href: '#sensor' },
  { label: 'Prototype', href: '#gallery' },
  { label: 'Future', href: '#future' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))

    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const scrollPos = window.scrollY + 120
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-[0_1px_8px_rgba(10,37,64,0.03)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/images/jagaminda-logo.png"
            alt="JagaMinda logo"
            className="h-7 w-auto"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <span className="font-semibold text-navy text-[15px] tracking-tight">JagaMinda</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] transition-colors duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-navy font-medium'
                  : 'text-slate-400 hover:text-navy'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/demo"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white bg-navy px-4 py-1.5 rounded-full hover:bg-navy-700 transition-colors"
          >
            Try demo
            <ArrowRight size={12} />
          </Link>
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
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm py-3 transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-navy font-medium'
                    : 'text-slate-400 hover:text-navy'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/demo"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-navy px-5 py-2.5 rounded-full mt-4 self-start"
            >
              Try demo
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
