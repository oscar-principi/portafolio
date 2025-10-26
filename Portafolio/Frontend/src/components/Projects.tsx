import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Eccomerce B2C",
    description:
      "Aplicación Fullstack con .NET y Blazor/Mudblazor, Identity + JWT + Cookie, Entity. Despliegue: Azure + AzureDevops. Seguridad: OWASP ZAP. Calidad: Sonarqube.",
    img: "img/projects/ecommerceb2c.png",
    github:
      "https://www.linkedin.com/posts/oscar-principi_hola-buenas-quiero-presentar-activity-7381465874618036225-MK1e?utm_source=share&utm_medium=member_desktop&rcm=ACoAADus_OQB0mHRUsb3abSzbHFpTuo5j0FbxsQ",
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
      "Aplicación Fullstack con Java, JSP, Servlets, JDBC, Tomcat y Bootstrap. Gestión de clientes, cuentas, transferencias y de administradores, seguridad RBAC.",
    img: "img/projects/home-banking.png",
    github: "https://github.com/user52689/LAB-IV.git",
  },
  {
    title: "Sistema de Gestión Médica",
    description:
      "Aplicación Fullstack con .NET Framework. Gestión de pacientes y administradores, con reportes y seguridad RBAC.",
    img: "img/projects/gestion-medica.png",
    github: "https://github.com/user52689/PROG-III.git",
  },
  {
    title: "Sistema de Gestión Veterinaria",
    description:
      "Aplicación de consola con C++ y Rlutil. Gestión de pacientes, veterinarios, mascotas y reportes.",
    img: "img/projects/gestion-veterinaria.png",
    github: "https://github.com/oscar-principi/Labo-II.git",
  },
  {
    title: "Muebleria",
    description:
      "Sitio web para muebleria en HTML y CSS, responsiva con vista de productos y contactos.",
    img: "img/projects/muebleria.png",
    github: "https://github.com/oscar-principi/Muebles-Finochio.git",
  },
];



function Projects() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;
  const intervalRef = useRef<number | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current !== null) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [total]);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-start bg-black text-red-600 px-4 pt-18 pb-4 w-full flex-1 min-h-0 overflow-hidden"
    >
      <div
        className="relative w-full max-w-5xl overflow-x-hidden overflow-y-auto p-5 flex-1"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center justify-center p-4"
            >
              
              
                <h3 className="text-2xl font-semibold text-red-600 drop-shadow-[0_0_10px_rgba(255,0,0,0.9)] drop-shadow-[0_0_20px_rgba(255,0,0,0.7)] drop-shadow-[0_0_30px_rgba(255,0,0,0.5)] my-5 text-center px-4">
                  {project.title}
                </h3>

                {/* Flip card */}
                <div className="flip-card w-full aspect-[16/9] sm:aspect-[16/9] md:aspect-[16/9] lg:aspect-[16/9] rounded-md perspective mb-5
                                max-h-[300px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px]">
                  <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d rounded-lg">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="flip-card-front absolute inset-0 w-full h-full rounded-md object-cover backface-hidden drop-shadow-[0_0_15px_rgba(255,0,0,0.9)] hover:drop-shadow-[0_0_25px_rgba(255,0,0,1)] transition-all"
                    />
                    <div className="flip-card-back absolute inset-0 bg-black text-red-400 rounded-md flex flex-col items-center justify-center px-4 py-4 rotate-y-180 backface-hidden text-center overflow-hidden drop-shadow-[0_0_12px_rgba(255,0,0,0.8)] hover:drop-shadow-[0_0_20px_rgba(255,0,0,1)] transition-all">
                      <div className="overflow-y-auto max-h-[260px] text-sm md:text-base space-y-4 break-words">
                        <p>{project.description}</p>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-red-400 underline hover:text-red-500 hover:drop-shadow-[0_0_15px_rgba(255,0,0,1)] transition-all"
                        >
                          Ver
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="flex mt-6 gap-3 justify-center">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full ${
                current === index
                  ? "bg-red-600 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]"
                  : "bg-red-800/60"
              } transition-all`}
              aria-label={`Proyecto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;