"use client";

import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux/slices/themeSlice.js";
import { motion } from "framer-motion";
import { Shield, Bug, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { mainFeatures } from "../../assets/assets.js";

export default function Features() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <section
      id="features"
      className={`px-4 relative overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-neutral-950 text-white" : "bg-white text-neutral-900"
      }`}
    >
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl ${
            darkMode ? "bg-indigo-500/10" : "bg-indigo-500/20"
          }`}
        />
        <div
          className={`absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl ${
            darkMode ? "bg-emerald-500/10" : "bg-emerald-500/20"
          }`}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-r from-indigo-500/5 to-emerald-500/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 ${
            darkMode ? "opacity-[0.05]" : "opacity-[0.03]"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border backdrop-blur-sm ${
              darkMode
                ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                : "bg-indigo-50 text-indigo-700 border-indigo-200"
            }`}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
            <span>Features that make learning addictive</span>
          </motion.div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Built for Devs Who{" "}
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hack Back
            </span>
          </h2>

          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              darkMode ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Stop reading about security. Start practicing it. Our platform turns
            cybersecurity into an addictive coding game with real-world
            challenges.
          </p>
        </motion.div>

        {/* ── Main Features Grid ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {mainFeatures.map((feature, i) => (
            <FeatureCard
              key={i}
              feature={feature}
              index={i}
              darkMode={darkMode}
            />
          ))}
        </div>

        {/* ── Code Comparison Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div
            className={`rounded-3xl p-8 md:p-12 border transition-all duration-300 ${
              darkMode
                ? "bg-neutral-800/50 backdrop-blur-xl border-neutral-700/50 shadow-2xl shadow-indigo-500/5"
                : "bg-white/80 backdrop-blur-xl border-neutral-200 shadow-2xl shadow-indigo-500/10"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Description */}
              <div>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full mb-4 ${
                    darkMode
                      ? "bg-red-500/15 text-red-400"
                      : "bg-red-50 text-red-600 border border-red-200"
                  }`}
                >
                  <Bug className="w-4 h-4" />
                  Before vs After
                </div>

                <h3
                  className={`text-2xl md:text-3xl font-bold mb-4 ${
                    darkMode ? "text-white" : "text-neutral-900"
                  }`}
                >
                  See the Vulnerability. Fix the Code.
                </h3>

                <p
                  className={`mb-6 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  Every challenge shows you broken code with real security
                  flaws. Your mission: identify the vulnerability and fix it
                  before attackers exploit it.
                </p>

                <div className="space-y-4">
                  <FeatureStep
                    icon={<Bug className="w-5 h-5" />}
                    title="Spot Vulnerabilities"
                    desc="Learn to identify XSS, SQLi, CSRF, and more in real code"
                    color="red"
                    darkMode={darkMode}
                  />
                  <FeatureStep
                    icon={<Shield className="w-5 h-5" />}
                    title="Apply Fixes"
                    desc="Use proper sanitization, encoding, and security patterns"
                    color="green"
                    darkMode={darkMode}
                  />
                  <FeatureStep
                    icon={<CheckCircle className="w-5 h-5" />}
                    title="Verify & Learn"
                    desc="Run tests to confirm your fix and understand the 'why'"
                    color="indigo"
                    darkMode={darkMode}
                  />
                </div>
              </div>

              {/* Right: Code Preview */}
              <div className="space-y-4">
                {/* Vulnerable Code */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl overflow-hidden border ${
                    darkMode
                      ? "bg-[#0d1117] border-neutral-700"
                      : "bg-[#1e1e1e] border-neutral-300"
                  }`}
                >
                  <div
                    className={`flex items-center justify-between px-4 py-3 ${
                      darkMode ? "bg-red-500/10" : "bg-red-500/15"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Bug className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-medium text-red-500">
                        Vulnerable Code
                      </span>
                    </div>
                    <span className="text-xs text-red-400/70 font-medium">
                      XSS Risk
                    </span>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <div className="flex items-center">
                      <span className="w-8 text-neutral-500 select-none">
                        1
                      </span>
                      <span className="text-blue-400">echo</span>
                      <span className="text-orange-400">{' "Hello, "'}</span>
                      <span className="text-neutral-400">.</span>
                      <span className="text-purple-400">$_GET</span>
                      <span className="text-cyan-400">['name']</span>
                      <span className="text-neutral-400">;</span>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className={`p-2 rounded-full ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-200"
                    }`}
                  >
                    <ArrowRight
                      className={`w-5 h-5 rotate-90 ${
                        darkMode ? "text-neutral-500" : "text-neutral-400"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Fixed Code */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`rounded-2xl overflow-hidden border ${
                    darkMode
                      ? "bg-[#0d1117] border-neutral-700"
                      : "bg-[#1e1e1e] border-neutral-300"
                  }`}
                >
                  <div
                    className={`flex items-center justify-between px-4 py-3 ${
                      darkMode ? "bg-emerald-500/10" : "bg-emerald-500/15"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-500" />
                      <span
                        className={`text-sm font-medium ${
                          darkMode ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      >
                        Secure Code
                      </span>
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        darkMode ? "text-emerald-400/70" : "text-emerald-600/70"
                      }`}
                    >
                      Protected ✓
                    </span>
                  </div>
                  <div className="p-4 font-mono text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="w-8 text-neutral-500 select-none">
                        1
                      </span>
                      <span className="text-purple-400">$safe</span>
                      <span className="text-neutral-400"> = </span>
                      <span className="text-yellow-400">htmlspecialchars</span>
                      <span className="text-neutral-400">(</span>
                      <span className="text-purple-400">$_GET</span>
                      <span className="text-cyan-400">['name']</span>
                      <span className="text-neutral-400">);</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 text-neutral-500 select-none">
                        2
                      </span>
                      <span className="text-blue-400">echo</span>
                      <span className="text-orange-400">{' "Hello, "'}</span>
                      <span className="text-neutral-400">.</span>
                      <span className="text-purple-400">$safe</span>
                      <span className="text-neutral-400">;</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// Helper Components (all receive darkMode
// as prop since they live in same file)
// ─────────────────────────────────────────

function FeatureCard({ feature, index, darkMode }) {
  const colorMap = {
    indigo: {
      bg: darkMode ? "bg-indigo-500/15" : "bg-indigo-50",
      text: darkMode ? "text-indigo-400" : "text-indigo-600",
      tag: darkMode
        ? "bg-indigo-500/15 text-indigo-400 border-indigo-500/20"
        : "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    emerald: {
      bg: darkMode ? "bg-emerald-500/15" : "bg-emerald-50",
      text: darkMode ? "text-emerald-400" : "text-emerald-600",
      tag: darkMode
        ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20"
        : "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    orange: {
      bg: darkMode ? "bg-orange-500/15" : "bg-orange-50",
      text: darkMode ? "text-orange-400" : "text-orange-600",
      tag: darkMode
        ? "bg-orange-500/15 text-orange-400 border-orange-500/20"
        : "bg-orange-50 text-orange-600 border-orange-200",
    },
    yellow: {
      bg: darkMode ? "bg-yellow-500/15" : "bg-yellow-50",
      text: darkMode ? "text-yellow-400" : "text-yellow-600",
      tag: darkMode
        ? "bg-yellow-500/15 text-yellow-400 border-yellow-500/20"
        : "bg-yellow-50 text-yellow-600 border-yellow-200",
    },
  };

  const colors = colorMap[feature.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`group relative p-6 md:p-8 rounded-3xl border transition-all duration-300 ${
        darkMode
          ? "bg-neutral-800/50 backdrop-blur-xl border-neutral-700/50 hover:border-neutral-600 shadow-xl shadow-black/20"
          : "bg-white/80 backdrop-blur-xl border-neutral-200 hover:border-neutral-300 shadow-xl shadow-indigo-500/5"
      }`}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm -z-10" />

      <div className="flex items-start justify-between mb-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`p-4 rounded-2xl transition-all duration-300 ${colors.bg}`}
        >
          <feature.icon className={`w-8 h-8 ${colors.text}`} />
        </motion.div>
        <span
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${colors.tag}`}
        >
          {feature.stats}
        </span>
      </div>

      <h3
        className={`text-xl md:text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-neutral-900"}`}
      >
        {feature.title}
      </h3>
      <p
        className={`mb-6 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
      >
        {feature.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {feature.tags.map((tag, i) => (
          <span
            key={i}
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              darkMode
                ? "bg-neutral-700/50 text-neutral-400"
                : "bg-neutral-100 text-neutral-600"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function FeatureStep({ icon, title, desc, color, darkMode }) {
  const colorMap = {
    red: darkMode ? "bg-red-500/15 text-red-400" : "bg-red-50 text-red-600",
    green: darkMode
      ? "bg-emerald-500/15 text-emerald-400"
      : "bg-emerald-50 text-emerald-600",
    indigo: darkMode
      ? "bg-indigo-500/15 text-indigo-400"
      : "bg-indigo-50 text-indigo-600",
  };

  return (
    <div className="flex items-start gap-3">
      <div className={`p-2 rounded-lg mt-0.5 shrink-0 ${colorMap[color]}`}>
        {icon}
      </div>
      <div>
        <div
          className={`font-semibold ${darkMode ? "text-white" : "text-neutral-900"}`}
        >
          {title}
        </div>
        <div
          className={`text-sm ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}
