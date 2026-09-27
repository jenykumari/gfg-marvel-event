import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Zap } from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-27T10:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Navbar */}
<nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
  {/* Logo */}
  <a href="#" className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center border border-red-500/40 bg-red-500/10">
      <Zap size={19} className="text-red-400" />
    </div>

    <div>
      <p className="text-sm font-bold tracking-[0.2em] text-white">
        GFG
      </p>
      <p className="text-[9px] tracking-[0.3em] text-white/40">
        BENNETT UNIVERSITY
      </p>
    </div>
  </a>

  {/* Navigation */}
  <div className="hidden items-center gap-8 md:flex">
    <a
      href="#mission"
      className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45 transition hover:text-red-400"
    >
      Mission
    </a>

    <a
      href="#heroes"
      className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45 transition hover:text-red-400"
    >
      Heroes
    </a>

    <a
      href="#register"
      className="border border-white/15 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
    >
      Register
    </a>
  
      </div>

    {/* Mobile menu button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 md:hidden"
      aria-label="Toggle menu"
    >
      {menuOpen ? "×" : "☰"}
    </button>

{/* Mobile menu */}
{menuOpen && (
  <div className="absolute left-6 right-6 top-20 border border-white/10 bg-[#090909] p-5 md:hidden">
    <div className="flex flex-col gap-5">

      <a
        href="#mission"
        onClick={() => setMenuOpen(false)}
        className="text-xs font-bold uppercase tracking-[0.25em] text-white/60 hover:text-red-400"
      >
        Mission
      </a>

      <a
        href="#heroes"
        onClick={() => setMenuOpen(false)}
        className="text-xs font-bold uppercase tracking-[0.25em] text-white/60 hover:text-red-400"
      >
        Heroes
      </a>

      <a
        href="#register"
        onClick={() => setMenuOpen(false)}
        className="text-xs font-bold uppercase tracking-[0.25em] text-red-400 hover:text-red-300"
      >
        Register
      </a>

    </div>
  </div>
)}

  </nav>


      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-88px)] items-center px-6 pb-16 md:px-12 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-red-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">
                GFG Student Chapter
              </span>
            </div>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.5em] text-white/40">
              A new mission begins
            </p>

            <h1 className="max-w-4xl text-7xl font-black uppercase leading-[0.82] tracking-[-0.06em] sm:text-8xl lg:text-[9rem]">
              <span className="block text-white">ASSEMBLE</span>
              <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent">
                NOW.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/50 md:text-lg">
              Step into the next generation of technology, creativity and
              innovation. Your mission starts here.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
  href="#mission"
  className="group flex items-center gap-3 bg-red-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] transition hover:bg-red-500"
>
  Enter the Mission
  <ArrowRight
    size={17}
    className="transition-transform group-hover:translate-x-1"
  />
</a>
<a
 href="#heroes"
  className="flex items-center gap-3 border border-white/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white/60 transition hover:border-white/40 hover:text-white"
>
  Explore Event
