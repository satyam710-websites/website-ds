import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const clients = [
  {
    name: 'Taj Engineers Pvt. Ltd.',
    sector: 'Precision Engineering',
    note:
      'Running all eight verticals — from production planning to layered audits — on a single Dopomac deployment.',
  },
  {
    name: 'Shree Stampings Pvt. Ltd.',
    sector: 'Sheet Metal & Stamping',
    note:
      'Digitised press-shop quality, tool-life tracking and 4M change control across multiple lines.',
  },
  {
    name: 'Ambika Cable Machine Pvt. Ltd.',
    sector: 'Cable Machinery Manufacturer',
    note:
      'NPD lifecycle, APQP/PPAP document control and inventory unified for OEM-grade traceability.',
  },
]

export default function Clients() {
  return (
    <section id="clients" className="relative py-28 sm:py-36">
      <div className="aurora left-[-10%] top-[10%] h-[420px] w-[420px] bg-indigo-500/15" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Customers</span>
          <h2 className="heading-lg">
            Manufacturers running their plants on{' '}
            <span className="text-gradient">Dopomac today.</span>
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Three plants. Different products. One playbook.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 transition hover:border-cyan-300/30"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl" />
              <Quote
                size={28}
                className="text-cyan-300/60"
                strokeWidth={2}
              />
              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                {c.name}
              </h3>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                {c.sector}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/65">{c.note}</p>
              <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/40">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live deployment
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
