"use client";

import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux/slices/themeSlice";
import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  Target,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { steps } from "../../assets/assets.js";

export default function HowItWorks() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <section
      id="how-it-works"
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
                ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                : "bg-emerald-50 text-emerald-700 border-emerald-200"
            }`}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Target className="w-4 h-4" />
            </motion.span>
            <span>Simple 3-step process</span>
          </motion.div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Fix. Learn.{" "}
            <span
              className={`bg-linear-to-r from-emerald-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent ${
                darkMode ? "drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]" : ""
              }`}
            >
              Dominate.
            </span>
          </h2>

          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
              darkMode ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Master security in minutes, not months. Our bite-sized challenges
            turn complex vulnerabilities into addictive coding puzzles.
          </p>
        </motion.div>

        {/* ── Steps Timeline ── */}
        <div className="relative">
          {/* Connection Line — Desktop only */}
          <div
            className={`hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 rounded-full ${
              darkMode ? "opacity-30" : "opacity-40"
            }`}
            style={{
              background:
                "linear-gradient(to right, #ef4444, #6366f1, #eab308)",
            }}
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p
            className={`mb-6 ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}
          >
            Ready to level up your security skills?
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block p-0.5 bg-linear-to-r from-indigo-600 via-purple-600 to-emerald-500 rounded-2xl"
          >
            <a
              href="#challenges"
              className={`flex items-center gap-3 px-8 py-4 rounded-[14px] font-bold transition-all duration-300 ${
                darkMode
                  ? "bg-neutral-950 text-white hover:bg-transparent"
                  : "bg-white text-neutral-900 hover:bg-transparent hover:text-white"
              }`}
            >
              <Sparkles className="w-5 h-5" />
              Start Your First Challenge
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// Helper Components
// ─────────────────────────────────────────

