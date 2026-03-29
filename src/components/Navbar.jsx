import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open("/resume.pdf", "_blank");
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-dark/85 backdrop-blur-xl shadow-lg shadow-dark/40"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="relative group" data-cursor="pointer">
            <span className="font-mono text-accent text-2xl font-bold tracking-tight">
              &lt;N /&gt;
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  data-cursor="pointer"
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  <span className="font-mono text-accent text-xs mr-1">
                    0{i + 1}.
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={handleResumeClick}
                data-cursor="pointer"
                className="ml-3 px-4 py-2 rounded border border-accent text-accent text-sm font-mono hover:bg-accent/10 transition-colors duration-200"
              >
                Resume
              </button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-accent text-2xl z-50"
            data-cursor="pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <div className="absolute right-0 top-0 bottom-0 w-[70vw] max-w-xs bg-dark-light shadow-2xl flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-gray-300 hover:text-accent transition-colors"
                >
                  <span className="block font-mono text-accent text-xs mb-1 text-center">
                    0{i + 1}.
                  </span>
                  {link.name}
                </a>
              ))}
              <button
                onClick={(e) => {
                  handleResumeClick(e);
                  setMobileOpen(false);
                }}
                className="mt-4 px-6 py-3 rounded border border-accent text-accent font-mono text-sm hover:bg-accent/10 transition-colors"
              >
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}