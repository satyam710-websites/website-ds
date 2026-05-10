import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'dopomac_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ x: '-50%' }}
          className="fixed bottom-4 left-1/2 z-[90] w-[calc(100%-2rem)] max-w-xl rounded-2xl border border-white/10 bg-ink-800/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6"
        >
          <p className="text-sm text-white/80">
            We use cookies to understand how you use our site and improve your experience. You
            can accept or decline non-essential cookies below.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={accept}
              className="flex-1 rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-ink-950 transition hover:bg-accent-glow"
            >
              Accept
            </button>
            <button
              onClick={reject}
              className="flex-1 rounded-lg border border-white/15 px-5 py-2 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:text-white"
            >
              Reject
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
