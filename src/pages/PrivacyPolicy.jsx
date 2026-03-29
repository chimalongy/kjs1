import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
            <p className="text-sm uppercase tracking-widest text-slate-500 font-bold border-b pb-4" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
              Last Updated: October 2023
            </p>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>Welcome to KJS West Global Resources Enterprises. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. The Data We Collect About You</h2>
              <p className="mb-3">Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title, and company mapping.</li>
                <li><strong>Contact Data</strong> includes corporate billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. How We Use Your Personal Data</h2>
              <p className="mb-3">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you or your corporate entity.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation globally across our operational jurisdictions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. International Transfers</h2>
              <p>We share your personal data within the KJS West Global corporate group. This will involve transferring your data outside the European Economic Area (EEA) and West African sovereign territories where strict operational confidentiality parameters govern transfers.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. Your Legal Rights</h2>
              <p className="mb-3">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              <p className="mt-4 font-bold text-slate-900">Contact Us for Data inquiries: <a href="mailto:privacy@kjswestglobal.com" className="text-emerald-600 hover:text-emerald-500 transition-colors">privacy@kjswestglobal.com</a></p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
