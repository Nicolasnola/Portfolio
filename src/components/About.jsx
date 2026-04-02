import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  PenTool,
  Search,
  BarChart,
  Smartphone,
  Cloud,
  ArrowRight,
} from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const features = [
  {
    title: "Frontend Development",
    desc: "Componentes React reutilizáveis e otimizados para SEO. Performance máxima do primeiro render.",
    icon: Layout,
    accentColor: "#00A699", // teal
    link: "Ver projetos React",
  },
  {
    title: "UI/UX Design",
    desc: "Interfaces que encantam. Prototipação, design system e animações com Framer Motion.",
    icon: PenTool,
    accentColor: "#EBAD21", // gold
    link: "Ver designs",
  },
  {
    title: "SEO Optimization",
    desc: "Ranqueie melhor. Estrutura semântica, Core Web Vitals e meta-dados otimizados.",
    icon: Search,
    accentColor: "#79B433", // green
    link: "Saiba mais",
  },
  {
    title: "Analytics & Performance",
    desc: "Dados que guiam decisões. Dashboard, gráficos e insights de performance em tempo real.",
    icon: BarChart,
    accentColor: "#EBAD21", // gold
    link: "Ver resultados",
  },
  {
    title: "Mobile Responsive",
    desc: "Experiência perfeita em qualquer dispositivo. Mobile-first com breakpoints precisos.",
    icon: Smartphone,
    accentColor: "#00A699", // teal
    link: "Ver demos",
  },
  {
    title: "Cloud & Deploy",
    desc: "CI/CD, Vercel, AWS. Deploys automáticos e infraestrutura escalável sem dor de cabeça.",
    icon: Cloud,
    accentColor: "#E33E33", // red
    link: "Ver stack",
  },
];

export default function About() {
  return (
    <section id="toolkits" className="py-28 bg-arc-sand">
      {/* Left stripe accent */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-arc-muted mb-4">
            SOLUÇÕES ( {features.length} )
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-black text-arc-ink tracking-tight leading-tight max-w-2xl uppercase">
              Seja visto.
              <br />
              Seja contratado.
              <br />
              Seja a solução.
            </h2>
            <p className="text-arc-ink font-medium max-w-sm leading-relaxed">
              Tudo que você precisa para construir presença digital de alta
              performance.
            </p>
          </div>
          {/* Gold underline accent */}
          <div className="mt-6 w-20 h-1 bg-arc-gold" />
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 48px rgba(10,10,10,0.15)",
                }}
                className="bg-arc-sand-light border border-arc-sand-dark p-8 flex flex-col group cursor-pointer card-hover"
              >
                {/* Icon with stripe-color accent */}
                <div
                  className="mb-6 w-12 h-12 flex items-center justify-center"
                  style={{
                    borderLeft: `4px solid ${item.accentColor}`,
                    paddingLeft: "12px",
                  }}
                >
                  <Icon className="w-6 h-6 text-arc-ink" />
                </div>

                <h3 className="text-lg font-black text-arc-ink mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-arc-ink flex-1 leading-relaxed mb-6 text-sm font-medium">
                  {item.desc}
                </p>

                <span
                  className="font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider"
                  style={{ color: item.accentColor }}
                >
                  {item.link}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
