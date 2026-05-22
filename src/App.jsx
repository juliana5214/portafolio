import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'

import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaCss3Alt,
} from 'react-icons/fa'

import { SiTailwindcss } from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'

import adsiStudioImg from './assets/AdsiStudio.png'
import podcastchannelImg from './assets/PodcastChannel4.png'
import googlecloneImg from './assets/GoogleClone.png'
import industriasImg from './assets/Industrias4.0.png'
import EFWP1Img from './assets/EFWP1.png'
import threetierpattern from './assets/ThreeTierPattern.png'


function App() {
  const projectsRef = useRef(null)

  const skills = [
  { name: 'React', icon: <FaReact />, color: 'text-cyan-500' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
  { name: 'GitHub', icon: <FaGithub />, color: 'text-slate-900' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-sky-400' },
  { name: 'C#', icon: <TbBrandCSharp />, color: 'text-violet-600' },
]
  const projects = [
    {
      image: podcastchannelImg,
      title: 'Podcast Channel',
      description:
        'Proyecto académico enfocado en la creación de una página web para un canal de podcast, trabajando estructura visual, organización de contenido y estilos.',
      technologies: ['HTML', 'CSS', 'GitHub'],
      githubUrl: 'https://github.com/juliana5214/podcast-channel',
    },
    {
      image: googlecloneImg,
      title: 'Google Clone',
      description:
        'Clon visual de la página principal de Google, desarrollado para practicar maquetación, estilos, distribución de elementos y diseño web responsive.',
      technologies: ['HTML', 'CSS', 'GitHub'],
      githubUrl: 'https://github.com/juliana5214/google-clone',
    },
    {
      image: adsiStudioImg,
      title: 'Adsi Studio',
      description:
        'Proyecto web orientado a presentar una propuesta visual tipo estudio o sitio informativo, aplicando estructura de página, secciones y estilos personalizados.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/juliana5214/Adsi-studio',
    },
    {
      image: industriasImg,
      title: 'Industrias 4.0',
      description:
        'Proyecto académico relacionado con la industria 4.0, enfocado en la presentación de información mediante una interfaz web clara y organizada.',
      technologies: ['HTML', 'CSS', 'GitHub'],
      githubUrl: 'https://github.com/juliana5214/industrias-4.0',
    },
    {
      image: EFWP1Img,
      title: 'EFWP1',
      description:
        'Proyecto desarrollado como parte del proceso académico, orientado a fortalecer habilidades de programación, estructura de archivos y publicación en GitHub.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/juliana5214/EFWP1',
    },
    {
      image: threetierpattern,
      title: 'Three Tier Pattern',
      description:
        'Proyecto enfocado en la aplicación del patrón de arquitectura en tres capas, trabajado desde una perspectiva académica para organizar mejor la lógica de una aplicación.',
      technologies: ['C#', 'GitHub'],
      githubUrl: 'https://github.com/juliana5214/ThreeTierPattern',
    },
  ]

  const scrollProjects = (direction) => {
    if (projectsRef.current) {
      const scrollAmount = projectsRef.current.offsetWidth * 0.85

      projectsRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-slate-50 text-slate-900">
      <Navbar />

      <section
        id="inicio"
        className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center">
      
        <p className="mb-4 rounded-full border border-stone-200 bg-white/80 px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-violet-500 shadow-sm">
          Desarrolladora en formación
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          Juliana Londoño García
        </h1>

        <p className="mt-5 text-lg font-medium text-slate-700 sm:text-xl">
          Tecnología en Desarrollo de Software
        </p>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
          Portafolio formal y creativo, desarrollado con React, Vite y Tailwind CSS.
          Un espacio para presentar mis habilidades, proyectos y proceso de aprendizaje
          en el desarrollo de software.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#proyectos"
            className="rounded-2xl bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-1 hover:bg-violet-500 hover:shadow-violet-100"
          >
            Ver proyectos
          </a>

          <a
            href="https://github.com/juliana5214"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-stone-200 bg-white px-7 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:text-violet-500"
          >
            GitHub
          </a>
        </div>
      </section>

      <section id="sobre-mi" className="scroll-mt-28 px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
              Sobre mí
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              En constante aprendizaje y crecimiento
            </h2>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white/80 p-8 leading-8 text-slate-600 shadow-sm">
            <p>
              Soy estudiante de la Tecnología en Desarrollo de Software en la Institución
              Universitaria Pascual Bravo, actualmente cursando quinto semestre. Me apasiona
              mucho la tecnología porque siempre hay algo nuevo por descubrir, practicar y
              mejorar, y eso me motiva a seguir aprendiendo cada día.
            </p>

            <p className="mt-5">
              Aunque todavía no cuento con experiencia laboral formal, he construido experiencia
              académica a través de proyectos, prácticas y actividades de clase. En ese proceso
              he fortalecido mis bases en desarrollo web, lógica de programación y manejo de
              herramientas como React, JavaScript, Git, GitHub y Tailwind CSS.
            </p>

            <p className="mt-5">
              Me considero una persona responsable, curiosa y comprometida con mi formación.
              Me gusta crear soluciones funcionales, limpias y visualmente agradables, cuidando
              tanto la parte técnica como la experiencia de quien usa la aplicación.
            </p>
          </div>
        </div>
      </section>

      <section id="habilidades" className="scroll-mt-28 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
              Tecnologías
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Habilidades
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Estas son algunas de las herramientas y tecnologías con las que he trabajado durante mi
              formación académica.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
              key={skill.name}
              className="flex min-h-[96px] items-center justify-center gap-3 rounded-3xl border border-stone-200 bg-white px-4 py-5 text-center font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-100"
              >
                <span className={`flex text-3xl ${skill.color}`}>
                  {skill.icon}
                  </span>
                  <span className="text-sm sm:text-base">
                    {skill.name}
                    </span>
                    </div>
                  ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="scroll-mt-28 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
              Mis trabajos
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Proyectos
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Aquí presento algunos proyectos desarrollados durante mi proceso académico y de
              aprendizaje, con enlaces directos a sus repositorios en GitHub.
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollProjects('prev')}
              className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200 bg-white text-xl font-bold text-slate-700 shadow-lg transition hover:-translate-y-[55%] hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 md:flex"
              aria-label="Ver proyectos anteriores"
            >
              ←
            </button>

            <div
              ref={projectsRef}
              className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-1 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="min-w-[85%] snap-start sm:min-w-[48%] lg:min-w-[31.5%]"
                >
                  <ProjectCard
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollProjects('next')}
              className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 text-xl font-bold text-white shadow-lg transition hover:-translate-y-[55%] hover:bg-violet-500 md:flex"
              aria-label="Ver más proyectos"
            >
              →
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-3 md:hidden">
            <button
              onClick={() => scrollProjects('prev')}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-lg font-bold text-slate-700 shadow-sm transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
              aria-label="Ver proyectos anteriores"
            >
              ←
            </button>

            <button
              onClick={() => scrollProjects('next')}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white shadow-sm transition hover:bg-violet-500"
              aria-label="Ver más proyectos"
            >
              →
            </button>
          </div>
        </div>
      </section>

     <section id="contacto" className="scroll-mt-28 px-6 py-14">
        <div className="mx-auto max-w-4xl rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            Contacto
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Hablemos
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
            Estoy abierta a seguir aprendiendo, participar en proyectos académicos y continuar
            creciendo en el área del desarrollo de software.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:julianalondono105@gmail.com"
              className="rounded-2xl bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Enviar correo
            </a>

            <a
              href="https://github.com/juliana5214"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-stone-200 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-200 hover:text-violet-500"
            >
              Ver GitHub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App