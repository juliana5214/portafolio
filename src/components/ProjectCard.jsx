function ProjectCard({ image, title, description, technologies, githubUrl }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100">
      <div className="relative h-56 w-full overflow-hidden bg-stone-100">
        <img
          src={image}
          alt={`Pantallazo del proyecto ${title}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
          Proyecto
        </p>

        <h3 className="text-xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-100"
        >
          Ver en GitHub
        </a>
      </div>
    </article>
  )
}

export default ProjectCard