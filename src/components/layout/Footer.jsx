import { Link } from "react-router-dom";
import { Mail, ShieldCheck } from "lucide-react";
import logo from "../../assets/images/mitools-logo.png"
import { calculatorLinks, guideLinks } from "../../data/navLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A100D]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
<div className="flex items-center justify-center">
  <img
    src={logo}
    alt="MiTools Logo"
    className="h-24 w-24 object-contain"
  />
</div>

            <div>
              <p className="text-base font-semibold text-white">MiTools</p>
              <p className="text-sm text-slate-400">
                Simple calculators for smarter decisions
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            Modern finance tools to help users estimate repayments, compare
            options, and plan better with confidence.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Calculators
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            {calculatorLinks.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Guides
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <Link to="/guides" className="hover:text-white">
              All Guides
            </Link>
            {guideLinks.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Trust
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} aria-hidden="true" />
              <span>Estimates for planning purposes</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} aria-hidden="true" />
              <span>mitechsolutionsza@gmail.com</span>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 text-sm text-slate-400">
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link to="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} MiTools. All rights reserved.</p>
          <p>Built by <a href="https://mitechsolutions.org" target="_blank" rel="noopener noreferrer" className="text-[#E8C685] hover:text-cyan-200">
            MiTechSolutions
          </a>.</p>
        </div>
      </div>
    </footer>
  );
}
