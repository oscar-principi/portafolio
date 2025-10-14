import { useState } from "react";

const projects = [
    {
    title: "Eccomerce B2C",
    description:
      "Aplicación Fulltack con .NET y Blazor/Mudblazor, Identity + JWT + Cookie, Entity. Despliegue: Azure + AzureDevops. Seguridad: OWASP ZAP. Calidad: Sonarqube.",
    img: "img/projects/ecommerceb2c.png",
    github:"https://www.linkedin.com/posts/oscar-principi_hola-buenas-quiero-presentar-activity-7381465874618036225-MK1e?utm_source=share&utm_medium=member_desktop&rcm=ACoAADus_OQB0mHRUsb3abSzbHFpTuo5j0FbxsQ",
  },
  {
    title: "Portafolio Personal",
    description:
      "Sitio web creado con React y Vite, usando TypeScript y Tailwind. Diseño responsivo.",
    img: "img/projects/portafolio.png",
    github: "https://github.com/oscar-principi/portafolio.git",
  },
  {
    title: "Home Banking",
    description:
      "Aplicación Fulltack con Java, JSP, Servlets, JDBC, Tomcat y Bootstrap. Gestión de clientes, cuentas, transferencias y de administradores, seguridad RBAC.",
    img: "img/projects/home-banking.png",
    github:"https://github.com/user52689/LAB-IV.git",
  },
  {
    title: "E-commerce",
    description:
      "Ecommerce (en construcción) con arquitectura de microservicios en .NET Core, API´s + Ocelot, JWT, Identity, Entity.",
    img: "img/projects/ecommerce.png",
    github:"https://github.com/oscar-principi/EcommerceExpress.git",
  },
  {
    title: "Sistema de Gestión Médica",
    description:
      "Aplicacion Fullstack con .NET Framework. Gestion de pacientes y administradores, con reportes y seguridad RBAC.",
    img: "img/projects/gestion-medica.png",
    github:"https://github.com/user52689/PROG-III.git",
  },
  {
    title: "Sistema de Gestión Veterinaria",
    description:
      "Aplicación de consola con C++ y Rlutil. Gestión de pacientes, veterinarios, mascotas, y reportes.",
    img: "img/projects/gestion-veterinaria.png",
    github:"https://github.com/oscar-principi/Labo-II.git"
  },
  {
    title: "Muebleria",
    description:
      "Sitio web para muebleria en HTML y CSS, responsiva con vista de productos y contactos.",
    img: "img/projects/muebleria.png",
    github:"https://github.com/oscar-principi/Muebles-Finochio.git",
  },
];



  function Projects() {
    const [current, setCurrent] = useState(0);
    const total = projects.length;
  
    const next = () => setCurrent((current + 1) % total);
    const prev = () => setCurrent((current - 1 + total) % total);
  
    return (
      <section
        id="projects"
        className="flex flex-col items-center justify-center bg-zinc-100 text-zinc-700 px-1 py-20 w-full"
      >
  
        <div className="relative w-full max-w-3xl overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center justify-center p-4"
              >
                <div className="bg-white pt-14 rounded-xl shadow-md w-full max-w-3xl text-center">
                  <h3 className="text-2xl font-semibold text-zinc-900 mb-5">
                    {project.title}
                  </h3>
                  <div className="flip-card mx-auto mb-60 rounded-md max-h-45 w-10 h-10 perspective">
                    <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="flip-card-front absolute w-full h-full rounded-md object-contain backface-hidden"
                      />
                     <div className="flip-card-back absolute w-full h-full bg-zinc-700 text-white rounded-md flex flex-col items-center justify-center px-2 py-4 rotate-y-180 backface-hidden text-center overflow-hidden">
                        <div className="max-h-[260px] overflow-y-auto text-sm md:text-base break-words space-y-4">
                          <p className="mb-4 text-xs sm:text-sm md:text-base break-words text-wrap auto-scale-text">
                            {project.description}
                          </p>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-300 underline hover:text-blue-400 transition break-words"
                          >
                            Ver
                          </a>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            ))}
  
          </div>
  
          {/* Flechas */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-zinc-200 bg-opacity-80 hover:bg-zinc-600 hover:text-white transition"
            aria-label="Anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
  
          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-zinc-200 bg-opacity-80 hover:bg-zinc-600 hover:text-white transition"
            aria-label="Siguiente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
  
          <div className="flex mt-6 gap-3 justify-center">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-4 h-4 rounded-full ${
                  current === index ? "bg-zinc-600" : "bg-zinc-400"
                } transition`}
                aria-label={`Proyecto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;