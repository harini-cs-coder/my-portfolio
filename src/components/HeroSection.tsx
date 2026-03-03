import { useEffect, useState } from "react";
import profileImg from "@/assets/harini .jpeg";

const titles = ["Web Developer","Frontend Developer"];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((i) => (i + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">

      {/* Animated bg orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-float [animation-delay:1.5s]" />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile picture */}
        <div className="flex-shrink-0 relative">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/50 animate-glow-pulse">
            <img

              alt="Harini V"
              className="w-full h-full object-cover" src={profileImg}/>

          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left max-w-2xl">
          <p className="text-primary font-medium mb-2 animate-fade-up">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 animate-fade-up [animation-delay:0.1s]">
            Harini V
          </h1>
          <div className="h-8 mb-6 animate-fade-up [animation-delay:0.2s]">
            <span className="text-xl md:text-2xl text-accent font-heading font-semibold">
              {titles[titleIndex]}
            </span>
            <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-blink align-middle" />
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8 animate-fade-up [animation-delay:0.3s]">
            I am a passionate Computer Science and Engineering student with a strong interest in
            Artificial Intelligence, Machine Learning, and Web Development. I enjoy building
            innovative, real-world solutions that combine modern web technologies with intelligent
            systems.
          </p>
          <div className="flex gap-4 justify-center md:justify-start animate-fade-up [animation-delay:0.4s]">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-button transition-all duration-300 hover:scale-105">

              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300">

              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1UK4gA4b7lTXBVUvieGfntCvakKzXDQZL/view?usp=drivesdk"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-button transition-all duration-300 hover:scale-105">

              my resume
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;