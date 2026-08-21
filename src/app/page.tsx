"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Compass,
  Cpu,
  Boxes,
  Zap,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Send,
  Terminal,
  Clock,
  Layers,
  ChevronRight,
  Globe2,
  Radio,
  Copy,
  Check,
  ExternalLink,
  Bot,
  Gauge,
  Factory
} from "lucide-react";

export default function HomePage() {
  // Waitlist State
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accessPass, setAccessPass] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [memberCount, setMemberCount] = useState(2480);

  // Active Terminal Tab / Telemetry
  const [activeTab, setActiveTab] = useState<"telemetry" | "specs" | "roadmap">("telemetry");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[SYS_BOOT] Quantum neural compiler initialized at 100% efficiency.",
    "[CLUSTER_ALPHA] 128 autonomous precision micro-nodes online.",
    "[GRID_LINK] Verifying end-to-end hardware provenance protocol...",
    "[TELEMETRY] Latency nominal (<1.4ms). Thermal dissipation at optimal range.",
  ]);

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 38,
    seconds: 19,
  });

  // Mouse Glow Effect Tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check local storage for previous signup
    const savedPass = localStorage.getItem("nf_access_pass");
    if (savedPass) {
      setAccessPass(savedPass);
      setSubmitted(true);
    }

    // Countdown Timer logic
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 42);
    targetDate.setHours(targetDate.getHours() + 14);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    // Live terminal log generator
    const logPool = [
      "[FAB_ENGINE] Synthesizing generative CAD mesh for sub-assembly #892...",
      "[ROBOTICS] Calibrating 6-axis harmonic drive micro-tolerances (+/- 2.1µm).",
      "[NODE_EPSILON] Autonomous supply routing synced with Northstar mesh.",
      "[SEC_GATE] High-entropy cryptographic handshake confirmed.",
      "[KERNEL] Compiling zero-waste adaptive energy distribution schedule.",
      "[AGENTIC_CORE] Multi-agent physical task planner verified."
    ];

    const logInterval = setInterval(() => {
      const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
      const timestamp = new Date().toLocaleTimeString();
      setTerminalLogs((prev) => [...prev.slice(-5), `${timestamp} ${randomLog}`]);
    }, 4500);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedPass = `NF-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setAccessPass(generatedPass);
      localStorage.setItem("nf_access_pass", generatedPass);
      setSubmitted(true);
      setIsSubmitting(false);
      setMemberCount((prev) => prev + 1);

      // Trigger Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#38bdf8", "#6366f1", "#a855f7"],
        });
      } catch {
        // confetti fallback
      }
    }, 900);
  };

  const copyPassCode = () => {
    if (accessPass) {
      navigator.clipboard.writeText(accessPass);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-300 font-sans">
      {/* Background Interactive Ambient Lighting */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.12), transparent 80%)`
        }}
      />

      {/* Persistent Grid Pattern & Ambient Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-radial-gradient pointer-events-none blur-3xl opacity-70" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Header Navigation */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-md bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center">
                <Compass className="w-6 h-6 text-cyan-400 animate-spin" style={{ animationDuration: "25s" }} />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
                NORTHSTAR
              </span>
              <span className="ml-1 text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                Factory
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>All Systems Nominal</span>
            </div>

            <a
              href="#waitlist-section"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Early Access</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        {/* Status Announcement Banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs text-slate-300 backdrop-blur-md shadow-lg shadow-cyan-950/50">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-mono text-cyan-400">GENESIS PHASE //</span>
            <span>Autonomous Foundry Deployment in Progress</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          </div>
        </div>

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            The Autonomous Foundry <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              For Exponential Hardware
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Northstar Factory bridges generative artificial intelligence and high-precision physical fabrication. 
            From neural CAD synthesis to fully autonomous production lines.
          </p>
        </div>

        {/* Launch Countdown Container */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2 text-cyan-400">
                <Clock className="w-4 h-4" />
                COUNTDOWN TO PUBLIC GENESIS LAUNCH
              </span>
              <span className="hidden sm:inline text-slate-500">TARGET: Q4 2026</span>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center">
              {[
                { label: "DAYS", value: timeLeft.days },
                { label: "HOURS", value: timeLeft.hours },
                { label: "MINUTES", value: timeLeft.minutes },
                { label: "SECONDS", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 sm:p-5 shadow-inner transition-colors group-hover:border-cyan-500/40">
                    <div className="text-2xl sm:text-5xl font-black font-mono text-white tracking-wider">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono font-medium text-cyan-400/80 mt-1 uppercase tracking-widest">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Waitlist / Early Access RSVP Form */}
        <div id="waitlist-section" className="mt-12 max-w-xl mx-auto scroll-mt-28">
          <div className="glass-panel-glow p-6 sm:p-8 rounded-2xl relative">
            {!submitted ? (
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    Join The VIP Foundry Access List
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Receive confidential deployment briefings, private beta node access, and founder allocations.
                  </p>
                </div>

                <form onSubmit={handleJoinWaitlist} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email address..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 font-semibold text-sm text-slate-950 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Activity className="w-4 h-4 animate-spin text-slate-950" />
                        Generating Access Token...
                      </span>
                    ) : (
                      <>
                        <span>Claim Foundry Pass</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 px-1">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Zero spam. Hardware confidentiality guaranteed.
                  </span>
                  <span className="font-mono text-cyan-400/90 font-medium">
                    {memberCount.toLocaleString()}+ queued
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center py-4 space-y-4">
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Foundry Access Reserved!</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Your VIP invite code has been registered in the Northstar Genesis registry.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/90 border border-cyan-500/40 max-w-sm mx-auto flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-slate-400">YOUR VIP ACCESS PASS</div>
                    <div className="text-base font-mono font-bold text-cyan-300 tracking-wider">
                      {accessPass}
                    </div>
                  </div>
                  <button
                    onClick={copyPassCode}
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400">
                  We will dispatch cryptographic activation instructions to <strong className="text-white">{email || "your email"}</strong> upon Genesis go-live.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Feature Teaser Cards Grid */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              FOUNDRY ARCHITECTURE
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-white">
              Pioneering the Next Era of Physical Production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Bot,
                title: "Autonomous Micro-Nodes",
                desc: "Distributed fabrication cells capable of dynamic self-retooling and continuous 24/7 dark production.",
                badge: "Physical AI",
                accent: "from-cyan-500 to-blue-500",
              },
              {
                icon: Cpu,
                title: "Neural CAD Synthesis",
                desc: "Sub-second structural optimization translating system specs directly into validated physical blueprints.",
                badge: "Generative Engineering",
                accent: "from-blue-500 to-indigo-500",
              },
              {
                icon: Boxes,
                title: "Zero-Friction Logistics",
                desc: "Verifiable hardware supply chains and predictive raw material dispatch across sovereign hubs.",
                badge: "Decentralized Mesh",
                accent: "from-indigo-500 to-purple-500",
              },
              {
                icon: Gauge,
                title: "Sub-Micron Telemetry",
                desc: "Continuous real-time multi-spectral sensor feedback loop ensuring ultra-low defect tolerance.",
                badge: "Realtime QA",
                accent: "from-purple-500 to-cyan-500",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accent} p-[1px]`}>
                        <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                          <Icon className="w-6 h-6 text-cyan-400" />
                        </div>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-mono text-cyan-400/80">
                    <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore architecture <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Telemetry & Roadmap Terminal Drawer */}
        <div className="mt-28">
          <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-[1px] bg-slate-800 mx-1" />
                <span className="text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  NORTHSTAR-FOUNDRY-OS v0.9.4 // CONSOLE
                </span>
              </div>

              {/* Tab Toggles */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === "telemetry"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Live Logs
                </button>
                <button
                  onClick={() => setActiveTab("roadmap")}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === "roadmap"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Milestones
                </button>
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === "specs"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Hardware Specs
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 bg-slate-950/60 font-mono text-xs min-h-[180px]">
              {activeTab === "telemetry" && (
                <div className="space-y-2">
                  <div className="text-slate-500 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    STREAMING LIVE CLUSTER TELEMETRY...
                  </div>
                  {terminalLogs.map((log, i) => (
                    <div key={i} className="text-slate-300 leading-relaxed font-mono flex items-start gap-2">
                      <span className="text-cyan-500 select-none">&gt;</span>
                      <span className={log.includes("SYS_BOOT") ? "text-cyan-400 font-semibold" : ""}>{log}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "roadmap" && (
                <div className="space-y-4 font-sans text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {[
                      { phase: "PHASE 01", title: "Core Synthesis Engine", status: "Completed", progress: 100, color: "text-emerald-400", border: "border-emerald-500/40" },
                      { phase: "PHASE 02", title: "Physical Micro-Nodes", status: "In Progress (92%)", progress: 92, color: "text-cyan-400", border: "border-cyan-500/40" },
                      { phase: "PHASE 03", title: "VIP Beta Access Fleet", status: "Queued", progress: 65, color: "text-amber-400", border: "border-amber-500/40" },
                      { phase: "PHASE 04", title: "Genesis Global Launch", status: "Scheduled Q4", progress: 20, color: "text-indigo-400", border: "border-indigo-500/40" },
                    ].map((item, idx) => (
                      <div key={idx} className={`p-3 rounded-xl bg-slate-900/80 border ${item.border}`}>
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="text-slate-400">{item.phase}</span>
                          <span className={item.color}>{item.status}</span>
                        </div>
                        <div className="font-bold text-white mt-1 text-sm">{item.title}</div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full rounded-full transition-all"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
                  <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                    <div className="text-slate-500 text-[10px]">TOLERANCE SPEC</div>
                    <div className="text-cyan-300 font-bold text-sm mt-1">± 0.0025 mm</div>
                    <div className="text-slate-400 text-[10px] mt-1">Sub-micron laser QA</div>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                    <div className="text-slate-500 text-[10px]">THROUGHPUT BANDWIDTH</div>
                    <div className="text-cyan-300 font-bold text-sm mt-1">10 Gbps Mesh</div>
                    <div className="text-slate-400 text-[10px] mt-1">Deterministic robotics bus</div>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                    <div className="text-slate-500 text-[10px]">ENERGY EFFICIENCY</div>
                    <div className="text-cyan-300 font-bold text-sm mt-1">99.4% Circular</div>
                    <div className="text-slate-400 text-[10px] mt-1">Closed-loop recovery</div>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                    <div className="text-slate-500 text-[10px]">SECURITY LEVEL</div>
                    <div className="text-cyan-300 font-bold text-sm mt-1">Air-Gapped HSM</div>
                    <div className="text-slate-400 text-[10px] mt-1">Hardware root of trust</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Interactive FAQ / Briefing Section */}
        <div className="mt-28 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              INTEL &amp; FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-2xl font-bold text-white">Everything You Need to Know</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is Northstar Factory?",
                a: "Northstar Factory is an autonomous hardware foundry engineered to collapse the gap between software design and physical manufacturing. We combine industrial AI copilots, generative CAD solvers, and agile micro-factories."
              },
              {
                q: "When is the Genesis Launch?",
                a: "The Genesis platform rollout begins in Q4 2026 for confirmed waitlist participants and enterprise hardware partners."
              },
              {
                q: "How does the VIP Access Pass work?",
                a: "Joining the waitlist assigns a unique cryptographic token (e.g. NF-XXXX) that grants prioritized access to early developer SDKs, pilot production runs, and confidential engineering briefings."
              },
              {
                q: "How can I partner or invest?",
                a: "Enterprise pilot requests and strategic partner inquiries can be submitted directly via contact@northstarfactory.internal or by reaching out to our founding team on X/Discord."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group glass-panel rounded-xl border border-slate-800 p-4 transition-colors hover:border-slate-700 open:border-cyan-500/30"
              >
                <summary className="font-semibold text-sm text-slate-200 cursor-pointer flex items-center justify-between list-none">
                  <span>{faq.q}</span>
                  <span className="text-cyan-400 text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-400 mt-3 pt-3 border-t border-slate-800/80 leading-relaxed font-sans">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-md mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-bold tracking-wide text-white">NORTHSTAR FACTORY</span>
            <span className="text-xs text-slate-500">© 2026. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
            <a href="#" className="hover:text-cyan-400 transition-colors">Manifesto</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Security</a>
            <a href="mailto:contact@northstarfactory.internal" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <span>Contact</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
