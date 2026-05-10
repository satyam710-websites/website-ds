import { motion } from 'framer-motion'
import {
  Workflow,
  LineChart,
  Lock,
  Smartphone,
  GitBranch,
  Database,
} from 'lucide-react'

const features = [
  {
    icon: Workflow,
    title: 'Role-aware workflows',
    body:
      'Operators, supervisors, plant heads and superadmins each see what they need — with approvals routed automatically.',
  },
  {
    icon: LineChart,
    title: 'Real-time analytics',
    body:
      'Live dashboards for OEE, rejection trends, dispatch vs target and audit health across the plant.',
  },
  {
    icon: GitBranch,
    title: 'Connected verticals',
    body:
      'A 4M change updates Production, Quality and Maintenance at once. No more parallel paperwork.',
  },
  {
    icon: Smartphone,
    title: 'Shop-floor friendly',
    body:
      'Tablet-first screens, barcode-ready, fast on cheap hardware. Designed for gloves and noise.',
  },
  {
    icon: Lock,
    title: 'Audit-grade traceability',
    body:
      'Every action time-stamped. PPAP, layered audits and customer visits become a non-event.',
  },
  {
    icon: Database,
    title: 'Your data, your cloud',
    body:
      'Deploy on Azure, AWS or your own server. Daily backups and full export — no lock-in.',
  },
]

export default function Platform() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="section-eyebrow">Why Dopomac</span>
            <h2 className="heading-lg">
              Built by people who&rsquo;ve{' '}
              <span className="text-gradient">walked the shop floor.</span>
            </h2>
            <p className="mt-5 text-lg text-white/65">
              Most ERPs are cosmetics on top of accounting software. We do the
              opposite — start at the operator&rsquo;s tablet and build upward to
              management dashboards, with every vertical speaking the same language.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: '8', l: 'Verticals' },
                { v: '100%', l: 'Web-based' },
                { v: '24/7', l: 'Support' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="font-display text-3xl font-bold text-white">{s.v}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/45">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 ring-1 ring-inset ring-white/10">
                    <f.icon size={18} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{f.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
