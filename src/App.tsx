import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import {
  CalendarPlus, MapPin, Music2, Mic2, Users, Award, Handshake, ArrowRight, Clock, Landmark, Sparkles,
  Navigation, Play, X, Phone, MessageCircle, Mail, Building2,
} from 'lucide-react';
import {
  site, logos, fees, officeBearers, subCommittees, programme, lastReunion, sponsorTiers, sponsors, gallery, videos,
} from './content';
import { Shell, Logo, ease, tap, useRegister, wa } from './shell';

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

function Section({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative px-5 py-20 md:py-28 ${className}`}>
      <motion.div className="mx-auto max-w-6xl" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
        {children}
      </motion.div>
    </section>
  );
}

function Heading({ eyebrow, title, bn, light }: { eyebrow: string; title: string; bn?: string; light?: boolean }) {
  return (
    <motion.div variants={item} className="mb-12 text-center">
      <p className={`eyebrow ${light ? '!text-gold-600' : ''}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl ${light ? 'text-navy-900' : 'text-ink'}`}>{title}</h2>
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

function Hero() {
  const register = useRegister();
  const cd = useCountdown(site.eventStartISO, site.eventEndISO);
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-36">
      <img src="/img/bvc-heritage-1893.webp" alt="" aria-hidden="true" fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.13] mix-blend-luminosity" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/85 to-navy-900" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-[120px]" />
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
        <motion.div variants={item} className="mt-7 inline-block rounded-md bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 px-6 py-2 font-caps text-sm tracking-[0.18em] text-navy-900 shadow-xl shadow-black/40 md:text-base">
          {site.dateLabel}
        </motion.div>
        <motion.a variants={item} href="#venue" className="mx-auto mt-4 flex max-w-xl items-start justify-center gap-2 text-mist hover:text-gold-300">
          <MapPin size={18} className="mt-0.5 shrink-0 text-gold-400" />
          <span><span className="text-ink">{site.venueName}</span> · Kshudiram Bose Sarani, Kolkata 700 037</span>
        </motion.a>

        <motion.div variants={item} className="mx-auto mt-10 max-w-xl">
          {cd.state === 'before' ? (
            <div className="grid grid-cols-4 gap-2 sm:gap-4" role="timer" aria-label="Countdown to the reunion">
              {cd.parts.map(([label, v]) => (
                <div key={label} className="glass rounded-2xl px-1 py-4">
                  <div className="relative h-10 overflow-hidden md:h-12">
                    <AnimatePresence initial={false}>
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
          <motion.button {...tap} onClick={register} className="btn-gold btn-pulse w-full text-base sm:w-auto">
            <span className="blink-dot h-2 w-2 rounded-full bg-red-600" aria-hidden="true" /> Register Yourself <ArrowRight size={18} />
          </motion.button>
          <motion.a {...tap} href="/54th-reunion.ics" download className="btn-line w-full sm:w-auto"><CalendarPlus size={18} /> Add to Calendar</motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <Heading eyebrow="Since 1893" title="Coming home to Belgachia" bn="আমাদের মিলনমেলা" />
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
        <motion.figure variants={item} className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 md:col-span-5">
          <img src="/img/bvc-heritage-1893-sm.webp" alt="Heritage building of Bengal Veterinary College, A.D. 1893" width={640} height={445} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <figcaption className="bg-navy-800 px-4 py-2 text-xs text-mist">The heritage building of Bengal Veterinary College · A.D. 1893</figcaption>
        </motion.figure>
        <motion.div variants={item} className="space-y-5 text-base leading-relaxed text-mist md:col-span-7 md:text-lg">
          <p>
            Since 1893, the old campus at Belgachia has trained generations of veterinarians who now serve every corner of Bengal and beyond.
            The century-old <span className="text-ink">Bengal Veterinary College</span> lives on in the Faculty of Veterinary &amp; Animal Sciences of
            <span className="text-ink"> WBUAFS</span> (1995) and <span className="text-ink">BCKV</span> (1974).
          </p>
          <p>
            Every year, past and present students come home to Belgachia — to meet old friends, honour our teachers, and welcome the young ones.
            The <span className="text-ink">54th Reunion</span> is a one-day celebration on <span className="text-ink">{site.dateLong}</span>.
          </p>
        </motion.div>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {logos.map((l) => (
          <motion.div key={l.src} variants={item} {...tap} className="glass flex items-center gap-4 rounded-2xl p-5">
            <Logo src={l.sm} alt={l.alt} size="h-16 w-16" />
            <div>
              <div className="font-display text-3xl font-bold text-gold-400">{l.year}</div>
              <div className="text-sm leading-snug text-mist">{l.name}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Venue() {
  return (
    <Section id="venue" className="bg-navy-950/60">
      <Heading eyebrow="Where it happens" title="Venue" bn="অনুষ্ঠান স্থল" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <motion.figure variants={item} className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 md:col-span-7">
          <img src="/img/reunion53-gate.webp" alt="Welcome gate of the 53rd Reunion at the Belgachia campus" width={1280} height={960} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-12 text-sm text-ink">Our gate last year · the 53rd Reunion, January 2026</figcaption>
        </motion.figure>
        <motion.div variants={item} className="glass flex flex-col justify-between gap-8 rounded-3xl p-7 md:col-span-5 md:p-9">
          <div>
            <p className="eyebrow">54th Reunion</p>
            <h3 className="mt-3 font-display text-3xl font-semibold">{site.venueName}</h3>
            <p className="mt-2 text-gold-300">{site.venueLine}</p>
            <p className="mt-5 flex items-start gap-3 text-mist"><Building2 size={20} className="mt-0.5 shrink-0 text-gold-400" />{site.address}</p>
            <p className="mt-3 flex items-center gap-3 text-mist"><Clock size={20} className="shrink-0 text-gold-400" />{site.dateLong} · one-day programme</p>
          </div>
          <motion.a {...tap} href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-gold"><Navigation size={18} /> Get directions</motion.a>
        </motion.div>
      </div>
    </Section>
  );
}

function Programme() {
  return (
    <Section id="programme">
      <Heading eyebrow="One-day programme" title="Programme" bn="অনুষ্ঠান সূচি" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <motion.div variants={item} className="glass rounded-3xl p-7 md:col-span-7 md:p-10">
          <p className="eyebrow">54th Reunion</p>
          <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{site.dateLong}</h3>
          <p className="mt-2 flex items-center gap-2 text-mist"><MapPin size={16} className="text-gold-400" /> {site.venueName}</p>
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
            {lastReunion.highlights.map((h) => <li key={h} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ink">{h}</li>)}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

function Fees() {
  const register = useRegister();
  return (
    <section id="fees" className="relative bg-cream px-5 py-20 text-navy-900 md:py-28">
      <motion.div className="mx-auto max-w-6xl" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
        <Heading eyebrow="Registration" title="Delegate Fees" bn="প্রতিনিধি ফি" light />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {fees.map((f, i) => (
            <motion.div key={f.label} variants={item} {...tap}
              className={`rounded-3xl border p-6 text-center shadow-xl shadow-navy-900/10 md:p-8 ${i === 3 ? 'border-gold-500 bg-navy-900 text-ink' : 'border-navy-900/10 bg-white'}`}>
              <div className={`font-caps text-[11px] tracking-[0.2em] md:text-xs ${i === 3 ? 'text-gold-300' : 'text-gold-600'}`}>{f.label}</div>
              <div className="mt-3 font-display text-4xl font-bold md:text-5xl">{f.amount}</div>
              <div className={`mt-1 text-xs ${i === 3 ? 'text-mist' : 'text-navy-800/60'}`}>per delegate · INR</div>
            </motion.div>
          ))}
        </div>
        <motion.p variants={item} className="mx-auto mt-10 max-w-2xl text-center text-navy-800/80">
          Online registration and secure payment will open shortly. Every delegate will get an e-mail receipt.
          See our <a href="/refund-and-cancellation-policy" className="font-semibold text-navy-900 underline">Refund &amp; Cancellation Policy</a>.
        </motion.p>
        <motion.div variants={item} className="mt-8 text-center">
          <motion.button {...tap} onClick={register} className="btn-gold btn-pulse"><span className="blink-dot h-2 w-2 rounded-full bg-red-600" aria-hidden="true" /> Register Yourself <ArrowRight size={18} /></motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Committee() {
  return (
    <Section id="committee">
      <Heading eyebrow="54th Reunion · 2026–27" title="Organizing Committee" bn="আয়োজক কমিটি" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
        {officeBearers.map((o, i) => (
          <motion.div key={o.role} variants={item} {...tap}
            className={`glass rounded-2xl p-6 ${i === 4 ? 'sm:col-span-2 lg:col-span-6' : i === 3 ? 'lg:col-span-6' : 'lg:col-span-4'}`}>
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
  );
}

function Song() {
  return (
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
  );
}

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((o) => (o === null ? o : (o + 1) % gallery.length));
      if (e.key === 'ArrowLeft') setOpen((o) => (o === null ? o : (o - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [open]);
  return (
    <Section id="gallery">
      <Heading eyebrow="Memories & campus" title="Gallery" bn="স্মৃতির পাতা" />
      <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
        {gallery.map((g, i) => (
          <motion.button key={g.src} variants={item} {...tap} onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/30 ${i === 0 ? 'col-span-2 row-span-2' : i === 2 ? 'md:col-span-2' : ''}`}
            aria-label={`Open photo: ${g.caption}`}>
            <img src={g.sm} alt={g.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-8 text-left text-xs text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">{g.caption}</span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {open !== null && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}
            role="dialog" aria-modal="true" aria-label={gallery[open].caption}>
            <button className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-ink" aria-label="Close" onClick={() => setOpen(null)}><X /></button>
            <motion.figure key={open} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease }} onClick={(e) => e.stopPropagation()} className="max-h-full max-w-5xl">
              <img src={gallery[open].src} alt={gallery[open].alt} className="max-h-[80vh] w-auto rounded-xl" />
              <figcaption className="mt-3 text-center text-sm text-mist">{gallery[open].caption}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function VideoCard({ v, big }: { v: (typeof videos)[number]; big?: boolean }) {
  const [play, setPlay] = useState(false);
  const start = () => (v.embed ? setPlay(true) : window.open(`https://www.youtube.com/watch?v=${v.id}`, '_blank', 'noopener,noreferrer'));
  return (
    <motion.div variants={item} className={`glass overflow-hidden rounded-3xl ${big ? 'md:col-span-2 border-gold-500/40' : ''}`}>
      <div className="relative aspect-video bg-navy-950">
        {play ? (
          <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
            title={v.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        ) : (
          <button onClick={start} className="group absolute inset-0 h-full w-full" aria-label={`${v.embed ? 'Play' : 'Open on YouTube'}: ${v.title}`}>
            {v.thumb && <img src={v.thumb} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />}
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-500 text-navy-900 shadow-2xl shadow-black/60 transition-transform group-hover:scale-110">
              <Play size={28} className="ml-1" fill="currentColor" />
            </span>
          </button>
        )}
      </div>
      <p className={`px-5 py-4 text-ink ${big ? 'font-display text-lg' : 'text-sm'}`}>{big && <span className="mr-2 font-caps text-xs tracking-[0.2em] text-gold-400">Featured</span>}{v.title}{!v.embed && <span className="ml-2 text-xs text-mist">(opens YouTube)</span>}</p>
    </motion.div>
  );
}

function Videos() {
  return (
    <Section id="videos" className="bg-navy-950/60">
      <Heading eyebrow="Watch" title="Videos" bn="ভিডিও" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {videos.map((v, i) => <VideoCard key={v.id} v={v} big={i === 0} />)}
      </div>
      <motion.p variants={item} className="mt-6 text-center text-xs text-mist">Videos play from YouTube in privacy-enhanced mode, only after you press play.</motion.p>
    </Section>
  );
}

function Sponsors() {
  return (
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
            {sponsors.map((s) => <img key={s.name} src={s.logo} alt={s.name} loading="lazy" className="h-12 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />)}
          </div>
        </motion.div>
      )}
    </Section>
  );
}

function ContactStrip() {
  return (
    <Section id="contact" className="bg-navy-950/60">
      <Heading eyebrow="Get in touch" title="Contact" bn="যোগাযোগ" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <motion.a variants={item} {...tap} href={`tel:+91${site.contactPhone}`} className="glass rounded-2xl p-6">
          <Phone className="text-gold-400" /><p className="mt-3 font-caps text-xs tracking-[0.25em] text-gold-400">{site.contactRole}</p>
          <p className="mt-1 font-display text-xl">{site.contactName}</p><p className="text-mist">+91 {site.contactPhone}</p>
        </motion.a>
        <motion.a variants={item} {...tap} href={wa} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6">
          <MessageCircle className="text-gold-400" /><p className="mt-3 font-caps text-xs tracking-[0.25em] text-gold-400">WhatsApp</p>
          <p className="mt-1 font-display text-xl">Message us</p><p className="text-mist">+91 {site.contactPhone}</p>
        </motion.a>
        <motion.a variants={item} {...tap} href={`mailto:${site.email}`} className="glass rounded-2xl p-6">
          <Mail className="text-gold-400" /><p className="mt-3 font-caps text-xs tracking-[0.25em] text-gold-400">E-mail</p>
          <p className="mt-1 break-all font-display text-lg">{site.email}</p><p className="text-mist">We reply within working days</p>
        </motion.a>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <Shell>
      <Hero /><About /><Venue /><Programme /><Fees /><Committee /><Song /><Gallery /><Videos /><Sponsors /><ContactStrip />
    </Shell>
  );
}
