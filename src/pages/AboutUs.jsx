import { FiCheck, FiGlobe, FiTarget, FiAward, FiArrowRight } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";

import imgConstruction from "../assets/staffs/Director in charge of Construction  Marketing DR Iphie Texas.png";
import imgCopper from "../assets/staffs/Director in charge of copper cathode & Copper Concentrate Mr Michael Los Angels US.png";
import imgLogistics from "../assets/staffs/Director in charge of logistics Units Mr Sunny David.png";
import imgProcurement from "../assets/staffs/Dr  Divia Director  procurement Manager Mary land USA.png";
import imgHRM from "../assets/staffs/HRM Noppatsorn Sangthong.png";
import imgMD from "../assets/staffs/MD Mrs Glory Israel.png";
import imgCEO from "../assets/staffs/Mr Kelvin Israel Director CEO Kjswest Global Resources Enterprises.png";
import imgCommodities from "../assets/staffs/Mr Mavin South Africa Director in charge of General Commodities.png";
import imgOilGas from "../assets/staffs/Mr Muhamed Director Oil & Gas Unit kingdom of Bahrain.png";
import imgLegal from "../assets/staffs/Barrister Kingsley Managing Director Legal.png";

function getFlagUrl(iso2) {
  if (!iso2 || typeof iso2 !== "string") return null;
  const code = iso2.trim().toLowerCase();
  if (!/^[a-z]{2}$/.test(code)) return null;
  return `https://flagcdn.com/w40/${code}.png`;
}

function normalizeCountryLabel(s) {
  return (s ?? "")
    .toString()
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function roleToCountryLabel(role) {
  if (!role) return null;
  const m = role.match(/\(([^)]+)\)\s*$/);
  if (!m) return null;
  return m[1]?.trim() || null;
}

function countryLabelToIso2(countryLabel) {
  const k = normalizeCountryLabel(countryLabel);
  if (!k) return null;

  const map = {
    "usa": "US",
    "us": "US",
    "united states": "US",
    "u.s.a": "US",
    "u.s.": "US",
    "texas": "US",
    "mary land": "US",
    "maryland": "US",
    "la": "US",
    "los angels": "US",
    "los angeles": "US",
    "south africa": "ZA",
    "bahrain": "BH",
    "uae": "AE",
    "united arab emirates": "AE",
    "uk": "GB",
    "united kingdom": "GB",
    "nigeria": "NG",
    "ghana": "GH",
    "singapore": "SG",
    "thailand": "TH",
  };

  if (map[k]) return map[k];

  // Partial matches: check if the label contains any of our mapped keys
  for (const key of Object.keys(map)) {
    if (k.includes(key)) return map[key];
  }

  return null;
}

