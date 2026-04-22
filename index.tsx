import { createFileRoute } from "@tanstack/react-router";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Palette, Rocket, GraduationCap } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import profilePhoto from "@/assets/profile.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meu Portfólio — Desenvolvedor & Designer" },
      { name: "description", content: "Portfólio pessoal com projetos, experiência e contato. Desenvolvimento web moderno com foco em design e performance." },
      { property: "og:title", content: "Meu Portfólio — Desenvolvedor & Designer" },
      { property: "og:description", content: "Portfólio pessoal com projetos, experiência e contato." },
    ],
  }),
  component: Index,
});

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white">
      <AnimatedShaderBackground />

      {/* Tech grid + scan line overlays */}
      <div className="pointer-events-none fixed inset-0 z-[1] tech-grid" />
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div className="scan-line" />
      </div>

      {/* Nav */}
      <header className="animate-fade-in-slow relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight text-white/90">
          &lt;/portfolio&gt;
        </a>
        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          <a href="#projects" className="transition hover:text-white">Projetos</a>
          <a href="#about" className="transition hover:text-white">Sobre</a>
          <a href="#contact" className="transition hover:text-white">Contato</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="animate-fade-up delay-100 mb-8">
          <GlowCard
            glowColor="blue"
            customSize
            className="!h-36 !w-36 !rounded-full !p-1.5 sm:!h-40 sm:!w-40"
            style={{ ['--radius' as string]: '90' } as React.CSSProperties}
          >
            <img
              src={profilePhoto}
              alt="Foto de perfil — Computer Engineer UNIVESP"
              className="relative z-10 h-full w-full rounded-full object-cover"
              loading="eager"
            />
          </GlowCard>
        </div>

        <span className="animate-fade-up delay-200 mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
          <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
          Disponível para novos projetos
        </span>

        <h1 className="animate-fade-up delay-200 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-5xl font-bold leading-[1.05] tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          Construindo<br />
          <span className="shine-text">experiências digitais</span>
        </h1>

        <div className="animate-fade-up delay-300 mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-mono text-white/70 backdrop-blur-sm">
          <GraduationCap className="h-3.5 w-3.5 text-cyan-300/80" />
          Computer Engineer — UNIVESP
        </div>

        <p className="animate-fade-up delay-300 mt-6 max-w-xl text-base text-white/70 sm:text-lg">
          Desenvolvedor focado em criar interfaces modernas, performáticas e memoráveis para a web.
        </p>

        <div className="animate-fade-up delay-400 mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] sm:w-auto"
          >
            Ver projetos
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Entrar em contato
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Projetos em destaque</h2>
            <p className="mt-3 text-white/60">Uma seleção dos meus trabalhos recentes.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Code2, title: "Web App SaaS", desc: "Plataforma completa com dashboard, autenticação e pagamentos.", color: "blue" as const },
            { icon: Palette, title: "Design System", desc: "Biblioteca de componentes reutilizáveis com tokens semânticos.", color: "purple" as const },
            { icon: Rocket, title: "Landing Page", desc: "Site de alta performance com animações e SEO otimizado.", color: "orange" as const },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="hover-lift">
              <GlowCard glowColor={p.color} customSize className="h-full min-h-[280px] w-full">
                <div className="flex h-full flex-col justify-between text-white">
                  <div>
                    <p.icon className="mb-4 h-8 w-8 text-white/90" />
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                  </div>
                  <a href="#" className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/90 transition hover:text-white">
                    Ver projeto <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </a>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mx-auto w-full max-w-3xl px-6 py-20 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sobre mim</h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Sou apaixonado por transformar ideias em produtos digitais. Trabalho com tecnologias modernas como React, TypeScript e ferramentas de design para entregar experiências que combinam estética e funcionalidade.
          </p>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto w-full max-w-3xl px-6 py-20 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vamos conversar</h2>
          <p className="mt-3 text-white/60">Tem um projeto em mente? Estou pronto para ajudar.</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:contato@exemplo.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center font-mono text-xs text-white/50">
        © {new Date().getFullYear()} — Feito com ❤ e código.
      </footer>
    </div>
  );
}
