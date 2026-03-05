"use client";

import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux/features/theme/themeSlice.js";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Shield,
  Heart,
  Send,
  Lock,
  CheckCircle,
  Rss,
} from "lucide-react";
import Link from "next/link";
import { footerLinks, socialLinks } from "../../assets/assets.js";

export default function Footer() {
  const darkMode = useSelector(selectDarkMode);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer
      className={`relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-neutral-950" : "bg-white"
      }`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-linear-to-b from-transparent via-white/2 to-white/5"
            : "bg-linear-to-b from-transparent via-neutral-900/2 to-neutral-900/5"
        }`}
      />

      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="relative z-10">
        {/* ── Newsletter ── */}
        <div
          className={`border-b ${darkMode ? "border-white/10" : "border-neutral-200"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 rounded-full text-indigo-500 text-sm font-medium mb-4">
                  <Rss className="w-4 h-4" />
                  <span>Newsletter</span>
                </div>
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-neutral-900"}`}
                >
                  Stay Updated on Security Trends
                </h3>
                <p
                  className={`text-sm leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  Get weekly tips, new challenges, and cybersecurity insights
                  delivered to your inbox. Join 10,000+ developers.
                </p>
              </div>

              <div>
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="relative flex-1">
                    <Mail
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className={`w-full pl-12 pr-4 py-4 rounded-xl outline-none transition-all ${
                        darkMode
                          ? "bg-white/5 text-white placeholder-neutral-500 focus:ring-2 focus:ring-indigo-500/50"
                          : "bg-neutral-100 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-indigo-500/50"
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all whitespace-nowrap cursor-pointer"
                  >
                    {isSubscribed ? (
                      <>
                        <CheckCircle className="w-5 h-5" /> Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
                <p
                  className={`mt-3 text-sm flex items-center gap-2 ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
                >
                  <Lock className="w-4 h-4 shrink-0" />
                  No spam, unsubscribe anytime. Read our{" "}
                  <Link href="#" className="text-indigo-500 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Main Links ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span
                  className={`text-xl font-bold ${darkMode ? "text-white" : "text-neutral-900"}`}
                >
                  the<span className="text-indigo-500">cyber</span>dev
                </span>
              </Link>
              <p
                className={`mb-6 max-w-sm text-sm leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
              >
                Master cybersecurity through gamified coding challenges. Think
                like a hacker, code like a pro. Built for developers who care
                about security.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      darkMode
                        ? `bg-white/5 text-neutral-400 ${social.hoverBg} ${social.hoverText}`
                        : `bg-neutral-100 text-neutral-500 ${social.hoverBg} ${social.hoverText}`
                    }`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4
                className={`text-sm font-semibold mb-4 ${darkMode ? "text-white" : "text-neutral-900"}`}
              >
                {footerLinks.product.title}
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-2 text-sm transition-colors duration-200 ${darkMode ? "text-neutral-400 hover:text-indigo-400" : "text-neutral-600 hover:text-indigo-600"}`}
                    >
                      {link.name}
                      {link.badge && (
                        <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-500 text-xs font-medium rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4
                className={`text-sm font-semibold mb-4 ${darkMode ? "text-white" : "text-neutral-900"}`}
              >
                {footerLinks.resources.title}
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors duration-200 ${darkMode ? "text-neutral-400 hover:text-indigo-400" : "text-neutral-600 hover:text-indigo-600"}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4
                className={`text-sm font-semibold mb-4 ${darkMode ? "text-white" : "text-neutral-900"}`}
              >
                {footerLinks.company.title}
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-2 text-sm transition-colors duration-200 ${darkMode ? "text-neutral-400 hover:text-indigo-400" : "text-neutral-600 hover:text-indigo-600"}`}
                    >
                      {link.name}
                      {link.badge && (
                        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-xs font-medium rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4
                className={`text-sm font-semibold mb-4 ${darkMode ? "text-white" : "text-neutral-900"}`}
              >
                {footerLinks.legal.title}
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors duration-200 ${darkMode ? "text-neutral-400 hover:text-indigo-400" : "text-neutral-600 hover:text-indigo-600"}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className={`border-t ${darkMode ? "border-white/10" : "border-neutral-200"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div
                className={`flex items-center gap-2 text-sm ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
              >
                <span>© {new Date().getFullYear()} thecyberdev.</span>
                <span>All rights reserved.</span>
              </div>

              <div
                className={`flex items-center gap-1.5 text-sm ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
              >
                <span>Made</span>
                <span>for developers who</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>security</span>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className={`flex items-center gap-2 text-sm transition-colors duration-200 ${darkMode ? "text-neutral-500 hover:text-white" : "text-neutral-400 hover:text-neutral-900"}`}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  All systems operational
                </Link>
                <span
                  className={`text-sm ${darkMode ? "text-neutral-600" : "text-neutral-300"}`}
                >
                  v1.0.0-beta
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
