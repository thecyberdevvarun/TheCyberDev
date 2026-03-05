"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../redux/features/theme/themeSlice.js";
import { motion } from "framer-motion";
import {
  ChevronRight,
  GitBranch,
  XCircle,
  CheckCircle,
  Lightbulb,
  Bookmark,
  Terminal,
  Play,
  Flame,
  Trophy,
  Zap,
  Shield,
  Code2,
  Bug,
  Lock,
  Star,
  Users,
  TrendingUp,
  Award,
  Target,
  Sparkles,
  AlertTriangle,
  RefreshCw,
  Eye,
  EyeOff,
  Copy,
  Check,
  ArrowRight,
  Braces,
  FileCode,
  ShieldCheck,
  ShieldAlert,
  Skull,
  BadgeCheck,
  Timer,
  Cpu,
} from "lucide-react";

export default function ChallengePreview() {
  const darkMode = useSelector(selectDarkMode);
  const [activeTab, setActiveTab] = useState("broken");
  const [showHint, setShowHint] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="challenges"
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
          className="text-center mb-16"
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
            <Shield className="w-4 h-4" />
            <span>Fix-to-Learn Gamification</span>
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
          </motion.div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Hack Smart.{" "}
            <span
              className={`bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ${
                darkMode ? "drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]" : ""
              }`}
            >
              Code Secure.
            </span>
          </h2>

          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed ${
              darkMode ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Master cybersecurity as a developer. Gamified challenges where you{" "}
            <span
              className={`font-semibold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
            >
              fix broken code
            </span>{" "}
            to block real vulnerabilities. Like{" "}
            <span
              className={`font-semibold ${darkMode ? "text-purple-400" : "text-purple-600"}`}
            >
              LeetCode
            </span>{" "}
            +{" "}
            <span
              className={`font-semibold ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
            >
              TryHackMe
            </span>
            — for devs who think like hackers.
          </p>

          {/* Problem Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                darkMode
                  ? "bg-red-500/10 border-red-500/30"
                  : "bg-red-50 border-red-200"
              }`}
            >
              <AlertTriangle
                className={`w-4 h-4 ${darkMode ? "text-red-400" : "text-red-600"}`}
              />
              <span
                className={`text-sm font-medium ${darkMode ? "text-red-400" : "text-red-600"}`}
              >
                70% of breaches = Dev errors
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                darkMode
                  ? "bg-yellow-500/10 border-yellow-500/30"
                  : "bg-yellow-50 border-yellow-200"
              }`}
            >
              <Skull
                className={`w-4 h-4 ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}
              />
              <span
                className={`text-sm font-medium ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}
              >
                \$4.45M avg breach cost
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                darkMode
                  ? "bg-emerald-500/10 border-emerald-500/30"
                  : "bg-emerald-50 border-emerald-200"
              }`}
            >
              <ShieldCheck
                className={`w-4 h-4 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
              />
              <span
                className={`text-sm font-medium ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
              >
                OWASP Top 10 Coverage
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-8 items-start">
          {/* ── VS Code Editor (4 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`md:col-span-6 lg:col-span-4 rounded-2xl overflow-hidden shadow-2xl border ${
              darkMode
                ? "bg-[#1e1e1e] border-neutral-700 shadow-indigo-500/10"
                : "bg-[#1e1e1e] border-neutral-300 shadow-indigo-500/20"
            }`}
          >
            {/* Title Bar */}
            <div className="bg-[#323233] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 cursor-pointer transition" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-110 cursor-pointer transition" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-110 cursor-pointer transition" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span className="font-medium">thecyberdev</span>
                <span className="text-neutral-600">—</span>
                <span>challenge_xss.php</span>
              </div>
              <button
                onClick={handleCopy}
                className="p-1 hover:bg-white/10 rounded transition cursor-pointer"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-400" />
                )}
              </button>
            </div>

            {/* Tab Bar */}
            <div className="bg-[#252526] flex items-center border-b border-[#1e1e1e] overflow-x-auto">
              <button
                onClick={() => setActiveTab("broken")}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm border-r border-[#1e1e1e] transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "broken"
                    ? "bg-[#1e1e1e] text-white border-t-2 border-t-red-500"
                    : "text-neutral-400 hover:bg-[#2d2d2d]"
                }`}
              >
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span>vulnerable.php</span>
                {activeTab === "broken" && (
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("fixed")}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm border-r border-[#1e1e1e] transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "fixed"
                    ? "bg-[#1e1e1e] text-white border-t-2 border-t-emerald-500"
                    : "text-neutral-400 hover:bg-[#2d2d2d]"
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>secure.php</span>
                {activeTab === "fixed" && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                )}
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-500 hover:bg-[#2d2d2d] transition whitespace-nowrap cursor-pointer">
                <FileCode className="w-4 h-4" />
                <span>test.spec.js</span>
              </button>
            </div>

            {/* Breadcrumb */}
            <div className="bg-[#1e1e1e] px-4 py-2 text-xs text-neutral-500 border-b border-[#2d2d2d] flex items-center gap-1 overflow-x-auto">
              <span className="hover:text-neutral-300 cursor-pointer">src</span>
              <ChevronRight className="w-3 h-3 shrink-0" />
              <span className="hover:text-neutral-300 cursor-pointer">
                challenges
              </span>
              <ChevronRight className="w-3 h-3 shrink-0" />
              <span className="hover:text-neutral-300 cursor-pointer">xss</span>
              <ChevronRight className="w-3 h-3 shrink-0" />
              <span className="text-neutral-300">
                {activeTab === "broken" ? "vulnerable.php" : "secure.php"}
              </span>
            </div>

            {/* Editor Content */}
            <div className="bg-[#1e1e1e] min-h-87.5 overflow-x-auto">
              <div className="p-4 font-mono text-sm leading-relaxed">
                {activeTab === "broken" ? <BrokenCode /> : <FixedCode />}
              </div>
            </div>

            {/* Problems Panel */}
            <div className="bg-[#1e1e1e] border-t border-[#2d2d2d]">
              <div className="flex items-center gap-4 px-4 py-2 text-xs border-b border-[#2d2d2d]">
                <button className="flex items-center gap-1.5 text-red-400 font-medium cursor-pointer">
                  <XCircle className="w-3.5 h-3.5" />
                  Problems
                  <span className="bg-red-500/20 px-1.5 rounded text-red-400">
                    {activeTab === "broken" ? "2" : "0"}
                  </span>
                </button>
                <button className="flex items-center gap-1.5 text-neutral-400 hover:text-neutral-300 cursor-pointer">
                  <Terminal className="w-3.5 h-3.5" />
                  Output
                </button>
                <button className="flex items-center gap-1.5 text-neutral-400 hover:text-neutral-300 cursor-pointer">
                  <Bug className="w-3.5 h-3.5" />
                  Debug
                </button>
              </div>

              <div className="p-3 text-xs font-mono max-h-24 overflow-y-auto">
                {activeTab === "broken" ? (
                  <>
                    <div className="flex items-start gap-2 text-red-400 mb-1">
                      <XCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>
                        <span className="text-white">vulnerable.php:8</span> -
                        XSS: Unsanitized user input directly echoed
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-yellow-400">
                      <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>
                        <span className="text-white">vulnerable.php:4</span> -
                        Warning: $_GET variable used without validation
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>
                      All security checks passed. No vulnerabilities detected.
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Status Bar */}
            <div className="bg-indigo-600 px-4 py-1.5 flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5" />
                  main
                </span>
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" />
                  Synced
                </span>
                <span className="flex items-center gap-1.5">
                  {activeTab === "broken" ? (
                    <>
                      <XCircle className="w-3.5 h-3.5" />
                      <span className="text-red-200">2 issues</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span className="text-emerald-200">Secure</span>
                    </>
                  )}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span>Ln 8, Col 24</span>
                <span>UTF-8</span>
                <span className="flex items-center gap-1">
                  <Braces className="w-3 h-3" />
                  PHP
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Right Side (2 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 lg:col-span-2 space-y-6"
          >
            {/* Challenge Card */}
            <div
              className={`rounded-2xl p-6 border transition-all duration-300 ${
                darkMode
                  ? "bg-neutral-800/50 backdrop-blur-xl border-neutral-700 shadow-xl"
                  : "bg-white/80 backdrop-blur-xl border-neutral-200 shadow-xl"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${
                        darkMode
                          ? "bg-red-500/20 text-red-400"
                          : "bg-red-50 text-red-600 border border-red-200"
                      }`}
                    >
                      <Bug className="w-3 h-3" />
                      XSS
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${
                        darkMode
                          ? "bg-indigo-500/20 text-indigo-400"
                          : "bg-indigo-50 text-indigo-600 border border-indigo-200"
                      }`}
                    >
                      <Code2 className="w-3 h-3" />
                      PHP
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-bold ${darkMode ? "text-white" : "text-neutral-900"}`}
                  >
                    Cross-Site Scripting
                  </h3>
                  <p
                    className={`text-sm mt-1 ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                  >
                    OWASP Top 10 - A7:2017
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-2xl font-bold text-yellow-500">
                    <Zap className="w-5 h-5" />
                    150
                  </div>
                  <div
                    className={`text-xs ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                  >
                    XP Points
                  </div>
                </div>
              </div>

              <p
                className={`text-sm mb-6 leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
              >
                Fix the XSS vulnerability that allows attackers to inject
                malicious scripts. Learn to sanitize user input properly using{" "}
                <code
                  className={`px-1.5 py-0.5 rounded ${
                    darkMode
                      ? "bg-neutral-700 text-indigo-400"
                      : "bg-neutral-100 text-indigo-600"
                  }`}
                >
                  htmlspecialchars()
                </code>
                .
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  {
                    icon: <Target className="w-4 h-4" />,
                    value: "Medium",
                    label: "Difficulty",
                    color: "text-yellow-500",
                  },
                  {
                    icon: <Users className="w-4 h-4" />,
                    value: "2.4k",
                    label: "Solved",
                    color: darkMode ? "text-indigo-400" : "text-indigo-600",
                  },
                  {
                    icon: <TrendingUp className="w-4 h-4" />,
                    value: "78%",
                    label: "Success",
                    color: darkMode ? "text-emerald-400" : "text-emerald-600",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-3 text-center border ${
                      darkMode
                        ? "bg-neutral-900/50 border-neutral-700"
                        : "bg-neutral-50 border-neutral-200"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center gap-1 font-bold ${stat.color}`}
                    >
                      {stat.icon}
                      {stat.value}
                    </div>
                    <div
                      className={`text-xs mt-1 ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hint Section */}
              <button
                onClick={() => setShowHint(!showHint)}
                className={`w-full rounded-xl p-4 mb-6 text-left transition-all border cursor-pointer ${
                  darkMode
                    ? "bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/15"
                    : "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex items-center gap-2 font-medium ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}
                  >
                    <Lightbulb className="w-4 h-4" />
                    <span>Need a Hint?</span>
                  </div>
                  {showHint ? (
                    <EyeOff
                      className={`w-4 h-4 ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}
                    />
                  ) : (
                    <Eye
                      className={`w-4 h-4 ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}
                    />
                  )}
                </div>
                {showHint && (
                  <p
                    className={`text-sm mt-3 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                  >
                    Look for user input from{" "}
                    <code
                      className={`px-1 rounded ${darkMode ? "bg-neutral-700 text-yellow-300" : "bg-neutral-200 text-yellow-700"}`}
                    >
                      $_GET
                    </code>{" "}
                    that's directly echoed. Use{" "}
                    <code
                      className={`px-1 rounded ${darkMode ? "bg-neutral-700 text-emerald-300" : "bg-neutral-200 text-emerald-700"}`}
                    >
                      htmlspecialchars()
                    </code>{" "}
                    with{" "}
                    <code
                      className={`px-1 rounded ${darkMode ? "bg-neutral-700 text-blue-300" : "bg-neutral-200 text-blue-700"}`}
                    >
                      ENT_QUOTES
                    </code>{" "}
                    flag.
                  </p>
                )}
              </button>

              {/* Reward Badge */}
              <div
                className={`flex items-center gap-3 p-3 rounded-xl border mb-6 ${
                  darkMode
                    ? "bg-linear-to-r from-purple-500/10 to-indigo-500/10 border-purple-500/20"
                    : "bg-linear-to-r from-purple-50 to-indigo-50 border-purple-200"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/30 shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div
                    className={`text-sm font-semibold ${darkMode ? "text-white" : "text-neutral-900"}`}
                  >
                    Unlock: "XSS Slayer" Badge
                  </div>
                  <div
                    className={`text-xs ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                  >
                    Complete this challenge to earn
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all group cursor-pointer"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Start Challenge
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-3.5 rounded-xl transition border cursor-pointer ${
                    darkMode
                      ? "bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
                      : "bg-neutral-100 border-neutral-200 hover:bg-neutral-200"
                  }`}
                >
                  <Bookmark
                    className={`w-5 h-5 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                  />
                </motion.button>
              </div>
            </div>

            {/* Gamification / Progress Card */}
            <div
              className={`rounded-2xl p-6 border transition-all duration-300 ${
                darkMode
                  ? "bg-neutral-800/50 backdrop-blur-xl border-neutral-700"
                  : "bg-white/80 backdrop-blur-xl border-neutral-200 shadow-lg"
              }`}
            >
              <h4
                className={`flex items-center gap-2 text-lg font-bold mb-4 ${darkMode ? "text-white" : "text-neutral-900"}`}
              >
                <Trophy className="w-5 h-5 text-yellow-500" />
                Your Progress
              </h4>

              <div className="space-y-4">
                {/* Streak */}
                <div
                  className={`flex items-center justify-between p-3 rounded-xl border ${
                    darkMode
                      ? "bg-orange-500/10 border-orange-500/20"
                      : "bg-orange-50 border-orange-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Flame
                      className={`w-6 h-6 ${darkMode ? "text-orange-400" : "text-orange-500"}`}
                    />
                    <div>
                      <div
                        className={`font-semibold ${darkMode ? "text-white" : "text-neutral-900"}`}
                      >
                        7 Day Streak
                      </div>
                      <div
                        className={`text-xs ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                      >
                        Keep it going!
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-6 rounded-full ${
                          i < 5
                            ? darkMode
                              ? "bg-orange-400"
                              : "bg-orange-500"
                            : darkMode
                              ? "bg-orange-400/30"
                              : "bg-orange-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Level Progress */}
                <div
                  className={`p-3 rounded-xl border ${
                    darkMode
                      ? "bg-indigo-500/10 border-indigo-500/20"
                      : "bg-indigo-50 border-indigo-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Star
                        className={`w-5 h-5 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
                      />
                      <span
                        className={`font-semibold ${darkMode ? "text-white" : "text-neutral-900"}`}
                      >
                        Level 12
                      </span>
                    </div>
                    <span
                      className={`text-xs ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
                    >
                      2,450 / 3,000 XP
                    </span>
                  </div>
                  <div
                    className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? "bg-neutral-700" : "bg-neutral-200"}`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "82%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Recent Badges */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                  >
                    Recent Badges
                  </span>
                  <div className="flex -space-x-2">
                    {[
                      {
                        from: "from-emerald-400",
                        to: "to-teal-500",
                        Icon: Lock,
                      },
                      { from: "from-blue-400", to: "to-cyan-500", Icon: Cpu },
                      {
                        from: "from-purple-400",
                        to: "to-pink-500",
                        Icon: BadgeCheck,
                      },
                    ].map((badge, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                        className={`w-8 h-8 rounded-full bg-linear-to-br ${badge.from} ${badge.to} flex items-center justify-center border-2 ${
                          darkMode ? "border-neutral-800" : "border-white"
                        }`}
                      >
                        <badge.Icon className="w-4 h-4 text-white" />
                      </motion.div>
                    ))}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs ${
                        darkMode
                          ? "bg-neutral-700 border-neutral-800 text-neutral-400"
                          : "bg-neutral-100 border-white text-neutral-500"
                      }`}
                    >
                      +5
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -4 }}
                className={`rounded-xl p-4 border ${
                  darkMode
                    ? "bg-linear-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20"
                    : "bg-linear-to-br from-emerald-50 to-teal-50 border-emerald-200"
                }`}
              >
                <div
                  className={`flex items-center gap-2 mb-1 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-2xl font-bold">47</span>
                </div>
                <div
                  className={`text-xs ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                >
                  Challenges Solved
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className={`rounded-xl p-4 border ${
                  darkMode
                    ? "bg-linear-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20"
                    : "bg-linear-to-br from-purple-50 to-pink-50 border-purple-200"
                }`}
              >
                <div
                  className={`flex items-center gap-2 mb-1 ${darkMode ? "text-purple-400" : "text-purple-600"}`}
                >
                  <Award className="w-5 h-5" />
                  <span className="text-2xl font-bold">#234</span>
                </div>
                <div
                  className={`text-xs ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                >
                  Global Ranking
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Terminal + Features Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid lg:grid-cols-2 gap-8"
        >
          {/* Terminal Output */}
          <div
            className={`rounded-2xl overflow-hidden border ${
              darkMode
                ? "bg-[#1e1e1e] border-neutral-700"
                : "bg-[#1e1e1e] border-neutral-300"
            }`}
          >
            <div className="bg-[#323233] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-neutral-300 font-medium">
                  Security Test Output
                </span>
              </div>
              <span className="flex items-center gap-1 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>

            <div className="p-4 font-mono text-sm space-y-2 min-h-50">
              <div className="text-neutral-500">$ npm run test:security</div>
              <div className="text-cyan-400 mt-2">
                ▶ Running OWASP ZAP scan on challenge...
              </div>
              <div className="text-white mt-2">
                <span className="text-neutral-500">[1/4]</span> Testing for XSS
                vectors...
              </div>

              {activeTab === "broken" ? (
                <>
                  <div className="text-red-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    FAIL: Reflected XSS detected on line 8
                  </div>
                  <div className="text-yellow-400 pl-6">
                    → Payload: {"<script>alert('XSS')</script>"}
                  </div>
                  <div className="text-yellow-400 pl-6">
                    → Response contained unescaped input
                  </div>
                  <div className="text-neutral-500 mt-2">
                    <span>[2/4]</span> Testing for SQLi vectors...{" "}
                    <span className="text-emerald-400">PASS</span>
                  </div>
                  <div className="text-neutral-500">
                    <span>[3/4]</span> Testing for CSRF...{" "}
                    <span className="text-emerald-400">PASS</span>
                  </div>
                  <div className="text-neutral-500">
                    <span>[4/4]</span> Testing for Auth bypass...{" "}
                    <span className="text-emerald-400">PASS</span>
                  </div>
                  <div className="text-red-400 mt-4 p-2 bg-red-500/10 rounded">
                    ✗ 1 vulnerability found. Fix the code to continue.
                  </div>
                </>
              ) : (
                <>
                  <div className="text-emerald-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    PASS: No XSS vulnerabilities found
                  </div>
                  <div className="text-neutral-500 mt-2">
                    <span>[2/4]</span> Testing for SQLi...{" "}
                    <span className="text-emerald-400">PASS</span>
                  </div>
                  <div className="text-neutral-500">
                    <span>[3/4]</span> Testing for CSRF...{" "}
                    <span className="text-emerald-400">PASS</span>
                  </div>
                  <div className="text-neutral-500">
                    <span>[4/4]</span> Testing for Auth bypass...{" "}
                    <span className="text-emerald-400">PASS</span>
                  </div>
                  <div className="text-emerald-400 mt-4 p-2 bg-emerald-500/10 rounded flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    All security tests passed! +150 XP earned.
                  </div>
                </>
              )}
              <div className="text-neutral-500 flex items-center gap-2 mt-2">
                <span className="animate-pulse">▋</span>
              </div>
            </div>
          </div>

          {/* Features Highlight */}
          <div
            className={`rounded-2xl p-6 border ${
              darkMode
                ? "bg-linear-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20"
                : "bg-linear-to-br from-indigo-50 to-purple-50 border-indigo-200"
            }`}
          >
            <h4
              className={`text-xl font-bold mb-6 flex items-center gap-2 ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
              <Sparkles
                className={`w-5 h-5 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
              />
              Why Developers Love thecyberdev
            </h4>

            <div className="space-y-4">
              <FeatureItem
                icon={<Code2 className="w-5 h-5" />}
                title="Monaco Editor"
                description="VS Code-like experience with syntax highlighting & sandbox testing"
                color="indigo"
                darkMode={darkMode}
              />
              <FeatureItem
                icon={<Flame className="w-5 h-5" />}
                title="Gamification"
                description="Streaks, XP, badges & daily quests — addictive like Duolingo"
                color="orange"
                darkMode={darkMode}
              />
              <FeatureItem
                icon={<Trophy className="w-5 h-5" />}
                title="Leaderboards"
                description="Compete globally, challenge friends, win weekly contests"
                color="yellow"
                darkMode={darkMode}
              />
              <FeatureItem
                icon={<Shield className="w-5 h-5" />}
                title="Real Vulns"
                description="OWASP Top 10: XSS, SQLi, JWT, Broken Auth & more"
                color="emerald"
                darkMode={darkMode}
              />
            </div>

            <div
              className={`mt-6 pt-6 border-t ${darkMode ? "border-neutral-700" : "border-neutral-200"}`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  <span
                    className={`font-semibold ${darkMode ? "text-white" : "text-neutral-900"}`}
                  >
                    10,000+
                  </span>{" "}
                  developers learning
                </div>
                <motion.button
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-2 font-medium text-sm transition group cursor-pointer ${
                    darkMode
                      ? "text-indigo-400 hover:text-indigo-300"
                      : "text-indigo-600 hover:text-indigo-700"
                  }`}
                >
                  Join Beta Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all group cursor-pointer"
            >
              <Play className="w-5 h-5" />
              Try a Challenge Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <div
              className={`flex items-center gap-2 text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
            >
              <Timer className="w-4 h-4" />
              <span>
                First 500 users get{" "}
                <span
                  className={`font-semibold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
                >
                  lifetime Pro
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// Code Display Components
// ─────────────────────────────────────────

function CodeLine({
  num,
  content,
  error = false,
  warning = false,
  added = false,
}) {
  return (
    <div
      className={`flex group hover:bg-white/5 ${
        error
          ? "bg-red-500/10 border-l-2 border-red-500"
          : warning
            ? "bg-yellow-500/5 border-l-2 border-yellow-500/50"
            : added
              ? "bg-emerald-500/10 border-l-2 border-emerald-500"
              : ""
      }`}
    >
      <span className="w-12 text-right pr-4 text-neutral-600 select-none border-r border-[#2d2d2d] mr-4 py-0.5">
        {num}
      </span>
      <div className="flex-1 flex items-center gap-2 py-0.5">
        {error && <XCircle className="w-3 h-3 text-red-500 shrink-0" />}
        {warning && (
          <AlertTriangle className="w-3 h-3 text-yellow-500 shrink-0" />
        )}
        {added && <span className="text-emerald-500 text-xs shrink-0">+</span>}
        <span className="whitespace-pre">{content}</span>
      </div>
    </div>
  );
}

function BrokenCode() {
  return (
    <>
      <CodeLine
        num={1}
        content={<span className="text-neutral-500">{"<?php"}</span>}
      />
      <CodeLine
        num={2}
        content={
          <span className="text-neutral-500">
            {"// User profile display - VULNERABLE!"}
          </span>
        }
      />
      <CodeLine num={3} content="" />
      <CodeLine
        num={4}
        warning
        content={
          <>
            <span className="text-purple-400">$username</span>
            <span className="text-white"> = </span>
            <span className="text-yellow-400">$_GET</span>
            <span className="text-cyan-300">{"['name']"}</span>
            <span className="text-white">;</span>
          </>
        }
      />
      <CodeLine
        num={5}
        content={
          <>
            <span className="text-purple-400">$email</span>
            <span className="text-white"> = </span>
            <span className="text-yellow-400">$_GET</span>
            <span className="text-cyan-300">{"['email']"}</span>
            <span className="text-white">;</span>
          </>
        }
      />
      <CodeLine num={6} content="" />
      <CodeLine
        num={7}
        content={
          <span className="text-neutral-500">
            {"// Display welcome message"}
          </span>
        }
      />
      <CodeLine
        num={8}
        error
        content={
          <>
            <span className="text-blue-400">echo</span>
            <span className="text-orange-300"> "&lt;h1&gt;Welcome, "</span>
            <span className="text-white"> . </span>
            <span className="text-purple-400">$username</span>
            <span className="text-white"> . </span>
            <span className="text-orange-300">"!&lt;/h1&gt;"</span>
            <span className="text-white">;</span>
          </>
        }
      />
      <CodeLine
        num={9}
        content={
          <>
            <span className="text-blue-400">echo</span>
            <span className="text-orange-300"> "&lt;p&gt;Email: "</span>
            <span className="text-white"> . </span>
            <span className="text-purple-400">$email</span>
            <span className="text-white"> . </span>
            <span className="text-orange-300">"&lt;/p&gt;"</span>
            <span className="text-white">;</span>
          </>
        }
      />
      <CodeLine num={10} content="" />
      <CodeLine
        num={11}
        content={<span className="text-neutral-500">{"?>"}</span>}
      />
    </>
  );
}

function FixedCode() {
  return (
    <>
      <CodeLine
        num={1}
        content={<span className="text-neutral-500">{"<?php"}</span>}
      />
      <CodeLine
        num={2}
        content={
          <span className="text-neutral-500">
            {"// User profile display - SECURE ✓"}
          </span>
        }
      />
      <CodeLine num={3} content="" />
      <CodeLine
        num={4}
        content={
          <>
            <span className="text-purple-400">$username</span>
            <span className="text-white"> = </span>
            <span className="text-yellow-400">$_GET</span>
            <span className="text-cyan-300">{"['name']"}</span>
            <span className="text-white"> ?? </span>
            <span className="text-orange-300">'Guest'</span>
            <span className="text-white">;</span>
          </>
        }
      />
      <CodeLine
        num={5}
        content={
          <>
            <span className="text-purple-400">$email</span>
            <span className="text-white"> = </span>
            <span className="text-yellow-400">$_GET</span>
            <span className="text-cyan-300">{"['email']"}</span>
            <span className="text-white"> ?? </span>
            <span className="text-orange-300">''</span>
            <span className="text-white">;</span>
          </>
        }
      />
      <CodeLine num={6} content="" />
      <CodeLine
        num={7}
        content={
          <span className="text-neutral-500">
            {"// Sanitize user input before output"}
          </span>
        }
      />
      <CodeLine
        num={8}
        added
        content={
          <>
            <span className="text-purple-400">$safeName</span>
            <span className="text-white"> = </span>
            <span className="text-yellow-400">htmlspecialchars</span>
            <span className="text-white">(</span>
            <span className="text-purple-400">$username</span>
            <span className="text-white">, </span>
            <span className="text-blue-400">ENT_QUOTES</span>
            <span className="text-white">, </span>
            <span className="text-orange-300">'UTF-8'</span>
            <span className="text-white">);</span>
          </>
        }
      />
      <CodeLine
        num={9}
        added
        content={
          <>
            <span className="text-purple-400">$safeEmail</span>
            <span className="text-white"> = </span>
            <span className="text-yellow-400">htmlspecialchars</span>
            <span className="text-white">(</span>
            <span className="text-purple-400">$email</span>
            <span className="text-white">, </span>
            <span className="text-blue-400">ENT_QUOTES</span>
            <span className="text-white">, </span>
            <span className="text-orange-300">'UTF-8'</span>
            <span className="text-white">);</span>
          </>
        }
      />
      <CodeLine num={10} content="" />
      <CodeLine
        num={11}
        added
        content={
          <>
            <span className="text-blue-400">echo</span>
            <span className="text-orange-300"> "&lt;h1&gt;Welcome, "</span>
            <span className="text-white"> . </span>
            <span className="text-purple-400">$safeName</span>
            <span className="text-white"> . </span>
            <span className="text-orange-300">"!&lt;/h1&gt;"</span>
            <span className="text-white">;</span>
          </>
        }
      />
      <CodeLine
        num={12}
        added
        content={
          <>
            <span className="text-blue-400">echo</span>
            <span className="text-orange-300"> "&lt;p&gt;Email: "</span>
            <span className="text-white"> . </span>
            <span className="text-purple-400">$safeEmail</span>
            <span className="text-white"> . </span>
            <span className="text-orange-300">"&lt;/p&gt;"</span>
            <span className="text-white">;</span>
          </>
        }
      />
      <CodeLine num={13} content="" />
      <CodeLine
        num={14}
        content={<span className="text-neutral-500">{"?>"}</span>}
      />
    </>
  );
}

// ─────────────────────────────────────────
// Helper Components
// ─────────────────────────────────────────

function FeatureItem({ icon, title, description, color, darkMode }) {
  const colorMap = {
    indigo: darkMode
      ? "text-indigo-400 bg-indigo-500/20"
      : "text-indigo-600 bg-indigo-100",
    orange: darkMode
      ? "text-orange-400 bg-orange-500/20"
      : "text-orange-600 bg-orange-100",
    yellow: darkMode
      ? "text-yellow-400 bg-yellow-500/20"
      : "text-yellow-600 bg-yellow-100",
    emerald: darkMode
      ? "text-emerald-400 bg-emerald-500/20"
      : "text-emerald-600 bg-emerald-100",
  };

  return (
    <motion.div
      whileHover={{ x: 4 }}
      className={`flex items-start gap-3 p-3 rounded-xl transition ${
        darkMode ? "hover:bg-white/5" : "hover:bg-white/50"
      }`}
    >
      <div className={`p-2 rounded-lg shrink-0 ${colorMap[color]}`}>{icon}</div>
      <div>
        <div
          className={`font-semibold ${darkMode ? "text-white" : "text-neutral-900"}`}
        >
          {title}
        </div>
        <div
          className={`text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
        >
          {description}
        </div>
      </div>
    </motion.div>
  );
}
