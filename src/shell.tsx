import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import { Menu, X, Phone, Mail, MessageCircle, MapPin, ShieldCheck, ArrowUpRight, TrainFront, CarTaxiFront, Bus, Navigation } from 'lucide-react';
import { site, logos, legalPages, mapEmbed } from './content';
import { LangProvider, useLang, reach, reachExtra } from './i18n';

export const ease = [0.16, 1, 0.3, 1] as const;
export const tap = { whileHover: { scale: 1.02, y: -2 }, whileTap: { scale: 0.98 } };
export const wa = `https://wa.me/91${site.contactPhone}`;
export const REGISTER = '/register';

export function Logo({ src, alt, size }: { src: string; alt: string; size: string }) {
  const [bad, setBad] = useState(false);
  return (
    <span className={`relative inline-flex shrink-0 rounded-full bg-sand-50 p-[2px] ring-1 ring-marigold-400/70 ${size}`}>
      {bad ? <span className="h-full w-full rounded-full bg-sand-100" /> : (
        <img src={src} alt={alt} onError={() => setBad(true)} width={320} height={320} decoding="async"
          className="h-full w-full rounded-full bg-white object-contain" />
      )}
    </span>
  );
}

/* very smooth scrolling (skipped when the visitor prefers reduced motion) */
function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.085, anchors: { offset: -110 } });
    return () => lenis.destroy();
  }, []);
}

export function LangToggle({ dark }: { dark?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div role="group" aria-label="Language / ভাষা"
      className={`relative flex rounded-full p-1 text-xs font-semibold ${dark ? 'bg-white/10 ring-1 ring-white/20' : 'bg-ink/5 ring-1 ring-ink/10'}`}>
      {(['en', 'bn'] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          className={`relative z-10 rounded-full px-3 py-1.5 transition-colors ${lang === l ? 'text-kohl-900' : dark ? 'text-white/80 hover:text-white' : 'text-ink-soft hover:text-ink'}`}>
          {lang === l && <motion.span layoutId={`lang-pill-${dark ? 'd' : 'l'}`} className="absolute inset-0 -z-10 rounded-full bg-marigold-400" transition={{ duration: 0.45, ease }} />}
          {l === 'en' ? 'EN' : 'বাং'}
        </button>
      ))}
    </div>
  );
}

