import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Send,
  ExternalLink,
  Copy,
  Check,
  Share2,
  ShieldCheck,
  Sparkles,
  Info,
  QrCode,
  X,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState<string | null>(null);

  const websiteUrl = 'https://chix9ja.online?ref=BHI';
  const telegramUrl = 'https://t.me/chix9jacom';
  const telegramHandle = '@chix9jacom';
  const refCode = 'BHI';

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(label);
    setTimeout(() => {
      setCopiedLink(null);
    }, 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CHIX9JA | Official Links',
          text: 'Nigeria\'s Premium Portal - Official Website and Telegram Community.',
          url: window.location.href,
        });
      } catch {
        copyToClipboard(window.location.href, 'Portal');
      }
    } else {
      copyToClipboard(window.location.href, 'Portal');
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0f172a] text-slate-100 flex flex-col justify-between items-center px-4 py-8 sm:py-12 relative overflow-x-hidden select-none bg-[radial-gradient(circle_at_top_right,#1e293b,#0f172a)]">
      {/* Top Ambient Glow from Sleek Interface Theme */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.14)_0%,transparent_70%)] top-4 left-1/2 -translate-x-1/2 z-0 pointer-events-none" />
      <div className="absolute w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(0,136,204,0.1)_0%,transparent_70%)] bottom-10 right-[-10%] z-0 pointer-events-none" />

      {/* Header Logo */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 text-center mb-6 pt-2"
      >
        <div className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#fb923c] to-[#f97316] bg-clip-text text-transparent drop-shadow-sm">
          CHIX9JA
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-1 text-xs text-slate-400 font-medium tracking-wide uppercase">
          <ShieldCheck className="w-3.5 h-3.5 text-[#fb923c]" />
          <span>Verified Official Gateway</span>
        </div>
      </motion.header>

      {/* Main Sleek Card Content */}
      <main className="w-full max-w-[540px] mx-auto relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="bg-[rgba(30,41,59,0.7)] backdrop-blur-xl border border-white/10 p-6 sm:p-9 rounded-3xl shadow-2xl shadow-black/40 flex flex-col items-center text-center"
        >
          {/* Card Header & Tagline */}
          <div className="mb-7">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2.5">
              Nigeria&apos;s Premium Portal
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Join our fast-growing community today. Access exclusive rewards, deals, and daily updates.
            </p>

            {/* Referral badge */}
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-200/90 bg-[#fb923c]/15 px-3 py-1 rounded-full border border-[#fb923c]/30 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#fb923c]" />
              <span>Referral Applied: <strong className="font-bold text-amber-300 tracking-wide font-mono">{refCode}</strong></span>
            </div>
          </div>

          {/* Button Container */}
          <div className="w-full space-y-4">
            {/* Button 1: chix9ja.online?ref=BHI (Brand Primary: #fb923c) */}
            <div className="group relative w-full">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-2xl bg-[#fb923c] hover:bg-[#f97316] text-white font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 flex items-center justify-between gap-3 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-white/15 focus:outline-none focus:ring-2 focus:ring-[#fb923c] focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white flex-shrink-0 shadow-inner">
                    <Globe className="w-6 h-6 stroke-[2.25]" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-base sm:text-lg font-bold leading-tight text-white">
                      Visit Official Website
                    </div>
                    <div className="text-xs font-medium text-white/85 truncate mt-0.5">
                      chix9ja.online <span className="opacity-90 font-mono bg-black/20 px-1.5 py-0.5 rounded text-[11px] ml-1">?ref={refCode}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0 text-white">
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* Action buttons under primary link (Copy & QR) */}
              <div className="flex items-center justify-end gap-2 mt-1.5 px-1 text-xs text-slate-400">
                <button
                  type="button"
                  onClick={() => copyToClipboard(websiteUrl, 'Website Link')}
                  className="inline-flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Copy website link"
                >
                  {copiedLink === 'Website Link' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
                <span className="text-slate-700">•</span>
                <button
                  type="button"
                  onClick={() => setShowQrModal(websiteUrl)}
                  className="inline-flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Show QR Code"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>QR Code</span>
                </button>
              </div>
            </div>

            {/* Button 2: Telegram Channel (Brand Secondary: #0088cc) */}
            <div className="group relative w-full">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-2xl bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 flex items-center justify-between gap-3 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-white/15 focus:outline-none focus:ring-2 focus:ring-[#0088cc] focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white flex-shrink-0 shadow-inner">
                    <Send className="w-5 h-5 stroke-[2.25] -translate-x-0.5 translate-y-0.5" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-base sm:text-lg font-bold leading-tight text-white">
                      Join Telegram Channel
                    </div>
                    <div className="text-xs font-medium text-white/85 truncate mt-0.5 font-mono">
                      Connect with {telegramHandle}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0 text-white">
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* Action buttons under telegram link */}
              <div className="flex items-center justify-end gap-2 mt-1.5 px-1 text-xs text-slate-400">
                <button
                  type="button"
                  onClick={() => copyToClipboard(telegramUrl, 'Telegram Link')}
                  className="inline-flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Copy Telegram link"
                >
                  {copiedLink === 'Telegram Link' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
                <span className="text-slate-700">•</span>
                <button
                  type="button"
                  onClick={() => setShowQrModal(telegramUrl)}
                  className="inline-flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Show QR Code"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>QR Code</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card footer details & Share trigger */}
          <div className="w-full mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>Opens in new tab</span>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white font-medium border border-white/10 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-[#fb923c]" />
              <span>Share Portal</span>
            </button>
          </div>
        </motion.div>
      </main>

      {/* Footer from Sleek Interface Theme */}
      <footer className="w-full max-w-[540px] mx-auto text-center text-xs text-[#475569] tracking-wider py-5 border-t border-slate-800/40 mt-auto relative z-10 uppercase font-medium">
        &copy; {new Date().getFullYear()} CHIX9JA NETWORK &bull; ALL RIGHTS RESERVED
      </footer>

      {/* Copy Toast Alert */}
      <AnimatePresence>
        {copiedLink && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-[#fb923c] border border-[#fb923c]/30 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{copiedLink} copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QR Code Inspection Modal */}
      <AnimatePresence>
        {showQrModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowQrModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1e293b] border border-white/10 p-6 rounded-3xl max-w-xs w-full text-center relative shadow-2xl"
            >
              <button
                onClick={() => setShowQrModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-white mb-1">Scan QR Code</h3>
              <p className="text-xs text-slate-400 mb-4 truncate px-2 font-mono">
                {showQrModal}
              </p>

              <div className="bg-white p-4 rounded-2xl inline-block shadow-inner mb-4">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                    showQrModal
                  )}`}
                  alt="QR Code"
                  className="w-44 h-44 mx-auto block"
                />
              </div>

              <div className="flex gap-2 justify-center">
                <a
                  href={showQrModal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#fb923c] hover:bg-[#f97316] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/20"
                >
                  <span>Open Destination</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
