export default function Footer({ onPrivacyOpen }: { onPrivacyOpen: () => void }) {
  const logoSrc = `${import.meta.env.BASE_URL}logo-website.svg`
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="container-x py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={logoSrc}
              alt="Dopomac Systems"
              className="h-10 w-auto object-contain"
            />
            <p className="mt-5 max-w-md text-sm text-white/55">
              One platform for the eight verticals that run a factory.
            </p>
            <div className="mt-4 space-y-1.5">
              <a
                href="mailto:business@dopomacsystems.com"
                className="flex items-center gap-2 text-sm text-white/55 transition hover:text-accent"
              >
                <span>business@dopomacsystems.com</span>
              </a>
              <a
                href="tel:+917895915738"
                className="flex items-center gap-2 text-sm text-white/55 transition hover:text-accent"
              >
                <span>+91 78959 15738</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <FooterCol
              title="Platform"
              items={[
                ['Production', '#verticals'],
                ['Quality', '#verticals'],
                ['4M Change', '#verticals'],
                ['Maintenance', '#verticals'],
              ]}
            />
            <FooterCol
              title="More"
              items={[
                ['Inventory', '#verticals'],
                ['HR & Training', '#verticals'],
                ['NPD', '#verticals'],
                ['Audit', '#verticals'],
              ]}
            />
            <FooterCol
              title="Company"
              items={[
                ['About', '#about'],
                ['Clients', '#clients'],
                ['Contact', '#contact'],
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <div>© {year} Dopomac Systems. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <button
              onClick={onPrivacyOpen}
              className="transition hover:text-white underline underline-offset-2"
            >
              Privacy Policy
            </button>
            <span>Built in India · Crafted for the shop floor.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
