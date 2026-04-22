import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  LayoutDashboard,
  Linkedin,
  Mail,
  Rocket,
} from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { useReveal } from "./hooks/use-reveal";
import ProjectPage from "./pages/ProjectPage";
import profilePhoto from "../profile (1).png";

const contactLinks = {
  email: "https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-de-freitas-filho-96b454a7/",
  github: "https://github.com/Bugre404",
  linkedin: "https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-de-freitas-filho-96b454a7/",
};

const featuredProjects = [
  {
    slug: "ntc-10k",
    icon: Rocket,
    title: "Monitoramento NTC 10K",
    description: "Sistema de monitoramento termico com Arduino, Python e dashboard em tempo real.",
    color: "blue" as const,
  },
  {
    slug: "power-bi-sales",
    icon: LayoutDashboard,
    title: "Dashboard de Vendas",
    description: "Painel em Power BI com ETL, KPIs e leitura estrategica dos dados de vendas.",
    color: "purple" as const,
  },
  {
    slug: "",
    icon: Code2,
    title: "Landing Page",
    description: "Nova vitrine digital em desenvolvimento, com foco em performance, animacao e conversao.",
    color: "orange" as const,
  },
];

const journeyItems = [
  {
    company: "Receita Federal",
    role: "Tecnico de Suporte",
    description:
      "Atuacao interna com rede fisica, manutencao de desktops, notebooks e perifericos, alem da administracao de estoque de TI, tokens e racks de servidores.",
    details:
      "Suporte a colaboradores, auditorio de conferencias, infraestrutura critica e equipes de seguranca e SATEC.",
    icon: Building2,
  },
  {
    company: "Prosimulador",
    role: "Tecnico de Hardware",
    description:
      "Responsavel pela manutencao de simuladores de caminhao do SEST SENAT e equipamentos de autoescolas na regiao da Baixada Santista.",
    details:
      "Troca de componentes, solda, atualizacao de software, sensores de movimento, potenciometros e montagem completa dos sistemas.",
    icon: Cpu,
  },
  {
    company: "Thomas Greg & Sons",
    role: "Analista de Testes",
    description:
      "Trabalho em fabrica de cartoes bancarios com layout de produtos de credito e debito, validacao de variaveis e testes em trilhas magneticas, chips e codigos de barras.",
    details:
      "Documentacao de produtos, suporte aos operadores da fabrica e manutencao da rede e perifericos das maquinas.",
    icon: Briefcase,
  },
];

