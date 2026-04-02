import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";

// Counter hook
function useCounter(target, isActive, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isActive, target, duration]);
  return count;
}

const stats = [
  {
    number: 3,
    suffix: "+",
    label: "Anos de experiência",
    desc: "Acelerando expertise profissional em frontend.",
  },
  {
    number: 20,
    suffix: "+",
    label: "Projetos entregues",
    desc: "Nos mais altos padrões de engenharia.",
  },
  {
    number: 1,
    suffix: "M+",
    label: "Linhas de código",
    desc: "JavaScript escalável e de alta manutenibilidade.",
  },
  {
    number: 4,
    suffix: "+",
    label: "Frameworks dominados",
    desc: "Cobrindo todo o ecossistema web moderno.",
  },
];

// Stripe colors for stat tiles
const STRIPE_COLORS = ["#E33E33", "#EBAD21", "#79B433", "#00A699"];

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const c0 = useCounter(stats[0].number, isInView);
  const c1 = useCounter(stats[1].number, isInView);
  const c2 = useCounter(stats[2].number, isInView);
  const c3 = useCounter(stats[3].number, isInView);
  const counts = [c0, c1, c2, c3];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-28 bg-transparent text-arc-ink overflow-hidden relative"
    >
      {/* Gold glow blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(235,173,33,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,166,153,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Left stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-[6px] arc-stripe pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-arc-gold mb-4">
              PORTFOLIO EM NÚMEROS
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-tight max-w-xl text-arc-ink">
              Os dados de que você precisa para contratar o melhor
            </h2>
            <div className="mt-6 w-20 h-1 bg-arc-gold" />
          </motion.div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="arc-btn-outline-dark self-start md:self-end"
          >
            Saiba mais
          </motion.a>
        </div>

        {/* Stat grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Colored stat tile */}
              <div
                className="relative overflow-hidden p-6 mb-4 flex items-center gap-4"
                style={{ backgroundColor: STRIPE_COLORS[idx] }}
              >
                {/* Hatch overlay */}
                <div
                  className="absolute inset-0 arc-hatch pointer-events-none"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0,0,0,0.08) 4px, rgba(0,0,0,0.08) 8px)",
                  }}
                />
                <TrendingUp className="w-7 h-7 text-arc-black shrink-0 relative z-10" />
                <span className="text-5xl font-black text-arc-black relative z-10">
                  {counts[idx]}
                  {stat.suffix}
                </span>
              </div>
              <p className="font-black text-base uppercase tracking-wide mb-2 text-arc-ink">
                {stat.label}
              </p>
              <p className="text-arc-ink font-medium leading-relaxed text-sm">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 border border-arc-gold/30 bg-arc-gold/5 p-10 md:p-14 relative overflow-hidden"
        >
          {/* Left gold stripe accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-arc-gold" />

          <p className="text-2xl md:text-3xl font-bold leading-relaxed text-arc-ink mb-8">
            "Nicolas transformou completamente nossa presença digital. As
            animações e o design ficaram incríveis — nossas conversões
            aumentaram 373%."
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 flex items-center justify-center font-black text-white text-lg rounded-sm"
              style={{ backgroundColor: "#0A0A0A" }}
            >
              J
            </div>
            <div>
              <p className="font-black text-arc-ink uppercase tracking-wide">
                João Silva
              </p>
              <p className="text-arc-ink font-bold text-sm">CEO da TechBR</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
