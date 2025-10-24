import { useEffect, useRef } from "react";

interface TechProps {
  noOffset?: boolean;
}

export default function Tech({ noOffset }: TechProps) {
  const allTech = [
    { name: "Blazor" }, { name: ".NET" }, { name: "C#" }, { name: "T-SQL" },
    { name: "Tailwind" }, { name: "Bootstrap" }, { name: "HTML" }, { name: "CSS" },
    { name: "Git" }, { name: "Visual Studio" }, { name: "SQL Server" }, { name: "MySQL" },
    { name: "Docker" },
  ];

  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    let scrollPos = 0;
    const maxScroll = container.scrollWidth - container.clientWidth;

    const interval = setInterval(() => {
      scrollPos += 1;
      if (scrollPos > maxScroll) scrollPos = 0;
      container.scrollTo({ left: scrollPos, behavior: "auto" });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="tech"
      className={`bg-black text-red-600 w-full ${noOffset ? "" : "pt-[68px] -mt-[80px]"}`}
    >
      <div className="w-full overflow-hidden">
        <ul
          ref={carouselRef}
          className="flex space-x-4 sm:space-x-6 py-2 overflow-x-auto scrollbar-hide no-scrollbar"
          aria-label="Tecnologías"
          style={{ userSelect: "none" }}
        >
          {allTech.map((tech) => (
            <li
              key={tech.name}
              className="flex flex-col items-center rounded min-w-[56px] sm:min-w-[64px] transition-transform duration-300 hover:scale-110 flex-shrink-0"
              title={tech.name}
            >
              <span className="mt-2 text-xs sm:text-sm font-semibold text-center h-10 flex items-center justify-center
                               drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]
                               hover:drop-shadow-[0_0_20px_rgba(255,0,0,1)]">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
