import { ArrowUp, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            "Building the future, one line of code at a time."
          </p>
          <p className="text-xs text-muted-foreground mt-1 text-center">
            © {new Date().getFullYear()} Harini V. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/harini-venkateswaran-a88a67340"
            className="text-muted-foreground hover:text-primary transition-colors">

            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/harini-cs-coder"
            className="text-muted-foreground hover:text-primary transition-colors">

            <Github size={18} />
          </a>
          <a
            href="#home"
            className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors ml-2"
            aria-label="Back to top">

            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>);

};

export default Footer;