import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiShield, FiAward } from "react-icons/fi";
import { MdHealthAndSafety, MdSecurity } from "react-icons/md";

export default function CompliancePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold uppercase tracking-widest text-xs mb-10 transition-colors">
          <FiArrowLeft /> Back to Home
        </Link>
        <div className="bg-white p-10 md:p-16 border" style={{ borderColor: "rgba(16,185,129,0.15)" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: "#10b981" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Regulatory Standards</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Compliance Policy
          </h1>
          <p className="text-slate-600 text-base leading-relaxed mb-10 pb-6 border-b" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
            Our compliance culture is non-negotiable. Every operation adheres to the highest standards of safety, ethics, and regulatory governance worldwide.
          </p>
          
          <div className="space-y-12">
            {/* HSE Policy */}
            <section className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-sm" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                <MdHealthAndSafety size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Health, Safety, and Environment (HSE)</h2>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                  KJS West Global Resources Enterprises places the highest priority on the health and safety of our workforce, contractors, and the communities where we operate. Our comprehensive HSE framework enforces zero-harm objectives through rigorous hazard identification, environmental impact mitigation, and strict deployment of personal protective systems across all pipeline, terminal, and upstream operational sites.
                </p>
              </div>
            </section>

            {/* Anti Corruption */}
            <section className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-sm" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                <MdSecurity size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Anti-Corruption & FCPA Compliance</h2>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                  We maintain a zero-tolerance approach toward bribery and corruption. All operational directors, trading executives, and localized procurement teams are mandated to comply strictly with the US Foreign Corrupt Practices Act (FCPA), the UK Bribery Act, and corresponding anti-graft legislation in the West African, European, and Middle Eastern jurisdictions in which we operate. Thorough due-diligence is conducted on all third-party intermediaries and sovereign negotiations.
                </p>
              </div>
            </section>

            {/* Regulatory Compliance */}
            <section className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-sm" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                <FiShield size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">International Trade & Sanction Laws</h2>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                  As an entity engaged in transnational crude supply, vessel chartering, and petroleum product offtake agreements, KJS West Global rigorously monitors and complies with all global trade sanctions, embargos, and export control regulations enforced by the United Nations, European Union, and OFAC.
                </p>
              </div>
            </section>

            {/* Quality Certifications */}
            <section className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-sm" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                <FiAward size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">ISO Standard Alignment</h2>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-4">
                  Our Engineering, Procurement, and Construction (EPC), as well as general contracting divisions operate in proactive alignment with leading global quality management standards:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                   <div className="border text-center py-2 text-xs font-bold uppercase tracking-widest" style={{ borderColor: "rgba(16,185,129,0.2)", color: "#10b981" }}>ISO 9001 Alignment</div>
                   <div className="border text-center py-2 text-xs font-bold uppercase tracking-widest" style={{ borderColor: "rgba(16,185,129,0.2)", color: "#10b981" }}>ISO 14001 Alignment</div>
                   <div className="border text-center py-2 text-xs font-bold uppercase tracking-widest" style={{ borderColor: "rgba(16,185,129,0.2)", color: "#10b981" }}>ISO 45001 Alignment</div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
