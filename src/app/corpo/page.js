"use client";
import { useEffect, useState, useRef } from "react";

const WA_LINK =
  "https://wa.me/+5541997850163?text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20protocolos%20corporais%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es";
const LOGO =
  "https://clinica.esteticalosangeles.com.br/wp-content/uploads/2026/03/LOGO-BG.png";
const HERO_IMG =
  "https://clinica.esteticalosangeles.com.br/wp-content/uploads/2026/03/Topo-bronzeamento_Prancheta-1-estetica-los-angeles-scaled-1.jpg";

const QUEIXAS = [
  { icon: "🔥", title: "Gordura Localizada", desc: "Acúmulo de gordura em regiões específicas do corpo que não respondem a dieta e exercícios." },
  { icon: "🌊", title: "Flacidez Corporal", desc: "Perda de firmeza e elasticidade da pele, comum após emagrecimento ou com o passar dos anos." },
  { icon: "💎", title: "Celulite", desc: "Irregularidades na superfície da pele que afetam a autoestima e o bem-estar." },
];

const PROTOCOLOS = [
  { title: "Criolipólise", desc: "Tecnologia que congela e elimina células de gordura de forma não invasiva, com resultados progressivos e duradouros.", tag: "Gordura Localizada" },
  { title: "Radiofrequência Corporal", desc: "Estímulo de colágeno e elastina através de ondas eletromagnéticas, promovendo firmeza e contorno corporal.", tag: "Flacidez & Firmeza" },
  { title: "Drenagem Linfática", desc: "Técnica manual especializada que reduz retenção de líquidos, melhora a circulação e potencializa os resultados dos demais protocolos.", tag: "Detox & Modelagem" },
];

const TECNOLOGIAS = [
  "Criolipólise de última geração",
  "Radiofrequência multipolar",
  "Ultrassom focalizado (HIFU)",
  "Carboxiterapia",
  "Endermologia",
  "Corrente russa",
];

const FAQS = [
  { q: "Quantas sessões são necessárias?", a: "O número de sessões varia de acordo com o protocolo e a área tratada. Em média, são recomendadas de 4 a 10 sessões para resultados ótimos. Na avaliação inicial, montamos um plano personalizado para você." },
  { q: "Os procedimentos são dolorosos?", a: "A maioria dos nossos protocolos é indolor ou causa apenas um leve desconforto. Utilizamos tecnologias de última geração que priorizam o conforto do paciente durante todo o tratamento." },
  { q: "Quando vou ver resultados?", a: "Os primeiros resultados podem ser percebidos já nas primeiras sessões. Porém, os resultados mais expressivos aparecem entre 30 e 90 dias após o início do tratamento, conforme o protocolo escolhido." },
  { q: "Preciso de repouso após as sessões?", a: "Não! Nossos procedimentos são não invasivos e permitem que você retome suas atividades normais imediatamente após a sessão." },
  { q: "Como funciona a avaliação inicial?", a: "A avaliação é gratuita e sem compromisso. Nossa especialista analisa suas queixas, mede as áreas de interesse e propõe o protocolo mais adequado para os seus objetivos." },
];

