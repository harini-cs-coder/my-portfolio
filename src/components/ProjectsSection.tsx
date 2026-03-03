import projectImg from "@/assets/project-tourist.jpg";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Featured work and applications I've built.
        </p>

        <div className="max-w-4xl mx-auto glass rounded-xl overflow-hidden glow-border hover:scale-[1.01] transition-transform duration-300">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={projectImg}
                alt="Tourist Booking Website"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <span className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                Featured Project
              </span>
              <h3 className="text-2xl font-heading font-bold mb-4">Tourist Booking Website</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                A dynamic tourist booking website developed using HTML, CSS, PHP, and SQL. Features
                include destination listings, login & authentication, booking slot management, and a
                structured database.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["HTML", "CSS", "PHP", "SQL"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
