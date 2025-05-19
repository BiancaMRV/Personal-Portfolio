import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Dashboard",
      description:
        "Dashboard financeiro desenvolvido em React com visualização de dados, gráficos interativos e tema escuro",
      image: "/images/dashboard.png",
      tags: ["React", "ChartJS", "TailwindCSS"],
      status: "concluido" as const,
      liveUrl: "https://financedashboard-ten.vercel.app/",
      githubUrl: "https://financedashboard-ten.vercel.app/",
    },
    {
      title: "TodoFlex App",
      description:
        "Gestor de tarefas simples, primeira vez que utilizei Svelte, com funcionalidades de adicionar, editar e remover tarefas",
      image: "/image/todoflexApp.png",
      tags: ["Svelte", "TailwindCSS"],
      status: "em_desenvolvimento" as const,
      liveUrl: "https://todoflex-app-example.com",
      githubUrl: "https://github.com/username/todoflex-app",
    },
    {
      title: "JobFinder",
      description:
        "O meu primeiro projeto full stack em React e Node, é um job search com funcionalidades de pesquisa, filtro e muito mais",
      image: "/images/jobfinder.png",
      tags: [
        "React",
        "API",
        "Responsividade",
        "postgreSQL",
        "Docker",
        "Node.js",
      ],
      status: "concluido" as const,
      liveUrl: "https://jobfinderfrontend-5lym.vercel.app/",
      githubUrl: "https://jobfinderfrontend-5lym.vercel.app/",
    },
    {
      title: "Blackboard",
      description:
        "Plataforma de e-learning para a Universidade do Minho com todas as funcionalidades de um LMS, em desenvolvimento com colega",
      image: "/images/portfolio.png",
      tags: ["React-Router", "TailwindCSS", "Docker", "postgreSQL"],
      status: "em_desenvolvimento" as const,
      liveUrl: "https://meuportfolio.com",
      githubUrl: "https://meuportfolio.com",
    },
  ];

  return (
    <section id="projetos" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-2">Projetos</h2>
      <p className="text-gray-600 mb-8">
        Trabalhos recentes e em desenvolvimento
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} style={{ animationDelay: `${index * 200}ms` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
