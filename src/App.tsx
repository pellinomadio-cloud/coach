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
  const [showShareModal, setShowShareModal] = useState(false);
  const [showQrModal, setShowQrModal] = useState<string | null>(null);

  const websiteUrl = 'https://chix9ja.com?ref=BHI';
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
          title: 'Chix9ja Portal',
          text: 'Official Chix9ja Website and Telegram Community links.',
          url: window.location.href,
        });
      } catch {
        // Fallback copy
        copyToClipboard(window.location.href, 'Portal');
      }
    } else {
      copyToClipboard(window.location.href, 'Portal');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between items-center px-4 py-8 sm:py-12 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <main className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center items-center relative z-10 my-auto">
        {/* Profile / Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full mb-8"
        >
          {/* Avatar / Brand Icon */}
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-amber-400 via-emerald-500 to-sky-500 p-[3px] shadow-xl shadow-amber-500/10">
              <div className="w-full h-full bg-slate-900 rounded-[13px] flex items-center justify-center relative overflow-hidden group">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400 bg-clip-text text-transparent">
                  C9
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>
            </div>
            <div
              className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-950"
              title="Verified Official Account"
            >
              <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          {/* Title and Subtitle */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Chix9ja
            </h1>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Official
            </span>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-xs mx-auto leading-relaxed">
            Welcome! Select a destination below to visit our official website or join the Telegram community.
          </p>

          {/* Referral Badge */}
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-300/90 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Ref Code Active: <strong className="font-bold text-amber-300">{refCode}</strong></span>
          </div>
        </motion.div>

        {/* Action Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full space-y-4"
        >
          {/* Button 1: Website with ref=BHI */}
          <div className="group relative">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[64px] p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 font-bold shadow-lg shadow-amber-500/15 hover:shadow-amber-500/25 flex items-center justify-between gap-3 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-slate-950/20 backdrop-blur-sm flex items-center justify-center text-slate-950 flex-shrink-0">
                  <Globe className="w-6 h-6 stroke-[2.25]" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-base sm:text-lg font-bold leading-tight flex items-center gap-1.5 text-slate-950">
                    <span className="truncate">Visit Chix9ja Website</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-950/80 truncate mt-0.5">
                    chix9ja.com <span className="opacity-90 font-mono bg-slate-950/15 px-1.5 py-0.5 rounded text-[11px] ml-1">?ref={refCode}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0 text-slate-950">
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Sub-actions (Copy / QR) */}
            <div className="flex items-center justify-end gap-2 mt-1.5 px-1 text-xs text-slate-400">
              <button
                type="button"
                onClick={() => copyToClipboard(websiteUrl, 'Website Link')}
                className="inline-flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-slate-200 transition-colors"
                title="Copy website URL"
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
                className="inline-flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-slate-200 transition-colors"
                title="Show QR Code"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>QR Code</span>
              </button>
            </div>
          </div>

          {/* Button 2: Telegram Channel */}
          <div className="group relative">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[64px] p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 text-white font-bold shadow-lg shadow-sky-500/5 hover:shadow-sky-500/10 flex items-center justify-between gap-3 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Send className="w-5 h-5 stroke-[2.25] -translate-x-0.5 translate-y-0.5" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-base sm:text-lg font-bold leading-tight flex items-center gap-1.5 text-white">
                    <span className="truncate">Telegram Channel</span>
                  </div>
                  <div className="text-xs font-semibold text-sky-400 truncate mt-0.5 font-mono">
                    {telegramHandle}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0 text-slate-400 group-hover:text-sky-400 transition-colors">
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Sub-actions (Copy / QR) */}
            <div className="flex items-center justify-end gap-2 mt-1.5 px-1 text-xs text-slate-400">
              <button
                type="button"
                onClick={() => copyToClipboard(telegramUrl, 'Telegram Handle')}
                className="inline-flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-slate-200 transition-colors"
                title="Copy Telegram link"
              >
                {copiedLink === 'Telegram Handle' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Handle</span>
                  </>
                )}
              </button>
              <span className="text-slate-700">•</span>
              <button
                type="button"
                onClick={() => setShowQrModal(telegramUrl)}
                className="inline-flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-slate-200 transition-colors"
                title="Show QR Code"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>QR Code</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Share & Information bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full mt-8 pt-6 border-t border-slate-900 flex items-center justify-between text-xs text-slate-500"
        >
          <div className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Clicking links opens in new tab</span>
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium border border-slate-800 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Share Portal</span>
          </button>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-md mx-auto text-center text-xs text-slate-500 py-4 border-t border-slate-900/60 mt-auto">
        <p>© {new Date().getFullYear()} Chix9ja. All official community rights reserved.</p>
      </footer>

      {/* Toast Notification */}
      <AnimatePresence>
        {copiedLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-emerald-400 border border-emerald-500/30 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{copiedLink} copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQrModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowQrModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 p-6 rounded-3xl max-w-xs w-full text-center relative shadow-2xl"
            >
              <button
                onClick={() => setShowQrModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-white mb-1">Scan QR Code</h3>
              <p className="text-xs text-slate-400 mb-4 truncate px-2">
                {showQrModal}
              </p>

              <div className="bg-white p-4 rounded-2xl inline-block shadow-inner mb-4">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                    showQrModal
                  )}`}
                  alt="Link QR Code"
                  className="w-44 h-44 mx-auto block"
                />
              </div>

              <div className="flex gap-2 justify-center">
                <a
                  href={showQrModal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Open Link</span>
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
