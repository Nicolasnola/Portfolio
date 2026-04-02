import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

// Stripe accent colors for each card top bar
const CATEGORY_COLORS = {
  "SEMRUSH ONE": "#00A699",
  SEO: "#EBAD21",
  "VISIBILIDADE NA IA": "#79B433",
  "OPEN SOURCE": "#E33E33",
  MOBILE: "#EBAD21",
};

const projects = [
  {
    category: "SEMRUSH ONE",
    title: "Dashboard de Analytics em Tempo Real",
    desc: "Plataforma de visualização de dados com gráficos interativos, filtros avançados e exportação em PDF.",
    bg: "from-arc-sand to-arc-sand-dark",
  },
  {
    category: "SEO",
    title: "E-commerce com Checkout Otimizado",
    desc: "Loja completa com Stripe, carrinho em tempo real, filtros dinâmicos e taxa de conversão +40%.",
    bg: "from-arc-sand to-arc-sand-dark",
  },
  {
    category: "VISIBILIDADE NA IA",
    title: "SaaS de Gestão de Times",
    desc: "Aplicação colaborativa com drag-and-drop, notificações em tempo real e dark mode perfeito.",
    bg: "from-arc-sand to-arc-sand-dark",
  },
  {
    category: "OPEN SOURCE",
    title: "Biblioteca de Componentes UI",
    desc: "Design system completo com 50+ componentes, temas customizáveis e documentação interativa.",
    bg: "from-arc-sand to-arc-sand-dark",
  },
  {
    category: "MOBILE",
    title: "App de Finanças Pessoais",
    desc: "Aplicativo React Native com gráficos de gastos, metas financeiras e scanner de recibos por IA.",
    bg: "from-arc-sand to-arc-sand-dark",
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
                    <div className="relative h-52 bg-gradient-to-br from-arc-sand to-arc-sand-dark flex items-end p-6 overflow-hidden">
                      {/* Top color stripe */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1"
                        style={{ backgroundColor: accentColor }}
                      />
                      {/* Hatch pattern */}
                      <div className="absolute inset-0 arc-hatch opacity-40" />
                      {/* Plus button top right */}
                      <button
                        className="ml-auto w-10 h-10 flex items-center justify-center border-2 transition-colors z-10"
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
