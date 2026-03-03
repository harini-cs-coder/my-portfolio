import { GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          My educational background and professional experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <div className="glass rounded-xl p-8 glow-border hover:scale-[1.02] transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Education</h3>
            <p className="text-primary font-medium">B.E in Computer Science and Engineering</p>
            <p className="text-muted-foreground">Annapoorana Engineering College,salem</p>
            <p className="text-sm text-muted-foreground mt-1">Expected Graduation: 2026</p>
          </div>

          {/* Experience */}
          <div className="glass rounded-xl p-8 glow-border hover:scale-[1.02] transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
              <Briefcase className="text-accent" size={24} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Internship</h3>
            <p className="text-primary font-medium">Web Developer</p>
            <p className="text-muted-foreground">CodeBind Technologies</p>
            <p className="text-sm text-muted-foreground mt-1">June – July 2025</p>
          </div>
        </div>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-12 leading-relaxed">
          I am continuously learning and exploring new technologies to enhance my technical and
          problem-solving skills. My goal is to combine AI with modern web development to build
          impactful solutions.
        </p>
      </div>
    </section>);

};

export default AboutSection;