import { HashLink as Link } from 'react-router-hash-link';
import { useState, useEffect, useRef } from "react";
import logoUrl from '../assets/logo.png';
import imgOilGasDesktop from "../assets/heroimages/oil-and-gas-desktop.png";
import imgOilGasMobile from "../assets/heroimages/oil-and-gas-mobile.png";
import imgEnergyTradingDesktop from "../assets/heroimages/energy-trading-desktop.png";
import imgEnergyTradingMobile from "../assets/heroimages/energy-trading-mobile.jpeg";
import imgEngineeringDesktop from "../assets/heroimages/engineering-built-destop.png";
import imgEngineeringMobile from "../assets/heroimages/engineering-built-mobile.png";
import {
  FiMenu, FiX, FiMail, FiMapPin, FiPhone, FiChevronRight,
  FiArrowRight, FiCheck, FiGlobe, FiShield, FiAward,
  FiTrendingUp, FiUsers, FiStar, FiLinkedin, FiTwitter, FiFacebook
} from "react-icons/fi";
import {
  GiOilDrum, GiPipes, GiFactory, GiCargoShip,
  GiWorld, GiGears, GiMining, GiElectric, GiHammerNails
} from "react-icons/gi";
import {
  MdEngineering, MdOutlineBusinessCenter, MdHandshake,
  MdVerified, MdSecurity, MdHealthAndSafety
} from "react-icons/md";
import { BsBuilding, BsBarChartFill, BsFuelPumpFill } from "react-icons/bs";
import { RiShipLine, RiGovernmentLine, RiBarChart2Fill } from "react-icons/ri";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

// ─── PROJECT IMAGES ─────────────────────────────────────────────────────────
import imgProjBuildingConstruction from "../assets/projects/Building Construction.jpeg";
import imgProjBuildingConstruction2 from "../assets/projects/Building Construction2.jpeg";
import imgProjCopperCathode from "../assets/projects/Copper Cathode.png";
import imgProjRawGold from "../assets/projects/RawGold.png";
import imgProjRefinedGold from "../assets/projects/Refined Gold.jpeg";
import imgProjRiceSupply from "../assets/projects/Rice Supply.png";
import imgProjSolarSupply from "../assets/projects/Solar Supply.jpeg";
import imgProjWhatsApp from "../assets/projects/WhatsApp Image 2026-03-31 at 2.39.27 AM.jpeg";
import imgProjCopperConc1 from "../assets/projects/copper Concentrates 1.jpeg";
import imgProjCopperConc2 from "../assets/projects/copper Concentrates 2.jpeg";

// ─── THEME COLORS ───────────────────────────────────────────────────────────
// Light: #ffffff  Green: #10b981  Light Green: #34d399  Accent: #1a3a5c

const NAV_LINKS = ["Home", "About", "Services", "Projects", "Markets", "Compliance", "Contact"];