function StepCard({ step, index, darkMode }) {
  const colorMap = {
    red: {
      bg: darkMode ? "bg-red-500/15" : "bg-red-50",
      text: darkMode ? "text-red-400" : "text-red-600",
      border: darkMode ? "border-red-500/30" : "border-red-200",
      glow: "shadow-red-500/20",
    },
    indigo: {
      bg: darkMode ? "bg-indigo-500/15" : "bg-indigo-50",
      text: darkMode ? "text-indigo-400" : "text-indigo-600",
      border: darkMode ? "border-indigo-500/30" : "border-indigo-200",
      glow: "shadow-indigo-500/20",
    },
    yellow: {
      bg: darkMode ? "bg-yellow-500/15" : "bg-yellow-50",
      text: darkMode ? "text-yellow-400" : "text-yellow-600",
      border: darkMode ? "border-yellow-500/30" : "border-yellow-200",
      glow: "shadow-yellow-500/20",
    },
  };

  const colors = colorMap[step.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      className="relative"
    >
      {/* Step Number — Floating */}
      <div className="absolute -top-4 left-6 z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-lg border
            ${colors.bg} ${colors.text} ${colors.glow} ${colors.border}`}
        >
          {step.step}
        </motion.div>
      </div>

      {/* Card */}
      <div
        className={`relative rounded-3xl p-6 pt-12 border h-full transition-all duration-500 ${
          darkMode
            ? "bg-neutral-900/60 backdrop-blur-xl border-neutral-800 hover:border-neutral-700 shadow-xl hover:shadow-2xl"
            : "bg-white/60 backdrop-blur-xl border-neutral-200 hover:border-neutral-300 shadow-xl hover:shadow-2xl"
        }`}
      >
        {/* Hover Glow */}
        <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-10 transition-opacity duration-500 blur-sm -z-10" />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3
              className={`text-xl font-bold ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              {step.title}
            </h3>
            <p
              className={`text-sm ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}
            >
              {step.subtitle}
            </p>
          </div>
          <div className={`p-2 rounded-xl ${colors.bg}`}>
            <step.icon className={`w-6 h-6 ${colors.text}`} />
          </div>
        </div>

        <p
          className={`text-sm mb-6 leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
        >
          {step.desc}
        </p>

        {/* Code Block */}
        {step.code && (
          <div
            className={`rounded-xl overflow-hidden mb-4 border ${
              darkMode
                ? "bg-[#0d1117] border-neutral-700"
                : "bg-[#1e1e1e] border-neutral-300"
            }`}
          >
            {/* Code Header */}
            <div
              className={`flex items-center justify-between px-4 py-2 ${
                step.color === "red"
                  ? darkMode
                    ? "bg-red-500/10"
                    : "bg-red-500/15"
                  : darkMode
                    ? "bg-emerald-500/10"
                    : "bg-emerald-500/15"
              }`}
            >
              <div className="flex items-center gap-2">
                {step.color === "red" ? (
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                ) : (
                  <Shield className="w-4 h-4 text-emerald-500" />
                )}
                <span
                  className={`text-xs font-medium ${
                    step.color === "red"
                      ? "text-red-500"
                      : darkMode
                        ? "text-emerald-400"
                        : "text-emerald-600"
                  }`}
                >
                  {step.codeTitle}
                </span>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  step.color === "red"
                    ? "bg-red-500/20 text-red-500"
                    : darkMode
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-emerald-500/20 text-emerald-600"
                }`}
              >
                {step.badge}
              </span>
            </div>

            {/* Code Lines */}
            <div className="p-3 font-mono text-xs">
              {step.code.map((line, i) => (
                <div
                  key={i}
                  className={`flex ${
                    line.type === "error"
                      ? "bg-red-500/15 -mx-3 px-3 py-0.5"
                      : line.type === "warning"
                        ? "bg-yellow-500/10 -mx-3 px-3 py-0.5"
                        : line.type === "added"
                          ? "bg-emerald-500/15 -mx-3 px-3 py-0.5"
                          : "py-0.5"
                  }`}
                >
                  <span className="w-6 text-neutral-500 select-none">
                    {line.line}
                  </span>
                  <span
                    className={
                      line.type === "comment"
                        ? "text-neutral-500"
                        : "text-neutral-300"
                    }
                  >
                    {line.content}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hint */}
        {step.hint && (
          <div
            className={`flex items-start gap-2 p-3 rounded-xl ${
              darkMode ? "bg-neutral-800/50" : "bg-neutral-100"
            }`}
          >
            <Sparkles
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            />
            <p
              className={`text-xs ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
            >
              {step.hint}
            </p>
          </div>
        )}

        {/* Rewards */}
        {step.rewards && (
          <div className="grid grid-cols-2 gap-3">
            {step.rewards.map((reward, i) => (
              <RewardBadge key={i} reward={reward} darkMode={darkMode} />
            ))}
          </div>
        )}

        {/* Arrow to next step — Desktop */}
        {index < 2 && (
          <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg ${
                darkMode
                  ? "bg-neutral-800 border border-neutral-700"
                  : "bg-white border border-neutral-200"
              }`}
            >
              <ChevronRight
                className={`w-4 h-4 ${darkMode ? "text-neutral-400" : "text-neutral-400"}`}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function RewardBadge({ reward, darkMode }) {
  const colorMap = {
    indigo: darkMode
      ? "bg-indigo-500/15 text-indigo-400"
      : "bg-indigo-50 text-indigo-600",
    orange: darkMode
      ? "bg-orange-500/15 text-orange-400"
      : "bg-orange-50 text-orange-600",
    purple: darkMode
      ? "bg-purple-500/15 text-purple-400"
      : "bg-purple-50 text-purple-600",
    emerald: darkMode
      ? "bg-emerald-500/15 text-emerald-400"
      : "bg-emerald-50 text-emerald-600",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-2 p-2.5 rounded-xl ${colorMap[reward.color]}`}
    >
      <reward.icon className="w-4 h-4" />
      <span className="text-xs font-semibold">{reward.label}</span>
    </motion.div>
  );
}
