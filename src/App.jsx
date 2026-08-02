import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CookieBanner from "./components/common/CookieBanner";
import ScrollToTop from "./components/common/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const CarRepayment = lazy(() => import("./pages/CarRepayment"));
const BondRepayment = lazy(() => import("./pages/BondRepayment"));
const CompoundInterest = lazy(() => import("./pages/CompoundInterest"));
const IncomeTax = lazy(() => import("./pages/IncomeTax"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Guides = lazy(() => import("./pages/Guides"));
const Budgeting = lazy(() => import("./pages/guides/Budgeting"));
const SavingMoney = lazy(() => import("./pages/guides/SavingMoney"));
const CompoundInterestGuide = lazy(() => import("./pages/guides/CompoundInterestGuide"));
const CarFinanceGuide = lazy(() => import("./pages/guides/CarFinanceGuide"));
const BalloonPayments = lazy(() => import("./pages/guides/BalloonPayments"));
const HomeLoans = lazy(() => import("./pages/guides/HomeLoans"));
const CreditScores = lazy(() => import("./pages/guides/CreditScores"));
const DebtManagement = lazy(() => import("./pages/guides/DebtManagement"));
const InvestingBasics = lazy(() => import("./pages/guides/InvestingBasics"));
const RetirementPlanning = lazy(() => import("./pages/guides/RetirementPlanning"));
const TaxBasics = lazy(() => import("./pages/guides/TaxBasics"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-[#0E1613] text-slate-50">
        <Navbar />
        <main className="flex-1">
          <Suspense
            fallback={
              <div className="flex min-h-[60vh] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#D6A343]" />
              </div>
            }
          >
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/car-repayment" element={<CarRepayment />} />
            <Route path="/bond-repayment" element={<BondRepayment />} />
            <Route path="/compound-interest" element={<CompoundInterest />} />
            <Route path="/income-tax" element={<IncomeTax />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/budgeting" element={<Budgeting />} />
            <Route path="/guides/saving-money" element={<SavingMoney />} />
            <Route
              path="/guides/compound-interest-explained"
              element={<CompoundInterestGuide />}
            />
            <Route path="/guides/car-finance" element={<CarFinanceGuide />} />
            <Route path="/guides/balloon-payments" element={<BalloonPayments />} />
            <Route path="/guides/home-loans" element={<HomeLoans />} />
            <Route path="/guides/credit-scores" element={<CreditScores />} />
            <Route path="/guides/debt-management" element={<DebtManagement />} />
            <Route path="/guides/investing-basics" element={<InvestingBasics />} />
            <Route path="/guides/retirement-planning" element={<RetirementPlanning />} />
            <Route path="/guides/tax-basics" element={<TaxBasics />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}
