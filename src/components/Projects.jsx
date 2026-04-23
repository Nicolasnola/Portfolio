import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

// Project Images
import imgTubeTv from "../assets/images/projects/Captura de tela 2026-04-23 105054.png";
import imgLaraStore from "../assets/images/projects/Captura de tela 2026-04-23 105312.png";
import imgTheBox from "../assets/images/projects/Captura de tela 2026-04-23 105430.png";
import imgLexLegacy from "../assets/images/projects/Captura de tela 2026-04-23 105734.png";
import imgLuminaDental from "../assets/images/projects/Captura de tela 2026-04-23 111112.png";

// Stripe accent colors for each card top bar
const CATEGORY_COLORS = {
  STREAMING: "#E33E33",
  "E-COMMERCE": "#79B433",
  "AGÊNCIA DIGITAL": "#00A699",
  JURÍDICO: "#EBAD21",
  SAÚDE: "#E33E33",
};

const projects = [
  {
    category: "STREAMING",
    title: "Tube TV - Plataforma de Canais 24/7",
    desc: "Experiência de streaming contínuo com curadoria de conteúdo e interface inspirada em smart TVs modernas.",
    image: imgTubeTv,
  },
  {
    category: "E-COMMERCE",
    title: "LaraStore - Tecnologia e Performance",
    desc: "Loja virtual de alta conversão focada em eletrônicos, com checkout fluido e design orientado ao usuário.",
    image: imgLaraStore,
  },
  {
    category: "AGÊNCIA DIGITAL",
    title: "theBox Creative - Experiência Digital",
    desc: "Landing page institucional para agência criativa, utilizando tipografia impactante e layout minimalista.",
    image: imgTheBox,
  },
  {
    category: "JURÍDICO",
    title: "Lex & Legacy - Advocacia de Elite",
    desc: "Presença digital sóbria e confiável para escritório jurídico, com foco em conversão e autoridade.",
    image: imgLexLegacy,
  },
  {
    category: "SAÚDE",
    title: "Lumina Dental - Odontologia Premium",
    desc: "Website para clínica odontológica boutique, transmitindo sofisticação, cuidado e tecnologia de ponta.",
    image: imgLuminaDental,
  },
];

export default function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="projects" className="py-28 bg-arc-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-arc-muted mb-4">
              PROJETOS ( {projects.length} )
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-arc-ink tracking-tight uppercase leading-tight">
              Seja o primeiro.
              <br />
              Seja reconhecido.
              <br />
              Seja o padrão.
            </h2>
            <div className="mt-6 w-20 h-1 bg-arc-gold" />
          </div>

          {/* Navigation arrows — Arc Raiders style (dark square) */}
          <div className="flex items-center gap-2 pb-2">
            <button
              ref={prevRef}
              className="w-12 h-12 bg-arc-ink text-white flex items-center justify-center hover:bg-arc-gold hover:text-arc-black transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 bg-arc-ink text-white flex items-center justify-center hover:bg-arc-gold hover:text-arc-black transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".swiper-projects .swiper-pagination",
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.params) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="swiper-projects pb-12"
          >
            {projects.map((item, idx) => {
              const accentColor = CATEGORY_COLORS[item.category] || "#EBAD21";
              return (
                <SwiperSlide key={idx} className="h-auto">
                  <motion.div
                    whileHover={{
                      y: -6,
                      boxShadow: "0 20px 40px rgba(10,10,10,0.2)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="bg-arc-sand-light border border-arc-sand-dark overflow-hidden h-full flex flex-col cursor-pointer group"
                  >
                    {/* Card image area with accent top bar */}
                    <div className="relative h-56 overflow-hidden">
                      {/* Top color stripe */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 z-20"
                        style={{ backgroundColor: accentColor }}
                      />
                      
                      {/* Project Image */}
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-arc-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Plus button top right */}
                      <button
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border-2 transition-colors z-20"
                        style={{ borderColor: accentColor, color: accentColor }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = accentColor;
                          e.currentTarget.style.color = "#0A0A0A";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = accentColor;
                        }}
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Card body */}
                    <div className="p-6 flex flex-col flex-1">
                      <span
                        className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 inline-block w-fit mb-4"
                        style={{
                          color: accentColor,
                          backgroundColor: `${accentColor}18`,
                          border: `1px solid ${accentColor}30`,
                        }}
                      >
                        {item.category}
                      </span>
                      <h3 className="text-lg font-black text-arc-ink mb-3 group-hover:text-arc-gold transition-colors leading-tight uppercase">
                        {item.title}
                      </h3>
                      <p className="text-arc-ink font-medium text-sm leading-relaxed flex-1">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
            <div className="swiper-pagination mt-8" />
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
