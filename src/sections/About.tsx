import { motion } from 'framer-motion'
import { Compass, HeartHandshake, Sparkles } from 'lucide-react'

const pillars = [
  {
    icon: Compass,
    title: 'Domain-first',
    body:
      'We don’t bolt forms onto a generic CRM. Every screen is shaped by how a real plant runs.',
  },
  {
    icon: Sparkles,
    title: 'Modern stack',
    body:
      'React, TypeScript, Node and SQL — built to scale, easy to extend, painless to maintain.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-term partner',
    body:
      'We onboard, train and stay on call. Most of our work comes from existing customers expanding scope.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="section-eyebrow">About</span>
            <h2 className="heading-lg">
              We build software the way{' '}
              <span className="text-gradient">factories build product.</span>
            </h2>
            <p className="mt-5 text-lg text-white/65">
              Dopomac Systems is an enterprise software company focused on Indian
              manufacturing. We turn siloed shop-floor processes into one connected
              system, so plant heads can stop chasing reports and start running the
              business.
            </p>
            <p className="mt-4 text-base text-white/55">
              We work shoulder-to-shoulder with operators, supervisors and management
              during rollout, and we measure success by how much paperwork disappears in
              the first ninety days.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 ring-1 ring-inset ring-white/10">
                    <p.icon size={18} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-indigo-500/5 to-transparent p-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                    Engagement model
                  </div>
                  <div className="mt-1 font-display text-xl font-semibold text-white">
                    Discovery → Pilot → Plant-wide rollout
                  </div>
                </div>
                <a href="#contact" className="btn-primary whitespace-nowrap">
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
