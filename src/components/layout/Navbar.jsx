import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/mitools-logo.png"
import { useState } from "react";

const navItems = [
  { label: "Overview", path: "/" },
  { label: "Car Finance", path: "/car-repayment" },
  { label: "Bond / Mortage", path: "/bond-repayment" },
  { label: "Investments", path: "/compound-interest" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? "text-white" : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111F]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
<Link to="/" className="flex items-center gap-3">
  <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
  <img
    src={logo}
    alt="MiTools Logo"
    className="h-16 w-16 object-contain"
  />
</div>

  <div className="leading-tight">
    <p className="text-base font-semibold tracking-tight text-white">
      MiTools
    </p>
    <p className="text-xs text-slate-400">
      Smart Money Tools
    </p>
  </div>
</Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/car-repayment"
            className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Try a calculator
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-slate-200 transition hover:border-white/20 hover:bg-white/5 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B1628] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 transition ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <Link
              to="/car-repayment"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Try a calculator
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}