"use client";

import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../redux/features/theme/themeSlice.js";
import { motion } from "framer-motion";
import {
  Code2,
  Shield,
  Trophy,
  Play,
  Flame,
  Zap,
  Users,
  Star,
  ArrowRight,
  Terminal,
  Bug,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 relative overflow-hidden transition-colors duration-300 ${
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

      {/* ── Floating Icons ── */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[5%] hidden lg:block"
      >
        <div
          className={`p-3 rounded-2xl shadow-xl ${
            darkMode
              ? "bg-neutral-900 shadow-indigo-500/20"
              : "bg-white shadow-indigo-500/10"
          }`}
        >
          <Shield className="w-8 h-8 text-emerald-500" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-48 right-[15%] hidden lg:block"
      >
        <div
          className={`p-3 rounded-2xl shadow-xl ${
            darkMode
              ? "bg-neutral-900 shadow-red-500/20"
              : "bg-white shadow-red-500/10"
          }`}
        >
          <Bug className="w-8 h-8 text-red-500" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 left-[20%] hidden lg:block"
      >
        <div
          className={`p-3 rounded-2xl shadow-xl ${
            darkMode
              ? "bg-neutral-900 shadow-yellow-500/20"
              : "bg-white shadow-yellow-500/10"
          }`}
        >
          <Trophy className="w-8 h-8 text-yellow-500" />
        </div>
      </motion.div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              <span className={darkMode ? "text-white" : "text-neutral-900"}>
                Think Like a{" "}
              </span>
              <span className="bg-linear-to-r from-green-400 via-lime-400 to-cyan-400 bg-clip-text text-transparent font-bold drop-shadow-[0_0_8px_rgba(0,255,128,0.7)]">
                Hacker
              </span>
              <br />
              <span className={darkMode ? "text-white" : "text-neutral-900"}>
                Code Like a{" "}
              </span>
              <span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Pro
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 ${
                darkMode ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Master cybersecurity through{" "}
              <span
                className={`font-semibold ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                gamified coding challenges
              </span>
              . Fix real vulnerabilities, earn XP, and build bulletproof code.
              Like LeetCode + TryHackMe — for developers.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
            >
              {/* Developers */}
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-lg ${darkMode ? "bg-indigo-500/20" : "bg-indigo-500/10"}`}
                >
                  <Users
                    className={`w-5 h-5 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
                  />
                </div>
                <div>
                  <div
                    className={`text-xl font-bold ${darkMode ? "text-white" : "text-neutral-900"}`}
                  >
                    10K+
                  </div>
                  <div className="text-xs text-neutral-500">Developers</div>
                </div>
              </div>

              {/* Challenges */}
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-lg ${darkMode ? "bg-emerald-500/20" : "bg-emerald-500/10"}`}
                >
                  <Code2
                    className={`w-5 h-5 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
                  />
                </div>
                <div>
                  <div
                    className={`text-xl font-bold ${darkMode ? "text-white" : "text-neutral-900"}`}
                  >
                    500+
                  </div>
                  <div className="text-xs text-neutral-500">Challenges</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-lg ${darkMode ? "bg-yellow-500/20" : "bg-yellow-500/10"}`}
                >
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <div
                    className={`text-xl font-bold ${darkMode ? "text-white" : "text-neutral-900"}`}
                  >
                    4.9
                  </div>
                  <div className="text-xs text-neutral-500">Rating</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#challenges"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  darkMode
                    ? "shadow-indigo-500/40 hover:shadow-purple-600/40"
                    : "shadow-indigo-600/30 hover:shadow-purple-600/40"
                }`}
              >
                <Play className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                Try a Challenge Free
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                  darkMode
                    ? "shadow-indigo-500/50 hover:shadow-purple-500/40"
                    : "shadow-indigo-500/30 hover:shadow-purple-500/40"
                }`}
              >
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Join Beta Waitlist
              </motion.a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ring-2 ${
                      darkMode ? "ring-neutral-950" : "ring-white"
                    }`}
                    style={{
                      background: [
                        "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        "linear-gradient(135deg, #10b981, #059669)",
                        "linear-gradient(135deg, #f59e0b, #d97706)",
                        "linear-gradient(135deg, #ef4444, #dc2626)",
                        "linear-gradient(135deg, #3b82f6, #2563eb)",
                      ][i],
                    }}
                  >
                    {["JD", "SK", "MR", "AL", "TC"][i]}
                  </div>
                ))}
              </div>
              <div
                className={`text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
              >
                <span
                  className={`font-semibold ${darkMode ? "text-white" : "text-neutral-900"}`}
                >
                  2,847 developers
                </span>{" "}
                joined this week
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <div
              className={`rounded-3xl p-6 md:p-8 shadow-2xl border transition-colors duration-300 ${
                darkMode
                  ? "bg-neutral-900 shadow-indigo-500/20 border-neutral-800"
                  : "bg-white shadow-indigo-500/10 border-neutral-200"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-xl ${darkMode ? "bg-red-500/20" : "bg-red-500/10"}`}
                  >
                    <Bug className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold ${darkMode ? "text-white" : "text-neutral-900"}`}
                    >
                      XSS Challenge
                    </h3>
                    <p
                      className={`text-sm ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                    >
                      Fix the vulnerability
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      darkMode
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-yellow-500/10 text-yellow-600"
                    }`}
                  >
                    Medium
                  </span>
                  <span
                    className={`flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${
                      darkMode
                        ? "bg-indigo-500/20 text-indigo-400"
                        : "bg-indigo-500/10 text-indigo-600"
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    +150 XP
                  </span>
                </div>
              </div>

              {/* Code Preview */}
              <div
                className={`rounded-2xl overflow-hidden mb-6 border transition-colors duration-300 ${
                  darkMode
                    ? "bg-neutral-950 border-neutral-800"
                    : "bg-neutral-100 border-neutral-200"
                }`}
              >
                {/* Code Header */}
                <div
                  className={`flex items-center justify-between px-4 py-3 ${
                    darkMode ? "bg-neutral-800" : "bg-neutral-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span
                      className={`text-xs ml-2 ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                    >
                      vulnerable.php
                    </span>
                  </div>
                  <Terminal
                    className={`w-4 h-4 ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                  />
                </div>

                {/* Code Lines */}
                <div className="p-4 font-mono text-sm">
                  <div className="flex">
                    <span
                      className={`w-8 select-none ${darkMode ? "text-neutral-600" : "text-neutral-400"}`}
                    >
                      1
                    </span>
                    <span
                      className={
                        darkMode ? "text-neutral-400" : "text-neutral-500"
                      }
                    >
                      {"<?php"}
                    </span>
                  </div>
                  <div className="flex">
                    <span
                      className={`w-8 select-none ${darkMode ? "text-neutral-600" : "text-neutral-400"}`}
                    >
                      2
                    </span>
                    <span
                      className={
                        darkMode ? "text-purple-400" : "text-purple-600"
                      }
                    >
                      $user
                    </span>
                    <span
                      className={
                        darkMode ? "text-neutral-300" : "text-neutral-700"
                      }
                    >
                      {" "}
                      ={" "}
                    </span>
                    <span
                      className={
                        darkMode ? "text-yellow-400" : "text-yellow-600"
                      }
                    >
                      $_GET
                    </span>
                    <span
                      className={darkMode ? "text-cyan-400" : "text-cyan-600"}
                    >
                      ['name']
                    </span>
                    <span
                      className={
                        darkMode ? "text-neutral-300" : "text-neutral-700"
                      }
                    >
                      ;
                    </span>
                  </div>
                  <div
                    className={`flex -mx-4 px-4 py-0.5 ${darkMode ? "bg-red-500/20" : "bg-red-500/10"}`}
                  >
                    <span
                      className={`w-8 select-none ${darkMode ? "text-neutral-600" : "text-neutral-400"}`}
                    >
                      3
                    </span>
                    <span
                      className={darkMode ? "text-blue-400" : "text-blue-600"}
                    >
                      echo
                    </span>
                    <span
                      className={
                        darkMode ? "text-orange-400" : "text-orange-600"
                      }
                    >
                      {" "}
                      "Hello, "
                    </span>
                    <span
                      className={
                        darkMode ? "text-neutral-300" : "text-neutral-700"
                      }
                    >
                      .
                    </span>
                    <span
                      className={
                        darkMode ? "text-purple-400" : "text-purple-600"
                      }
                    >
                      $user
                    </span>
                    <span
                      className={
                        darkMode ? "text-neutral-300" : "text-neutral-700"
                      }
                    >
                      ;
                    </span>
                    <span className="ml-2 text-red-500 text-xs">
                      ← XSS here!
                    </span>
                  </div>
                  <div className="flex">
                    <span
                      className={`w-8 select-none ${darkMode ? "text-neutral-600" : "text-neutral-400"}`}
                    >
                      4
                    </span>
                    <span
                      className={
                        darkMode ? "text-neutral-400" : "text-neutral-500"
                      }
                    >
                      {"?>"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex items-center gap-2 text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}
                  >
                    <Users className="w-4 h-4" />
                    <span>2.4k solved</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-sm ${darkMode ? "text-green-400" : "text-green-600"}`}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>78% success</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-indigo-600 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4" />
                  Solve Now
                </motion.button>
              </div>
            </div>

            {/* Floating Badge Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -right-4 -bottom-14 md:-right-8"
            >
              <div
                className={`rounded-2xl p-4 shadow-xl border transition-colors duration-300 ${
                  darkMode
                    ? "bg-neutral-900 shadow-yellow-500/20 border-neutral-800"
                    : "bg-white shadow-yellow-500/10 border-neutral-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div
                      className={`text-sm font-bold ${darkMode ? "text-white" : "text-neutral-900"}`}
                    >
                      Achievement!
                    </div>
                    <div
                      className={`text-xs ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                    >
                      XSS Slayer Badge
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Streak Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -left-4 -top-14 md:-left-8"
            >
              <div
                className={`rounded-2xl p-4 shadow-xl border transition-colors duration-300 ${
                  darkMode
                    ? "bg-neutral-900 shadow-orange-500/20 border-neutral-800"
                    : "bg-white shadow-orange-500/10 border-neutral-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div
                      className={`text-sm font-bold ${darkMode ? "text-white" : "text-neutral-900"}`}
                    >
                      7 Day Streak!
                    </div>
                    <div
                      className={`text-xs ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                    >
                      Keep it going
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
