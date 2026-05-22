function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 text-center md:grid-cols-[1.3fr_1fr_1fr] md:text-left">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Juliana
              <span className="text-violet-400">.</span>
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
              Estudiante de Tecnología en Desarrollo de Software, enfocada en seguir
              aprendiendo y fortaleciendo mis habilidades en desarrollo web.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
              Navegación
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <a href="#sobre-mi" className="transition hover:text-violet-500">
                Sobre mí
              </a>

              <a href="#habilidades" className="transition hover:text-violet-500">
                Habilidades
              </a>

              <a href="#proyectos" className="transition hover:text-violet-500">
                Proyectos
              </a>

              <a href="#contacto" className="transition hover:text-violet-500">
                Contacto
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
              Contacto
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <a
                href="mailto:julianalondono105@gmail.com"
                className="transition hover:text-violet-500"
              >
                julianalondono105@gmail.com
              </a>

              <a
                href="https://github.com/juliana5214"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-violet-500"
              >
                GitHub: juliana5214
              </a>

              <p>Medellín, Colombia</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-200 pt-5 text-center text-xs text-slate-400">
          © 2026 Juliana Londoño García. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer