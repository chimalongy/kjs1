import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home, { Navbar, Footer } from './pages/Home';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CompliancePolicy from './pages/CompliancePolicy';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/compliance-policy" element={<CompliancePolicy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
