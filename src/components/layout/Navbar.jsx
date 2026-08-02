import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/images/mitools-logo.png";
import { useEffect, useState } from "react";
import NavDropdown from "./NavDropdown";
import { calculatorLinks, guideLinks } from "../../data/navLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCalcOpen, setMobileCalcOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setMobileCalcOpen(false);
    setMobileGuidesOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1.5 transition-colors duration-200 ${
      isActive ? "text-white" : "text-slate-300 hover:text-white"
    }`;

  const navTick = (isActive) => (
    <span
      className="h-px w-full transition-all duration-200"
      style={{
        backgroundColor: "#D6A343",
        opacity: isActive ? 1 : 0,
        transform: isActive ? "scaleX(1)" : "scaleX(0)",
      }}
      aria-hidden="true"
    />
  );

  const isCalculatorRoute = calculatorLinks.some((c) => c.path === location.pathname);
  const isGuideRoute =
    location.pathname === "/guides" || guideLinks.some((g) => g.path === location.pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0E1613]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
            <img src={logo} alt="MiTools Logo" className="h-16 w-16 object-contain" />
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold tracking-tight text-white">MiTools</p>
            <p className="text-xs text-slate-400">Smart Money Tools</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass} end>
            {({ isActive }) => (
              <>
                <span>Overview</span>
                {navTick(isActive)}
              </>
            )}
          </NavLink>

          <NavDropdown label="Calculators" items={calculatorLinks} isActive={isCalculatorRoute} />
          <NavDropdown
            label="Guides"
            items={[{ label: "All Guides", path: "/guides", description: "Browse every guide." }, ...guideLinks]}
            isActive={isGuideRoute}
          />
          <NavLink to="/about" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <span>About</span>
                {navTick(isActive)}
              </>
            )}
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <span>Contact</span>
                {navTick(isActive)}
              </>
            )}
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/car-repayment"
            className="inline-flex items-center rounded-xl bg-[#C68F2A] px-4 py-2 text-sm font-medium text-[#0E1613] transition hover:bg-[#D6A343]"
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
        <div className="animate-slide-down border-t border-white/10 bg-[#171F1B] md:hidden">          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition ${
                    isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Overview
              </NavLink>

              {/* Calculators accordion */}
              <button
                type="button"
                onClick={() => setMobileCalcOpen((prev) => !prev)}
                aria-expanded={mobileCalcOpen}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Calculators
                <ChevronDown
                  size={16}
                  className={`transition-transform ${mobileCalcOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileCalcOpen && (
                <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {calculatorLinks.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `rounded-xl px-3 py-2 text-sm transition ${
                          isActive ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}

              {/* Guides accordion */}
              <button
                type="button"
                onClick={() => setMobileGuidesOpen((prev) => !prev)}
                aria-expanded={mobileGuidesOpen}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Guides
                <ChevronDown
                  size={16}
                  className={`transition-transform ${mobileGuidesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileGuidesOpen && (
                <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                  <NavLink
                    to="/guides"
                    end
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-2 text-sm transition ${
                        isActive ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    All Guides
                  </NavLink>
                  {guideLinks.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `rounded-xl px-3 py-2 text-sm transition ${
                          isActive ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition ${
                    isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition ${
                    isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>

            <Link
              to="/car-repayment"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#C68F2A] px-4 py-3 text-sm font-medium text-[#0E1613] transition hover:bg-[#D6A343]"
            >
              Try a calculator
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
