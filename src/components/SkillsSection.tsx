import SkillBar from "./SkillsBar";

export default function SkillsSection() {
  const technicalSkills = [
    { name: "React", level: 70 },
    { name: "JavaScript", level: 70 },
    { name: "HTML5", level: 80 },
    { name: "CSS/Tailwind", level: 65 },
    { name: "Svelte", level: 20 },
    { name: "Node.js", level: 50 },
    { name: "Express", level: 50 },
    { name: "PostgreSQL", level: 40 },
    { name: "TypeScript", level: 65 },
    { name: "Git/GitHub", level: 70 },
  ];

  const softSkills = [
    { name: "Eagerness to Learn" },
    { name: "Teamwork" },
    { name: "Problem Solving" },
    { name: "Creativity" },
    { name: "Attention to Detail" },
    { name: "Time Management" },

    { name: "Communication" },
    { name: "Adaptability" },
    { name: "Critical Thinking" },
  ];

  return (
    <section id="habilidades" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-6">Tecnical Skills</h3>
          {technicalSkills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6"> Other Skills </h3>
          {softSkills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
