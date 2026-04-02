import React from "react";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const links = [
  {
    title: "Portfolio",
    items: [
      "Nicolas One",
      "Projetos",
      "Habilidades",
      "Case Studies",
      "Open Source",
      "Blog",
    ],
  },
  {
    title: "Ferramentas",
    items: [
      "React Enterprise",
      "Next.js Apps",
      "UI Intelligence",
      "Design System",
      "Top Websites",
      "Free Tools",
    ],
  },
  {
    title: "Empresa",
    items: ["Sobre Mim", "News", "Carreiras", "Parceiros", "Contato"],
  },
  {
    title: "Suporte",
    items: ["Base de conhecimento", "Academy", "Documentação API"],
  },
];

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-arc-black text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background dark cinematic gradient (Same as Hero) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 30%, #2A1A00 0%, #0A0A0A 70%)",
        }}
      />

      {/* Top stripe */}
      <div className="absolute top-0 left-0 right-0 h-[4px] arc-stripe z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Mini stripe bars (logo) */}
            <div className="flex gap-[3px] h-7 items-end mb-4">
              {["#E33E33", "#EBAD21", "#79B433", "#00A699"].map((c, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: c,
                    height: `${100 - i * 16}%`,
                    width: "5px",
                    borderRadius: "1px",
                  }}
                />
              ))}
            </div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="font-black text-xl tracking-tighter uppercase">
                Nicolas<span className="text-arc-gold">.</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Desenvolvedor frontend apaixonado por criar interfaces que
              impressionam e convertem.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-white/20 hover:border-arc-gold hover:text-arc-gold text-white/60 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {links.map((column, idx) => (
            <div key={idx}>
              <h4 className="font-black text-[11px] uppercase tracking-[0.2em] mb-6 text-arc-gold">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {item}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>
            © 2008 – {new Date().getFullYear()} Nicolas Portfolio. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="#"
              className="hover:text-arc-gold transition-colors uppercase tracking-wider"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="hover:text-arc-gold transition-colors uppercase tracking-wider"
            >
              Termos de Serviço
            </a>
            <a
              href="#"
              className="hover:text-arc-gold transition-colors uppercase tracking-wider"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
