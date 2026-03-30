import { Link } from "react-router-dom";
import { Calculator, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050D18]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-blue-600 to-cyan-400">
              <Calculator size={20} className="text-white" />
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
            Tools
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <Link to="/car-repayment" className="hover:text-white">
              Car Repayment Calculator
            </Link>
            <Link to="/bond-repayment" className="hover:text-white">
              Bond Repayment Calculator
            </Link>
            <Link to="/compound-interest" className="hover:text-white">
              Compound Interest Calculator
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Trust
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} />
              <span>Estimates for planning purposes</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>support@mitechsolutions.org</span>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 text-sm text-slate-400">
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
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} MiTools. All rights reserved.</p>
          <p>Built by <a href="https://mitechsolutions.org" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">
            MiTechSolutions
          </a>.</p>
        </div>
      </div>
    </footer>
  );
}
