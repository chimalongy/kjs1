import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function TermsConditions() {
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
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#10b981" }}>Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-10" style={{ fontFamily: "'Georgia', serif" }}>
            Terms & Conditions
          </h1>
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
            <p className="text-sm uppercase tracking-widest text-slate-500 font-bold border-b pb-4" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
              Effective Date: January 2024
            </p>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
              <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and KJS West Global Resources Enterprises ("Company", "we", "us", or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Intellectual Property Rights</h2>
              <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. User Representations</h2>
              <p className="mb-3">By using the Site, you represent and warrant that:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                <li>Your use of the Site will not violate any applicable law or regulation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Client Contracts & Operations</h2>
              <p>All procurement, engineering, and bulk petroleum supply contracts displayed or referenced on this Site are subject to specific sovereign or corporate legal agreements separate from these Terms of Service. Information listed on this Site does not constitute a legally binding trade agreement without signed contractual documentation from authorized legal representatives of KJS West Global.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Modifications and Interruptions</h2>
              <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
              <p>These conditions are governed by and interpreted following the laws of our operational headquarters jurisdictions. KJS West Global Resources Enterprises and yourself irrevocably consent that the courts of the applicable headquarters jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