const journeySkills = [
  "Python",
  "ETL",
  "Power BI",
  "PostgreSQL",
  "Excel",
  "Windows Server",
  "Arduino",
  "Hardware",
];

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth" });
        });
      }
      return;
    }

    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  key?: string | number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(12px)",
        transform: visible ? "translateY(0) scale(1)" : "translateY(42px) scale(0.965)",
        transition: `opacity 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform, filter",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

function HomePage() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white">
      <AnimatedBackground />

      <div className="pointer-events-none fixed inset-0 z-[1] tech-grid" />
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div className="scan-line" />
      </div>

      <header
        className={`animate-fade-in-slow fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isHeaderScrolled ? "border-b border-white/10 bg-black/35 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="font-mono text-sm font-bold tracking-tight text-white/90">
            &lt;/portfolio&gt;
          </a>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#projects" className="transition hover:text-white">
              Projetos
            </a>
            <a href="#about" className="transition hover:text-white">
              Sobre
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative z-10 mx-auto flex min-h-[76vh] w-full max-w-none items-center px-6 py-16 lg:pr-10">
        <div className="grid w-full items-center gap-10 lg:items-start lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
          <div className="order-2 text-left lg:order-1">
            <div className="animate-fade-up delay-200 w-full max-w-3xl select-none text-left">
              <h1 className="text-[2.1rem] font-light leading-none tracking-[-0.04em] text-white/85 sm:text-[2.6rem] md:text-[3.15rem]">
                Saudacoes ! <span className="ml-2 inline-block align-middle text-[0.84em]">{"\u270C\uFE0F"}</span>
              </h1>
              <p className="mt-3 text-[2.1rem] font-light leading-none tracking-[-0.04em] text-white/60 sm:text-[2.6rem] md:text-[3.15rem]">
                me chamo
              </p>
              <div className="mt-3 h-px w-full max-w-[25rem] bg-gradient-to-r from-cyan-400/80 via-sky-400/25 to-transparent" />
              <h2 className="mt-3 inline-block cursor-default text-[3.35rem] font-black leading-[0.95] tracking-[-0.05em] text-white transition duration-300 sm:text-[4.25rem] md:text-[5.5rem] lg:text-[5.8rem] hover:text-cyan-100 hover:[text-shadow:0_0_14px_rgba(103,232,249,0.6),0_0_32px_rgba(56,189,248,0.4),0_0_56px_rgba(34,211,238,0.28)]">
                Julio Cesar
              </h2>
            </div>

            <p className="animate-fade-up delay-300 mt-5 max-w-[34rem] text-base leading-relaxed text-white/70 sm:text-lg">
              O tempo e apenas uma construcao; a verdade e eterna. (Matrix)
            </p>

            <div className="animate-fade-up delay-400 mt-10 flex w-full flex-col items-start gap-3 sm:flex-row sm:gap-4">
              <a
                href="/CV2026.pdf"
                download="Julio-Cesar-Curriculo.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-7 py-3.5 text-sm font-semibold text-cyan-100 backdrop-blur-sm transition hover:bg-cyan-400/15 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] sm:w-auto"
              >
                Baixar curriculo
              </a>
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
          </div>

          <div className="order-1 flex flex-col items-center justify-center lg:order-2 lg:justify-end lg:justify-self-end lg:pr-10 lg:pt-14">
            <div className="animate-fade-up delay-100">
              <GlowCard
                glowColor="blue"
                customSize
                className="!h-24 !w-24 !rounded-full !p-1.5 sm:!h-32 sm:!w-32 lg:!h-48 lg:!w-48"
                style={
                  {
                    ["--radius" as string]: "90",
                    ["--size" as string]: "280",
                    ["--border" as string]: "4",
                    ["--outer" as string]: "1.25",
                    ["--bg-spot-opacity" as string]: "0.22",
                    ["--border-spot-opacity" as string]: "1.35",
                    ["--border-light-opacity" as string]: "1",
                    boxShadow: "0 0 34px rgba(56, 189, 248, 0.28), 0 0 90px rgba(59, 130, 246, 0.2)",
                  } as CSSProperties
                }
              >
                <img
                  src={profilePhoto}
                  alt="Foto de perfil - Computer Engineer UNIVESP"
                  className="relative z-10 h-full w-full rounded-full object-cover"
                  loading="eager"
                />
              </GlowCard>
            </div>
            <span className="animate-fade-up delay-200 mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-sm">
              <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
              Disponivel para novos projetos
            </span>
            <div className="animate-fade-up delay-300 mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-mono text-white/70 backdrop-blur-sm">
              <GraduationCap className="h-3.5 w-3.5 text-cyan-300/80" />
              Computer Engineer - UNIVESP
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Projetos em destaque</h2>
            <p className="mt-3 text-white/60">Uma selecao dos meus trabalhos recentes.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 120} className="hover-lift">
              <GlowCard glowColor={project.color} customSize className="h-full min-h-[280px] w-full">
                <div className="flex h-full flex-col justify-between text-white">
                  <div>
                    <project.icon className="mb-4 h-8 w-8 text-white/90" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{project.description}</p>
                  </div>
                  {project.slug ? (
                    <Link
                      to={`/project/${project.slug}`}
                      className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/90 transition hover:text-white"
                    >
                      Ver projeto
                      <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </Link>
                  ) : (
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/40">
                      Em breve
                    </span>
                  )}
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <Reveal>
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/85">Sobre Mim</span>
            <div className="mt-4 flex flex-wrap items-end gap-4">
              <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl md:text-7xl">
                Minha
              </h2>
              <span className="text-4xl font-black uppercase tracking-[-0.06em] text-white/18 sm:text-5xl md:text-7xl">
                Jornada
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
          <div className="space-y-8">
            {journeyItems.map((item, index) => (
              <Reveal key={item.company} delay={index * 120}>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.02] p-7 backdrop-blur-sm">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/60 via-sky-400/20 to-transparent" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xl font-semibold text-white/90">{item.company}</span>
                      </div>
                      <h3 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">{item.role}</h3>
                      <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/62">{item.description}</p>
                      <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/45">{item.details}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-8">
            <Reveal delay={120}>
              <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 backdrop-blur-sm">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Educacao</h3>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/35">Formacao Academica</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-b border-white/8 pb-6">
                    <p className="text-2xl font-black tracking-[-0.04em] text-cyan-300">UNIVESP</p>
                    <p className="mt-2 text-lg text-white/72">Engenharia de Computacao</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/40">Base Tecnica destacada no curriculo</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {journeySkills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/72"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto w-full max-w-3xl px-6 py-20 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vamos conversar</h2>
          <p className="mt-3 text-white/60">Tem um projeto em mente? Estou pronto para ajudar.</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={contactLinks.email}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            >
              <Mail className="h-4 w-4" /> Enviar mensagem
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={contactLinks.linkedin}
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
        Copyright {new Date().getFullYear()} - Feito com codigo.
      </footer>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <BrowserRouter basename="/landing_page_cv">
      <ScrollToHash />
      <div className="min-h-screen font-sans text-white selection:bg-cyan-400/20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
