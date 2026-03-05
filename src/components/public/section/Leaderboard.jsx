"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../redux/features/theme/themeSlice.js";
import { motion } from "framer-motion";
import {
  Trophy,
  Flame,
  Zap,
  Medal,
  Crown,
  Star,
  Users,
  Target,
  Award,
  ArrowRight,
  Sparkles,
  Shield,
  Calendar,
  Gift,
  BadgeCheck,
  Code2,
  Timer,
  ChevronUp,
  ChevronDown,
  Minus,
  User,
  Lock,
} from "lucide-react";
import { topUsers, weeklyChallenge } from "../../../assets/assets.js";

export default function Leaderboard() {
  const darkMode = useSelector(selectDarkMode);
  const [activeTab, setActiveTab] = useState("global");
  const [hoveredRank, setHoveredRank] = useState(null);

  return (
    <section
      id="leaderboard"
      className={`py-24 px-4 relative overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-neutral-950 text-white" : "bg-white text-neutral-900"
      }`}
    >
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Yellow tint overlay */}
        <div
          className={`absolute inset-0 bg-linear-to-b from-transparent via-yellow-500/5 to-transparent`}
        />
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
              darkMode
                ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                : "bg-yellow-50 text-yellow-600 border-yellow-200"
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Compete with developers worldwide</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Global{" "}
            <span className="bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h2>

          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              darkMode ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Climb the ranks, earn badges, and prove you're the ultimate
            security-first developer.
          </p>
        </motion.div>

        {/* ── Top 3 Podium ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex justify-center items-end gap-4 md:gap-8">
            <PodiumCard user={topUsers[1]} position={2} darkMode={darkMode} />
            <PodiumCard user={topUsers[0]} position={1} darkMode={darkMode} />
            <PodiumCard user={topUsers[2]} position={3} darkMode={darkMode} />
          </div>
        </motion.div>

        {/* ── Main Content Grid ── */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* ── Leaderboard Table (2 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div
              className={`rounded-3xl overflow-hidden border shadow-xl transition-colors duration-300 ${
                darkMode
                  ? "bg-neutral-900 border-neutral-800 shadow-black/20"
                  : "bg-white border-neutral-200 shadow-black/5"
              }`}
            >
              {/* Tabs */}
              <div
                className={`flex items-center gap-1 p-2 ${
                  darkMode ? "bg-neutral-800" : "bg-neutral-100"
                }`}
              >
                {["global", "weekly", "friends"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      activeTab === tab
                        ? darkMode
                          ? "bg-neutral-700 text-white shadow-sm"
                          : "bg-white text-neutral-900 shadow-sm"
                        : darkMode
                          ? "text-neutral-400 hover:text-neutral-300"
                          : "text-neutral-500 hover:text-neutral-700"
                    }`}
                  >
                    {tab === "global" && <GlobeIcon className="w-4 h-4" />}
                    {tab === "weekly" && <Calendar className="w-4 h-4" />}
                    {tab === "friends" && <Users className="w-4 h-4" />}
                    <span className="capitalize">{tab}</span>
                  </button>
                ))}
              </div>

              {/* Table */}
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr
                        className={`text-xs uppercase tracking-wider ${
                          darkMode ? "text-neutral-500" : "text-neutral-400"
                        }`}
                      >
                        <th className="text-left pb-4 pl-2">Rank</th>
                        <th className="text-left pb-4">Developer</th>
                        <th className="text-left pb-4 hidden sm:table-cell">
                          Level
                        </th>
                        <th className="text-right pb-4">XP</th>
                        <th className="text-right pb-4 pr-2">Streak</th>
                      </tr>
                    </thead>
                    <tbody
                      className={`divide-y ${
                        darkMode ? "divide-neutral-800" : "divide-neutral-100"
                      }`}
                    >
                      {topUsers.map((user, i) => (
                        <motion.tr
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          onMouseEnter={() => setHoveredRank(user.rank)}
                          onMouseLeave={() => setHoveredRank(null)}
                          className={`group cursor-pointer transition-colors ${
                            hoveredRank === user.rank
                              ? darkMode
                                ? "bg-indigo-500/10"
                                : "bg-indigo-50"
                              : ""
                          }`}
                        >
                          {/* Rank */}
                          <td className="py-4 pl-2">
                            <div className="flex items-center gap-2">
                              <RankBadge rank={user.rank} darkMode={darkMode} />
                              <ChangeIndicator
                                change={user.change}
                                darkMode={darkMode}
                              />
                            </div>
                          </td>

                          {/* User */}
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm ${
                                  user.rank === 1
                                    ? "bg-linear-to-br from-yellow-400 to-orange-500"
                                    : user.rank === 2
                                      ? "bg-linear-to-br from-neutral-300 to-neutral-400"
                                      : user.rank === 3
                                        ? "bg-linear-to-br from-amber-600 to-amber-700"
                                        : "bg-linear-to-br from-indigo-500 to-purple-500"
                                }`}
                              >
                                {user.avatar}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`font-semibold ${
                                      darkMode
                                        ? "text-white"
                                        : "text-neutral-900"
                                    }`}
                                  >
                                    {user.name}
                                  </span>
                                  <span className="text-sm">
                                    {user.country}
                                  </span>
                                </div>
                                <div
                                  className={`text-xs ${
                                    darkMode
                                      ? "text-neutral-400"
                                      : "text-neutral-500"
                                  }`}
                                >
                                  {user.title}
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* Level */}
                          <td className="py-4 hidden sm:table-cell">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-indigo-500" />
                              <span
                                className={`font-medium ${
                                  darkMode ? "text-white" : "text-neutral-900"
                                }`}
                              >
                                {user.level}
                              </span>
                            </div>
                          </td>

                          {/* XP */}
                          <td className="py-4 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <Zap className="w-4 h-4 text-indigo-500" />
                              <span
                                className={`font-bold ${
                                  darkMode ? "text-white" : "text-neutral-900"
                                }`}
                              >
                                {user.score.toLocaleString()}
                              </span>
                            </div>
                          </td>

                          {/* Streak */}
                          <td className="py-4 pr-2 text-right">
                            <div className="inline-flex items-center gap-1 px-2 py-1 bg-orange-500/10 rounded-lg">
                              <Flame className="w-4 h-4 text-orange-500" />
                              <span className="font-bold text-orange-500">
                                {user.streak}
                              </span>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* View All */}
                <div className="mt-6 text-center">
                  <button
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors cursor-pointer ${
                      darkMode
                        ? "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                        : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                    }`}
                  >
                    View Full Leaderboard
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Sidebar ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Your Rank Card */}
            <div
              className={`rounded-3xl p-6 border shadow-xl transition-colors duration-300 ${
                darkMode
                  ? "bg-neutral-900 border-neutral-800 shadow-black/20"
                  : "bg-white border-neutral-200 shadow-black/5"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3
                  className={`font-bold flex items-center gap-2 ${
                    darkMode ? "text-white" : "text-neutral-900"
                  }`}
                >
                  <User className="w-5 h-5 text-indigo-500" />
                  Your Rank
                </h3>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    darkMode
                      ? "bg-indigo-500/20 text-indigo-400"
                      : "bg-indigo-50 text-indigo-600"
                  }`}
                >
                  Join to compete
                </span>
              </div>

              {/* Locked State */}
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-linear-to-t z-10 flex items-end justify-center pb-4 ${
                    darkMode
                      ? "from-neutral-900 to-transparent"
                      : "from-white to-transparent"
                  }`}
                >
                  <button className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all cursor-pointer">
                    <Lock className="w-4 h-4" />
                    Sign Up to Track
                  </button>
                </div>

                <div className="opacity-30 blur-sm pointer-events-none">
                  <div className="text-center mb-4">
                    <div
                      className={`text-5xl font-bold ${
                        darkMode ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      #???
                    </div>
                    <div
                      className={`text-sm ${
                        darkMode ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      Global Ranking
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Challenges", "XP"].map((label) => (
                      <div
                        key={label}
                        className={`rounded-xl p-3 text-center ${
                          darkMode ? "bg-neutral-800" : "bg-neutral-100"
                        }`}
                      >
                        <div
                          className={`text-xl font-bold ${
                            darkMode ? "text-white" : "text-neutral-900"
                          }`}
                        >
                          0
                        </div>
                        <div
                          className={`text-xs ${
                            darkMode ? "text-neutral-400" : "text-neutral-500"
                          }`}
                        >
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Challenge */}
            <div
              className={`rounded-3xl p-6 border transition-colors duration-300 ${
                darkMode
                  ? "bg-linear-to-br from-indigo-500/20 to-purple-500/20 border-indigo-500/30"
                  : "bg-linear-to-br from-indigo-50 to-purple-50 border-indigo-200"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`font-bold flex items-center gap-2 ${
                    darkMode ? "text-white" : "text-neutral-900"
                  }`}
                >
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Weekly Challenge
                </h3>
                <span
                  className={`flex items-center gap-1 text-xs ${
                    darkMode ? "text-neutral-400" : "text-neutral-500"
                  }`}
                >
                  <Timer className="w-3 h-3" />
                  {weeklyChallenge.timeLeft}
                </span>
              </div>

              <div
                className={`rounded-2xl p-4 mb-4 transition-colors duration-300 ${
                  darkMode ? "bg-neutral-900" : "bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4
                      className={`font-semibold ${
                        darkMode ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      {weeklyChallenge.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-red-500/10 text-red-500 text-xs font-medium rounded-full">
                        {weeklyChallenge.difficulty}
                      </span>
                      <span
                        className={`flex items-center gap-1 text-xs ${
                          darkMode ? "text-neutral-400" : "text-neutral-500"
                        }`}
                      >
                        <Users className="w-3 h-3" />
                        {weeklyChallenge.participants.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Shield className="w-8 h-8 text-indigo-500 shrink-0" />
                </div>

                <div className="flex items-center gap-2 p-2 bg-yellow-500/10 rounded-xl">
                  <Gift className="w-4 h-4 text-yellow-500 shrink-0" />
                  <span
                    className={`text-sm font-medium ${
                      darkMode ? "text-yellow-400" : "text-yellow-600"
                    }`}
                  >
                    {weeklyChallenge.prize}
                  </span>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all cursor-pointer">
                Join Challenge
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Badges Showcase */}
            <div
              className={`rounded-3xl p-6 border shadow-xl transition-colors duration-300 ${
                darkMode
                  ? "bg-neutral-900 border-neutral-800 shadow-black/20"
                  : "bg-white border-neutral-200 shadow-black/5"
              }`}
            >
              <h3
                className={`font-bold flex items-center gap-2 mb-4 ${
                  darkMode ? "text-white" : "text-neutral-900"
                }`}
              >
                <Award className="w-5 h-5 text-purple-500" />
                Top Badges
              </h3>

              <div className="grid grid-cols-4 gap-3">
                {[
                  {
                    icon: Shield,
                    color: "from-green-400 to-emerald-500",
                    name: "Defender",
                  },
                  {
                    icon: Zap,
                    color: "from-yellow-400 to-orange-500",
                    name: "Speed",
                  },
                  {
                    icon: Flame,
                    color: "from-orange-400 to-red-500",
                    name: "Streak",
                  },
                  {
                    icon: Code2,
                    color: "from-blue-400 to-cyan-500",
                    name: "Coder",
                  },
                  {
                    icon: Target,
                    color: "from-purple-400 to-pink-500",
                    name: "Precise",
                  },
                  {
                    icon: Star,
                    color: "from-yellow-400 to-amber-500",
                    name: "Star",
                  },
                  {
                    icon: Trophy,
                    color: "from-amber-400 to-orange-500",
                    name: "Winner",
                  },
                  {
                    icon: BadgeCheck,
                    color: "from-indigo-500 to-purple-500",
                    name: "Verified",
                  },
                ].map((badge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="group cursor-pointer"
                  >
                    <div
                      className={`w-full aspect-square rounded-xl bg-linear-to-br ${badge.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <badge.icon className="w-5 h-5 text-white" />
                    </div>
                    <div
                      className={`text-xs text-center mt-1 truncate ${
                        darkMode ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      {badge.name}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <button
                  className={`text-sm font-medium hover:underline cursor-pointer ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  View all 50+ badges →
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div
            className={`rounded-3xl p-8 md:p-12 border transition-colors duration-300 ${
              darkMode
                ? "bg-linear-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 border-yellow-500/30"
                : "bg-linear-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border-yellow-200"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <h3
                className={`text-2xl md:text-3xl font-bold ${
                  darkMode ? "text-white" : "text-neutral-900"
                }`}
              >
                Ready to Compete?
              </h3>
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>

            <p
              className={`mb-8 max-w-xl mx-auto ${
                darkMode ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Join thousands of developers competing to become the ultimate
              security expert. Start solving challenges and climb the ranks!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#challenges"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-yellow-500/25 transition-all"
              >
                <Trophy className="w-5 h-5" />
                Start Competing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-2xl transition-all ${
                  darkMode
                    ? "bg-neutral-800 text-white hover:bg-neutral-700"
                    : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
                }`}
              >
                <Users className="w-5 h-5" />
                Join Beta Waitlist
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// Helper Components
// ─────────────────────────────────────────

function PodiumCard({ user, position, darkMode }) {
  const heights = { 1: "h-40 md:h-48", 2: "h-32 md:h-40", 3: "h-28 md:h-36" };
  const colors = {
    1: "from-yellow-400 to-orange-500",
    2: "from-neutral-300 to-neutral-400",
    3: "from-amber-600 to-amber-700",
  };
  const icons = { 1: Crown, 2: Medal, 3: Award };
  const Icon = icons[position];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: position === 1 ? 0 : position === 2 ? 0.1 : 0.2 }}
      className={`flex flex-col items-center ${
        position === 1 ? "order-2" : position === 2 ? "order-1" : "order-3"
      }`}
    >
      {/* User Info */}
      <div className="mb-4 text-center">
        <div className="relative">
          <div
            className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-linear-to-br ${colors[position]} flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg`}
          >
            {user.avatar}
          </div>
          <div
            className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-linear-to-br ${colors[position]} flex items-center justify-center shadow-lg`}
          >
            <Icon className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="mt-3">
          <div
            className={`font-bold text-sm md:text-base ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            {user.name}
          </div>
          <div
            className={`flex items-center justify-center gap-1 text-xs ${
              darkMode ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            <Zap className="w-3 h-3 text-indigo-500" />
            {user.score.toLocaleString()} XP
          </div>
        </div>
      </div>

      {/* Podium Block */}
      <div
        className={`w-24 md:w-32 ${heights[position]} bg-linear-to-t ${colors[position]} rounded-t-2xl flex items-start justify-center pt-4 shadow-lg`}
      >
        <span className="text-3xl md:text-4xl font-bold text-white/90">
          #{position}
        </span>
      </div>
    </motion.div>
  );
}

function RankBadge({ rank, darkMode }) {
  if (rank === 1)
    return (
      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
        <Crown className="w-4 h-4 text-white" />
      </div>
    );
  if (rank === 2)
    return (
      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
        <Medal className="w-4 h-4 text-white" />
      </div>
    );
  if (rank === 3)
    return (
      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-amber-600 to-amber-700 flex items-center justify-center">
        <Award className="w-4 h-4 text-white" />
      </div>
    );
  return (
    <div
      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
        darkMode ? "bg-neutral-700" : "bg-neutral-200"
      }`}
    >
      <span
        className={`text-sm font-bold ${
          darkMode ? "text-neutral-300" : "text-neutral-600"
        }`}
      >
        #{rank}
      </span>
    </div>
  );
}

function ChangeIndicator({ change, darkMode }) {
  if (change === "up")
    return <ChevronUp className="w-4 h-4 text-emerald-500" />;
  if (change === "down")
    return <ChevronDown className="w-4 h-4 text-red-500" />;
  return (
    <Minus
      className={`w-4 h-4 ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
    />
  );
}

function GlobeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
