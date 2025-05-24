import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Dashboard",
      description:
        "Financial dashboard developed in React with data visualization, interactive charts and dark theme",
      image: "/images/dashboard.png",
      tags: ["React", "ChartJS", "TailwindCSS"],
      status: "completed" as const,
      liveUrl: "https://financedashboard-ten.vercel.app/",
      githubUrl: "https://financedashboard-ten.vercel.app/",
    },
    {
      title: "TodoFlex App",
      description:
        "Simple task manager, first time using Svelte, with functionalities to add, edit and remove tasks",
      image: "/image/todoflexApp.png",
      tags: ["Svelte", "TailwindCSS"],
      status: "in_development" as const,
      liveUrl: "https://todoflex-app-example.com",
      githubUrl: "https://github.com/username/todoflex-app",
    },
    {
      title: "JobFinder",
      description:
        "My first full stack project in React and Node, it's a job search with search functionalities, filtering and much more",
      image: "/images/jobfinder.png",
      tags: [
        "React",
        "API",
        "Responsiveness",
        "postgreSQL",
        "Docker",
        "Node.js",
      ],
      status: "completed" as const,
      liveUrl: "https://jobfinderfrontend-5lym.vercel.app/",
      githubUrl: "https://jobfinderfrontend-5lym.vercel.app/",
    },
    {
      title: "Blackboard",
      description:
        "E-learning platform for University of Minho with all the functionalities of an LMS, in development with colleague",
      image: "/images/portfolio.png",
      tags: ["React-Router", "TailwindCSS", "Docker", "postgreSQL"],
      status: "in_development" as const,
      liveUrl: "https://meuportfolio.com",
      githubUrl: "https://meuportfolio.com",
    },
    {
      title: "MovieFlix",
      description:
        " MovieFlix is a movie recomendation website that allows users to search for movies, view details, and get recommendations based on their preferences.",
      image: "/images/movieflix.png",
      tags: ["React", "API", "Responsiveness", "postgreSQL", "Docker"],
      status: "planned" as const,
      liveUrl: "https://movieflix-example.com",
      githubUrl: "https://movieflix-example.com",
    },
  ];

  return (
    <section id="projects" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <p className="text-gray-600 mb-8">Recent and ongoing work</p>

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
