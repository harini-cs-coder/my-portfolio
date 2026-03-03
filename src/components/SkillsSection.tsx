const skills = [
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "PHP", level: 70, category: "Backend" },
  { name: "SQL", level: 75, category: "Database" },
  { name: "Python", level: 80, category: "Programming" },
  { name: "Java", level: 72, category: "Programming" },
  { name: "Swift", level: 55, category: "Programming" },
  { name: "React.js", level: 75, category: "Programming" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Technologies and tools I work with.
        </p>

        <div className="max-w-3xl mx-auto grid gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground px-2 py-0.5 rounded bg-secondary">
                  {skill.category}
                </span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill group-hover:shadow-[0_0_12px_hsl(210_100%_56%/0.4)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
