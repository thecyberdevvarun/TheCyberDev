"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, toggleDarkMode } from "../../redux/features/theme/themeSlice.js";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Shield } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#challenges", label: "Challenges" },
  { href: "#leaderboard", label: "Leaderboard" },
];

export default function Navbar() {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
        darkMode
          ? "bg-neutral-950/80 border-neutral-800"
          : "bg-white/80 border-neutral-200"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-indigo-500/10">
              <Shield className="w-5 h-5 text-indigo-500" />
            </div>
            <span
              className={`text-base font-bold tracking-tight ${
                darkMode ? "text-white" : "text-neutral-900"
              }`}
            >
              the<span className="text-indigo-500">cyber</span>dev
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  darkMode
                    ? "text-neutral-400 hover:text-white"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                darkMode
                  ? "text-neutral-400 hover:text-white hover:bg-neutral-800"
                  : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* CTA — Desktop */}
            <Link
              href="/signup"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200"
            >
              Start Free
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                darkMode
                  ? "text-neutral-400 hover:text-white hover:bg-neutral-800"
                  : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className={`md:hidden overflow-hidden border-t ${
                darkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <div className="flex flex-col gap-1 py-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      darkMode
                        ? "text-neutral-400 hover:text-white hover:bg-neutral-800/60"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 mx-1 px-4 py-2.5 rounded-lg text-sm font-semibold text-white text-center bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200"
                >
                  Start Free
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
