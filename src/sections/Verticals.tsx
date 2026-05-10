import { motion } from 'framer-motion'
import {
  Factory,
  ShieldCheck,
  RefreshCcw,
  Wrench,
  Boxes,
  Users,
  Rocket,
  ClipboardCheck,
} from 'lucide-react'

const verticals = [
  {
    icon: Factory,
    name: 'Production',
    blurb:
      'Plan, schedule and track shop-floor production in real time with line-level visibility.',
    tag: '01',
  },
  {
    icon: ShieldCheck,
    name: 'Quality',
    blurb:
      'In-process inspections, rejections, CAPA and SPC — built to clear customer audits.',
    tag: '02',
  },
  {
    icon: RefreshCcw,
    name: '4M Change Management',
    blurb:
      'Control changes across Man, Machine, Method and Material with traceable approvals.',
    tag: '03',
  },
  {
    icon: Wrench,
    name: 'Machine & Tool Maintenance',
    blurb:
      'Preventive schedules, breakdown logs and tool life tracking that prevent downtime.',
    tag: '04',
  },
  {
    icon: Boxes,
    name: 'Inventory',
    blurb:
      'Live stock, bin locations, FIFO and consumption — synced with Production and NPD.',
    tag: '05',
  },
  {
    icon: Users,
    name: 'HR & Training',
    blurb:
      'Attendance, leave, payroll and skill matrices for a workforce that scales.',
    tag: '06',
  },
  {
    icon: Rocket,
    name: 'New Product Development',
    blurb:
      'APQP, PPAP and document control — take parts from RFQ to mass production.',
    tag: '07',
  },
  {
    icon: ClipboardCheck,
    name: 'Audit',
    blurb:
      'Schedule audits, run digital checksheets and close non-conformances on time.',
    tag: '08',
  },
]

export default function Verticals() {
  return (
    <section id="verticals" className="relative py-28 sm:py-36">
      <div className="aurora right-[-10%] top-[20%] h-[420px] w-[420px] bg-cyan-500/10" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">The Platform</span>
          <h2 className="heading-lg text-white">
            Eight verticals.{' '}
            <span className="text-gradient">One source of truth.</span>
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Our platform replaces a dozen disconnected spreadsheets and legacy tools
            with a single, role-aware system that mirrors how a factory actually
            operates.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {verticals.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/30 hover:bg-white/[0.04]"
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/0 blur-3xl transition group-hover:bg-cyan-400/10"
                aria-hidden
              />
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/10 text-cyan-200 ring-1 ring-inset ring-white/10">
                  <v.icon size={20} />
                </div>
                <span className="font-display text-sm font-semibold tracking-widest text-white/30">
                  {v.tag}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {v.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{v.blurb}</p>

              {/* <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-cyan-300/0 transition group-hover:text-cyan-300">
                Learn more <ArrowUpRight size={14} />
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
