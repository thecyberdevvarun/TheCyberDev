"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux/slices/themeSlice";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Trophy,
  Flame,
  Star,
  Users,
  Sparkles,
  Gift,
  Clock,
  Lock,
  BadgeCheck,
  Rocket,
  Bell,
  Code2,
  Target,
  TrendingUp,
  Crown,
  Timer,
  PartyPopper,
  Check,
  Loader2,
  Copy,
} from "lucide-react";

// ─────────────────────────────────────────
// Static Data
// ─────────────────────────────────────────
const benefits = [
  { icon: Zap, text: "500+ Security Challenges" },
  { icon: Shield, text: "OWASP Top 10 Coverage" },
  { icon: Trophy, text: "Leaderboards & Badges" },
  { icon: Flame, text: "Streak Rewards" },
];

const earlyBirdPerks = [
  { icon: Crown, text: "Lifetime Pro Access", highlight: true },
  { icon: Gift, text: "Exclusive Beta Badge", highlight: false },
  { icon: Star, text: "Priority Feature Requests", highlight: false },
  { icon: Users, text: "Private Discord Community", highlight: false },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer @ Stripe",
    avatar: "SC",
    text: "Finally, a platform that teaches security the way devs actually learn—by coding!",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Marcus Johnson",
    role: "Security Engineer @ Google",
    avatar: "MJ",
    text: "The gamification makes learning addictive. I've already spotted 3 vulns at work!",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Full Stack Dev @ Shopify",
    avatar: "ER",
    text: "Better than any security course I've taken. Hands-on practice is the way.",
    color: "from-orange-400 to-red-500",
  },
];

const socialUsers = [
  { initials: "JD", gradient: "from-indigo-500 to-purple-500" },
  { initials: "SK", gradient: "from-emerald-500 to-teal-500" },
  { initials: "MR", gradient: "from-amber-500 to-orange-500" },
  { initials: "AL", gradient: "from-red-500 to-pink-500" },
  { initials: "TC", gradient: "from-blue-500 to-cyan-500" },
];

