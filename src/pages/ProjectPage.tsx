import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Code2, Cpu, Database, ExternalLink, Github, Layout } from "lucide-react";
import { Button } from "../../components/ui/button";

const BASE_URL = import.meta.env.BASE_URL;

const projectData = {
  "ntc-10k": {
    title: "Monitoramento NTC 10K",
    subtitle: "Sensor analogico + dashboard web para monitoramento em tempo real com Arduino e Python.",
    description:
      "Desenvolvi um sistema completo de aquisicao de dados para monitoramento termico, integrando hardware e software para transformar sinais eletricos em informacao acionavel.",
    longDescription:
      "O projeto cobre toda a jornada do dado: leitura da temperatura no sensor, transmissao serial, armazenamento estruturado e visualizacao em uma interface web pensada para acompanhamento continuo.",
    github: "https://github.com/Bugre404",
    techs: [
      { name: "Hardware", detail: "Arduino com sensor NTC 10K e equacao de Steinhart-Hart.", icon: Cpu },
      { name: "Backend", detail: "Python para comunicacao serial e persistencia em CSV.", icon: Database },
      { name: "Frontend", detail: "Streamlit e Plotly para graficos e atualizacao em tempo real.", icon: Code2 },
    ],
    highlights: [
      "Leitura continua com graficos de escala fixa e atualizacao automatica.",
      "Base estruturada para analise posterior em Excel, Pandas ou relatorios tecnicos.",
      "Interface acessivel via rede local para acompanhamento rapido do experimento.",
    ],
    video: `${BASE_URL}project-video.mp4`,
    video2: undefined,
    tags: ["IoT", "Arduino", "Python", "Data Science", "Engenharia"],
  },
  "power-bi-sales": {
    title: "Dashboard de Vendas - Power BI",
    subtitle: "Transformando dados brutos em decisoes estrategicas com Power BI e processos de ETL.",
    description:
      "Projeto de dashboard de vendas voltado ao monitoramento de KPIs criticos, com limpeza, estruturacao e leitura visual dos dados para apoiar decisoes de negocio.",
    longDescription:
      "A proposta foi transformar bases dispersas em um painel claro e executivo, permitindo acompanhar faturamento, volume de vendas, ticket medio e desempenho por regiao ou marca com muito mais rapidez.",
    github: "https://github.com/Bugre404",
    techs: [
      { name: "Visualizacao", detail: "Power BI com indicadores, mapas, filtros e linhas de tendencia.", icon: Layout },
      { name: "Dados", detail: "Excel e processos de ETL para higienizacao e organizacao dos datasets.", icon: Database },
      { name: "Analise", detail: "Calculo de KPIs como ticket medio, volume e faturamento.", icon: Code2 },
    ],
    highlights: [
      "Leitura rapida de tendencias e oportunidades de crescimento.",
      "Filtros interativos para comparar marcas, regioes e continentes.",
      "Painel orientado a gestao com foco em clareza e tomada de decisao.",
    ],
    video: `${BASE_URL}sales-dashboard-1.mp4`,
    video2: `${BASE_URL}sales-dashboard-2.mp4`,
    tags: ["Power BI", "Excel", "ETL", "Data Analysis"],
  },
} as const;

export default function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? projectData[slug as keyof typeof projectData] : undefined;

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black p-6 text-white">
        <h1 className="mb-4 text-4xl font-bold">Projeto nao encontrado</h1>
        <Link to="/">
          <Button variant="outline">Voltar para a home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans text-white selection:bg-blue-500/30">
      <main className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-4xl">
          <Link to="/#projects">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="group mb-12 flex cursor-pointer items-center gap-2 text-white/40 transition-colors hover:text-white"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              <span className="font-mono text-sm uppercase tracking-widest">Voltar para projetos</span>
            </motion.div>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tighter md:text-6xl">{project.title}</h1>
            <p className="mb-12 text-xl font-light italic leading-relaxed text-white/60 md:text-2xl">
              {project.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mb-16 aspect-video overflow-hidden rounded-[32px] border border-white/10 bg-black/50 shadow-2xl"
          >
            <video src={project.video} autoPlay muted loop playsInline className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_300px]">
            <div className="space-y-12">
              <section>
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <span className="h-[1px] w-8 bg-blue-500" /> Sobre o projeto
                </h2>
                <div className="space-y-4 leading-relaxed text-white/70">
                  <p>{project.description}</p>
                  <p>{project.longDescription}</p>
                </div>
              </section>

              {project.video2 && (
                <section>
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                    <span className="h-[1px] w-8 bg-blue-500" /> Demonstracao adicional
                  </h2>
                  <div className="relative aspect-video overflow-hidden rounded-[32px] border border-white/10 bg-black/50 shadow-2xl">
                    <video
                      src={project.video2}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                </section>
              )}

              <section>
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <span className="h-[1px] w-8 bg-blue-500" /> Destaques tecnicos
                </h2>
                <ul className="space-y-4">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/70">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-8">
              <div className="space-y-8 rounded-3xl border border-white/5 bg-white/[0.02] p-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/30">Stack tecnica</h3>
                {project.techs.map((tech) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-400">
                      <tech.icon size={16} />
                      <span className="text-sm font-bold">{tech.name}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-white/50">{tech.detail}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-white font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:bg-white/90"
                >
                  <Github size={20} /> Ver codigo no GitHub
                </a>
                <button className="flex h-14 w-full cursor-not-allowed items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 font-bold opacity-50 transition-all hover:bg-white/10">
                  <ExternalLink size={20} /> Demo online em breve
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-white/5 px-6 py-12">
        <div className="mx-auto max-w-4xl text-center text-[10px] uppercase tracking-[0.3em] text-white/20">
          Copyright {new Date().getFullYear()} Julio Cesar. Projetado para inovacao.
        </div>
      </footer>
    </div>
  );
}