/* ───── header ───── */
function Header({ overHero }: { overHero: boolean }) {
  const { s } = useLang();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  const solid = scrolled || menu || !overHero;
  const nav: [string, string][] = [
    [s.nav.about, '/#about'], [s.nav.venue, '/#venue'], [s.nav.fees, '/#fees'], [s.nav.committee, '/#committee'],
    [s.nav.gallery, '/#gallery'], [s.nav.videos, '/#videos'], [s.nav.reach, '#reach'],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <a href={REGISTER} className="flex w-full items-center justify-center gap-2 bg-marigold-400 px-4 py-2 text-xs font-semibold text-kohl-900 sm:text-sm">
        <span className="blink-dot h-2 w-2 rounded-full bg-brick-600" aria-hidden="true" />
        <span className="blink-text uppercase tracking-[0.16em]">{s.registerYourself}</span>
        <span className="hidden opacity-80 sm:inline">— {s.barText}</span>
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
      <div className={`transition-[background-color,box-shadow,border-color] duration-500 ${solid ? 'border-b border-ink/10 bg-sand-50/85 shadow-[0_20px_40px_-30px_rgba(43,32,25,.5)] backdrop-blur-md' : 'border-b border-transparent bg-gradient-to-b from-kohl-950/60 to-transparent'}`}>
        <div className="mx-auto flex h-[66px] max-w-7xl items-center justify-between gap-4 px-5">
          <a href="/" className="flex items-center gap-1.5" aria-label="54th Reunion — home">
            {logos.map((l) => <Logo key={l.src} src={l.sm} alt="" size="h-9 w-9" />)}
            <span className={`ml-2 hidden font-display text-lg font-semibold sm:block ${solid ? 'text-ink' : 'text-white'}`}>54<sup className="text-[10px]">th</sup> Reunion</span>
          </a>
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
            {nav.map(([t, href]) => (
              <a key={href} href={href} className={`text-sm font-medium transition-colors ${solid ? 'text-ink-soft hover:text-brick-500' : 'text-white/85 hover:text-white'}`}>{t}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LangToggle dark={!solid} />
            <motion.a {...tap} href={REGISTER} className="btn-marigold btn-pulse hidden !px-5 !py-2 text-sm md:inline-flex">{s.register}</motion.a>
            <button className={`rounded-full p-2 xl:hidden ${solid ? 'text-ink' : 'text-white'}`} onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu}>
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menu && (
            <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease }} className="overflow-hidden border-t border-ink/10 xl:hidden" aria-label="Mobile">
              <div className="flex flex-col gap-1 px-5 py-4">
                {nav.map(([t, href]) => (
                  <a key={href} href={href} onClick={() => setMenu(false)} className="rounded-xl px-3 py-3 text-ink hover:bg-ink/5">{t}</a>
                ))}
                <a href={REGISTER} className="btn-marigold mt-2">{s.registerYourself}</a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ───── how to reach + map (top of footer) ───── */
function Reach() {
  const { lang, s } = useLang();
  const routes = reach[lang];
  const extra = reachExtra[lang];
  const [tab, setTab] = useState(0);
  const r = routes[tab];
  return (
    <section id="reach" className="relative px-5 pb-16 pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] font-semibold uppercase tracking-kicker text-marigold-300 md:text-xs">{s.reachKicker}</p>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-sand-50 md:text-6xl">{s.reachTitle}</h2>
        <p className="mt-4 max-w-2xl text-base text-sand-200/80 md:text-lg">{s.reachIntro}</p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="self-start overflow-hidden rounded-[28px] border border-white/10 bg-kohl-800 lg:col-span-7">
            <iframe title="Map of Belgachia — Belgachia Metro and WBUAFS campus" src={mapEmbed} loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin" sandbox="allow-scripts allow-same-origin allow-popups"
              className="h-[340px] w-full grayscale-[25%] sepia-[15%] md:h-[460px]" />
            <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-sand-200/75">{extra.mapNote}</p>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-marigold shrink-0 !py-2.5 text-sm"><Navigation size={16} /> {s.openMaps}</a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div role="tablist" aria-label={s.reachTitle} className="flex flex-wrap gap-2">
              {routes.map((x, i) => (
                <button key={x.key} role="tab" aria-selected={tab === i} onClick={() => setTab(i)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${tab === i ? 'text-kohl-900' : 'text-sand-200 ring-1 ring-white/15 hover:ring-white/40'}`}>
                  {tab === i && <motion.span layoutId="reach-pill" className="absolute inset-0 -z-0 rounded-full bg-marigold-400" transition={{ duration: 0.5, ease }} />}
                  <span className="relative">{x.from}</span>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={r.key + lang} role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease }}
                className="mt-5 space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
                  <p className="flex items-center gap-2 font-semibold text-sand-50"><TrainFront size={18} className="text-marigold-300" /> {s.byMetro}</p>
                  <ol className="mt-4 space-y-3">
                    {r.metro.map((m, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-sand-200/85 md:text-base">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-marigold-400/15 text-xs font-bold text-marigold-300">{i + 1}</span>{m}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
                  <p className="flex items-center gap-2 font-semibold text-sand-50"><CarTaxiFront size={18} className="text-marigold-300" /> {s.byCab}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-sand-200/85 md:text-base">
                    {r.cab.map((c, i) => <li key={i}>{c}</li>)}
                    <li className="pt-1">{s.cabTell} <span className="font-semibold text-sand-50">{extra.cabAddress}</span></li>
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
            <p className="mt-4 flex gap-2 text-sm text-sand-200/70"><Bus size={16} className="mt-0.5 shrink-0 text-marigold-300" /> {extra.local}</p>
            <p className="mt-2 text-sm font-medium text-marigold-200">{extra.check}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── footer ───── */
function Footer() {
  const { s, lang } = useLang();
  return (
    <footer className="bg-kohl-900 text-sand-100">
      <Reach />
      <div className="px-5 pb-28 pt-6 sm:pb-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-t border-white/10 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex gap-3">{logos.map((l) => <Logo key={l.src} src={l.sm} alt={l.alt} size="h-12 w-12" />)}</div>
            <p className="mt-5 font-display text-2xl">{lang === 'bn' ? '৫৪তম পুনর্মিলন উৎসব' : '54th Reunion of Past & Present Students'}</p>
            <p className="mt-1 text-sm text-sand-200/70">{site.institutions}</p>
            <p className="mt-4 text-sm text-sand-200/70">{s.organisedBy} <span className="text-sand-50">{site.legalName}</span></p>
            <p className="mt-1 flex items-start gap-2 text-sm text-sand-200/70"><MapPin size={15} className="mt-0.5 shrink-0 text-marigold-300" />{site.legalAddress}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-kicker text-marigold-300">{s.contactTitle}</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all hover:text-marigold-300"><Mail size={15} className="shrink-0 text-marigold-300" /> {site.email}</a></li>
              <li><a href={`mailto:${site.grievanceEmail}`} className="flex items-center gap-2 break-all text-sand-200/80 hover:text-marigold-300"><Mail size={15} className="shrink-0 text-marigold-300" /> {site.grievanceEmail}</a></li>
              <li><a href={`tel:+91${site.contactPhone}`} className="flex items-center gap-2 hover:text-marigold-300"><Phone size={15} className="text-marigold-300" /> +91 {site.contactPhone} · {site.contactName}</a></li>
              <li><a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-marigold-300"><MessageCircle size={15} className="text-marigold-300" /> {s.whatsapp}</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-kicker text-marigold-300">{s.policies}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {legalPages.map((p) => <li key={p.slug}><a href={`/${p.slug}`} className="text-sand-200/75 hover:text-marigold-300">{p.title}</a></li>)}
            </ul>
            {lang === 'bn' && <p className="mt-3 text-xs text-sand-200/50">{s.langNote}</p>}
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-sand-200/55 md:flex-row">
          <p>© 2026–2027 {site.legalName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-marigold-300" /> {s.secureLine}</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingRegister() {
  const { s } = useLang();
  return (
    <motion.a href={REGISTER} {...tap} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.7, ease }}
      className="btn-marigold btn-pulse fixed bottom-5 right-5 z-50 !px-5 !py-3 text-sm" aria-label={s.registerYourself}>
      <span className="blink-dot h-2 w-2 rounded-full bg-brick-600" aria-hidden="true" /> {s.registerYourself}
    </motion.a>
  );
}

function Frame({ children, overHero }: { children: ReactNode; overHero: boolean }) {
  useSmoothScroll();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-marigold-400 focus:px-4 focus:py-2 focus:text-kohl-900">Skip to content</a>
      <Header overHero={overHero} />
      <main id="main" className="grain">{children}</main>
      <Footer />
      <FloatingRegister />
    </>
  );
}

export function Shell({ children, overHero = false }: { children: ReactNode; overHero?: boolean }) {
  return <LangProvider><Frame overHero={overHero}>{children}</Frame></LangProvider>;
}
