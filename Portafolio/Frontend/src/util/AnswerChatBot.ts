type BotResponse = {
  keywords: string[];
  answer: string;
};

export const botResponses: BotResponse[] = [
  {
    keywords: ["profesional - ver mi perfil profesional"],
    answer:
      "Soy desarrollador de software en formación, me gusta trabajar en soluciones fullstack. Tengo experiencia académica y personal en frontend, backend y base de datos.",
  },
  {
    keywords: ["personal - ver mi perfil personal"],
    answer:
      "Me apasiona programar, siempre con mates al lado, me encanta el rock y pasar tiempo con mis compañeras patudas. Siempre estoy aprendiendo algo nuevo para seguir formándome.",
  },
  {
    keywords: ["experiencia - ver mi experiencia"],
    answer:
      "Tengo experiencia académica y personal en desarrollo de aplicaciones con Blazor en frontend, .NET y Java en backend, y bases de datos SQL. Sigo aprendiendo para mejorar como desarrollador fullstack y construir soluciones completas que generen un impacto positivo en la sociedad.",
  },
  {
    keywords: ["formacion - ver mi formacion"],
    answer:
      "Estoy terminando la Tecnicatura en Programación en la UTN. Aprendí sobre programación fullstack en aplicaciones web y de escritorio.",
  },
  {
    keywords: ["tecnologias - ver las tecnologias que uso"],
    answer:
      "Tengo conocimientos en .NET, Java, Blazor, HTML, CSS, Bootstrap, Tailwind, uso herramientas como Visual Studio, Eclipse, SQL Server, MySQL, Git, Docker. Me gusta aprender nuevas tecnologías para mejorar mis habilidades para resolver problemas reales.",
  },
  {
    keywords: ["meta - ver mi meta"],
    answer:
      "Quiero seguir creciendo y desarrollárme como fullstack profesionalmente.",
  },
  {
    keywords: ["redes - ver mis redes"],
    answer:
      "Te dejo mis redes por si querés ver lo que hago y/o contactarme:\n🔗 LinkedIn: linkedin.com/in/oscar-principi/ \n💻 GitHub: github.com/oscar-principi",
  },
  {
    keywords: ["clear - limpiar terminal"],
    answer:""
  },
    {
    keywords: ["exit - salir terminal"],
    answer:""
  },
];

// Array con todos los keywords únicos para mostrar en help
const allKeywords = Array.from(
  new Set(botResponses.flatMap((r) => r.keywords))
).sort();

export function getBotAnswer(question: string): string {
  const lower = question.toLowerCase();

  if (lower === "help") {
    return "Comandos disponibles:\n" + allKeywords.map(cmd => `- ${cmd}`).join("\n");
  }

  for (const response of botResponses) {
    if (response.keywords.some((kw) => lower.includes(kw.toLowerCase()))) {
      return response.answer;
    }
  }

  return "Comando invalido. Escribí 'help' para ver los comandos.";
}
