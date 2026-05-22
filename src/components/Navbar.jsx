import { useEffect, useState } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
  ]

  useEffect(() => {
    const sections = menuItems.map((item) => document.getElementById(item.id))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
        <div className="hidden items-center justify-center gap-8 md:flex">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative py-2 text-sm font-semibold transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-violet-500'
                  : 'text-slate-600 hover:text-violet-500'
              }`}
            >
              {item.label}

              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-violet-400 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0'
                }`}
              ></span>
            </button>
          ))}
        </div>

        <div className="flex w-full items-center justify-between md:hidden">
          <button
            onClick={() => handleClick('inicio')}
            className="text-sm font-bold text-slate-800 transition hover:text-violet-500"
          >
            Inicio
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-transparent text-slate-800 transition hover:bg-violet-50 md:hidden"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="relative flex h-5 w-6 flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full bg-slate-800 transition-all duration-300 ${
                  isOpen ? 'translate-y-[9px] rotate-45 bg-violet-500' : ''
                }`}
              ></span>

              <span
                className={`h-0.5 w-full rounded-full bg-slate-800 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>

              <span
                className={`h-0.5 w-full rounded-full bg-slate-800 transition-all duration-300 ${
                  isOpen ? '-translate-y-[9px] -rotate-45 bg-violet-500' : ''
                }`}
              ></span>
            </span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-stone-200 bg-white px-6 py-4 shadow-lg shadow-stone-100/80 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  activeSection === item.id
                    ? 'bg-violet-50 text-violet-500'
                    : 'text-slate-600 hover:bg-violet-50 hover:text-violet-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar