type BotResponse = {
  keywords: string[];
  answer: string;
};

export const botResponses: BotResponse[] = [
  {
    keywords: ["hola", "buenas"],
    answer: "🤖 Hola! Soy Oscar. ¿Querés saber sobre mi perfil profesional o personal, experiencia, formación, tecnologías, metas, redes?",
  },
  {
    keywords: ["profesional", "perfil profesional"],
    answer: "Soy desarrollador de software en formación, me gusta trabajar en soluciones fullstack. Tengo experiencia academica y personal en frontend, backend y base de datos.",
  },
  {
    keywords: ["personal", "perfil personal", "gustos", "intereses"],
    answer: "Me apasiona programar, siempre con mates al lado, me encanta el rock y pasar tiempo con mis compañeras patudas. Siempre estoy aprendiendo algo nuevo para seguir formandome.",
  },
  {
    keywords: ["experiencia", "trabajo", "laburo"],
    answer: "Tengo experiencia academica y personal en desarrollo de aplicaciones con Blazor y React en frontend, .NET y Java en backend, y bases de datos SQL. Sigo aprendiendo para mejorar como desarrollador fullstack y construir soluciones completas ue generen un impacto positivo en la sociedad.",
},
  {
    keywords: ["formacion", "estudios", "tecnicatura", "educacion"],
    answer: "Estoy terminando la Tecnicatura en Programacion en la UTN. Aprendí sobre programación fullstack en aplicaciones web y de escritorio.",
  },
  {
    keywords: ["tecnologias", "stack", "lenguajes", "herramientas"],
    answer: "Tengo conocimientos en .NET, Java, Blazor, React, HTML, CSS, Bootstrap, Tailwind, uso herramientas como Visual Studio Community/Code, Eclipse, SQL Server, MySQL, Git, Docker. Me gusta aprender nuevas tecnologías para mejorar mis habilidades para resolver problemas reales.",
  },
  {
    keywords: ["meta", "metas", "objetivos", "futuro", "vision"],
    answer: "Quiero seguir creciendo y desarrollandome como fullstack. Me interesa trabajar en entornos de trabajo agradables, con buenas prácticas, y seguir aprendiendo de los que mas saben y echar una mano siempre que se pueda.",
  },
  {
    keywords: ["redes", "contacto", "linkedin", "github", "cv"],
    answer: "Te dejo mis redes por si querés ver lo que hago y/o contactarme:\n🔗 LinkedIn: linkedin.com/in/oscar-principi/ \n💻 GitHub: github.com/oscar-principi",
  },
  {
    keywords: ["gracias", "listo", "terminar", "finalizar", "chau"],
    answer: "¡Gracias a vos por el interés! Si querés saber algo más, estoy acá para responder.",
  },
];



export function getBotAnswer(question: string): string {
  const lower = question.toLowerCase();
  for (const response of botResponses) {
    if (response.keywords.some((kw) => lower.includes(kw))) {
      return response.answer;
    }
  }
  return "No entendí bien la pregunta, pero puedo contarte sobre Oscar si querés.";
}
