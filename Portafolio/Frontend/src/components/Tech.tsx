import { useEffect, useRef } from "react";

export default function Tech() {
  const allTech = [
    { name: "Blazor" },
    { name: "React" },
    { name: "Tailwind" },
    { name: "Bootstrap" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "C#" },
    { name: ".NET" },
    { name: "Java" },
    { name: "C++" },
    { name: "T-SQL" },
    { name: "Git" },
    { name: "Visual Studio" },
    { name: "Eclipse" },
    { name: "SQL Server" },
    { name: "MySQL" },
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
      if (scrollPos > maxScroll) {
        scrollPos = 0;
      }
      container.scrollTo({ left: scrollPos, behavior: "auto" });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tech" className="pt-[68px] -mt-[80px] bg-gray-50 text-zinc-700 w-full">
      <div className="max-w-2xl mx-auto px-2">
        <h2 className="font-semibold mb-8 text-zinc-900 ">
        </h2>
        <ul
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide no-scrollbar py-2"
          aria-label="Tecnologías"
          style={{ userSelect: "none" }} 
        >
          {allTech.map((tech) => (
            <li
              key={tech.name}
              className="flex flex-col items-center rounded min-w-[56px]"
              title={tech.name}
              style={{ userSelect: "none" }} 
            >
              <span className="mt-2 text-x font-semibold text-center">{tech.name}</span>
            </li>
          ))}

        </ul>
      </div>
    </section>
  );
}
