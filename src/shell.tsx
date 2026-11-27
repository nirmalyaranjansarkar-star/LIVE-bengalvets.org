import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MessageCircle, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { site, logos, legalPages } from './content';

export const ease = [0.16, 1, 0.3, 1] as const;
export const tap = { whileHover: { scale: 1.02, y: -2 }, whileTap: { scale: 0.98 } };
export const wa = `https://wa.me/91${site.contactPhone}`;

/* ───── register (one place for every "Register" button) ───── */
const RegCtx = createContext<() => void>(() => {});
export const useRegister = () => useContext(RegCtx);

export function Logo({ src, alt, size }: { src: string; alt: string; size: string }) {
  const [bad, setBad] = useState(false);
  return (
    <span className={`relative inline-flex shrink-0 rounded-full p-[3px] bg-gradient-to-br from-gold-300 via-gold-600 to-gold-300 ${size}`}>
      {bad ? <span className="h-full w-full rounded-full bg-cream" /> : (
        <img src={src} alt={alt} onError={() => setBad(true)} width={320} height={320} decoding="async"
          className="h-full w-full rounded-full bg-white object-contain" />
      )}
    </span>
  );
}

function RegisterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div role="dialog" aria-modal="true" aria-labelledby="reg-title" onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.45, ease }} className="relative w-full max-w-md rounded-3xl border border-gold-500/40 bg-navy-800 p-8 text-center shadow-2xl shadow-black/60">
            <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-1 text-mist hover:text-ink" aria-label="Close"><X size={20} /></button>
            <p className="eyebrow">Register Yourself</p>
            <h3 id="reg-title" className="mt-3 font-display text-2xl font-semibold">Online registration opens shortly</h3>
            <p className="mt-3 text-mist">Secure online payment is being set up. For help, call or WhatsApp {site.contactName}: <span className="text-ink">{site.contactPhone}</span></p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <motion.a {...tap} href={wa} target="_blank" rel="noopener noreferrer" className="btn-gold"><MessageCircle size={18} /> WhatsApp</motion.a>
              <motion.a {...tap} href={`tel:+91${site.contactPhone}`} className="btn-line"><Phone size={18} /> Call</motion.a>
            </div>
            <p className="mt-5 text-xs text-mist">Please read our <a className="underline hover:text-gold-300" href="/terms-and-conditions">Terms</a> and <a className="underline hover:text-gold-300" href="/refund-and-cancellation-policy">Refund Policy</a> before you pay.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ───── header ───── */
const nav = [
  ['About', '/#about'], ['Venue', '/#venue'], ['Programme', '/#programme'], ['Fees', '/#fees'],
  ['Committee', '/#committee'], ['Gallery', '/#gallery'], ['Videos', '/#videos'], ['Contact', '/contact-us'],
] as const;

function Header({ onRegister }: { onRegister: () => void }) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* blinking announcement bar */}
      <button onClick={onRegister}
        className="flex w-full items-center justify-center gap-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 px-4 py-2 text-xs font-semibold text-navy-900 sm:text-sm">
        <span className="blink-dot h-2 w-2 rounded-full bg-red-600" aria-hidden="true" />
        <span className="blink-text uppercase tracking-[0.15em]">Register Yourself</span>
        <span className="hidden sm:inline">— 54th Reunion · {site.dateLong} · Belgachia</span>
        <ArrowRight size={14} aria-hidden="true" />
      </button>
      <div className={`transition-all duration-500 ${scrolled || menu ? 'bg-navy-950/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/40' : 'bg-transparent'}`}>
        <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-5">
          <a href="/" className="flex items-center gap-2" aria-label="54th Reunion home">
            {logos.map((l) => <Logo key={l.src} src={l.sm} alt="" size="h-9 w-9" />)}
            <span className="ml-2 hidden font-caps text-sm tracking-[0.2em] text-gold-300 sm:block">54th REUNION</span>
          </a>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
            {nav.map(([t, href]) => (
              <a key={href} href={href} className="text-sm text-mist transition-colors hover:text-gold-300">{t}</a>
            ))}
            <motion.button {...tap} onClick={onRegister} className="btn-gold btn-pulse !px-5 !py-2 text-sm">Register</motion.button>
          </nav>
          <button className="rounded-full p-2 text-ink lg:hidden" onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {menu && (
            <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease }} className="overflow-hidden border-t border-white/10 lg:hidden" aria-label="Mobile">
              <div className="flex flex-col gap-1 px-5 py-4">
                {nav.map(([t, href]) => (
                  <a key={href} href={href} onClick={() => setMenu(false)} className="rounded-lg px-3 py-3 text-ink hover:bg-white/5">{t}</a>
                ))}
                <button onClick={() => { setMenu(false); onRegister(); }} className="btn-gold mt-2">Register Yourself</button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ───── footer ───── */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 px-5 pb-28 pt-16 sm:pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex gap-3">{logos.map((l) => <Logo key={l.src} src={l.sm} alt={l.alt} size="h-12 w-12" />)}</div>
          <p className="mt-5 font-display text-xl text-ink">54th Reunion of Past &amp; Present Students</p>
          <p className="mt-1 text-sm text-mist">{site.institutions}</p>
          <p className="mt-4 text-sm text-mist">Organised by <span className="text-ink">{site.legalName}</span></p>
          <p className="mt-1 flex items-start gap-2 text-sm text-mist"><MapPin size={15} className="mt-0.5 shrink-0 text-gold-400" />{site.legalAddress}</p>
        </div>
        <div className="md:col-span-3">
          <p className="font-caps text-xs tracking-[0.25em] text-gold-400">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href={`tel:+91${site.contactPhone}`} className="flex items-center gap-2 text-ink hover:text-gold-300"><Phone size={15} className="text-gold-400" /> +91 {site.contactPhone}</a></li>
            <li><a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink hover:text-gold-300"><MessageCircle size={15} className="text-gold-400" /> WhatsApp</a></li>
            <li><a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all text-ink hover:text-gold-300"><Mail size={15} className="shrink-0 text-gold-400" /> {site.email}</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-caps text-xs tracking-[0.25em] text-gold-400">Policies</p>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 md:grid-cols-1">
            {legalPages.map((p) => <li key={p.slug}><a href={`/${p.slug}`} className="text-mist hover:text-gold-300">{p.title}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-mist/80 md:flex-row">
        <p>© 2026–2027 {site.legalName}. All rights reserved.</p>
        <p className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-gold-400" /> Secure site (HTTPS) · No tracking cookies · Card / UPI details are never stored by us</p>
      </div>
    </footer>
  );
}

/* ───── floating register (always visible) ───── */
function FloatingRegister({ onRegister }: { onRegister: () => void }) {
  return (
    <motion.button onClick={onRegister} {...tap} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6, ease }}
      className="btn-gold btn-pulse fixed bottom-5 right-5 z-50 !px-5 !py-3 text-sm shadow-2xl shadow-black/60" aria-label="Register yourself for the 54th Reunion">
      <span className="blink-dot h-2 w-2 rounded-full bg-red-600" aria-hidden="true" /> Register Yourself
    </motion.button>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState(false);
  const register = () => {
    if (site.registrationUrl) window.open(site.registrationUrl, '_blank', 'noopener,noreferrer');
    else setModal(true);
  };
  return (
    <RegCtx.Provider value={register}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-900">Skip to content</a>
      <Header onRegister={register} />
      <main id="main">{children}</main>
      <Footer />
      <FloatingRegister onRegister={register} />
      <RegisterModal open={modal} onClose={() => setModal(false)} />
    </RegCtx.Provider>
  );
}
