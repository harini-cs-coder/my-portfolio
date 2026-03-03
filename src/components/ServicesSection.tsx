import { Globe, Database, Layout } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom, responsive, and dynamic websites using modern frontend and backend technologies.",
  },
  {
    icon: Database,
    title: "Database Applications",
    description:
      "Database-driven applications with authentication, booking systems, and admin panels.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Clean and intuitive interfaces with a focus on user experience and accessibility.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          My <span className="text-primary">Services</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          What I can do for you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass rounded-xl p-8 text-center hover:glow-border hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
