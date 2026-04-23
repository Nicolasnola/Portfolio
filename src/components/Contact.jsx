import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    // Substitua pela sua chave do Web3Forms
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append(
      "message",
      "Olá Nicolas! Você recebeu um novo contato interessado em seus serviços através do seu Portfolio. Seguem os dados abaixo:"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensagem enviada com sucesso!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 bg-arc-sand">
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
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-4">
              <input type="hidden" name="from_name" value="Portfolio Contact" />
              <input
                type="hidden"
                name="subject"
                value="Novo contato do Portfolio"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu Nome"
                  className="arc-input-dark w-full text-base py-4"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Seu E-mail"
                  className="arc-input-dark w-full text-base py-4"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Seu Telefone"
                  className="arc-input-dark w-full text-base py-4"
                />
              </div>

              <button
                type="submit"
                className="arc-btn w-full py-5 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.2em] gold-pulse"
              >
                Solicitar Contato <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {result && (
              <div className="mt-6 p-4 border border-arc-gold/20 bg-arc-gold/5">
                <p className="text-sm font-bold text-arc-gold uppercase tracking-widest animate-pulse">
                  {result}
                </p>
              </div>
            )}

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