</a>
            </div>
          </motion.div>
{/* Spider-Man swing */}
<motion.div
  initial={{
    x: 420,
    y: -180,
    rotate: 18,
    opacity: 0,
  }}
  animate={{
    x: [420, 300, 140, -40, -220, -420],
    y: [-180, -80, 20, 80, 130, 220],
    rotate: [18, 28, 8, -12, -28, -18],
    opacity: [0, 1, 1, 1, 1, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    repeatDelay: 2,
    ease: "easeInOut",
    times: [0, 0.18, 0.38, 0.58, 0.8, 1],
  }}
  className="pointer-events-none absolute right-[-40px] top-[-80px] z-30"
  style={{
    transformOrigin: "50% 0%",
  }}
>
  <img
    src="/spiderman.gif"
    alt=""
    className="w-[210px] object-contain drop-shadow-[0_0_20px_rgba(239,68,68,0.45)]"
  />
</motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-[520px]"
          >
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[5%] rounded-full border border-white/10"
            />
            {/* HUD scanning line */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute inset-[5%] rounded-full"
>
  <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom bg-gradient-to-t from-transparent via-red-500 to-orange-400" />
</motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[15%] rounded-full border border-red-500/20"
            />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[80px]" />

            {/* Central energy core */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 40px rgba(239,68,68,0.15)",
                  "0 0 100px rgba(239,68,68,0.4)",
                  "0 0 40px rgba(239,68,68,0.15)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-red-400/40 bg-gradient-to-br from-red-600/30 to-orange-500/5 backdrop-blur-xl sm:h-56 sm:w-56"
            >
              <div className="text-center">
                <p className="text-5xl font-black tracking-[-0.08em]">01</p>
                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.4em] text-red-300">
                  Mission
                </p>
              </div>
            </motion.div>

            {/* Orbit points */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <span className="absolute left-[9%] top-1/2 h-3 w-3 rounded-full bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.9)]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[12%]"
            >
              <span className="absolute right-0 top-[20%] h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.9)]" />
            </motion.div>

            {/* Corner information */}
            <div className="absolute left-0 top-[15%] border-l border-red-500/40 pl-3">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                Status
              </p>
              <p className="mt-1 text-xs font-bold text-red-400">ACTIVE</p>
            </div>

            <div className="absolute bottom-[15%] right-0 border-r border-white/20 pr-3 text-right">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                Location
              </p>
              <p className="mt-1 text-xs font-bold text-white/70">
                BENNETT
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 md:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.4em]">
            Scroll to explore
          </span>
          <ArrowDown size={14} />
        </motion.div>
      </section>

      {/* Mission Brief */}
      <section
  id="mission"
  className="relative z-10 border-t border-white/10 bg-[#080808] px-6 py-24 md:px-12 lg:px-16"
>
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-500" />
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-red-400">
                Mission Brief
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-7xl">
                THE
                <br />
                <span className="text-white/25">MISSION</span>
                <br />
                BEGINS.
              </h2>

              <p className="max-w-xl text-base leading-7 text-white/45 md:text-lg">
                Enter a technology-driven experience where coding, cybersecurity,
                problem-solving and creativity come together. Assemble your skills,
                take on the challenge and make your mark.
              </p>
            </div>
          </motion.div>

          {/* Event information */}
          <div className="mt-20 grid border-y border-white/10 md:grid-cols-3">
            {[
              {
                label: "DATE",
                value: "27 OCT",
                detail: "2026",
              },
              {
                label: "TIME",
                value: "10:00 AM",
                detail: "Doors open",
              },
              {
                label: "LOCATION",
                value: "BENNETT",
                detail: "University Campus",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="border-b border-white/10 px-6 py-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-8"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                  {item.label}
                </p>

                <p className="mt-3 text-2xl font-black tracking-tight text-white">
                  {item.value}
                </p>

                <p className="mt-1 text-sm text-red-400">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-24">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
                  What awaits
                </p>

                <h3 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
                  EVENT HIGHLIGHTS
                </h3>
              </div>

              <p className="hidden text-xs uppercase tracking-[0.2em] text-white/25 md:block">
                CLASSIFIED // 001
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "CODE QUESTS",
                  text: "Solve technical challenges designed to test your logic, problem-solving and coding skills.",
                },
                {
                  number: "02",
                  title: "CYBER MISSIONS",
                text: "Explore cybersecurity-themed challenges and think like a digital defender.",
                },
                {
                  number: "03",
                 title: "BUILD TOGETHER",
                text: "Collaborate, exchange ideas and turn your technical skills into working solutions.",
                },
                {
                  number: "04",
                  title: "HERO MODE",
                  text: "Take on unexpected challenges, discover your strengths and prove what you can build.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ backgroundColor: "rgba(239,68,68,0.06)" }}
                  className="group relative min-h-[220px] bg-[#080808] p-8 transition-colors duration-500 md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-bold text-red-500">
                      {item.number}
                    </span>

                    <span className="text-white/10 transition-colors duration-300 group-hover:text-red-500/50">
                      ↗
                    </span>
                  </div>

                  <div className="mt-16">
                    <h4 className="text-xl font-black tracking-tight md:text-2xl">
                      {item.title}
                    </h4>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/35">
                      {item.text}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Big Faded Arc Reactor */}
<motion.div
  animate={{
    scale: [1, 1.03, 1],
    opacity: [0.10, 0.16, 0.10],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 md:h-[850px] md:w-[850px] lg:h-[1000px] lg:w-[1000px]"
>
  <img
    src="/arc-reactor.gif"
    alt=""
    className="h-full w-full object-contain"
  />
</motion.div>

            {/* Heroes Section */}
      <section
      id="heroes"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-28 md:px-12 lg:px-16"
      >
  {/* Big Faded Arc Reactor */}
  <motion.div
    animate={{
      scale: [1, 1.03, 1],
      opacity: [0.10, 0.16, 0.10],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 md:h-[850px] md:w-[850px] lg:h-[1000px] lg:w-[1000px]"
  >
    <img
      src="/arc-reactor.gif"
      alt=""
      className="h-full w-full object-contain"
    />
  </motion.div>

  <div className="relative z-10 mx-auto max-w-7xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-500" />
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-red-400">
                Choose Your Role
              </span>
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-7xl">
                EVERY
                <br />
                <span className="text-white/25">HERO</span>
                <br />
                HAS A ROLE.
              </h2>

              <p className="max-w-sm text-sm leading-6 text-white/40">
                Your skills are your superpower. Choose your role, assemble
                your squad and enter the mission.
              </p>
            </div>
          </motion.div>

          {/* Character cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                number: "01",
                role: "THE STRATEGIST",
                power: "LOGIC",
                description:
                  "Analyze the problem. Find the pattern. Build the strategy.",
                accent: "from-red-600/30",
              },
              {
                number: "02",
                role: "THE ARCHITECT",
                power: "BUILD",
                description:
                  "Turn ideas into systems, interfaces and experiences.",
                accent: "from-orange-500/30",
              },
              {
                number: "03",
                role: "THE HACKER",
                power: "TECH",
                description:
                  "Think differently. Break assumptions. Discover what others miss.",
                accent: "from-red-500/30",
              },
              {
                number: "04",
                role: "THE LEADER",
                power: "TEAM",
                description:
                  "Bring the team together and turn individual skills into one force.",
                accent: "from-yellow-500/20",
              },
            ].map((hero, index) => (
              <motion.div
                key={hero.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group relative min-h-[360px] overflow-hidden border border-white/10 bg-[#090909] p-8 transition-all duration-500 hover:border-red-500/40 md:p-10"
              >
                {/* Background glow */}
                <div
                  className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${hero.accent} to-transparent opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`}
                />

                {/* Number */}
                <div className="relative flex items-start justify-between">
                  <span className="text-sm font-bold text-red-500">
                    {hero.number}
                  </span>

                  <span className="border border-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 transition-colors group-hover:border-red-500/30 group-hover:text-red-400">
                    {hero.power}
                  </span>
                </div>

                {/* Visual */}
                <div className="relative mt-12 flex h-24 items-center">
                  <div className="relative h-20 w-20 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-transparent transition-all duration-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_60px_rgba(239,68,68,0.2)]">
                    <div className="absolute inset-3 rounded-full border border-white/10" />

                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.9)]" />
                  </div>

                  <div className="ml-6 h-px flex-1 bg-gradient-to-r from-red-500/30 to-transparent" />
                </div>

                {/* Text */}
                <div className="relative mt-8">
                  <h3 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
                    {hero.role}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/35 transition-colors duration-500 group-hover:text-white/55">
                    {hero.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-700 group-hover:w-full" />

                <div className="absolute bottom-6 right-8 text-2xl text-white/10 transition-all duration-500 group-hover:translate-x-1 group-hover:text-red-500">
                  ↗
                </div>
              </motion.div>
            ))}
          </div>
      </section>

          {/* Countdown + Registration */}
      <section
      id="register"
      className="relative z-10 overflow-hidden border-t border-white/10 bg-[#080808] px-6 py-28 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-red-500" />
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-red-400">
                Mission Control
              </span>
            </div>

            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
              TIME IS
              <br />
              <span className="text-red-500">RUNNING OUT.</span>
            </h2>
          </motion.div>

          {/* Countdown */}
          <div className="grid border-y border-white/10 sm:grid-cols-4">
            {[
  { value: timeLeft.days, label: "DAYS" },
  { value: timeLeft.hours, label: "HOURS" },
  { value: timeLeft.minutes, label: "MINUTES" },
  { value: timeLeft.seconds, label: "SECONDS" },
].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-white/10 px-5 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:px-8 md:py-12"
              >
                <p className="text-5xl font-black tracking-[-0.05em] sm:text-6xl md:text-7xl">
                  {String(item.value).padStart(2, "0")}
                </p>

                <p className="mt-2 text-[10px] font-bold tracking-[0.35em] text-red-400">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Registration block */}
          <div className="relative mt-20 overflow-hidden border border-red-500/30 bg-gradient-to-br from-red-950/30 via-[#090909] to-orange-950/10 p-8 md:p-14 lg:p-20">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-red-500/10" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-red-500/10" />
            <div className="pointer-events-none absolute right-[-5%] top-[10%] h-32 w-32 rounded-full bg-red-600/10 blur-3xl" />

            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">
                  Final transmission
                </p>

                <h3 className="mt-5 max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                  ARE YOU
                  <br />
                  READY TO
                  <br />
                  <span className="text-red-500">ASSEMBLE?</span>
                </h3>

                <p className="mt-7 max-w-lg text-sm leading-6 text-white/40">
                  The mission is waiting. Gather your team, prepare your
                  skills and secure your place before the countdown reaches
                  zero.
                </p>
              </div>

              <motion.a
  href="#register"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 50px rgba(239,68,68,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex shrink-0 items-center justify-center gap-4 bg-red-600 px-8 py-5 text-sm font-black uppercase tracking-[0.18em] transition hover:bg-red-500 md:px-10"
              >
                Register Now

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>

            </div>
          </div>

        </div>
      </section>
       </main>
  );
}

export default App;