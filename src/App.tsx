import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import {
  CalendarPlus, MapPin, Menu, X, Phone, Mail, MessageCircle, Music2, Mic2,
  Users, Award, Handshake, ArrowRight, Clock, Landmark, Sparkles,
} from 'lucide-react';
import {
  site, logos, fees, officeBearers, subCommittees, programme, lastReunion, sponsorTiers, sponsors,
} from './content';

const ease = [0.16, 1, 0.3, 1] as const;
const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };
const tap = { whileHover: { scale: 1.02, y: -2 }, whileTap: { scale: 0.98 } };

const nav = [
  ['About', 'about'], ['Programme', 'programme'], ['Fees', 'fees'], ['Committee', 'committee'],
  ['Theme Song', 'song'], ['Sponsors', 'sponsors'], ['Contact', 'contact'],
] as const;

const wa = `https://wa.me/91${site.contactPhone}`;

/* ───────── helpers ───────── */
function Logo({ src, alt, size }: { src: string; alt: string; size: string }) {
  const [bad, setBad] = useState(false);
  return (
    <span className={`relative inline-flex shrink-0 rounded-full p-[3px] ${size}`}
      style={{ background: 'linear-gradient(160deg,#f3dc9c,#b48a2a 60%,#ecd08a)' }}>
      {bad ? <span className="h-full w-full rounded-full bg-cream" /> : (
        <img src={src} alt={alt} onError={() => setBad(true)} width={320} height={320}
          className="h-full w-full rounded-full bg-white object-cover" />
      )}
    </span>
  );
}