export default function AboutUs() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 flex items-center overflow-hidden" style={{ background: "#f8fafc" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Corporate structure" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(248,250,252,0.96) 0%, rgba(255,255,255,0.85) 50%, rgba(226,232,240,0.7) 100%)"
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: "#10b981" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>About Our Company</span>
            <div className="h-px w-10" style={{ background: "#10b981" }} />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Energy. <span style={{ color: "#10b981" }}>Contracts.</span> Delivered.
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Leading the transformation of the African and international energy markets through integrated supply, engineering, and general contracting excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              A Legacy of <br/><span style={{ color: "#10b981" }}>Operational Excellence</span>
            </h2>
            <div className="text-slate-700 space-y-6 leading-relaxed">
              <p>
                Founded over 20 years ago, KJS West Global Resources Enterprises began with a singular vision: to bridge the gap between complex energy requirements and reliable, scalable execution in West Africa. 
              </p>
              <p>
                Today, we have expanded into an international powerhouse spanning <strong>18 countries</strong> across Africa, Europe, and the Middle East. Through long-term sovereign partnerships, state-of-the-art engineering practices, and an unwavering commitment to HSE guidelines, we deliver projects and energy supplies that power modern economies.
              </p>
              <p>
                From executing massive upstream crude oil offtake agreements to building end-to-end petroleum pipelines in challenging terrains, our four core divisions work in absolute synergy.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { val: "20+", desc: "Years Active" },
                { val: "18", desc: "Nations" },
                { val: "4", desc: "Core Divisions" },
                { val: "100%", desc: "HSE Compliant" },
              ].map(stat => (
                <div key={stat.desc} className="border-l-2 pl-4" style={{ borderColor: "#10b981" }}>
                  <div className="text-2xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>{stat.val}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Images */}
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="Engineering Team" className="rounded-sm shadow-xl" />
            <div className="absolute -bottom-8 -left-8 p-8 shadow-2xl" style={{ background: "#10b981" }}>
              <BsBuilding size={40} className="text-white mb-4" />
              <div className="text-xl font-bold text-white mb-1">Global HQ</div>
              <div className="text-xs uppercase tracking-widest text-emerald-100 mt-2 max-w-[200px] leading-relaxed">6th Avenue 63 Road, Plot 897, Festac Town, Lagos, Nigeria</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="p-12 border transition-all hover:-translate-y-1 hover:border-emerald-500/50" style={{ background: "#ffffff", borderColor: "rgba(16,185,129,0.15)" }}>
            <div className="w-14 h-14 flex items-center justify-center mb-6" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
              <FiTarget size={28} />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To reliably power global industries through innovative energy trading, uncompromising engineering standards, and robust general contracting services, while fostering sustainable economic impact in the regions we serve.
            </p>
          </div>
          
          <div className="p-12 border transition-all hover:-translate-y-1 hover:border-emerald-500/50" style={{ background: "#ffffff", borderColor: "rgba(16,185,129,0.15)" }}>
            <div className="w-14 h-14 flex items-center justify-center mb-6" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
              <FiGlobe size={28} />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the premier partner of choice for comprehensive energy and infrastructure solutions worldwide, setting the standard for compliance, operational excellence, and environmental stewardship across multiple continents.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team / Who We Are */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: "#10b981" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Who We Are</span>
              <div className="h-px w-10" style={{ background: "#10b981" }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>Leadership Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-6">
              Guided by decades of industry experience, our executive committee drives operational discipline and strategic growth across all international markets.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:gap-0">
            {/* Top Level - CEO */}
            <div className="flex flex-col items-center text-center max-w-sm group">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 shadow-xl group-hover:border-emerald-500 transition-all" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
                <img src={imgCEO} alt="Mr Kelvin Israel" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>Mr Kelvin Israel</h3>
              {(() => {
                const role = "Director CEO (Nigeria)";
                const countryLabel = roleToCountryLabel(role);
                const iso2 = countryLabelToIso2(countryLabel);
                const flagUrl = getFlagUrl(iso2);
                return (
                  <p className="text-xs font-bold uppercase tracking-widest mt-2" style={{ color: "#10b981" }}>
                    {flagUrl ? (
                      <span className="inline-flex items-center gap-2">
                        <img 
                          src={flagUrl} 
                          alt={countryLabel || "Location flag"} 
                          className="h-3.5 w-auto rounded-sm shadow-xs" 
                          style={{ objectFit: 'contain' }}
                        />
                        <span>{role}</span>
                      </span>
                    ) : (
                      role
                    )}
                  </p>
                );
              })()}
              <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                Leading Kjswest Global Resources Enterprises with extensive expertise in international energy markets and sovereign partnerships.
              </p>
            </div>

            {/* Hierarchy Line Connector */}
            <div className="hidden md:flex flex-col items-center w-full mt-4">
              <div className="w-px h-12" style={{ background: "rgba(16,185,129,0.3)" }} />
              <div className="w-[85%] max-w-5xl h-px" style={{ background: "rgba(16,185,129,0.3)" }} />
              <div className="w-[85%] max-w-5xl flex justify-between">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-px h-12" style={{ background: "rgba(16,185,129,0.3)" }} />
                ))}
              </div>
            </div>
            
            {/* Second Tier */}
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-y-16 mt-8 md:mt-0">
              {[
                { name: "Mrs Glory Israel", role: "Managing Director (Nigeria)", img: imgMD },
                { name: "Noppatsorn Sangthong", role: "Human Resource Manager (Thailand)", img: imgHRM },
                { name: "Dr Divia", role: "Director, Procurement (USA)", img: imgProcurement },
                { name: "Dr Iphie", role: "Director, Construction Marketing (Texas)", img: imgConstruction },
                { name: "Mr Michael", role: "Director, Copper Cathode & Concentrate (LA, USA)", img: imgCopper },
                { name: "Mr Sunny David", role: "Director, Logistics Units (Nigeria)", img: imgLogistics },
                { name: "Mr Mavin", role: "Director, General Commodities (South Africa)", img: imgCommodities },
                { name: "Mr Muhamed", role: "Director, Oil & Gas Unit (Bahrain)", img: imgOilGas },
                { name: "Barrister Kingsley", role: "Managing Director, Legal (Nigeria)", img: imgLegal },
              ].map(exec => (
                <div key={exec.name} className="flex flex-col items-center text-center group">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-4 transition-all group-hover:border-emerald-500 shadow-md" style={{ borderColor: "rgba(16,185,129,0.1)" }}>
                    <img src={exec.img} alt={exec.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{exec.name}</h4>
                  {(() => {
                    const countryLabel = roleToCountryLabel(exec.role);
                    const iso2 = countryLabelToIso2(countryLabel);
                    const flagUrl = getFlagUrl(iso2);
                    return (
                      <p className="text-xs uppercase tracking-widest mt-1 text-slate-500 group-hover:text-emerald-600 transition-colors">
                        {flagUrl ? (
                          <span className="inline-flex items-center gap-2">
                            <img 
                              src={flagUrl} 
                              alt={countryLabel || "Location flag"} 
                              className="h-3 w-auto rounded-sm shadow-xs" 
                              style={{ objectFit: 'contain' }}
                            />
                            <span>{exec.role}</span>
                          </span>
                        ) : (
                          exec.role
                        )}
                      </p>
                    );
                  })()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: "#10b981" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Our Principles</span>
              <div className="h-px w-10" style={{ background: "#10b981" }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Integrity", text: "We conduct all business with absolute transparency, adhering strictly to anti-corruption standards." },
              { title: "Safety First", text: "A non-negotiable commitment to Health, Safety, and Environment across every operational site." },
              { title: "Excellence", text: "Delivering engineering-grade precision and elite service quality in every contract we execute." },
              { title: "Partnership", text: "Fostering enduring sovereign and private relationships built on mutual trust and shared success." },
            ].map(v => (
              <div key={v.title} className="p-8 border border-emerald-500/10 hover:border-emerald-500/40" style={{ background: "rgba(248,250,252,0.5)" }}>
                <FiAward size={24} className="mb-4" style={{ color: "#10b981" }} />
                <h4 className="text-lg font-bold text-slate-900 mb-3">{v.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Footer Area */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>Ready to partner with KJS West Global?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Discover how our operational capabilities structure can serve your next major infrastructure or energy trading requirement.</p>
          <Link smooth to="/#contact" className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-widest transition-transform hover:-translate-y-1" style={{ background: "#10b981", color: "#ffffff" }}>
            Get in touch <FiArrowRight />
          </Link>
        </div>
      </section>

    </main>
  );
}
