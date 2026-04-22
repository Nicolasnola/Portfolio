import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const BRANDS = [
  "Amazon",
  "Netflix",
  "Airbnb",
  "TikTok",
  "Dropbox",
  "Notion",
  "Spotify",
  "Vercel",
  "Discord",
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden min-h-[92vh] flex flex-col bg-arc-black"
    >
      {/* ─── Background dark cinematic gradient ──────────────── */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          y: bgY,
          background:
            "radial-gradient(ellipse 80% 70% at 50% 30%, #2A1A00 0%, #0A0A0A 70%)",
        }}
      />

      {/* Gold radial glow (center) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(235,173,33,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Arc Raiders-style left stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-[6px] arc-stripe z-10 pointer-events-none" />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* ─── Hero content ────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
          <div className="text-center max-w-5xl mx-auto mt-16 md:mt-0">
            {/* Availability badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 border border-arc-gold/40 bg-arc-gold/10 px-3 md:px-5 py-1.5 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-arc-gold mb-6 md:mb-10 text-center"
            >
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-arc-gold animate-pulse flex-shrink-0" />
              <span>Disponível para projetos em 2025</span>
            </motion.div> */}

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl sm:text-5xl md:text-[80px] font-black tracking-tight text-white leading-[1.1] md:leading-[1.0] mb-5 md:mb-6 uppercase break-words"
            >
              TRANSFORMANDO IDEIAS EM <br className="hidden md:block" />
              SOLUÇÕES DIGITAIS
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-sm sm:text-base md:text-xl text-white/70 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed md:leading-relaxed uppercase px-2"
            >
              SOFTWARE COM FOCO EM DESIGN, PERFORMANCE, ESCALABILIDADE E
              RESULTADOS REAIS.
            </motion.p>

            {/* CTA buttons (Arc Raiders style: solid gold + outline white) */}
            {/* CTA buttons (Arc Raiders style: solid gold + outline white) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <a
                href="#contact"
                className="arc-btn flex-nowrap whitespace-nowrap h-[52px] md:h-[60px] flex items-center justify-center gap-2 gold-pulse text-xs md:text-[15px] w-[240px] md:w-[280px]"
              >
                Ver Projetos
              </a>
              <a
                href="#about"
                className="arc-btn-outline flex-nowrap whitespace-nowrap h-[52px] md:h-[60px] text-xs md:text-[15px] flex items-center justify-center w-[240px] md:w-[280px]"
              >
                Assistir ao Reel
              </a>
            </motion.div>

            {/* Star ratings */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col items-center justify-center gap-2 mt-4 mx-auto text-center"
            >
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-arc-gold text-arc-gold mx-0.5"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-white/50 font-semibold mt-1">
                4.9/5 em 100+ projetos entregues
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Brand marquee strip ─────────────────────────────── */}
      <div className="relative z-10 border-t border-white/10 bg-arc-black/80 py-6">
        <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] text-center mb-4">
          Tecnologias &amp; Clientes
        </p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={i}
                className="inline-flex items-center mx-10 text-white/30 font-black text-xl tracking-tight hover:text-arc-gold transition-colors cursor-default uppercase"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
