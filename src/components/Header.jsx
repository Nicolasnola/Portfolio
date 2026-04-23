import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Projetos", href: "#projects" },
    { label: "Habilidades", href: "#toolkits" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <>
      {/* ─── Announcement ticker ─────────────────────────────── */}
      <div className="w-full bg-[#EBAD21] text-arc-ink py-2 text-xs font-black uppercase tracking-widest text-center overflow-hidden ticker-wrap z-50 relative">
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-10 px-10">
              <span className="text-arc-ink">✦</span>
              <span>Disponível para novos projetos</span>
              <span className="text-arc-ink">✦</span>
              <span>Desenvolvimento React &amp; UI/UX</span>
              <span className="text-arc-ink">✦</span>
              <span>Portfólio 2026</span>
              <span className="text-arc-ink">✦</span>
              <span>Disponível para novos projetos</span>
              <span className="text-arc-ink">✦</span>
              <span>Desenvolvimento React &amp; UI/UX</span>
              <span className="text-arc-ink">✦</span>
              <span>Portfólio 2026</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── Header ──────────────────────────────────────────── */}
      <motion.header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${isScrolled
          ? "bg-arc-sand/80 backdrop-blur-md shadow-arc border-b border-arc-sand-dark"
          : "bg-arc-sand border-b border-arc-sand-dark"
          }`}
      >
        {/* Rainbow stripe — top edge (Arc Raiders signature) */}
        <div className="w-full h-[3px] arc-stripe" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              {/* Mini stripe bars (logo-alike) */}
              <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
              <span className="font-black text-xl tracking-tighter text-arc-ink uppercase">
                Nicolas Freitas<span className="text-arc-gold">.</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-[14px] font-bold uppercase tracking-wider text-arc-ink hover:text-arc-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="arc-btn py-2.5 px-6 text-xs gold-pulse"
              >
                Contrate-me
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              aria-label="Menu"
              className="lg:hidden p-2 text-arc-ink hover:text-arc-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-arc-sand border-t border-arc-sand-dark"
            >
              <div className="px-4 py-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-bold uppercase tracking-wider text-arc-ink px-4 py-3 hover:text-arc-gold hover:bg-arc-sand-dark transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="h-px bg-arc-sand-dark w-full my-3" />
                <a href="#contact" className="arc-btn w-full text-center">
                  Contrate-me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
