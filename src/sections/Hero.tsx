import { motion } from 'framer-motion'
import { ArrowRight, Factory, ShieldCheck, BarChart3 } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 sm:pt-32"
    >
      {/* Aurora background */}
      <div className="aurora left-[-10%] top-[-15%] h-[520px] w-[520px] bg-cyan-500/30" />
      <div className="aurora right-[-15%] top-[10%] h-[480px] w-[480px] bg-indigo-500/25" />
      <div className="aurora left-[20%] bottom-[-20%] h-[420px] w-[420px] bg-fuchsia-500/15" />

      {/* Grid */}
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-ink-950 via-transparent to-ink-950" />

      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="chip"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Manufacturing ERP · built for the shop floor
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 heading-xl text-gradient"
          >
            One platform for the eight verticals that run a factory.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            Dopomac Systems builds a unified manufacturing ERP that connects
            Production, Quality, 4M, Maintenance, Inventory, HR, NPD and Audit into
            a single source of truth for modern factories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="btn-primary">
              Book a demo
              <ArrowRight size={16} />
            </a>
            <a href="#verticals" className="btn-ghost">
              Explore the platform
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.22em] text-white/40"
          >
            <span>Trusted by manufacturers</span>
            <span className="hidden sm:block h-px w-10 bg-white/15" />
            <span>Taj Engineers</span>
            <span>Shree Stampings</span>
            <span>Ambika Cable Machine</span>
          </motion.div>
        </div>

        {/* Visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-transparent blur-2xl" />
            <div className="glass relative rounded-3xl p-6 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
                  Plant Console · Live
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'OEE', value: '87.4%', tint: 'from-cyan-400/30' },
                  { label: 'PPM', value: '120', tint: 'from-emerald-400/30' },
                  { label: 'On-time', value: '96%', tint: 'from-indigo-400/30' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${s.tint} to-transparent opacity-60`}
                    />
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                      {s.label}
                    </div>
                    <div className="mt-1 font-display text-2xl font-bold">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-2.5">
                {[
                  { icon: Factory, label: 'Production order PRD-1042 closed', meta: 'Line 2' },
                  { icon: ShieldCheck, label: 'Layer audit pass — Heat Treat', meta: '2 min ago' },
                  { icon: BarChart3, label: 'NPD: APQP Phase 3 approved', meta: 'Today' },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                        <row.icon size={15} />
                      </span>
                      <span className="text-sm text-white/85">{row.label}</span>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                      {row.meta}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 h-24 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <svg viewBox="0 0 300 80" className="h-full w-full">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,60 C30,40 60,55 90,42 C120,30 150,55 180,40 C210,25 240,38 270,28 L300,32 L300,80 L0,80 Z"
                    fill="url(#g1)"
                  />
                  <path
                    d="M0,60 C30,40 60,55 90,42 C120,30 150,55 180,40 C210,25 240,38 270,28 L300,32"
                    fill="none"
                    stroke="#67e8f9"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