export default function CorpoPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');

        :root {
          --bg-dark: #003238;
          --bg-light: #EFF4F4;
          --accent: #00A5B6;
          --accent-light: #00B9C9;
          --whatsapp: #2FE965;
          --text-dark: #1a2e2e;
          --text-light: #f0f6f6;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; color: var(--text-dark); overflow-x: hidden; }

        .fade-section { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-section.visible { opacity: 1; transform: translateY(0); }

        /* HEADER */
        .header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 2rem;
          background: transparent;
          transition: background 0.3s, box-shadow 0.3s, padding 0.3s;
        }
        .header.scrolled {
          background: rgba(0, 50, 56, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0,0,0,0.15);
          padding: 0.6rem 2rem;
        }
        .header-logo { height: 48px; transition: height 0.3s; }
        .header.scrolled .header-logo { height: 36px; }
        .header-nav { display: flex; gap: 1.5rem; align-items: center; }
        .header-nav a {
          color: #fff; text-decoration: none; font-size: 0.9rem; font-weight: 400;
          opacity: 0.85; transition: opacity 0.2s;
        }
        .header-nav a:hover { opacity: 1; }
        .header-cta {
          background: var(--accent); color: #fff !important; padding: 0.5rem 1.5rem;
          border-radius: 9999px; font-weight: 600; opacity: 1 !important;
          transition: background 0.2s;
        }
        .header-cta:hover { background: var(--accent-light); }

        .hamburger {
          display: none; background: none; border: none; cursor: pointer;
          flex-direction: column; gap: 5px; padding: 4px;
        }
        .hamburger span {
          display: block; width: 24px; height: 2px; background: #fff;
          transition: transform 0.3s, opacity 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        .mobile-menu {
          display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,50,56,0.98); z-index: 99;
          flex-direction: column; align-items: center; justify-content: center; gap: 2rem;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          color: #fff; text-decoration: none; font-size: 1.3rem;
          font-family: 'Cormorant Garamond', serif;
        }

        /* HERO */
        .hero {
          position: relative; min-height: 100vh; display: flex; align-items: center;
          justify-content: center; overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background: url('${HERO_IMG}') center/cover no-repeat;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,50,56,0.85) 0%, rgba(0,50,56,0.6) 50%, rgba(0,50,56,0.4) 100%);
        }
        .hero-content {
          position: relative; z-index: 2; text-align: center;
          padding: 2rem; max-width: 700px;
        }
        .hero-tag {
          display: inline-block; background: rgba(0,165,182,0.2); color: var(--accent-light);
          padding: 0.4rem 1.2rem; border-radius: 9999px; font-size: 0.8rem;
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1.5rem;
          border: 1px solid rgba(0,185,201,0.3);
        }
        .hero h1 {
          font-family: 'Cormorant Garamond', serif; font-size: 3.2rem;
          font-weight: 300; color: #fff; line-height: 1.15; margin-bottom: 1.2rem;
        }
        .hero h1 strong { font-weight: 600; color: var(--accent-light); }
        .hero p { color: rgba(255,255,255,0.8); font-size: 1.05rem; line-height: 1.7; margin-bottom: 2rem; }
        .hero-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--accent); color: #fff; padding: 1rem 2.5rem;
          border-radius: 9999px; text-decoration: none; font-weight: 600;
          font-size: 1rem; transition: background 0.2s, transform 0.2s;
        }
        .hero-btn:hover { background: var(--accent-light); transform: translateY(-2px); }

        /* TICKER */
        .ticker {
          background: var(--accent); padding: 0.8rem 0; overflow: hidden; white-space: nowrap;
        }
        .ticker-track {
          display: inline-flex; animation: ticker 20s linear infinite;
        }
        .ticker-item {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0 2rem; color: #fff; font-size: 0.85rem; font-weight: 500;
          text-transform: uppercase; letter-spacing: 1px;
        }
        .ticker-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.5); }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* SECTIONS */
        .section { padding: 5rem 2rem; }
        .section-light { background: var(--bg-light); }
        .section-dark { background: var(--bg-dark); color: var(--text-light); }
        .section-title {
          font-family: 'Cormorant Garamond', serif; font-size: 2.4rem;
          font-weight: 400; text-align: center; margin-bottom: 0.5rem;
        }
        .section-sub {
          text-align: center; font-size: 0.95rem; opacity: 0.7;
          max-width: 550px; margin: 0 auto 3rem; line-height: 1.6;
        }

        /* CARDS GRID */
        .cards-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2rem; max-width: 1100px; margin: 0 auto;
        }
        .card {
          background: #fff; border-radius: 16px; padding: 2.5rem 2rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
        .card-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; }
        .card p { font-size: 0.9rem; line-height: 1.7; opacity: 0.75; }
        .card-tag {
          display: inline-block; background: rgba(0,165,182,0.1); color: var(--accent);
          padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem;
          font-weight: 600; margin-bottom: 1rem;
        }

        /* DARK CARDS */
        .card-dark {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px; padding: 2.5rem 2rem;
          transition: background 0.3s, border-color 0.3s;
        }
        .card-dark:hover { background: rgba(255,255,255,0.08); border-color: rgba(0,185,201,0.3); }
        .card-dark h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; color: #fff; }
        .card-dark p { font-size: 0.9rem; line-height: 1.7; opacity: 0.7; }

        /* TECNOLOGIAS */
        .tech-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1rem; max-width: 900px; margin: 0 auto;
        }
        .tech-item {
          display: flex; align-items: center; gap: 0.75rem;
          padding: 1rem 1.5rem; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
          font-size: 0.9rem; color: rgba(255,255,255,0.85);
          transition: border-color 0.3s;
        }
        .tech-item:hover { border-color: var(--accent-light); }
        .tech-check { color: var(--accent-light); font-weight: 700; }

        /* CTA MID */
        .cta-mid {
          background: linear-gradient(135deg, var(--accent) 0%, #008a98 100%);
          padding: 4rem 2rem; text-align: center;
        }
        .cta-mid h2 {
          font-family: 'Cormorant Garamond', serif; font-size: 2.2rem;
          font-weight: 400; color: #fff; margin-bottom: 1rem;
        }
        .cta-mid p { color: rgba(255,255,255,0.85); margin-bottom: 2rem; font-size: 1rem; }
        .cta-btn-white {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: #fff; color: var(--bg-dark); padding: 1rem 2.5rem;
          border-radius: 9999px; text-decoration: none; font-weight: 600;
          font-size: 1rem; transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }

        /* FAQ */
        .faq-list { max-width: 700px; margin: 0 auto; }
        .faq-item {
          border-bottom: 1px solid rgba(0,0,0,0.08); overflow: hidden;
        }
        .faq-q {
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.25rem 0; cursor: pointer; font-weight: 500; font-size: 1rem;
          background: none; border: none; width: 100%; text-align: left;
          font-family: 'Inter', sans-serif; color: var(--text-dark);
        }
        .faq-q:hover { color: var(--accent); }
        .faq-arrow {
          font-size: 1.2rem; transition: transform 0.3s; flex-shrink: 0; margin-left: 1rem;
        }
        .faq-arrow.open { transform: rotate(180deg); }
        .faq-a {
          max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.4s ease;
        }
        .faq-a.open { max-height: 300px; padding-bottom: 1.25rem; }
        .faq-a p { font-size: 0.9rem; line-height: 1.7; opacity: 0.7; }

        /* FOOTER */
        .footer {
          background: var(--bg-dark); color: rgba(255,255,255,0.6);
          padding: 3rem 2rem; text-align: center; font-size: 0.85rem;
        }
        .footer-logo { height: 40px; margin-bottom: 1rem; opacity: 0.7; }
        .footer a { color: var(--accent-light); text-decoration: none; }

        /* FLOATING WA */
        .wa-float {
          position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 90;
          width: 60px; height: 60px; border-radius: 50%;
          background: var(--whatsapp); display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(47,233,101,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .wa-float:hover { transform: scale(1.1); box-shadow: 0 6px 24px rgba(47,233,101,0.5); }
        .wa-float svg { width: 32px; height: 32px; fill: #fff; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .header-nav { display: none; }
          .hamburger { display: flex; }
          .hero h1 { font-size: 2.2rem; }
          .cards-grid { grid-template-columns: 1fr; }
          .tech-grid { grid-template-columns: 1fr; }
          .section-title { font-size: 1.8rem; }
          .section { padding: 3rem 1.5rem; }
        }
      `}</style>

      {/* HEADER */}
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <a href="#top">
          <img src={LOGO} alt="Estética Los Angeles" className="header-logo" />
        </a>
        <nav className="header-nav">
          <a href="#queixas">Queixas</a>
          <a href="#protocolos">Protocolos</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#faq">Dúvidas</a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="header-cta">
            Agendar Avaliação
          </a>
        </nav>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <a href="#queixas" onClick={() => setMenuOpen(false)}>Queixas</a>
        <a href="#protocolos" onClick={() => setMenuOpen(false)}>Protocolos</a>
        <a href="#tecnologias" onClick={() => setMenuOpen(false)}>Tecnologias</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>Dúvidas</a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{ color: "var(--accent-light)" }}
        >
          Agendar Avaliação
        </a>
      </div>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-tag">Estética Corporal Avançada</span>
          <h1>
            Protocolos Corporais que <strong>Transformam</strong> o seu Corpo
          </h1>
          <p>
            Tecnologia de ponta e profissionais especializados para tratar gordura localizada,
            flacidez e celulite. Resultados reais, sem cirurgia.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hero-btn">
            Agendar Avaliação Gratuita →
          </a>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: "inline-flex" }}>
              {["Criolipólise", "Radiofrequência", "Drenagem Linfática", "HIFU", "Carboxiterapia", "Endermologia"].map(
                (t, j) => (
                  <span className="ticker-item" key={j}>
                    <span className="ticker-dot" /> {t}
                  </span>
                )
              )}
            </span>
          ))}
        </div>
      </div>

      {/* QUEIXAS */}
      <section className="section section-light" id="queixas">
        <div className="fade-section" ref={addRef}>
          <h2 className="section-title">Quais são as suas queixas?</h2>
          <p className="section-sub">
            Identificamos as principais preocupações das nossas pacientes e desenvolvemos
            protocolos específicos para cada uma delas.
          </p>
          <div className="cards-grid">
            {QUEIXAS.map((q, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{q.icon}</div>
                <h3>{q.title}</h3>
                <p>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOLOS */}
      <section className="section section-dark" id="protocolos">
        <div className="fade-section" ref={addRef}>
          <h2 className="section-title">Nossos Protocolos</h2>
          <p className="section-sub">
            Cada protocolo é personalizado e combina diferentes tecnologias
            para maximizar seus resultados.
          </p>
          <div className="cards-grid">
            {PROTOCOLOS.map((p, i) => (
              <div className="card-dark" key={i}>
                <span className="card-tag" style={{ background: "rgba(0,185,201,0.15)", color: "var(--accent-light)" }}>
                  {p.tag}
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="section section-dark" id="tecnologias" style={{ paddingTop: 0 }}>
        <div className="fade-section" ref={addRef}>
          <h2 className="section-title">Tecnologias Utilizadas</h2>
          <p className="section-sub">
            Investimos nos equipamentos mais avançados do mercado para garantir
            segurança e eficácia em cada procedimento.
          </p>
          <div className="tech-grid">
            {TECNOLOGIAS.map((t, i) => (
              <div className="tech-item" key={i}>
                <span className="tech-check">✓</span> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="cta-mid">
        <div className="fade-section" ref={addRef}>
          <h2>Agende sua Avaliação Gratuita</h2>
          <p>Descubra qual protocolo é ideal para os seus objetivos. Sem compromisso.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-white">
            Falar com Especialista →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-light" id="faq">
        <div className="fade-section" ref={addRef}>
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-sub">Tire suas dúvidas sobre os nossos protocolos corporais.</p>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <span className={`faq-arrow${openFaq === i ? " open" : ""}`}>▼</span>
                </button>
                <div className={`faq-a${openFaq === i ? " open" : ""}`}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <img src={LOGO} alt="Estética Los Angeles" className="footer-logo" />
        <p style={{ marginBottom: "0.5rem" }}>
          Estética Los Angeles — Curitiba, PR
        </p>
        <p>
          © {new Date().getFullYear()} Todos os direitos reservados ·{" "}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            Fale conosco
          </a>
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 2.667A13.28 13.28 0 0 0 2.72 15.95a13.2 13.2 0 0 0 1.768 6.617L2.667 29.333l6.987-1.832A13.28 13.28 0 0 0 16.004 29.333 13.28 13.28 0 0 0 29.333 16.05 13.28 13.28 0 0 0 16.004 2.667Zm0 24.278a10.88 10.88 0 0 1-5.55-1.518l-.398-.237-4.127 1.082 1.1-4.025-.26-.413a10.86 10.86 0 0 1-1.667-5.8A10.89 10.89 0 0 1 16.004 5.057 10.89 10.89 0 0 1 26.945 16.05 10.89 10.89 0 0 1 16.004 26.945Zm5.97-8.147c-.327-.164-1.937-.956-2.237-1.065-.3-.109-.519-.164-.737.164-.219.327-.847 1.065-1.038 1.283-.191.219-.382.246-.71.082-.326-.164-1.38-.508-2.63-1.62-.972-.866-1.629-1.936-1.82-2.263-.19-.327-.02-.504.143-.667.147-.147.327-.382.491-.573.164-.191.219-.327.328-.546.109-.218.054-.41-.027-.573-.082-.164-.737-1.776-1.01-2.431-.264-.637-.534-.55-.737-.56-.19-.01-.41-.01-.628-.01a1.21 1.21 0 0 0-.874.41c-.3.327-1.147 1.12-1.147 2.732s1.174 3.17 1.338 3.388c.164.219 2.312 3.53 5.603 4.95.783.338 1.393.54 1.87.69.786.25 1.5.215 2.065.13.63-.094 1.937-.792 2.21-1.557.273-.764.273-1.42.191-1.556-.082-.137-.3-.219-.628-.382Z" />
        </svg>
      </a>
    </>
  );
}