import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 bg-arc-sand"
    >
      {/* Left stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-[6px] arc-stripe pointer-events-none z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-arc-black text-white p-10 md:p-16 relative overflow-hidden"
        >
          {/* Gold & teal glow blobs */}
          <div
            className="absolute top-0 left-1/4 w-64 h-64 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(235,173,33,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,166,153,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Top gold stripe */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-arc-gold" />
          {/* Left rainbow stripe inside card */}
          <div className="absolute left-0 top-0 bottom-0 w-[4px] arc-stripe pointer-events-none" />

          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-arc-gold/40 bg-arc-gold/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-arc-gold mb-8">
              <Mail className="w-4 h-4" />
              Vamos conversar
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-tight mb-6">
              Onde criadores ambiciosos{" "}
              <span className="text-arc-gold">tomam o centro</span> do palco
            </h2>

            <p className="text-base text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Me envie seu projeto. Estratégias práticas, feedback especializado
              e um desenvolvedor que tem seu sucesso como prioridade.
            </p>

            {/* Email form */}
            <div className="flex flex-col sm:flex-row items-stretch gap-0 max-w-lg mx-auto mb-6">
              <input
                type="email"
                id="contact-email"
                placeholder="name@company.com"
                className="arc-input-dark flex-1 text-base"
              />
              <button className="arc-btn px-8 py-4 flex items-center justify-center gap-2 whitespace-nowrap">
                Enviar <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-white/30 font-medium uppercase tracking-wider">
              Teste trabalhar comigo por sete dias grátis. Cancele quando
              quiser.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
