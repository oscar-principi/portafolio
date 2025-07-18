import { useState } from "react";

const projects = [
  {
    title: "Portafolio Personal",
    description:
      "Sitio web creado con React y Vite, usando TypeScript y Tailwind. Diseño responsive.",
    img: "/img/projects/portafolio.png",
  },
  {
    title: "Home Banking",
    description:
      "Aplicación Fulltack con Java, JSP, Servlets, JDBC, Tomcat y Bootstrap. Gestión de clientes, cuentas, transferencias y de administradores, seguridad RBAC.",
    img: "/img/projects/home-banking.png",
  },
  {
    title: "E-commerce",
    description:
      "Ecommerce (en construcción) con arquitectura de microservicios en .NET Core.",
    img: "/img/projects/ecommerce.png",
  },
  {
    title: "Sistema de Gestión Médica",
    description:
      "Aplicacion Fullstack con .NET Framework. Gestion de pacientes y administradores, con reportes y seguridad RBAC.",
    img: "/img/projects/gestion-medica.png",
  },
  {
    title: "Sistema de Gestión Veterinaria",
    description:
      "Aplicación de consola con C++ y Rlutil. Gestión de pacientes, veterinarios, mascotas, y reportes.",
    img: "/img/projects/gestion-veterinaria.png",
  },
  {
    title: "Muebleria",
    description:
      "Sitio web corporativo para muebleria artesanal con catálogo de productos y contactos.",
    img: "/img/projects/muebleria.png",
  },
    {
    title: "Tetris",
    description:
      "Clasico juego de Tetris desarrollado con React y TypeScript. Incluye niveles y sistema puntajes.",
    img: "/img/projects/tetris.png",
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
        <h2 className="text-4xl font-bold text-zinc-800"></h2>
  
        <div className="relative w-full max-w-5xl overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center justify-center p-5"
              >
                <div className="bg-white p-15 rounded-xl shadow-md w-full max-w-3xl text-center">
                  <h3 className="text-2xl font-semibold text-zinc-900 mb-4">
                    {project.title}
                  </h3>
                  <div className="flip-card mx-auto mb-6 rounded-md max-h-90 w-72 h-72 perspective">
                    <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="flip-card-front absolute w-full h-full rounded-md object-contain backface-hidden"
                      />
                      <div className="flip-card-back absolute w-full h-full bg-zinc-700 text-white rounded-md flex items-center justify-center p-4 rotate-y-180 backface-hidden text-center">
                        <p>{project.description}</p>
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