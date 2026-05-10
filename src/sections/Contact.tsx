import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="aurora left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 bg-cyan-500/15" />
      <div className="container-x relative">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="section-eyebrow">Get in touch</span>
              <h2 className="heading-lg">
                Ready to{' '}
                <span className="text-gradient">unify your plant?</span>
              </h2>
              <p className="mt-5 text-lg text-white/70">
                Tell us about your factory — number of plants, current systems, and the
                vertical that hurts the most. We&rsquo;ll come back with a tailored pilot
                plan within 48 hours.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:business@dopomacsystems.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/30"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Mail size={18} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                      Email
                    </div>
                    <div className="break-all font-medium text-white">
                      business@dopomacsystems.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Phone size={18} />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                      Call
                    </div>
                    <div className="font-medium text-white">+91-7895915738</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                      Based in
                    </div>
                    <div className="font-medium text-white">India · Serving plants pan-India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <form
                action="mailto:business@dopomacsystems.com"
                method="post"
                encType="text/plain"
                className="glass rounded-2xl p-6"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" name="name" placeholder="Asha Kumar" />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    placeholder="asha@plant.com"
                  />
                  <Field
                    label="Company"
                    name="company"
                    placeholder="Plant or company name"
                    full
                  />
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                      What&rsquo;s the biggest bottleneck?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us a bit about your factory…"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary mt-5 w-full">
                  Send message <ArrowRight size={16} />
                </button>
                <p className="mt-3 text-xs text-white/40">
                  By sending, you agree to be contacted by Dopomac Systems about this
                  enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  full,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  full?: boolean
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-400/20"
      />
    </div>
  )
}