// ─────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────
export default function CTA() {
  const darkMode = useSelector(selectDarkMode);

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://thecyberdev.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="waitlist" className="py-32 px-4 relative overflow-hidden">
      {/* ── Gradient Background ── */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950"
            : "bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600"
        }`}
      />

      {/* ── Animated Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-125 h-125 bg-white/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-32 w-125 h-125 bg-white/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/5 rounded-full blur-[120px]"
        />

        {/* Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top / Bottom Gradient Fades */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-linear-to-b from-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-black/20 to-transparent" />
      </div>

      {/* ── Floating Icons ── */}
      {[
        {
          icon: Shield,
          pos: "top-20 left-[5%]",
          anim: { y: [0, -15, 0], rotate: [0, 5, 0] },
          dur: 5,
          delay: 0,
        },
        {
          icon: Trophy,
          pos: "top-40 right-[15%]",
          anim: { y: [0, 20, 0], rotate: [0, -5, 0] },
          dur: 6,
          delay: 1,
        },
        {
          icon: Code2,
          pos: "bottom-40 left-[20%]",
          anim: { y: [0, -20, 0], rotate: [0, 10, 0] },
          dur: 7,
          delay: 2,
        },
        {
          icon: Flame,
          pos: "bottom-32 right-[10%]",
          anim: { y: [0, 15, 0], rotate: [0, -8, 0] },
          dur: 5.5,
          delay: 0.5,
        },
      ].map(({ icon: Icon, pos, anim, dur, delay }, i) => (
        <motion.div
          key={i}
          animate={anim}
          transition={{
            duration: dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          className={`absolute ${pos} hidden lg:block`}
        >
          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
            <Icon className="w-8 h-8 text-white/70" />
          </div>
        </motion.div>
      ))}

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/10"
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.span>
              <span>Limited Time — First 500 Users Only</span>
              <Timer className="w-4 h-4" />
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to{" "}
              <span className="relative inline-block">
                Level Up
                <motion.svg
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 10C50 4 150 4 198 10"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.svg>
              </span>
              <br />
              Your Security Skills?
            </h2>

            <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              Join the waitlist and be among the first to master cybersecurity
              through gamified, hands-on coding challenges. No fluff, just
              skills.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/90 font-medium text-sm">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Early Bird Perks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-5 h-5 text-yellow-300" />
                <span className="font-bold text-white">Early Bird Perks</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {earlyBirdPerks.map((perk, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-2 ${
                      perk.highlight ? "text-yellow-300" : "text-white/80"
                    }`}
                  >
                    <perk.icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-medium">{perk.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {socialUsers.map((user, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, x: -10 }}
                    whileInView={{ scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    className={`w-10 h-10 rounded-full bg-linear-to-br ${user.gradient} flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/20`}
                  >
                    {user.initials}
                  </motion.div>
                ))}
              </div>
              <div className="text-white/80">
                <span className="font-bold text-white">10,847</span> developers
                <br />
                <span className="text-sm">already on the waitlist</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column — Form Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div
              className={`rounded-3xl p-8 md:p-10 shadow-2xl border transition-all duration-300 ${
                darkMode
                  ? "bg-neutral-900/90 backdrop-blur-xl border-neutral-800 shadow-black/30"
                  : "bg-white/95 backdrop-blur-xl border-white/50 shadow-indigo-500/20"
              }`}
            >
              {!isSubmitted ? (
                <>
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.3 }}
                      className="w-16 h-16 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/30"
                    >
                      <Rocket className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        darkMode ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      Join the Waitlist
                    </h3>
                    <p
                      className={
                        darkMode ? "text-neutral-400" : "text-neutral-600"
                      }
                    >
                      Be the first to know when we launch
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${
                          darkMode ? "text-neutral-300" : "text-neutral-700"
                        }`}
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail
                          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                            darkMode ? "text-neutral-500" : "text-neutral-400"
                          }`}
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className={`w-full pl-12 pr-4 py-4 rounded-xl transition-all focus:outline-none focus:ring-2 ${
                            darkMode
                              ? "bg-neutral-800 text-white placeholder-neutral-500 focus:ring-indigo-500/50 border border-neutral-700"
                              : "bg-neutral-100 text-neutral-900 placeholder-neutral-400 focus:ring-indigo-500/50 border border-neutral-200"
                          }`}
                        />
                      </div>
                      {error && (
                        <p className="mt-2 text-sm text-red-500">{error}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          <Bell className="w-5 h-5" />
                          Get Early Access
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>

                  {/* Trust Indicators */}
                  <div
                    className={`mt-6 pt-6 border-t ${
                      darkMode ? "border-neutral-800" : "border-neutral-200"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center gap-6 text-sm ${
                        darkMode ? "text-neutral-500" : "text-neutral-500"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Lock className="w-4 h-4" />
                        <span>No spam</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        <span>Unsubscribe anytime</span>
                      </div>
                    </div>
                  </div>

                  {/* Spots Countdown */}
                  <div
                    className={`mt-6 p-4 rounded-xl border ${
                      darkMode
                        ? "bg-yellow-500/10 border-yellow-500/20"
                        : "bg-yellow-50 border-yellow-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex items-center gap-2 ${
                          darkMode ? "text-yellow-400" : "text-yellow-600"
                        }`}
                      >
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">Spots remaining:</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 4, 7].map((digit, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`w-8 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
                              darkMode
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {digit}
                          </motion.span>
                        ))}
                        <span
                          className={`font-bold ml-1 ${
                            darkMode ? "text-yellow-400" : "text-yellow-600"
                          }`}
                        >
                          / 500
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* ── Success State ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      darkMode ? "bg-emerald-500/15" : "bg-emerald-50"
                    }`}
                  >
                    <CheckCircle
                      className={`w-10 h-10 ${
                        darkMode ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    />
                  </motion.div>

                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    You're on the list! 🎉
                  </h3>
                  <p
                    className={`mb-6 ${
                      darkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    Check your inbox for a confirmation email.
                    <br />
                    We'll notify you when we launch.
                  </p>

                  <div
                    className={`rounded-xl p-4 mb-6 ${
                      darkMode ? "bg-neutral-800" : "bg-neutral-100"
                    }`}
                  >
                    <p
                      className={`text-sm mb-3 ${
                        darkMode ? "text-neutral-400" : "text-neutral-600"
                      }`}
                    >
                      Share with friends and move up the waitlist:
                    </p>
                    <div className="flex justify-center gap-3">
                      <SocialButton platform="twitter" darkMode={darkMode} />
                      <SocialButton platform="linkedin" darkMode={darkMode} />
                      <SocialButton
                        platform="copy"
                        darkMode={darkMode}
                        onClick={handleCopyLink}
                        copied={copied}
                      />
                    </div>
                  </div>

                  <div
                    className={`flex items-center justify-center gap-2 text-sm ${
                      darkMode ? "text-neutral-500" : "text-neutral-500"
                    }`}
                  >
                    <PartyPopper className="w-4 h-4" />
                    <span>You're #10,848 on the waitlist</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* ── Testimonials ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Loved by Developers
            </h3>
            <p className="text-white/60">Here's what beta testers are saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${testimonial.color} flex items-center justify-center text-white font-bold shadow-lg shrink-0`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/60">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard
              icon={<Users className="w-6 h-6" />}
              value="10K+"
              label="Developers Waiting"
            />
            <StatCard
              icon={<Code2 className="w-6 h-6" />}
              value="500+"
              label="Challenges Ready"
            />
            <StatCard
              icon={<Target className="w-6 h-6" />}
              value="10"
              label="OWASP Categories"
            />
            <StatCard
              icon={<TrendingUp className="w-6 h-6" />}
              value="92%"
              label="Completion Rate"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// Helper Components
// ─────────────────────────────────────────

function StatCard({ icon, value, label }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
    >
      <div className="inline-flex p-3 bg-white/10 rounded-xl text-white mb-3">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </motion.div>
  );
}

function SocialButton({ platform, darkMode, onClick, copied }) {
  const icons = {
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    copy: copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />,
  };

  const labels = {
    twitter: "Tweet",
    linkedin: "Share",
    copy: copied ? "Copied!" : "Copy Link",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
        darkMode
          ? "bg-neutral-700 hover:bg-neutral-600 text-neutral-300"
          : "bg-neutral-200 hover:bg-neutral-300 text-neutral-700"
      } ${
        copied && platform === "copy"
          ? darkMode
            ? "text-emerald-400"
            : "text-emerald-600"
          : ""
      }`}
    >
      {icons[platform]}
      <span>{labels[platform]}</span>
    </motion.button>
  );
}