// ─── NAVBAR ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 text-xs text-slate-700"
        style={{ background: "#f8fafc" }}>
        <div className="flex items-center gap-2">
          <FiMail className="text-emerald-600" size={12} />
          <span>info@kjswestglobal.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FiGlobe className="text-emerald-600" size={12} />
          <span className="tracking-widest text-emerald-600 font-semibold">WEST AFRICA &nbsp;|&nbsp; LONDON &nbsp;|&nbsp; DUBAI &nbsp;|&nbsp; SINGAPORE</span>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-2xl" : ""}`}
        style={{ background: scrolled ? "rgba(255,255,255,0.98)" : "#ffffff", backdropFilter: "blur(12px)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="KJS West Global Logo" className="h-10 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="font-black text-slate-900 text-xl tracking-wide" style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.06em" }}>
                KJS <span style={{ color: "#10b981" }}>WEST</span> GLOBAL
              </span>
              <span className="text-slate-600 text-xs tracking-widest uppercase">Resources Enterprises</span>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <Link key={l} smooth to={`/#${l.toLowerCase()}`}
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors tracking-wide uppercase"
                style={{ letterSpacing: "0.08em" }}>
                {l}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link smooth to="/#contact" className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all"
            style={{ background: "linear-gradient(135deg, #10b981, #34d399)", color: "#ffffff", borderRadius: 2 }}>
            Request a Quote <FiArrowRight size={14} />
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-slate-900 p-2">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "#ffffff" }}>
            {NAV_LINKS.map(l => (
              <Link key={l} smooth to={`/#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                className="text-slate-700 text-sm font-medium uppercase tracking-widest py-2 border-b border-gray-800">
                {l}
              </Link>
            ))}
            <Link smooth to="/#contact"
              className="mt-2 text-center py-3 font-bold uppercase tracking-widest text-sm"
              style={{ background: "linear-gradient(135deg,#10b981,#34d399)", color: "#ffffff" }}>
              Request a Quote
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      eyebrow: "Upstream & Midstream",
      title: "OIL &",
      titleSpan: " GAS.",
      text: "Global sourcing, trading, and supply of crude oil and natural gas across West Africa, Europe, and the Gulf.",
      img: { desktop: imgOilGasDesktop, mobile: imgOilGasMobile }
    },
    {
      eyebrow: "Distribution Hubs",
      title: "ENERGY",
      titleSpan: " TRADING.",
      text: "Refined petroleum product distribution and bulk supply trading across established grids.",
      img: { desktop: imgEnergyTradingDesktop, mobile: imgEnergyTradingMobile }
    },
    {
      eyebrow: "Infrastructure Development",
      title: "ENGINEERING",
      titleSpan: " BUILT.",
      text: "End-to-end EPC services, pipeline installation, and high-capacity terminal construction.",
      img: { desktop: imgEngineeringDesktop, mobile: imgEngineeringMobile }
    },
    {
      eyebrow: "Multi-Sector Execution",
      title: "GENERAL",
      titleSpan: " CONTRACTORS.",
      text: "Comprehensive contract execution across industrial, civil, and infrastructure projects with rigorous standards.",
      img: { desktop: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80", mobile: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#f8fafc" }}>

      {/* Background Slider Images */}
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === idx ? "opacity-100" : "opacity-0"}`}
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={s.img.desktop} />
            <img
              src={s.img.mobile}
              alt={s.title}
              className="w-full h-full object-cover opacity-60"
            />
          </picture>
        </div>
      ))}

      {/* Adjusted Overlay for better image visibility */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, rgba(248, 250, 252, 0.4) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(248, 250, 252, 0.3) 100%)",
        backdropFilter: "blur(0px)",
        pointerEvents: "none"
      }} />

      {/* Green line accent */}
      <div className="absolute left-0 top-0 w-1 h-full z-10" style={{ background: "linear-gradient(to bottom, transparent, #10b981, transparent)" }} />

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5 z-10" style={{
        backgroundImage: "linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none"
      }} />

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 w-full mt-10">
        <div className="max-w-4xl relative min-h-[440px] md:min-h-[400px]">

          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 absolute top-0 left-0 w-full ${currentSlide === idx ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12" style={{ background: "#10b981" }} />
                <span className="text-xs font-bold tracking-widest uppercase bg-green-100 rounded-2xl p-2" style={{ color: "#10b981" }}>
                  {s.eyebrow}
                </span>
              </div>

              <h1 className=" text-4xl md:text-8xl font-black text-slate-900 leading-none mb-6"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em", textShadow: "0 1px 2px rgba(255,255,255,0.8)" }}>
                {s.title}<br />
                <span style={{ color: "#10b981" }}>{s.titleSpan}</span>
              </h1>

              <p className="text-slate-900  text-xl md:text-2xl leading-relaxed max-w-2xl mb-12">
                {s.text}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link smooth to="/#services"
                  className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-widest transition-transform hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#10b981,#34d399)", color: "#ffffff" }}>
                  Request Supply <FiArrowRight />
                </Link>
                <Link smooth to="/#about"
                  className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-widest border text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
                  style={{ borderColor: "rgba(16,185,129,0.5)" }}>
                  Partner With Us <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* Metrics Row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "20+", label: "Years of Operations" },
            { val: "20", label: "Countries Active" },
            { val: "$3.5B", label: "Energy Traded" },
            { val: "5,000+", label: "Workforce Deployed" },
          ].map(m => (
            <div key={m.label} className="border-l-2 pl-4" style={{ borderColor: "#10b981" }}>
              <div className="text-3xl font-black text-slate-950" style={{ fontFamily: "'Georgia', serif" }}>{m.val}</div>
              <div className="text-xs uppercase tracking-widest text-green-400 bg-green-50  p-2 bold mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Slider Navigation Dots */}
        <div className="mt-12 flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${currentSlide === idx ? "w-12 bg-emerald-500" : "w-4 bg-emerald-500/30 hover:bg-emerald-500/60"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, #10b981, transparent)" }} />
      </div>
    </section>
  );
}

