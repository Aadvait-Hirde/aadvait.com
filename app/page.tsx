import { Navbar } from "@/components/navbar";
import { GradientBars } from "@/components/ui/bg-bars";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section with background bars */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
        {/* Background bars - only in hero section */}
        <GradientBars />
        
        {/* Hero content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-6 text-primary">Aadvait</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all">
              Get in Touch
            </button>
            <button className="border border-border px-6 py-3 rounded-full font-medium hover:bg-accent transition-all">
              View Work
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center p-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">About</h2>
          <p className="text-lg text-muted-foreground">
            This is the About section. Add your personal information and background here.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Work</h2>
          <p className="text-lg text-muted-foreground">
            This is the Work section. Add your work experience and career highlights here.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Projects</h2>
          <p className="text-lg text-muted-foreground">
            This is the Projects section. Showcase your projects and portfolio here.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Contact</h2>
          <p className="text-lg text-muted-foreground">
            This is the Contact section. Add your contact information and ways to get in touch.
          </p>
        </div>
      </section>
    </div>
  );
}