function Section({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative px-5 py-20 md:py-28 ${className}`}>
      <motion.div className="mx-auto max-w-6xl" variants={container} initial="hidden"
        whileInView="show" viewport={{ once: true, margin: '-80px' }}>
        {children}
      </motion.div>
    </section>
  );
}

function Heading({ eyebrow, title, bn, light }: { eyebrow: string; title: string; bn?: string; light?: boolean }) {
  return (
    <motion.div variants={item} className="mb-12 text-center">
      <p className={`eyebrow ${light ? '!text-gold-600' : ''}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight ${light ? 'text-navy-900' : 'text-ink'}`}>{title}</h2>
      {bn && <p className={`mt-2 font-bn text-lg ${light ? 'text-gold-600' : 'text-gold-400'}`}>{bn}</p>}
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
    </motion.div>
  );
}

function useCountdown(targetISO: string, endISO: string) {
  const target = new Date(targetISO).getTime();
  const end = new Date(endISO).getTime();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const diff = Math.max(0, target - now);
  return {
    state: now < target ? 'before' : now <= end ? 'today' : 'after',
    parts: [
      ['Days', Math.floor(diff / 86400000)], ['Hours', Math.floor(diff / 3600000) % 24],
      ['Minutes', Math.floor(diff / 60000) % 60], ['Seconds', Math.floor(diff / 1000) % 60],
    ] as [string, number][],
  };
}

function downloadIcs() {
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//bengalvets.org//54th Reunion//EN', 'BEGIN:VEVENT',
    'UID:54th-reunion-20270110@bengalvets.org', 'DTSTAMP:20261127T000000Z',
    'DTSTART;VALUE=DATE:20270110', 'DTEND;VALUE=DATE:20270111',
    'SUMMARY:54th Reunion of Past & Present Students – Belgachia',
    'LOCATION:WBUAFS Campus\\, 37 & 68 Kshudiram Bose Sarani\\, Belgachia\\, Kolkata 700037',
    'DESCRIPTION:Bengal Veterinary College (C.U.) & Faculty of Veterinary & Animal Sciences (BCKV & WBUAFS). https://bengalvets.org',
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = '54th-Veterinary-Reunion.ics';
  a.click();
  URL.revokeObjectURL(a.href);
}

/* ───────── page ───────── */
export default function App() {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setModal(false);
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, []);

  const register = () => {
    setMenu(false);
    if (site.registrationUrl) window.open(site.registrationUrl, '_blank', 'noopener');
    else setModal(true);
  };
  const cd = useCountdown(site.eventStartISO, site.eventEndISO);

  return (
    <div className="overflow-x-hidden">
      {/* NAV */}
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-navy-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/40' : 'bg-transparent'}`}>
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5">
          <a href="#home" className="flex items-center gap-2" aria-label="Home">
            {logos.map((l) => <Logo key={l.src} src={l.src} alt={l.alt} size="h-9 w-9" />)}
            <span className="ml-2 hidden font-caps text-sm tracking-[0.2em] text-gold-300 sm:block">54th REUNION</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {nav.map(([t, id]) => (
              <a key={id} href={`#${id}`} className="text-sm text-mist transition-colors hover:text-gold-300">{t}</a>
            ))}
            <motion.button {...tap} onClick={register} className="btn-gold !px-5 !py-2 text-sm">Register</motion.button>
          </nav>
          <button className="rounded-full p-2 text-ink lg:hidden" onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {menu && (
            <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease }} className="border-t border-white/10 bg-navy-950/95 backdrop-blur-md lg:hidden" aria-label="Mobile">
              <div className="flex flex-col gap-1 px-5 py-4">
                {nav.map(([t, id]) => (
                  <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="rounded-lg px-3 py-3 text-ink hover:bg-white/5">{t}</a>
                ))}
                <button onClick={register} className="btn-gold mt-2">Register Now</button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative flex min-h-[100svh] items-center px-5 pb-16 pt-28">
          <div className="pointer-events-none absolute inset-0 grain" />
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-navy-900" />
          <motion.div className="relative mx-auto max-w-5xl text-center" variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="flex items-end justify-center gap-4 sm:gap-8">
              <Logo src={logos[0].src} alt={logos[0].alt} size="h-20 w-20 sm:h-28 sm:w-28" />
              <Logo src={logos[1].src} alt={logos[1].alt} size="h-24 w-24 sm:h-36 sm:w-36 -translate-y-3" />
              <Logo src={logos[2].src} alt={logos[2].alt} size="h-20 w-20 sm:h-28 sm:w-28" />
            </motion.div>
            <motion.p variants={item} className="eyebrow mt-10">Organizing Committee</motion.p>
            <motion.h1 variants={item} className="mt-4 font-display text-[2.4rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
              The <span className="gold-text">54<sup className="text-[0.5em]">th</sup></span> Reunion of<br className="hidden md:block" /> Past &amp; Present Students
            </motion.h1>
            <motion.p variants={item} className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist md:text-lg">{site.institutions}</motion.p>
            <motion.p variants={item} className="mt-5 font-bn text-xl text-gold-400 md:text-2xl">{site.tagline}</motion.p>
            <motion.div variants={item} className="mt-7 inline-block rounded-md px-6 py-2 font-caps text-sm tracking-[0.18em] text-navy-900 shadow-xl shadow-black/40 md:text-base"
              style={{ background: 'linear-gradient(180deg,#f3dc9c,#d4a63c 60%,#b48a2a)' }}>
              {site.dateLabel}
            </motion.div>
            <motion.p variants={item} className="mt-4 flex items-center justify-center gap-2 text-mist">
              <MapPin size={16} className="text-gold-400" /> {site.venueShort}
            </motion.p>

            <motion.div variants={item} className="mx-auto mt-10 max-w-xl">
              {cd.state === 'before' ? (
                <div className="grid grid-cols-4 gap-2 sm:gap-4">
                  {cd.parts.map(([label, v]) => (
                    <div key={label} className="glass rounded-2xl px-1 py-4">
                      <div className="relative h-10 overflow-hidden md:h-12">
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span key={v} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -24, opacity: 0 }}
                            transition={{ duration: 0.45, ease }} className="absolute inset-0 font-display text-3xl font-bold tabular-nums text-ink md:text-4xl">
                            {String(v).padStart(2, '0')}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-mist sm:text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="glass rounded-2xl px-6 py-5 font-display text-2xl text-gold-300">
                  {cd.state === 'today' ? 'The Reunion is on today!' : 'Thank you for coming'}
                </p>
              )}
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <motion.button {...tap} onClick={register} className="btn-gold w-full sm:w-auto">Register Now <ArrowRight size={18} /></motion.button>
              <motion.button {...tap} onClick={downloadIcs} className="btn-line w-full sm:w-auto"><CalendarPlus size={18} /> Add to Calendar</motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <Section id="about">
          <Heading eyebrow="Since 1893" title="Coming home to Belgachia" bn="আমাদের মিলনমেলা" />
          <motion.p variants={item} className="mx-auto max-w-3xl text-center text-base leading-relaxed text-mist md:text-lg">
            Since 1893, the old campus at Belgachia has trained generations of veterinarians who now serve every corner of Bengal and beyond.
            Every year, past and present students of Bengal Veterinary College and the Faculty of Veterinary &amp; Animal Sciences of BCKV and
            WBUAFS come home to Belgachia — to meet old friends, honour our teachers, and welcome the young ones. The 54th Reunion is a
            one-day celebration on <span className="text-ink">Sunday, 10th January 2027</span>.
          </motion.p>
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {logos.map((l) => (
              <motion.div key={l.src} variants={item} {...tap} className="glass flex items-center gap-4 rounded-2xl p-5">
                <Logo src={l.src} alt={l.alt} size="h-16 w-16" />
                <div>
                  <div className="font-display text-3xl font-bold text-gold-400">{l.year}</div>
                  <div className="text-sm leading-snug text-mist">{l.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* PROGRAMME */}
        <Section id="programme" className="bg-navy-950/60">
          <Heading eyebrow="One-day programme" title="Programme" bn="অনুষ্ঠান সূচি" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <motion.div variants={item} className="glass rounded-3xl p-7 md:col-span-7 md:p-10">
              <p className="eyebrow">54th Reunion</p>
              <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">Sunday, 10th January 2027</h3>
              <p className="mt-2 flex items-center gap-2 text-mist"><MapPin size={16} className="text-gold-400" /> {site.venueShort}</p>
              {programme.length ? (
                <ol className="mt-8 space-y-4 border-l border-gold-500/30 pl-6">
                  {programme.map((p) => (
                    <li key={p.time + p.title} className="relative">
                      <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold-500" />
                      <span className="font-caps text-sm text-gold-300">{p.time}</span>
                      <p className="text-ink">{p.title}</p>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-8 flex items-start gap-3 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-5 text-mist">
                  <Clock className="mt-0.5 shrink-0 text-gold-400" size={20} />
                  The detailed programme schedule will be announced soon. Please keep visiting this page.
                </p>
              )}
            </motion.div>
            <motion.div variants={item} className="rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 p-7 md:col-span-5 md:p-10">
              <p className="eyebrow">Last year</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{lastReunion.title}</h3>
              <p className="text-mist">{lastReunion.date}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist">{lastReunion.symposium}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {lastReunion.highlights.map((h) => (
                  <li key={h} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ink">{h}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>

        {/* FEES */}
        <section id="fees" className="relative bg-cream px-5 py-20 text-navy-900 md:py-28">
          <motion.div className="mx-auto max-w-6xl" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <Heading eyebrow="Registration" title="Delegate Fees" bn="প্রতিনিধি ফি" light />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {fees.map((f, i) => (
                <motion.div key={f.label} variants={item} {...tap}
                  className={`rounded-3xl border p-6 text-center shadow-xl shadow-navy-900/10 md:p-8 ${i === 3 ? 'border-gold-500 bg-navy-900 text-ink' : 'border-navy-900/10 bg-white'}`}>
                  <div className={`font-caps text-[11px] tracking-[0.2em] md:text-xs ${i === 3 ? 'text-gold-300' : 'text-gold-600'}`}>{f.label}</div>
                  <div className="mt-3 font-display text-4xl font-bold md:text-5xl">{f.amount}</div>
                </motion.div>
              ))}
            </div>
            <motion.p variants={item} className="mx-auto mt-10 max-w-2xl text-center text-navy-800/80">
              Online registration and payment will open shortly. Every delegate will get an instant e-mail receipt.
            </motion.p>
            <motion.div variants={item} className="mt-8 text-center">
              <motion.button {...tap} onClick={register} className="btn-gold">Register Now <ArrowRight size={18} /></motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* COMMITTEE */}
        <Section id="committee">
          <Heading eyebrow="54th Reunion" title="Organizing Committee" bn="আয়োজক কমিটি" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
            {officeBearers.map((o, i) => (
              <motion.div key={o.role} variants={item} {...tap}
                className={`glass rounded-2xl p-6 ${i === 0 ? 'lg:col-span-4' : i === 4 ? 'sm:col-span-2 lg:col-span-6' : i === 3 ? 'lg:col-span-6' : 'lg:col-span-4'}`}>
                <p className="font-caps text-xs tracking-[0.25em] text-gold-400">{o.role}</p>
                {o.names.map((n) => <p key={n} className="mt-2 font-display text-xl font-semibold text-ink">{n}</p>)}
                {o.note && <a href={`tel:+91${site.contactPhone}`} className="mt-1 block text-sm text-mist hover:text-gold-300">{o.note}</a>}
              </motion.div>
            ))}
          </div>
          <motion.h3 variants={item} className="mb-6 mt-16 text-center font-caps text-sm tracking-[0.3em] text-gold-300">Sub-Committees</motion.h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subCommittees.map((s) => (
              <motion.div key={s.name} variants={item} {...tap} className="rounded-2xl border border-white/10 bg-navy-800/40 p-5 transition-colors hover:border-gold-500/40">
                <p className="flex items-center gap-2 font-display text-lg font-semibold text-ink"><Users size={16} className="text-gold-400" /> {s.name}</p>
                <dl className="mt-3 space-y-1 text-sm">
                  <div className="flex gap-2"><dt className="w-20 shrink-0 italic text-mist">Chairman</dt><dd className="text-ink">{s.chairman}</dd></div>
                  <div className="flex gap-2"><dt className="w-20 shrink-0 italic text-mist">Convenor</dt><dd className="text-ink">{s.convenor}</dd></div>
                </dl>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* THEME SONG */}
        <Section id="song" className="bg-navy-950/60">
          <Heading eyebrow="Theme Song & Jingle" title="The sound of the Reunion" bn="থিম সং" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { icon: Music2, kind: 'Theme Song', name: 'দশই জানুয়ারি', url: site.themeSongUrl,
                lines: ['দশই জানুয়ারি — ফিরে আয়,', 'বেলগাছিয়া তোকে চায়।', 'যে নামে ডাকতাম হোস্টেলের ছাদে,', 'আজও সে নাম ঠোঁটে রয়ে যায়।'] },
              { icon: Mic2, kind: 'Jingle', name: 'চল বেলগাছিয়া', url: site.jingleUrl,
                lines: ['চল রে চল, বেলগাছিয়া চল,', 'চুয়ান্ন নম্বর আড্ডা — পুরো দলবল!'] },
            ].map((s) => (
              <motion.div key={s.kind} variants={item} {...tap} className="glass relative overflow-hidden rounded-3xl p-7 md:p-9">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/10 blur-3xl" />
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-caps text-xs tracking-[0.25em] text-gold-400"><s.icon size={16} /> {s.kind}</span>
                  {!s.url && <span className="rounded-full border border-gold-500/40 px-3 py-1 text-xs text-gold-300">Releasing soon</span>}
                </div>
                <h3 className="mt-4 font-bn text-3xl font-semibold text-ink">{s.name}</h3>
                <div className="mt-5 space-y-1 font-bn text-lg leading-relaxed text-mist">{s.lines.map((l) => <p key={l}>{l}</p>)}</div>
                {s.url && <audio controls preload="none" src={s.url} className="mt-6 w-full" />}
              </motion.div>
            ))}
          </div>
        </Section>

        {/* SPONSORS */}
        <Section id="sponsors">
          <Heading eyebrow="Sponsors & Advertisement" title="Partner with the Reunion" bn="সহযোগী হোন" />
          <motion.p variants={item} className="mx-auto max-w-3xl text-center text-mist md:text-lg">
            Pharmaceutical companies, feed companies, poultry and livestock businesses can reach veterinarians from all over West Bengal.
            Advertisement slots are available on this website and in the digital souvenir.
          </motion.p>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {sponsorTiers.map((t, i) => (
              <motion.div key={t.name} variants={item} {...tap}
                className={`rounded-3xl p-7 ${i === 0 ? 'border border-gold-500/60 bg-gradient-to-b from-gold-500/15 to-navy-800/40 shadow-2xl shadow-black/40' : 'glass'}`}>
                {i === 0 ? <Award className="text-gold-400" /> : i === 1 ? <Sparkles className="text-gold-400" /> : <Landmark className="text-gold-400" />}
                <h3 className="mt-4 font-display text-xl font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{t.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={item} className="mt-10 text-center">
            <motion.a {...tap} href={`mailto:${site.email}?subject=Sponsorship%20-%2054th%20Reunion`} className="btn-gold"><Handshake size={18} /> Enquire</motion.a>
          </motion.div>
          {sponsors.length > 0 && (
            <motion.div variants={item} className="mt-16">
              <p className="text-center font-caps text-xs tracking-[0.3em] text-mist">Our Partners</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
                {sponsors.map((s) => <img key={s.name} src={s.logo} alt={s.name} className="h-12 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />)}
              </div>
            </motion.div>
          )}
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="bg-navy-950/60">
          <Heading eyebrow="Get in touch" title="Contact & Venue" bn="যোগাযোগ" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <motion.div variants={item} className="glass space-y-6 rounded-3xl p-7 md:col-span-5 md:p-9">
              <div>
                <p className="font-caps text-xs tracking-[0.25em] text-gold-400">{site.contactRole}</p>
                <p className="mt-1 font-display text-2xl font-semibold">{site.contactName}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <motion.a {...tap} href={`tel:+91${site.contactPhone}`} className="btn-line !py-2 text-sm"><Phone size={16} /> {site.contactPhone}</motion.a>
                  <motion.a {...tap} href={wa} target="_blank" rel="noopener" className="btn-line !py-2 text-sm"><MessageCircle size={16} /> WhatsApp</motion.a>
                </div>
              </div>
              <div className="h-px bg-white/10" />
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-ink hover:text-gold-300"><Mail size={18} className="text-gold-400" /> {site.email}</a>
              <p className="flex items-start gap-3 text-mist"><MapPin size={18} className="mt-1 shrink-0 text-gold-400" /> {site.address}</p>
            </motion.div>
            <motion.div variants={item} className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 md:col-span-7">
              <iframe title="Map of WBUAFS, Belgachia" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full md:h-full md:min-h-[380px]"
                src="https://www.google.com/maps?q=West+Bengal+University+of+Animal+and+Fishery+Sciences,+Belgachia,+Kolkata&output=embed" />
            </motion.div>
          </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-navy-950 px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
          <div className="flex gap-3">{logos.map((l) => <Logo key={l.src} src={l.src} alt={l.alt} size="h-11 w-11" />)}</div>
          <p className="font-caps text-sm tracking-[0.15em] text-gold-300">54th Reunion of Past &amp; Present Students · Belgachia · {site.dateShort}</p>
          <a href={`mailto:${site.email}`} className="text-sm text-mist hover:text-gold-300">{site.email}</a>
          <p className="text-xs text-mist/70">© 2027 Organizing Committee, 54th Veterinary Reunion</p>
        </div>
      </footer>

      {/* REGISTER MODAL */}
      <AnimatePresence>
        {modal && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setModal(false)}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby="reg-title" onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.45, ease }} className="relative w-full max-w-md rounded-3xl border border-gold-500/40 bg-navy-800 p-8 text-center shadow-2xl shadow-black/60">
              <button onClick={() => setModal(false)} className="absolute right-4 top-4 rounded-full p-1 text-mist hover:text-ink" aria-label="Close"><X size={20} /></button>
              <p className="eyebrow">Registration</p>
              <h3 id="reg-title" className="mt-3 font-display text-2xl font-semibold">Online registration opens shortly</h3>
              <p className="mt-3 text-mist">For help, call or WhatsApp {site.contactName}: <span className="text-ink">{site.contactPhone}</span></p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <motion.a {...tap} href={wa} target="_blank" rel="noopener" className="btn-gold"><MessageCircle size={18} /> WhatsApp</motion.a>
                <motion.a {...tap} href={`tel:+91${site.contactPhone}`} className="btn-line"><Phone size={18} /> Call</motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