// ─── SERVICES ───────────────────────────────────────────────────────────────
function Services() {
  const cards = [
    {
      num: "01", icon: <GiOilDrum size={36} />, title: "Crude Oil & Gas Supply",
      cat: "OIL & GAS", region: "GLOBAL MARKETS",
      desc: "Principal upstream and midstream sourcing, trading, and supply of crude oil and natural gas across West Africa, Europe, and the Gulf."
    },
    {
      num: "02", icon: <BsFuelPumpFill size={36} />, title: "Petroleum Product Trading",
      cat: "ENERGY", region: "WEST AFRICA · EUROPE",
      desc: "Refined petroleum product distribution, offtake agreements, and bulk supply through established regional and international trading networks."
    },
    {
      num: "03", icon: <GiPipes size={36} />, title: "Pipeline & Energy Infrastructure",
      cat: "ENGINEERING", region: "AFRICA & MIDDLE EAST",
      desc: "EPC pipeline development, terminal construction, and energy infrastructure modernization across high-growth energy corridors."
    },
    {
      num: "04", icon: <HiOutlineOfficeBuilding size={36} />, title: "General Contracting Services",
      cat: "CONTRACTS", region: "MULTI-SECTOR",
      desc: "End-to-end contract execution across industrial, government, and commercial sectors with rigorous HSE and compliance frameworks."
    },
  ];

  return (
    <section id="services" className="py-24" style={{ background: "#f1f5f9" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-10" style={{ background: "#10b981" }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Our Core Divisions</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
            Four Divisions.<br />One Mandate.
          </h2>
          <p className="text-slate-600 max-w-sm text-sm leading-relaxed">
            Integrated energy and contracting capabilities designed for global markets and complex operational environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(16,185,129,0.15)" }}>
          {cards.map(c => (
            <div key={c.num} className="group p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ background: "#ffffff" }}>
              <div className="flex items-start justify-between">
                <div style={{ color: "#10b981" }}>{c.icon}</div>
                <span className="text-4xl font-black opacity-60 text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>{c.num}</span>
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#10b981" }}>{c.cat}</div>
                <h3 className="text-slate-900 font-bold text-lg leading-tight">{c.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{c.desc}</p>
              <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
                <span className="text-xs text-slate-500 tracking-widest uppercase">{c.region}</span>
                <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">
                  <FiChevronRight />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 overflow-hidden" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: "#10b981" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>About KJS West Global</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-none" style={{ fontFamily: "'Georgia', serif" }}>
            Energy.<br /><span style={{ color: "#10b981" }}>Contracts.</span><br />Delivered.
          </h2>
          <p className="text-slate-700 text-base leading-relaxed mb-6">
            KJS West Global Resources Enterprises is a premier Oil &amp; Gas and General Contracting company
            headquartered in West Africa, with an international footprint spanning <strong className="text-slate-900">18 countries</strong> across
            Africa, Europe, and the Middle East.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-10">
            We supply energy, execute contracts, and build the infrastructure that powers economies —
            combining deep regional expertise with global market reach.
          </p>
          <Link to="/about"
            className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all hover:gap-5"
            style={{ background: "linear-gradient(135deg,#10b981,#34d399)", color: "#ffffff" }}>
            Read More <FiArrowRight />
          </Link>
        </div>

        {/* Right - Image + Overlay Cards */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
            alt="Energy infrastructure"
            className="w-full h-96 object-cover rounded-sm"
            style={{ filter: "brightness(0.7)" }}
          />
          <div className="absolute -bottom-6 -left-6 p-6 shadow-2xl" style={{ background: "#ffffff", border: "1px solid rgba(16,185,129,0.3)" }}>
            <div className="text-4xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif", color: "#10b981" }}>18</div>
            <div className="text-sm text-slate-700 mt-1 uppercase tracking-widest">Countries Active</div>
          </div>
          <div className="absolute -top-6 -right-6 p-6 shadow-2xl" style={{ background: "#10b981" }}>
            <div className="text-4xl font-black" style={{ color: "#ffffff", fontFamily: "'Georgia', serif" }}>20+</div>
            <div className="text-sm font-bold mt-1 uppercase tracking-widest" style={{ color: "#ffffff" }}>Years Operating</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── WHY CHOOSE US ────────────────────────────────────────────────────────────
function WhyChooseUs() {
  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10" style={{ background: "#10b981" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Our Advantage</span>
            <div className="h-px w-10" style={{ background: "#10b981" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>Why Choose Us</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <MdVerified size={32} />, title: "Proven Track Record",
              text: "Over two decades of successfully executed mega-projects, complex supply chains, and sovereign energy contracts across 18 nations."
            },
            {
              icon: <GiWorld size={32} />, title: "Global Network",
              text: "Unmatched operational reach combining deep West African roots with international hubs in London, Dubai, and Singapore."
            },
            {
              icon: <MdHealthAndSafety size={32} />, title: "Uncompromising Safety",
              text: "Strict adherence to uncompromising HSE protocols and ISO standards, ensuring zero-harm operations in all environments."
            },
            {
              icon: <MdHandshake size={32} />, title: "Strategic Partnerships",
              text: "Direct access to key governmental bodies, national oil companies, and tier-1 global engineering firms for seamless execution."
            },
            {
              icon: <GiGears size={32} />, title: "End-to-End Execution",
              text: "From upstream crude sourcing to complete EPC infrastructure delivery, we handle the entire project lifecycle internally."
            },
            {
              icon: <FiAward size={32} />, title: "Compliance & Integrity",
              text: "Rigorous alignment with international anti-corruption frameworks, FCPA regulations, and uncompromising financial transparency."
            },
          ].map((d, idx) => (
            <div key={idx} className="flex flex-col gap-6 p-10 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              style={{ borderColor: "rgba(16,185,129,0.15)", background: "#ffffff" }}>
              <div className="w-16 h-16 flex items-center justify-center transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white"
                style={{ background: "rgba(16,185,129,0.08)", color: "#10b981" }}>
                {d.icon}
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-xl mb-3">{d.title}</h3>
                <p className="text-slate-600 leading-relaxed">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MARKETS ─────────────────────────────────────────────────────────────────
function Markets() {
  const regions = [
    { label: "West Africa", icon: <GiWorld size={24} />, items: ["Nigeria", "Ghana", "Senegal", "Côte d'Ivoire", "Cameroon"] },
    { label: "Europe", icon: <FiGlobe size={24} />, items: ["United Kingdom", "Netherlands", "France", "Spain", "Italy"] },
    { label: "Africa & Middle East", icon: <GiCargoShip size={24} />, items: ["UAE", "Saudi Arabia", "Egypt", "Angola", "Mozambique"] },
    { label: "North America", icon: <FiGlobe size={24} />, items: ["United States", "Canada"] },
  ];

  return (
    <section id="markets" className="py-24 relative overflow-hidden" style={{ background: "#f8fafc" }}>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, #10b981 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10" style={{ background: "#10b981" }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Global Presence</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
            Markets &amp;<br />Regions Covered
          </h2>
          <p className="text-slate-600 max-w-md text-sm leading-relaxed mt-4 md:mt-0">
            Operating across sovereign partnerships, international trading routes, and maritime logistics corridors spanning 20 active countries.
          </p>
        </div>

        {/* World Map Placeholder */}
        <div className="relative mb-16 rounded-sm overflow-hidden" style={{ height: 320, background: "rgba(226,232,240,0.3)", border: "1px solid rgba(16,185,129,0.2)" }}>
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80"
            alt="World map" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-black text-slate-900 opacity-20" style={{ fontFamily: "'Georgia', serif" }}>20 NATIONS</div>
              <div className="text-emerald-600 tracking-widest text-sm uppercase mt-2">Active Operations Worldwide</div>
            </div>
          </div>
          {/* Dots */}
          {[
            { label: "Lagos", top: "55%", left: "44%" },
            { label: "London", top: "25%", left: "47%" },
            { label: "Dubai", top: "42%", left: "60%" },
            { label: "Singapore", top: "57%", left: "78%" },
          ].map(dot => (
            <div key={dot.label} className="absolute flex flex-col items-center" style={{ top: dot.top, left: dot.left }}>
              <div className="w-3 h-3 rounded-full animate-ping absolute" style={{ background: "#10b981", opacity: 0.6 }} />
              <div className="w-3 h-3 rounded-full relative" style={{ background: "#10b981" }} />
              <span className="text-xs text-emerald-600 mt-1 font-bold tracking-wider">{dot.label}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {regions.map(r => (
            <div key={r.label} className="p-8 border" style={{ borderColor: "rgba(16,185,129,0.2)", background: "rgba(16,185,129,0.03)" }}>
              <div className="flex items-center gap-3 mb-6" style={{ color: "#10b981" }}>
                {r.icon}
                <h3 className="text-slate-900 font-bold text-lg">{r.label}</h3>
              </div>
              <ul className="space-y-2">
                {r.items.map(i => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                    <FiCheck size={12} style={{ color: "#10b981" }} className="shrink-0" />{i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trading Features */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Export/Import Coverage", "Shipping Logistics", "Regional Trading Routes", "Sovereign Partnerships"].map(f => (
            <div key={f} className="p-4 text-center border text-xs uppercase tracking-widest font-bold text-slate-600 hover:text-emerald-600 transition-colors"
              style={{ borderColor: "rgba(16,185,129,0.15)" }}>
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TRADING ─────────────────────────────────────────────────────────────────
function Trading() {
  const items = [
    { icon: <GiOilDrum size={22} />, label: "Crude Sourcing & Offtake Agreements" },
    { icon: <BsFuelPumpFill size={22} />, label: "Bulk Petroleum Supply" },
    { icon: <GiFactory size={22} />, label: "Storage and Terminal Access" },
    { icon: <RiShipLine size={22} />, label: "Shipping and Vessel Chartering" },
    { icon: <FiTrendingUp size={22} />, label: "Delivery Timelines & Scheduling" },
    { icon: <MdHandshake size={22} />, label: "Government and Private Partnerships" },
  ];

  return (
    <section className="py-24" style={{ background: "#f1f5f9" }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: "#10b981" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Trading & Supply</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
            Operational Trading<br />Capabilities
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-10">
            Our trading desk operates with speed, precision, and regulatory discipline across every major energy corridor —
            from upstream sourcing to last-mile delivery.
          </p>
          <Link smooth to="/#contact" className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-widest"
            style={{ background: "linear-gradient(135deg,#10b981,#34d399)", color: "#ffffff" }}>
            Discuss a Supply Deal <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(item => (
            <div key={item.label} className="flex items-center gap-4 p-5 border hover:border-emerald-500/50 transition-all group"
              style={{ borderColor: "rgba(16,185,129,0.2)", background: "#ffffff" }}>
              <div className="w-10 h-10 flex items-center justify-center shrink-0"
                style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                {item.icon}
              </div>
              <span className="text-sm text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── INFRASTRUCTURE ──────────────────────────────────────────────────────────
function Infrastructure() {
  const items = [
    { icon: <MdEngineering size={28} />, title: "EPC Services", desc: "Full Engineering, Procurement & Construction execution from concept to commissioning." },
    { icon: <GiPipes size={28} />, title: "Pipeline Installation", desc: "High-pressure, large-diameter pipeline deployment across challenging terrain environments." },
    { icon: <GiFactory size={28} />, title: "Terminal & Depot Development", desc: "Petroleum terminal construction, storage expansion, and loading infrastructure." },
    { icon: <GiGears size={28} />, title: "Maintenance & Inspection", desc: "Preventive and corrective maintenance programs aligned with international standards." },
    { icon: <GiElectric size={28} />, title: "Energy Modernization", desc: "Upgrading legacy energy systems and integrating modern operational frameworks." },
    { icon: <GiHammerNails size={28} />, title: "Civil & Industrial Works", desc: "Industrial plant construction, civil works, and allied infrastructure services." },
  ];

  return (
    <section className="py-24 relative" style={{ background: "#f8fafc" }}>
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
          alt="Engineering" className="w-full h-full object-cover opacity-5" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10" style={{ background: "#10b981" }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Infrastructure & Engineering</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
            Engineering-Grade<br />Infrastructure Capability
          </h2>
          <p className="text-slate-600 max-w-sm text-sm leading-relaxed">
            Built to international engineering standards, executed in the world's most demanding environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.title} className="p-8 border group hover:border-emerald-500/40 transition-all"
              style={{ borderColor: "rgba(16,185,129,0.15)", background: "rgba(255,255,255,0.8)" }}>
              <div className="mb-5" style={{ color: "#10b981" }}>{item.icon}</div>
              <h3 className="text-slate-900 font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── INDUSTRIES ──────────────────────────────────────────────────────────────
function Industries() {
  const list = [
    { icon: <GiMining size={28} />, label: "Refineries" },
    { icon: <RiGovernmentLine size={28} />, label: "Government Agencies" },
    { icon: <GiFactory size={28} />, label: "Industrial Plants" },
    { icon: <GiElectric size={28} />, label: "Power Generation" },
    { icon: <BsBuilding size={28} />, label: "Construction & Infrastructure" },
    { icon: <RiShipLine size={28} />, label: "Maritime & Logistics" },
    { icon: <GiOilDrum size={28} />, label: "Upstream Oil Producers" },
    { icon: <GiCargoShip size={28} />, label: "Shipping & Trading Firms" },
  ];
  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10" style={{ background: "#10b981" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Industries Served</span>
            <div className="h-px w-10" style={{ background: "#10b981" }} />
          </div>
          <h2 className="text-4xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>Sectors We Power</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {list.map(i => (
            <div key={i.label} className="flex flex-col items-center justify-center gap-4 p-8 text-center border hover:border-emerald-500/50 hover:-translate-y-1 transition-all cursor-pointer"
              style={{ borderColor: "rgba(16,185,129,0.15)", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ color: "#10b981" }}>{i.icon}</div>
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      img: imgProjBuildingConstruction,
      title: "Civil Infrastructure Construction",
      location: "West Africa", type: "General Contracting", status: "Completed",
      result: "Delivered large-scale civil construction project on schedule, meeting all HSE requirements."
    },
    {
      img: imgProjBuildingConstruction2,
      title: "Commercial Building Development",
      location: "Nigeria", type: "General Contracting", status: "Completed",
      result: "Multi-storey commercial facility built from groundwork to commissioning."
    },
    {
      img: imgProjCopperCathode,
      title: "Copper Cathode Trading",
      location: "International", type: "Commodities", status: "Ongoing",
      result: "Active supply and export of high-grade copper cathodes to international buyers."
    },
    {
      img: imgProjRawGold,
      title: "Raw Gold Commodity Supply",
      location: "West Africa", type: "Commodities", status: "Ongoing",
      result: "Sourcing and export of raw gold in compliance with international trade regulations."
    },
    {
      img: imgProjRefinedGold,
      title: "Refined Gold Trading",
      location: "International", type: "Commodities", status: "Completed",
      result: "Facilitated refined gold trading contracts across multiple international markets."
    },
    {
      img: imgProjRiceSupply,
      title: "Agricultural Commodity Supply",
      location: "West Africa", type: "General Commodities", status: "Ongoing",
      result: "Large-volume rice supply contracts supporting regional food distribution networks."
    },
    {
      img: imgProjSolarSupply,
      title: "Solar Energy Infrastructure",
      location: "Africa", type: "Energy", status: "Completed",
      result: "Delivered and commissioned solar energy supply infrastructure for off-grid communities."
    },
    {
      img: imgProjWhatsApp,
      title: "Strategic Energy Project",
      location: "West Africa", type: "Upstream Oil & Gas", status: "Ongoing",
      result: "Active upstream energy project delivering operational output to national supply chains."
    },
    {
      img: imgProjCopperConc1,
      title: "Copper Concentrate Supply – Phase I",
      location: "International", type: "Commodities", status: "Completed",
      result: "Executed Phase I copper concentrate supply agreement with international smelters."
    },
    {
      img: imgProjCopperConc2,
      title: "Copper Concentrate Supply – Phase II",
      location: "International", type: "Commodities", status: "Ongoing",
      result: "Phase II expansion of copper concentrate trading operations with extended offtake terms."
    },
  ];

  return (
    <section id="projects" className="py-24" style={{ background: "#f1f5f9" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10" style={{ background: "#10b981" }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Portfolio</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>Project Highlights</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.title} className="group overflow-hidden border hover:border-emerald-500/40 transition-all"
              style={{ borderColor: "rgba(16,185,129,0.15)", background: "#ffffff" }}>
              <div className="h-48 overflow-hidden relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70" />
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-widest"
                  style={{ background: p.status === "Completed" ? "rgba(16,185,129,0.9)" : "rgba(226,232,240,0.9)", color: p.status === "Completed" ? "#ffffff" : "#10b981" }}>
                  {p.status}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FiMapPin size={12} style={{ color: "#10b981" }} />
                  <span className="text-xs text-slate-500 uppercase tracking-widest">{p.location}</span>
                  <span className="text-gray-700">·</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">{p.type}</span>
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── COMPLIANCE ───────────────────────────────────────────────────────────────
function Compliance() {
  const items = [
    { icon: <MdHealthAndSafety size={28} />, label: "HSE Policy", desc: "Comprehensive Health, Safety and Environment framework applied across all operational sites." },
    { icon: <MdSecurity size={28} />, label: "Anti-Corruption Compliance", desc: "Adherence to FCPA, UK Bribery Act, and UNGC anti-corruption standards." },
    { icon: <FiShield size={28} />, label: "Regulatory Compliance", desc: "Full compliance with local and international oil & gas regulatory frameworks." },
    { icon: <FiAward size={28} />, label: "Quality Assurance", desc: "ISO-aligned quality management systems embedded at every project stage." },
    { icon: <MdVerified size={28} />, label: "ISO Certification", desc: "ISO 9001 · ISO 14001 · ISO 45001 compliance standards in active pursuit." },
    { icon: <BsBarChartFill size={28} />, label: "Audit & Governance", desc: "Independent audit functions ensuring transparency in all financial and operational dealings." },
  ];

  return (
    <section id="compliance" className="py-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10" style={{ background: "#10b981" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Safety & Governance</span>
            <div className="h-px w-10" style={{ background: "#10b981" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Compliance, Safety &amp;<br />Certifications
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
            Our compliance culture is non-negotiable. Every operation adheres to the highest standards of safety, ethics, and regulatory governance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {items.map(i => (
            <div key={i.label} className="p-8 border hover:border-emerald-500/40 transition-all"
              style={{ borderColor: "rgba(16,185,129,0.15)", background: "rgba(255,255,255,0.6)" }}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 flex items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                  {i.icon}
                </div>
                <h3 className="text-slate-900 font-bold">{i.label}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>

        {/* Badge Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {["ISO 9001", "ISO 14001", "ISO 45001", "FCPA Aligned", "UN Global Compact"].map(b => (
            <div key={b} className="flex items-center justify-center p-4 border text-center"
              style={{ borderColor: "rgba(16,185,129,0.3)", background: "rgba(16,185,129,0.05)" }}>
              <span className="text-xs font-black tracking-widest uppercase" style={{ color: "#10b981" }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CLIENTS ─────────────────────────────────────────────────────────────────
function Clients() {
  const names = [
    "National Oil Company", "Global Refinery Group", "Maritime Logistics Partner",
    "Regional Government Agency", "Offshore Supplier Network", "Continental Energy Corp",
  ];
  return (
    <section className="py-16 border-t border-b" style={{ borderColor: "rgba(16,185,129,0.1)", background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Partners & Clients</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {names.map(n => (
            <div key={n} className="h-16 flex items-center justify-center border text-center px-3"
              style={{ borderColor: "rgba(16,185,129,0.15)", background: "rgba(255,255,255,0.02)" }}>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">{n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials() {
  const tms = [
    { quote: "KJS West Global delivered consistent crude supply volumes with strict compliance standards. Their operational discipline is unmatched in the West African market.", name: "Director of Procurement", org: "National Oil Company" },
    { quote: "The pipeline project was delivered ahead of schedule and within budget. KJS West Global's engineering team operates at an international standard.", name: "VP Infrastructure", org: "Regional Energy Authority" },
    { quote: "A trusted long-term partner for bulk petroleum trading. Their market intelligence and delivery reliability give us competitive certainty.", name: "Chief Supply Officer", org: "Global Refinery Group" },
  ];

  return (
    <section className="py-24" style={{ background: "#f1f5f9" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10" style={{ background: "#10b981" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Client Testimony</span>
            <div className="h-px w-10" style={{ background: "#10b981" }} />
          </div>
          <h2 className="text-4xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>What Partners Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tms.map(t => (
            <div key={t.name} className="p-8 border flex flex-col gap-6"
              style={{ borderColor: "rgba(16,185,129,0.2)", background: "#ffffff" }}>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <FiStar key={i} size={12} style={{ color: "#10b981", fill: "#10b981" }} />)}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic flex-1">"{t.quote}"</p>
              <div className="border-t pt-4" style={{ borderColor: "rgba(16,185,129,0.15)" }}>
                <div className="text-slate-900 font-bold text-sm">{t.name}</div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{t.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#0f172a" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-c6a4d14eff50?w=1600&q=80"
          alt="Energy Infrastructure"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-10" style={{ background: "#10b981" }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Get In Touch</span>
          <div className="h-px w-10" style={{ background: "#10b981" }} />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
          Looking for a Reliable<br /><span style={{ color: "#10b981" }}>Energy Supply Partner?</span>
        </h2>
        <p className="text-slate-300 text-lg mb-12 max-w-xl mx-auto">
          Connect with our trading and supply team to discuss contracts, offtake agreements, or infrastructure requirements.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link smooth to="/#contact"
            className="inline-flex items-center gap-3 px-10 py-4 font-bold text-sm uppercase tracking-widest transition-transform hover:-translate-y-1"
            style={{ background: "linear-gradient(135deg,#10b981,#34d399)", color: "#ffffff" }}>
            Request Quote <FiArrowRight />
          </Link>
          <Link smooth to="/#contact"
            className="inline-flex items-center gap-3 px-10 py-4 font-bold text-sm uppercase tracking-widest border text-white transition-colors hover:bg-emerald-500 hover:border-emerald-500 hover:text-white"
            style={{ borderColor: "rgba(16,185,129,0.5)" }}>
            Schedule Meeting <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  return (
    <section id="contact" className="py-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: "#10b981" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
            Get In<br />Touch
          </h2>
          <div className="space-y-6">
            {[
              { icon: <FiMail size={18} />, label: "Email", val: "info@kjswestglobal.com" },
              { icon: <FiMapPin size={18} />, label: "Headquarters", val: "6th Avenue 63 Road, Plot 897, Festac Town, Lagos, Nigeria." },
              { icon: <FiGlobe size={18} />, label: "International Offices", val: "London · Dubai · Singapore · Thailand · Cannada · United Stateada 
            ].map(c => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">{c.label}</div>
                  <div className="text-slate-900 font-medium">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="p-8 border" style={{ borderColor: "rgba(16,185,129,0.2)", background: "rgba(255,255,255,0.6)" }}>
          <div className="space-y-4">
            {[
              { key: "name", label: "Full Name", type: "text" },
              { key: "email", label: "Email Address", type: "email" },
              { key: "subject", label: "Subject", type: "text" },
            ].map(f => (
              <div key={f.key}>
                <label className="block text-xs uppercase tracking-widest text-slate-600 mb-2">{f.label}</label>
                <input type={f.type} value={form[f.key]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full px-4 py-3 text-sm text-slate-900 bg-transparent border outline-none focus:border-emerald-500 transition-colors"
                  style={{ borderColor: "rgba(16,185,129,0.3)" }} />
              </div>
            ))}
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-600 mb-2">Message</label>
              <textarea rows={5} value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 text-sm text-slate-900 bg-transparent border outline-none focus:border-emerald-500 transition-colors resize-none"
                style={{ borderColor: "rgba(16,185,129,0.3)" }} />
            </div>
            <button
              className="w-full py-4 font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90 mt-2"
              style={{ background: "linear-gradient(135deg,#10b981,#34d399)", color: "#ffffff" }}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#030810" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="font-black text-slate-100 text-lg mb-1" style={{ fontFamily: "'Georgia', serif" }}>
            KJS <span style={{ color: "#10b981" }}>WEST</span> GLOBAL
          </div>
          <div className="text-gray-400 text-xs tracking-widest uppercase mb-4">Resources Enterprises</div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Premier Oil &amp; Gas and General Contracting enterprise headquartered in West Africa.
          </p>
          <div className="flex gap-3 mt-6">
            {[FiLinkedin, FiTwitter, FiFacebook].map((Icon, i) => (
              <Link key={i} smooth to="/#" className="w-8 h-8 flex items-center justify-center border text-slate-300 hover:text-emerald-500 hover:border-emerald-500 transition-all"
                style={{ borderColor: "rgba(16,185,129,0.3)" }}>
                <Icon size={14} />
              </Link>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#10b981" }}>Quick Links</div>
          <ul className="space-y-3">
            {[
              { label: "Home", path: "/#" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/#services" },
              { label: "Projects", path: "/#projects" },
              { label: "Compliance", path: "/compliance-policy" },
              { label: "Contact", path: "/#contact" }
            ].map(l => (
              <li key={l.label}>
                <Link smooth to={l.path} className="text-slate-300 text-xs uppercase tracking-widest hover:text-emerald-500 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#10b981" }}>Legal</div>
          <ul className="space-y-3">
            {[
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Terms & Conditions", path: "/terms-conditions" },
              { label: "Compliance Policy", path: "/compliance-policy" }
            ].map(l => (
              <li key={l.label}>
                <Link smooth to={l.path} className="text-slate-300 text-xs uppercase tracking-widest hover:text-emerald-500 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#10b981" }}>Offices</div>
          <ul className="space-y-3 text-slate-300 text-xs">
            <li className="flex items-center gap-2"><FiMail size={12} /> info@kjswestglobal.com</li>
            <li>6th Avenue 63 Road, Plot 897, Festac Town, Lagos, Nigeria.</li>
            <li>London, United Kingdom</li>
            <li>Dubai, UAE</li>
            <li>Singapore</li>
          </ul>
        </div>
      </div>

      <div className="border-t px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto"
        style={{ borderColor: "rgba(16,185,129,0.15)" }}>
        <span className="text-gray-400 text-xs">
          © {year} KJS West Global Resources Enterprises. All rights reserved.
        </span>
        <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(16,185,129,0.6)" }}>
          Energy · Contracts · Delivered
        </span>
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Markets />
      <Trading />
      <Infrastructure />
      <Industries />
      <Projects />
      <Compliance />
      <Clients />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
}

// We also export Navbar and Footer from here temporarily so App.jsx can use them
export { Navbar, Footer };
