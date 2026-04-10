import BentoCard from "@/components/BentoCard";
import TypingEffect from "@/components/TypingEffect";
import { Code, Bot, Terminal, MessageSquare, Zap, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Raid Bot",
    description: "User installable. No invite needed. Hooks to your account to spam commands and pings in any server you join.",
    tech: ["discord.py", "asyncio", "webhooks"],
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: "Nuke Bot",
    description: "Total wipeout. Deletes all channels and roles instantly. Spams 500+ new channels to destroy a server.",
    tech: ["discord.py", "asyncio", "bulk ops"],
    icon: <Terminal className="w-5 h-5" />,
  },
  {
    name: "DM Flooder",
    description: "Floods a user's DMs with your custom message. Uses multiple bots.",
    tech: ["discord.py", "multi-bot", "asyncio"],
    icon: <MessageSquare className="w-5 h-5" />,
  },
];

const skills = [
  { name: "Python", level: 95 },
  { name: "discord.py", level: 90 },
  { name: "asyncio", level: 85 },
  { name: "APIs & Webhooks", level: 88 },
  { name: "PostgreSQL", level: 80 },
  { name: "Docker", level: 70 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-heading text-lg font-bold text-gradient-ember">BEAST</span>
          <div className="flex gap-6 font-body text-sm text-muted-foreground">
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          
          {/* Hero - spans 2 cols */}
          <BentoCard className="md:col-span-2 flex flex-col justify-center" glow>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient-ember leading-tight">
                <TypingEffect text="Beast" speed={150} />
              </h1>
              <p className="font-body text-foreground/80 mt-2 text-lg">
                Python developer crafting Discord bots that actually slap.
              </p>
            </div>
          </BentoCard>

          {/* Stats card */}
          <BentoCard className="flex flex-col justify-center items-center text-center">
            <Code className="w-8 h-8 text-primary mb-3" />
            <p className="font-heading text-3xl font-bold text-foreground"><p className="font-heading text-3xl font-bold text-foreground">55K+</p></p>
            <p className="font-body text-sm text-muted-foreground">Lines Of Python</p>
          </BentoCard>

          {/* Tech stack mini */}
          <BentoCard>
            <h3 className="font-heading text-sm text-muted-foreground mb-3">// tech stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "discord.py", "FastAPI", "PostgreSQL", "Redis", "Docker", "Git", "Linux"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-secondary text-xs font-body text-foreground/80 border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* About */}
          <BentoCard className="md:col-span-2">
            <h3 className="font-heading text-sm text-muted-foreground mb-3">// about me</h3>
            <p className="font-body text-foreground/80 leading-relaxed">
              I specialize in high-speed automation and building aggressive, high-performance scripts. My focus is on backend optimization—pushing the limits of what a system can handle and making code run faster than it's supposed to.
            </p>
          </BentoCard>

          {/* Projects Section */}
          <div className="md:col-span-3 mt-6" id="projects">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              <span className="text-gradient-ember">&gt;</span> Projects
            </h2>
          </div>

          {projects.map((project) => (
            <BentoCard key={project.name} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-primary">{project.icon}</span>
                  <h3 className="font-heading text-base font-bold text-foreground">{project.name}</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary font-body">
                    {t}
                  </span>
                ))}
              </div>
            </BentoCard>
          ))}

          {/* CTA project card */}
          <BentoCard className="flex flex-col items-center justify-center text-center border-dashed border-border hover:border-primary/40">
            <ExternalLink className="w-6 h-6 text-muted-foreground mb-2" />
            <p className="font-body text-sm text-muted-foreground">More projects coming soon...</p>
          </BentoCard>

          {/* Skills Section */}
          <div className="md:col-span-3 mt-6" id="skills">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              <span className="text-gradient-ember">&gt;</span> Skills
            </h2>
          </div>

          <BentoCard className="md:col-span-2">
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-heading text-sm text-foreground">{skill.name}</span>
                    <span className="font-body text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Discord status card */}
          <BentoCard className="flex flex-col items-center justify-center text-center" glow>
            <Bot className="w-10 h-10 text-primary mb-3" />
            <p className="font-heading text-sm text-foreground mb-1">Discord Bots Built</p>
            <p className="font-heading text-4xl font-bold text-gradient-ember">25+</p>
          </BentoCard>

          {/* Contact */}
          <div className="md:col-span-3 mt-6" id="contact">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              <span className="text-gradient-ember">&gt;</span> Get in Touch
            </h2>
          </div>

          <BentoCard className="md:col-span-3 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-body text-foreground/80 text-lg">
                Everything here is free to use.
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Join the Discord and grab the tools now.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://discord.gg/4DBJztySyH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading text-sm hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="w-4 h-4" /> Discord
              </a>
            </div>
          </BentoCard>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6" />

    </div>
  );
};

export default Index;
