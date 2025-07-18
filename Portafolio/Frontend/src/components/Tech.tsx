import { useEffect, useRef } from "react";

export default function Tech() {
  const allTech = [
    { name: "Blazor", image: "/img/tech/blazor.png" },
    { name: "React", image: "/img/tech/react.png" },
    { name: "Tailwind", image: "/img/tech/tailwind.png" },
    { name: "Bootstrap", image: "/img/tech/bootstrap.png" },
    { name: "HTML", image: "/img/tech/html.png" },
    { name: "CSS", image: "/img/tech/css.png" },
    { name: "C#", image: "/img/tech/csharp.png" },
    { name: ".NET", image: "/img/tech/dotnet.png" },
    { name: "Java", image: "/img/tech/java.png" },
    { name: "C++", image: "/img/tech/cpp.png" },
    { name: "T-SQL", image: "/img/tech/sql.png" },
    { name: "Git", image: "/img/tech/git.png" },
    { name: "Visual Studio", image: "/img/tech/vs.png" },
    { name: "Eclipse", image: "/img/tech/eclipse.png" },
    { name: "SQL Server", image: "/img/tech/sqlserver.png" },
    { name: "MySQL", image: "/img/tech/mysql.png" },
    { name: "Docker", image: "/img/tech/docker.png" },
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
