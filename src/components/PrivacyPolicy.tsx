import { useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PrivacyPolicy({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink-950/90 backdrop-blur-sm px-4 py-12"
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-ink-800 p-8 sm:p-12"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-lg p-1.5 text-white/50 transition hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

            <h1 className="text-2xl font-bold text-white sm:text-3xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-white/45">Last updated: May 2026</p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/70">
              <section>
                <h2 className="mb-2 text-base font-semibold text-white">1. Who We Are</h2>
                <p>
                  Dopomac Systems operates this website. We build manufacturing execution software
                  for the shop floor. If you have any questions about this policy, you can reach
                  us at{' '}
                  <a
                    href="mailto:business@dopomacsystems.com"
                    className="text-accent underline underline-offset-2 hover:text-accent-glow"
                  >
                    business@dopomacsystems.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-base font-semibold text-white">2. Information We Collect</h2>
                <p>
                  We only collect information you voluntarily provide — for example, when you fill
                  out our contact form (name, email, company, message). We do not collect any
                  sensitive personal information.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-base font-semibold text-white">3. Cookies</h2>
                <p>
                  This website may use essential cookies required for the site to function, and
                  optional analytics cookies to understand how visitors use the site. You can
                  accept or reject non-essential cookies using the banner shown on your first
                  visit. You can change your preference at any time by clearing your browser
                  storage.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-base font-semibold text-white">4. How We Use Your Information</h2>
                <p>
                  Information from the contact form is used solely to respond to your enquiry. We
                  do not sell, rent, or share your personal data with third parties for marketing
                  purposes.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-base font-semibold text-white">5. Data Retention</h2>
                <p>
                  We retain contact form submissions only for as long as necessary to respond and
                  follow up. After that, data is deleted.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-base font-semibold text-white">6. Third-Party Services</h2>
                <p>
                  This site may be hosted on third-party infrastructure (e.g., GitHub Pages).
                  Those providers have their own privacy policies which govern their handling of
                  data.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-base font-semibold text-white">7. Your Rights</h2>
                <p>
                  You have the right to request access to, correction of, or deletion of any
                  personal data we hold about you. To exercise these rights, contact us at{' '}
                  <a
                    href="mailto:business@dopomacsystems.com"
                    className="text-accent underline underline-offset-2 hover:text-accent-glow"
                  >
                    business@dopomacsystems.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-base font-semibold text-white">8. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. Any changes will be posted on this
                  page with an updated date.
                </p>
              </section>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/35">
              © {new Date().getFullYear()} Dopomac Systems · business@dopomacsystems.com · +91 78959 15738
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
