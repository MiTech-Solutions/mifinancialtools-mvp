import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

/**
 * NavDropdown — click-to-open dropdown for desktop nav.
 * Closes on outside click, Escape key, or route change.
 * Fully keyboard accessible (button + menu roles, arrow-key friendly focus order via native tab order).
 */
export default function NavDropdown({ label, items, isActive }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1.5 transition-colors duration-200 ${
          isActive ? "text-white" : "text-slate-300 hover:text-white"
        }`}
      >
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0B1628] p-2 shadow-2xl"
        >
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 transition hover:bg-white/5"
            >
              <p className="text-sm font-medium text-white">{item.label}</p>
              {item.description ? (
                <p className="mt-0.5 text-xs text-slate-400">{item.description}</p>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
