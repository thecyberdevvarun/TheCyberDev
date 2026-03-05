"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../redux/features/theme/themeSlice.js";
import {
  Award,
  Trophy,
  Star,
  Lock,
  Unlock,
  Flame,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Crown,
  Sparkles,
  Search,
  X,
  Calendar,
} from "lucide-react";

// ─── Mock Data ────────────────────────────────────────────────────────────────

const achievementsData = {
  totalAchievements: 48,
  unlockedAchievements: 23,
  totalPoints: 2350,
  earnedPoints: 1150,
  categories: [
    {
      id: "challenges",
      name: "Challenge Master",
      icon: Target,
      color: "indigo",
      achievements: [
        {
          id: 1,
          name: "First Blood",
          description: "Complete your first challenge",
          icon: "🩸",
          points: 10,
          rarity: "common",
          progress: 1,
          maxProgress: 1,
          unlocked: true,
          unlockedAt: "2024-01-15",
        },
        {
          id: 2,
          name: "Challenger",
          description: "Complete 10 challenges",
          icon: "⚔️",
          points: 25,
          rarity: "common",
          progress: 10,
          maxProgress: 10,
          unlocked: true,
          unlockedAt: "2024-02-01",
        },
        {
          id: 3,
          name: "Veteran",
          description: "Complete 50 challenges",
          icon: "🎖️",
          points: 50,
          rarity: "rare",
          progress: 50,
          maxProgress: 50,
          unlocked: true,
          unlockedAt: "2024-03-15",
        },
        {
          id: 4,
          name: "Elite",
          description: "Complete 100 challenges",
          icon: "💎",
          points: 100,
          rarity: "epic",
          progress: 89,
          maxProgress: 100,
          unlocked: false,
        },
        {
          id: 5,
          name: "Legend",
          description: "Complete all challenges",
          icon: "👑",
          points: 250,
          rarity: "legendary",
          progress: 89,
          maxProgress: 150,
          unlocked: false,
        },
      ],
    },
    {
      id: "speed",
      name: "Speed Demon",
      icon: Zap,
      color: "yellow",
      achievements: [
        {
          id: 6,
          name: "Quick Draw",
          description: "Complete a challenge in under 5 minutes",
          icon: "⚡",
          points: 15,
          rarity: "common",
          progress: 1,
          maxProgress: 1,
          unlocked: true,
          unlockedAt: "2024-01-20",
        },
        {
          id: 7,
          name: "Lightning Fast",
          description: "Complete a challenge in under 2 minutes",
          icon: "🌩️",
          points: 50,
          rarity: "rare",
          progress: 1,
          maxProgress: 1,
          unlocked: true,
          unlockedAt: "2024-02-10",
        },
        {
          id: 8,
          name: "Speed Runner",
          description: "Complete 10 challenges in under 5 minutes each",
          icon: "🏃",
          points: 75,
          rarity: "epic",
          progress: 7,
          maxProgress: 10,
          unlocked: false,
        },
      ],
    },
    {
      id: "perfect",
      name: "Perfectionist",
      icon: Star,
      color: "emerald",
      achievements: [
        {
          id: 9,
          name: "No Hints Needed",
          description: "Complete a challenge without using any hints",
          icon: "🧠",
          points: 20,
          rarity: "common",
          progress: 1,
          maxProgress: 1,
          unlocked: true,
          unlockedAt: "2024-01-18",
        },
        {
          id: 10,
          name: "Pure Skill",
          description: "Complete 10 challenges without hints",
          icon: "🎯",
          points: 50,
          rarity: "rare",
          progress: 10,
          maxProgress: 10,
          unlocked: true,
          unlockedAt: "2024-02-20",
        },
        {
          id: 11,
          name: "Mastermind",
          description: "Complete 50 challenges without hints",
          icon: "🏆",
          points: 150,
          rarity: "legendary",
          progress: 34,
          maxProgress: 50,
          unlocked: false,
        },
      ],
    },
    {
      id: "streaks",
      name: "Consistency",
      icon: Flame,
      color: "orange",
      achievements: [
        {
          id: 12,
          name: "Getting Started",
          description: "Maintain a 3-day streak",
          icon: "🔥",
          points: 15,
          rarity: "common",
          progress: 3,
          maxProgress: 3,
          unlocked: true,
          unlockedAt: "2024-01-18",
        },
        {
          id: 13,
          name: "Dedicated",
          description: "Maintain a 7-day streak",
          icon: "📅",
          points: 30,
          rarity: "common",
          progress: 7,
          maxProgress: 7,
          unlocked: true,
          unlockedAt: "2024-01-24",
        },
        {
          id: 14,
          name: "On Fire",
          description: "Maintain a 30-day streak",
          icon: "🌋",
          points: 100,
          rarity: "epic",
          progress: 12,
          maxProgress: 30,
          unlocked: false,
        },
        {
          id: 15,
          name: "Unstoppable",
          description: "Maintain a 100-day streak",
          icon: "💫",
          points: 300,
          rarity: "legendary",
          progress: 12,
          maxProgress: 100,
          unlocked: false,
        },
      ],
    },
    {
      id: "categories",
      name: "Specialist",
      icon: Shield,
      color: "purple",
      achievements: [
        {
          id: 16,
          name: "XSS Hunter",
          description: "Complete all XSS challenges",
          icon: "🎯",
          points: 100,
          rarity: "epic",
          progress: 24,
          maxProgress: 30,
          unlocked: false,
        },
        {
          id: 17,
          name: "SQL Wizard",
          description: "Complete all SQL Injection challenges",
          icon: "🧙",
          points: 100,
          rarity: "epic",
          progress: 18,
          maxProgress: 25,
          unlocked: false,
        },
        {
          id: 18,
          name: "Auth Expert",
          description: "Complete all Authentication challenges",
          icon: "🔐",
          points: 100,
          rarity: "epic",
          progress: 15,
          maxProgress: 25,
          unlocked: false,
        },
      ],
    },
    {
      id: "social",
      name: "Community",
      icon: Users,
      color: "cyan",
      achievements: [
        {
          id: 19,
          name: "Helper",
          description: "Help 5 other users in discussions",
          icon: "🤝",
          points: 25,
          rarity: "common",
          progress: 3,
          maxProgress: 5,
          unlocked: false,
        },
        {
          id: 20,
          name: "Top Contributor",
          description: "Have your solution upvoted 50 times",
          icon: "⭐",
          points: 75,
          rarity: "rare",
          progress: 28,
          maxProgress: 50,
          unlocked: false,
        },
        {
          id: 21,
          name: "Community Champion",
          description: "Help 100 users and earn 200 upvotes",
          icon: "🏅",
          points: 200,
          rarity: "legendary",
          progress: 0,
          maxProgress: 1,
          unlocked: false,
        },
      ],
    },
  ],
  recentUnlocks: [
    {
      id: 3,
      name: "Veteran",
      icon: "🎖️",
      unlockedAt: "2024-03-15",
      points: 50,
    },
    {
      id: 10,
      name: "Pure Skill",
      icon: "🎯",
      unlockedAt: "2024-02-20",
      points: 50,
    },
    {
      id: 7,
      name: "Lightning Fast",
      icon: "🌩️",
      unlockedAt: "2024-02-10",
      points: 50,
    },
  ],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getAllAchievements() {
  const all = [];
  achievementsData.categories.forEach((cat) => {
    cat.achievements.forEach((ach) => {
      all.push({ ...ach, category: cat.name, categoryColor: cat.color });
    });
  });
  return all;
}

const rarityColors = {
  common: {
    border: (dark) => (dark ? "border-neutral-600" : "border-neutral-300"),
    bg: (dark) => (dark ? "bg-neutral-800" : "bg-neutral-50"),
    text: "text-neutral-400",
    badge: (dark) =>
      dark
        ? "bg-neutral-700 text-neutral-300"
        : "bg-neutral-200 text-neutral-600",
    dot: "bg-neutral-400",
    rarityBg: (dark) => (dark ? "bg-neutral-700" : "bg-neutral-200"),
    rarityText: (dark) => (dark ? "text-neutral-300" : "text-neutral-600"),
    gradient: "from-neutral-400 to-neutral-500",
  },
  rare: {
    border: () => "border-blue-500",
    bg: (dark) => (dark ? "bg-blue-500/10" : "bg-blue-50"),
    text: "text-blue-500",
    badge: (dark) =>
      dark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600",
    dot: "bg-blue-500",
    rarityBg: (dark) => (dark ? "bg-blue-500/20" : "bg-blue-100"),
    rarityText: () => "text-blue-500",
    gradient: "from-blue-400 to-blue-600",
  },
  epic: {
    border: () => "border-purple-500",
    bg: (dark) => (dark ? "bg-purple-500/10" : "bg-purple-50"),
    text: "text-purple-500",
    badge: (dark) =>
      dark
        ? "bg-purple-500/20 text-purple-400"
        : "bg-purple-100 text-purple-600",
    dot: "bg-purple-500",
    rarityBg: (dark) => (dark ? "bg-purple-500/20" : "bg-purple-100"),
    rarityText: () => "text-purple-500",
    gradient: "from-purple-400 to-purple-600",
  },
  legendary: {
    border: () => "border-yellow-500",
    bg: (dark) => (dark ? "bg-yellow-500/10" : "bg-yellow-50"),
    text: "text-yellow-500",
    badge: (dark) =>
      dark
        ? "bg-yellow-500/20 text-yellow-400"
        : "bg-yellow-100 text-yellow-600",
    dot: "bg-yellow-500",
    rarityBg: (dark) => (dark ? "bg-yellow-500/20" : "bg-yellow-100"),
    rarityText: () => "text-yellow-500",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
};

const colorClasses = {
  indigo: {
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-500",
    progressBar: "from-indigo-500 to-indigo-600",
  },
  yellow: {
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-500",
    progressBar: "from-yellow-500 to-yellow-600",
  },
  emerald: {
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    progressBar: "from-emerald-500 to-emerald-600",
  },
  orange: {
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    progressBar: "from-orange-500 to-orange-600",
  },
  purple: {
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    progressBar: "from-purple-500 to-purple-600",
  },
  cyan: {
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    progressBar: "from-cyan-500 to-cyan-600",
  },
};

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AchievementsPage() {
  const darkMode = useSelector(selectDarkMode);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterRarity, setFilterRarity] = useState("all");
  const [showUnlocked, setShowUnlocked] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const overallProgress =
    (achievementsData.unlockedAchievements /
      achievementsData.totalAchievements) *
    100;

  const allAchievements = getAllAchievements();

  const filteredAchievements = allAchievements.filter((ach) => {
    const matchesCategory =
      selectedCategory === "all" || ach.category === selectedCategory;
    const matchesRarity = filterRarity === "all" || ach.rarity === filterRarity;
    const matchesUnlocked =
      showUnlocked === "all" ||
      (showUnlocked === "unlocked" && ach.unlocked) ||
      (showUnlocked === "locked" && !ach.unlocked);
    const matchesSearch =
      ach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ach.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesRarity && matchesUnlocked && matchesSearch;
  });

  const rarityCount = {
    common: allAchievements.filter((a) => a.rarity === "common" && a.unlocked)
      .length,
    rare: allAchievements.filter((a) => a.rarity === "rare" && a.unlocked)
      .length,
    epic: allAchievements.filter((a) => a.rarity === "epic" && a.unlocked)
      .length,
    legendary: allAchievements.filter(
      (a) => a.rarity === "legendary" && a.unlocked,
    ).length,
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    filterRarity !== "all" ||
    showUnlocked !== "all" ||
    searchQuery;

  const clearFilters = () => {
    setSelectedCategory("all");
    setFilterRarity("all");
    setShowUnlocked("all");
    setSearchQuery("");
  };

  const selectClass = `px-4 py-2.5 rounded-xl border outline-none cursor-pointer text-sm font-medium transition-colors ${
    darkMode
      ? "bg-neutral-800 border-neutral-700 text-white hover:border-neutral-600"
      : "bg-neutral-50 border-neutral-200 text-neutral-900 hover:border-neutral-300"
  }`;

  return (
    <div className="space-y-6">
      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <h1
            className={`text-2xl sm:text-3xl font-bold ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Achievements
          </h1>
          <p
            className={`mt-1 text-sm sm:text-base ${
              darkMode ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            Track your progress and unlock rewards
          </p>
        </div>
      </motion.div>

      {/* ── Stat Cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <StatCard
          icon={Trophy}
          iconColor="text-indigo-500"
          iconBg="bg-indigo-500/10"
          value={achievementsData.unlockedAchievements}
          maxValue={achievementsData.totalAchievements}
          label="Achievements Unlocked"
          darkMode={darkMode}
        />
        <StatCard
          icon={Star}
          iconColor="text-yellow-500"
          iconBg="bg-yellow-500/10"
          value={achievementsData.earnedPoints}
          maxValue={achievementsData.totalPoints}
          label="Points Earned"
          darkMode={darkMode}
        />
        <StatCard
          icon={Crown}
          iconColor="text-purple-500"
          iconBg="bg-purple-500/10"
          value={rarityCount.legendary + rarityCount.epic}
          label="Rare+ Achievements"
          darkMode={darkMode}
        />
        <StatCard
          icon={TrendingUp}
          iconColor="text-emerald-500"
          iconBg="bg-emerald-500/10"
          value={`${Math.round(overallProgress)}%`}
          label="Overall Progress"
          darkMode={darkMode}
        />
      </motion.div>

      {/* ── Overall Progress Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className={`p-4 sm:p-6 rounded-2xl border ${
          darkMode
            ? "bg-neutral-900 border-neutral-800"
            : "bg-white border-neutral-200"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <span
            className={`font-semibold ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Overall Progress
          </span>
          <span
            className={`text-sm ${
              darkMode ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            {achievementsData.unlockedAchievements} of{" "}
            {achievementsData.totalAchievements} achievements
          </span>
        </div>

        {/* Progress Bar */}
        <div
          className={`h-4 rounded-full overflow-hidden ${
            darkMode ? "bg-neutral-800" : "bg-neutral-200"
          }`}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>

        {/* Rarity Breakdown */}
        <div className="grid grid-cols-4 gap-3 mt-4">
          {["common", "rare", "epic", "legendary"].map((r) => (
            <RarityBadge
              key={r}
              rarity={r}
              count={rarityCount[r]}
              darkMode={darkMode}
            />
          ))}
        </div>
      </motion.div>

      {/* ── Recent Unlocks ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`p-4 sm:p-6 rounded-2xl border ${
          darkMode
            ? "bg-neutral-900 border-neutral-800"
            : "bg-white border-neutral-200"
        }`}
      >
        <h2
          className={`font-semibold mb-4 flex items-center gap-2 ${
            darkMode ? "text-white" : "text-neutral-900"
          }`}
        >
          <Sparkles className="w-5 h-5 text-yellow-500" />
          Recently Unlocked
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {achievementsData.recentUnlocks.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.05 }}
              className={`shrink-0 flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-colors ${
                darkMode
                  ? "bg-neutral-800 hover:bg-neutral-700"
                  : "bg-neutral-100 hover:bg-neutral-200"
              }`}
            >
              <span className="text-3xl">{ach.icon}</span>
              <div>
                <div
                  className={`font-medium text-sm ${
                    darkMode ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {ach.name}
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span
                    className={`text-xs ${
                      darkMode ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {new Date(ach.unlockedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-0.5 text-xs text-yellow-500 font-medium">
                    <Star className="w-3 h-3" />
                    {ach.points}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Category Progress ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className={`p-4 sm:p-6 rounded-2xl border ${
          darkMode
            ? "bg-neutral-900 border-neutral-800"
            : "bg-white border-neutral-200"
        }`}
      >
        <h2
          className={`font-semibold mb-4 flex items-center gap-2 ${
            darkMode ? "text-white" : "text-neutral-900"
          }`}
        >
          <Award className="w-5 h-5 text-indigo-500" />
          Category Progress
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievementsData.categories.map((cat, i) => {
            const unlocked = cat.achievements.filter((a) => a.unlocked).length;
            const total = cat.achievements.length;
            const progress = (unlocked / total) * 100;
            return (
              <CategoryCard
                key={cat.id}
                category={cat}
                unlocked={unlocked}
                total={total}
                progress={progress}
                darkMode={darkMode}
                delay={i * 0.05}
              />
            );
          })}
        </div>
      </motion.div>

      {/* ── Filters ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`p-4 rounded-2xl border ${
          darkMode
            ? "bg-neutral-900 border-neutral-800"
            : "bg-white border-neutral-200"
        }`}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${
                darkMode ? "text-neutral-400" : "text-neutral-500"
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search achievements..."
              className={`w-full pl-10 pr-10 py-2.5 rounded-xl border outline-none transition-colors text-sm ${
                darkMode
                  ? "bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-indigo-500"
                  : "bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-indigo-500"
              }`}
            />
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSearchQuery("")}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full cursor-pointer ${
                    darkMode ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
                  }`}
                >
                  <X
                    className={`w-4 h-4 ${
                      darkMode ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={selectClass}
          >
            <option value="all">All Categories</option>
            {achievementsData.categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Rarity Filter */}
          <select
            value={filterRarity}
            onChange={(e) => setFilterRarity(e.target.value)}
            className={selectClass}
          >
            <option value="all">All Rarities</option>
            <option value="common">Common</option>
            <option value="rare">Rare</option>
            <option value="epic">Epic</option>
            <option value="legendary">Legendary</option>
          </select>

          {/* Status Filter */}
          <select
            value={showUnlocked}
            onChange={(e) => setShowUnlocked(e.target.value)}
            className={selectClass}
          >
            <option value="all">All Status</option>
            <option value="unlocked">Unlocked</option>
            <option value="locked">Locked</option>
          </select>
        </div>

        {/* Active Filters */}
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-2 mt-4 flex-wrap overflow-hidden"
            >
              <span
                className={`text-sm ${
                  darkMode ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                Active filters:
              </span>
              {selectedCategory !== "all" && (
                <FilterTag
                  label={selectedCategory}
                  onRemove={() => setSelectedCategory("all")}
                  darkMode={darkMode}
                />
              )}
              {filterRarity !== "all" && (
                <FilterTag
                  label={filterRarity}
                  onRemove={() => setFilterRarity("all")}
                  darkMode={darkMode}
                />
              )}
              {showUnlocked !== "all" && (
                <FilterTag
                  label={showUnlocked}
                  onRemove={() => setShowUnlocked("all")}
                  darkMode={darkMode}
                />
              )}
              {searchQuery && (
                <FilterTag
                  label={`"${searchQuery}"`}
                  onRemove={() => setSearchQuery("")}
                  darkMode={darkMode}
                />
              )}
              <button
                onClick={clearFilters}
                className={`text-sm font-medium cursor-pointer transition ${
                  darkMode
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-700"
                }`}
              >
                Clear all
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Achievements Grid ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <AnimatePresence mode="wait">
          {filteredAchievements.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filteredAchievements.map((achievement, i) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  darkMode={darkMode}
                  delay={i * 0.03}
                  onClick={() => setSelectedAchievement(achievement)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`text-center py-16 rounded-2xl border ${
                darkMode
                  ? "bg-neutral-900 border-neutral-800"
                  : "bg-white border-neutral-200"
              }`}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-neutral-900"
                }`}
              >
                No achievements found
              </h3>
              <p
                className={`mb-6 ${
                  darkMode ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                Try adjusting your filters or search query
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition-colors cursor-pointer"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Results Count */}
      {filteredAchievements.length > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-center text-sm ${
            darkMode ? "text-neutral-500" : "text-neutral-400"
          }`}
        >
          Showing {filteredAchievements.length} of {allAchievements.length}{" "}
          achievements
        </motion.p>
      )}

      {/* ── Achievement Detail Modal ── */}
      <AnimatePresence>
        {selectedAchievement && (
          <AchievementModal
            achievement={selectedAchievement}
            darkMode={darkMode}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({
  icon: Icon,
  iconColor,
  iconBg,
  value,
  maxValue,
  label,
  darkMode,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-4 sm:p-6 rounded-2xl border ${
        darkMode
          ? "bg-neutral-900 border-neutral-800"
          : "bg-white border-neutral-200"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-xl ${iconBg}`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
      <div
        className={`text-2xl sm:text-3xl font-bold ${
          darkMode ? "text-white" : "text-neutral-900"
        }`}
      >
        {value}
        {maxValue && (
          <span
            className={`text-lg font-normal ${
              darkMode ? "text-neutral-500" : "text-neutral-400"
            }`}
          >
            /{maxValue}
          </span>
        )}
      </div>
      <div
        className={`text-sm mt-1 ${
          darkMode ? "text-neutral-400" : "text-neutral-500"
        }`}
      >
        {label}
      </div>
    </motion.div>
  );
}

// ─── Rarity Badge ─────────────────────────────────────────────────────────────

function RarityBadge({ rarity, count, darkMode }) {
  const c = rarityColors[rarity];
  return (
    <div
      className={`flex items-center justify-center gap-2 p-2 rounded-xl ${c.rarityBg(darkMode)}`}
    >
      <div className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
      <span
        className={`text-xs sm:text-sm font-medium capitalize ${c.rarityText(darkMode)}`}
      >
        {rarity}
      </span>
      <span
        className={`text-xs sm:text-sm font-bold ${c.rarityText(darkMode)}`}
      >
        {count}
      </span>
    </div>
  );
}

// ─── Category Card ────────────────────────────────────────────────────────────

function CategoryCard({
  category,
  unlocked,
  total,
  progress,
  darkMode,
  delay,
}) {
  const Icon = category.icon;
  const colors = colorClasses[category.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-xl ${
        darkMode ? "bg-neutral-800" : "bg-neutral-100"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg ${colors.iconBg}`}>
          <Icon className={`w-5 h-5 ${colors.iconColor}`} />
        </div>
        <div>
          <h3
            className={`font-medium text-sm ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            {category.name}
          </h3>
          <p
            className={`text-xs ${
              darkMode ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            {unlocked}/{total} unlocked
          </p>
        </div>
      </div>
      <div
        className={`h-2 rounded-full overflow-hidden ${
          darkMode ? "bg-neutral-700" : "bg-neutral-200"
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          className={`h-full rounded-full bg-linear-to-r ${colors.progressBar}`}
        />
      </div>
    </motion.div>
  );
}

// ─── Filter Tag ───────────────────────────────────────────────────────────────

function FilterTag({ label, onRemove, darkMode }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
        darkMode
          ? "bg-indigo-500/20 text-indigo-400"
          : "bg-indigo-100 text-indigo-600"
      }`}
    >
      {label}
      <button
        onClick={onRemove}
        className="p-0.5 rounded-full hover:bg-black/10 cursor-pointer transition-colors"
      >
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}

// ─── Achievement Card ─────────────────────────────────────────────────────────

function AchievementCard({ achievement, darkMode, delay, onClick }) {
  const progress = (achievement.progress / achievement.maxProgress) * 100;
  const c = rarityColors[achievement.rarity];
  const isUnlocked = achievement.unlocked;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, y: -4 }}
      onClick={onClick}
      className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all ${
        isUnlocked
          ? `${c.border(darkMode)} ${c.bg(darkMode)}`
          : darkMode
            ? "border-neutral-800 bg-neutral-900 opacity-70"
            : "border-neutral-200 bg-white opacity-70"
      }`}
    >
      {/* Rarity Badge */}
      <div
        className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium capitalize ${c.badge(darkMode)}`}
      >
        {achievement.rarity}
      </div>

      {/* Lock Icon */}
      {!isUnlocked && (
        <div className="absolute top-3 left-3">
          <Lock
            className={`w-4 h-4 ${
              darkMode ? "text-neutral-600" : "text-neutral-400"
            }`}
          />
        </div>
      )}

      {/* Icon + Title */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`text-4xl shrink-0 ${
            !isUnlocked ? "grayscale opacity-50" : ""
          }`}
        >
          {achievement.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`font-bold truncate ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            {achievement.name}
          </h3>
          <p
            className={`text-sm mt-1 line-clamp-2 ${
              darkMode ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            {achievement.description}
          </p>
        </div>
      </div>

      {/* Progress Bar (locked only) */}
      {!isUnlocked && (
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span
              className={darkMode ? "text-neutral-400" : "text-neutral-500"}
            >
              Progress
            </span>
            <span
              className={darkMode ? "text-neutral-300" : "text-neutral-600"}
            >
              {achievement.progress}/{achievement.maxProgress}
            </span>
          </div>
          <div
            className={`h-2 rounded-full overflow-hidden ${
              darkMode ? "bg-neutral-700" : "bg-neutral-200"
            }`}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, delay: delay + 0.2 }}
              className="h-full bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"
            />
          </div>
        </div>
      )}

      {/* Points + Date */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star
            className={`w-4 h-4 ${
              isUnlocked
                ? "text-yellow-500"
                : darkMode
                  ? "text-neutral-600"
                  : "text-neutral-400"
            }`}
          />
          <span
            className={`font-semibold text-sm ${
              isUnlocked
                ? "text-yellow-500"
                : darkMode
                  ? "text-neutral-500"
                  : "text-neutral-400"
            }`}
          >
            {achievement.points} pts
          </span>
        </div>
        {isUnlocked && achievement.unlockedAt && (
          <span
            className={`text-xs flex items-center gap-1 ${
              darkMode ? "text-neutral-500" : "text-neutral-400"
            }`}
          >
            <CheckCircle className="w-3 h-3 text-emerald-500" />
            {new Date(achievement.unlockedAt).toLocaleDateString()}
          </span>
        )}
      </div>
    </motion.div>
  );
}

// ─── Achievement Modal ────────────────────────────────────────────────────────

function AchievementModal({ achievement, darkMode, onClose }) {
  const progress = (achievement.progress / achievement.maxProgress) * 100;
  const c = rarityColors[achievement.rarity];
  const isUnlocked = achievement.unlocked;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl ${
          darkMode ? "bg-neutral-900" : "bg-white"
        }`}
      >
        {/* ── Gradient Header ── */}
        <div
          className={`h-32 bg-linear-to-br ${c.gradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/20" />

          {/* Legendary Particles */}
          {achievement.rarity === "legendary" && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -120], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  className="absolute w-1 h-1 rounded-full bg-yellow-300"
                  style={{
                    left: `${Math.random() * 100}%`,
                    bottom: 0,
                  }}
                />
              ))}
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Rarity Label */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium capitalize">
            {achievement.rarity}
          </div>

          {/* Floating Icon */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.2 }}
              className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl ${
                darkMode ? "bg-neutral-800" : "bg-white"
              } ${!isUnlocked ? "grayscale opacity-70" : ""}`}
            >
              {achievement.icon}
            </motion.div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="pt-14 pb-6 px-6 text-center">
          {/* Status Badge */}
          {isUnlocked ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium mb-3"
            >
              <Unlock className="w-4 h-4" />
              Unlocked
            </motion.div>
          ) : (
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                darkMode
                  ? "bg-neutral-800 text-neutral-400"
                  : "bg-neutral-100 text-neutral-500"
              }`}
            >
              <Lock className="w-4 h-4" />
              Locked
            </div>
          )}

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className={`text-2xl font-bold mb-2 ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            {achievement.name}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`mb-6 ${
              darkMode ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            {achievement.description}
          </motion.p>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className={`p-4 rounded-2xl mb-6 text-left ${
              darkMode ? "bg-neutral-800" : "bg-neutral-100"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-sm font-medium ${
                  darkMode ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                Progress
              </span>
              <span
                className={`text-sm ${
                  darkMode ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                {achievement.progress} / {achievement.maxProgress}
              </span>
            </div>
            <div
              className={`h-3 rounded-full overflow-hidden ${
                darkMode ? "bg-neutral-700" : "bg-neutral-200"
              }`}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-full rounded-full bg-linear-to-r ${c.gradient}`}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span
                className={`text-xs ${
                  darkMode ? "text-neutral-500" : "text-neutral-400"
                }`}
              >
                {Math.round(progress)}% complete
              </span>
              {!isUnlocked && (
                <span
                  className={`text-xs ${
                    darkMode ? "text-neutral-500" : "text-neutral-400"
                  }`}
                >
                  {achievement.maxProgress - achievement.progress} more to go
                </span>
              )}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            <div
              className={`p-4 rounded-xl ${
                darkMode ? "bg-neutral-800" : "bg-neutral-100"
              }`}
            >
              <div className="flex items-center justify-center gap-1 text-xl font-bold text-yellow-500 mb-1">
                <Star className="w-5 h-5" />
                {achievement.points}
              </div>
              <div
                className={`text-xs ${
                  darkMode ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                Points
              </div>
            </div>
            <div
              className={`p-4 rounded-xl ${
                darkMode ? "bg-neutral-800" : "bg-neutral-100"
              }`}
            >
              <div
                className={`text-xl font-bold mb-1 capitalize ${c.rarityText(darkMode)}`}
              >
                {achievement.rarity}
              </div>
              <div
                className={`text-xs ${
                  darkMode ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                Rarity
              </div>
            </div>
          </motion.div>

          {/* Unlock Date */}
          {isUnlocked && achievement.unlockedAt && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className={`flex items-center justify-center gap-2 text-sm mb-6 ${
                darkMode ? "text-neutral-400" : "text-neutral-500"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Unlocked on{" "}
              {new Date(achievement.unlockedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3"
          >
            <button
              onClick={onClose}
              className={`flex-1 py-3 rounded-xl font-medium transition-colors cursor-pointer ${
                darkMode
                  ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                  : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900"
              }`}
            >
              Close
            </button>
            {isUnlocked && (
              <button className="flex-1 py-3 rounded-xl font-medium bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all cursor-pointer">
                Share
              </button>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
