import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Finance Dashboard",
      description:
        "Dashboard financeiro desenvolvido em React com visualização de dados, gráficos interativos e tema escuro",
      image: "/images/projects/upholdDashboard.png",
      tags: ["React", "ChartJS"],
    },
    {
      title: "TodoFlex App",
      description:
        "Aplicativo de gerenciamento de tarefas com interface intuitiva e personalizável",
      image: "/images/projects/todoflexApp.png",
      tags: ["React", "HTML5", "FrameMotion"],
    },
    {
      title: "JobFinder",
      description:
        "Aplicativo web para busca de empregos com filtros inteligentes de pesquisa e estágios com filtros personalizados",
      image: "/images/projects/jobfinder.png",
      tags: ["React", "API", "Responsividade"],
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
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
