import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import {
  CalendarPlus, MapPin, Music2, Play, X, ArrowUpRight, ArrowRight, Navigation, Mail, ChevronLeft, ChevronRight, Sparkles,
} from 'lucide-react';
import {
  site, logos, fees, officeBearers, subCommittees, programme, lastReunion, sponsorTiers, sponsors, gallery, videos, heroSlides,
} from './content';
import { Shell, Logo, ease, tap, REGISTER } from './shell';
import { useLang, bnDigits, type Lang } from './i18n';

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };
const inView = { variants: container, initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-80px' } } as const;

function Section({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative px-5 py-24 md:py-32 ${className}`}>
      <motion.div className="mx-auto max-w-7xl" {...inView}>{children}</motion.div>
    </section>
  );
}

function Heading({ n, kicker, title, aside }: { n: string; kicker: string; title: string; aside?: ReactNode }) {
  return (
    <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-12 md:items-end">
      <motion.div variants={item} className="md:col-span-8">
        <p className="kicker flex items-center gap-3">
          <span className="font-display text-base font-medium normal-case italic tracking-normal text-brick-500/80">{n}</span>
          <span className="h-px w-10 bg-brick-500/40" aria-hidden="true" />{kicker}
        </p>
        <h2 className="mt-4 font-display text-4xl font-medium leading-[1.04] tracking-tight text-ink md:text-6xl">{title}</h2>
      </motion.div>
      {aside && <motion.div variants={item} className="text-base leading-relaxed text-ink-soft md:col-span-4 md:text-lg">{aside}</motion.div>}
    </div>
  );
}

const money = (n: number, lang: Lang) => bnDigits(n.toLocaleString('en-IN'), lang);

/* ───── countdown ───── */
function useCountdown() {
  const target = new Date(site.eventStartISO).getTime();
  const end = new Date(site.eventEndISO).getTime();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const diff = Math.max(0, target - now);
  return {
    state: now < target ? 'before' : now <= end ? 'today' : 'after',
    parts: [Math.floor(diff / 86400000), Math.floor(diff / 3600000) % 24, Math.floor(diff / 60000) % 60, Math.floor(diff / 1000) % 60],
  };
}

/* ───── hero: full-screen crossfading photos ───── */
function Hero() {
  const { s, lang } = useLang();
  const cd = useCountdown();
  const [ready, setReady] = useState(false); // photos 2–6 load after the page is ready (fast first paint)
  useEffect(() => {
    const go = () => setTimeout(() => setReady(true), 300);
    if (document.readyState === 'complete') go(); else window.addEventListener('load', go, { once: true });
  }, []);
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-kohl-950 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {heroSlides.map((h, i) => (
          <img key={h.src} src={i === 0 || ready ? h.src : undefined} alt="" fetchPriority={i === 0 ? 'high' : 'low'} decoding="async"
            width={1920} height={1080} className={`hero-slide absolute inset-0 h-full w-full object-cover ${h.pos}`} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-kohl-950 via-kohl-950/35 to-kohl-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-kohl-950/70 via-transparent to-transparent" />
      </div>

      <span className="num-outline pointer-events-none absolute -right-6 top-24 hidden select-none font-display text-[26vw] font-semibold leading-none opacity-20 lg:block" aria-hidden="true">54</span>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-40">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <motion.div className="lg:col-span-7" initial="hidden" animate="show" variants={container}>
            <motion.div variants={item} className="flex items-center gap-2">
              {logos.map((l) => <Logo key={l.src} src={l.sm} alt={l.alt} size="h-12 w-12 md:h-14 md:w-14" />)}
            </motion.div>
            <motion.p variants={item} className="mt-7 text-[11px] font-semibold uppercase tracking-kicker text-marigold-300 md:text-xs">{s.heroKicker}</motion.p>
            <motion.h1 variants={item} className="mt-4 font-display font-medium leading-[0.98] tracking-tight">
              <span className="block text-2xl text-white/85 md:text-4xl">{s.heroTitle1}</span>
              <span className="mt-2 block text-5xl md:text-7xl xl:text-8xl">{s.heroTitle2}</span>
            </motion.h1>
            <motion.p variants={item} className="mt-5 max-w-xl text-sm text-white/75 md:text-base">{site.institutions}</motion.p>
            <motion.p variants={item} className="mt-5 font-bn text-xl text-marigold-200 md:text-2xl">{site.tagline}</motion.p>
          </motion.div>

          <motion.div className="lg:col-span-5" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9, ease }}>
            <div className="rounded-[28px] border border-white/15 bg-kohl-950/45 p-6 shadow-2xl shadow-black/40 backdrop-blur-md md:p-7">
              <p className="font-display text-2xl font-medium md:text-3xl">{s.dateLabel}</p>
              <a href="#venue" className="mt-2 flex items-start gap-2 text-sm text-white/80 hover:text-marigold-200">
                <MapPin size={16} className="mt-0.5 shrink-0 text-marigold-300" /> {s.venueShort}
              </a>
              <div className="my-5 h-px bg-white/15" />
              {cd.state === 'before' ? (
                <div className="grid grid-cols-4 gap-2" role="timer" aria-label="Countdown to the Reunion">
                  {cd.parts.map((v, i) => (
                    <div key={i} className="rounded-2xl bg-white/[0.07] py-3 text-center ring-1 ring-white/10">
                      <p className="font-display text-3xl font-medium tabular-nums md:text-4xl">{bnDigits(String(v).padStart(2, '0'), lang)}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/60">{s.countdown[i]}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-display text-2xl text-marigold-200">{cd.state === 'today' ? s.today : s.after}</p>
              )}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <motion.a {...tap} href={REGISTER} className="btn-marigold btn-pulse flex-1">
                  <span className="blink-dot h-2 w-2 rounded-full bg-brick-600" aria-hidden="true" /> {s.registerYourself}
                </motion.a>
                <motion.a {...tap} href="/54th-reunion.ics" download className="btn-ghost text-white/90 hover:bg-white/10"><CalendarPlus size={18} /> {s.addCalendar}</motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex gap-1.5" aria-hidden="true">
          {heroSlides.map((h) => <span key={h.src} className="hero-bar h-[3px] flex-1 overflow-hidden rounded-full bg-white/20"><i /></span>)}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const { lang } = useLang();
  const words = lang === 'bn'
    ? ['ফিরে আয়, বেলগাছিয়া তোকে চায়', '৫৪তম পুনর্মিলন', '১০ জানুয়ারি ২০২৭', '১৮৯৩ থেকে']
    : ['ফিরে আয়, বেলগাছিয়া তোকে চায়', '54th Reunion', '10 January 2027', 'Since 1893', 'Belgachia, Kolkata'];
  const row = [...words, ...words, ...words];
  return (
    <div className="overflow-hidden border-y border-brick-700 bg-brick-600 py-4 text-sand-50" aria-hidden="true">
      <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-xl italic md:text-2xl">
        {[...row, ...row].map((w, i) => <span key={i} className="flex items-center gap-10">{w}<Sparkles size={16} className="text-marigold-300" /></span>)}
      </div>
    </div>
  );
}

/* ───── 01 about + heritage timeline ───── */
const timeline = {
  en: [['1893', 'Bengal Veterinary College is founded at Belgachia.'], ['1974', 'Becomes the Faculty of Veterinary & Animal Sciences of BCKV.'], ['1995', 'WBUAFS is established on 2 January 1995.'], ['2027', 'The 54th Reunion — Sunday, 10 January.']],
  bn: [['১৮৯৩', 'বেলগাছিয়ায় বেঙ্গল ভেটেরিনারি কলেজ প্রতিষ্ঠা।'], ['১৯৭৪', 'BCKV-র ফ্যাকাল্টি অফ ভেটেরিনারি অ্যান্ড অ্যানিমাল সায়েন্সেস।'], ['১৯৯৫', '২ জানুয়ারি ১৯৯৫ WBUAFS প্রতিষ্ঠা।'], ['২০২৭', '৫৪তম পুনর্মিলন — রবিবার, ১০ জানুয়ারি।']],
};

function About() {
  const { s, lang } = useLang();
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Heading n="01" kicker={s.aboutKicker} title={s.aboutTitle} />
          <motion.p variants={item} className={`text-lg leading-relaxed text-ink-soft md:text-xl ${lang === 'bn' ? '' : 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-brick-500'}`}>{s.aboutP1}</motion.p>
          <motion.p variants={item} className="mt-5 text-lg leading-relaxed text-ink-soft md:text-xl">{s.aboutP2}</motion.p>
        </div>
        <motion.div variants={item} className="relative min-h-[420px] lg:col-span-6">
          <figure className="absolute left-0 top-0 w-[78%] -rotate-2 rounded-2xl bg-sand-50 p-3 pb-10 shadow-[0_30px_60px_-25px_rgba(60,35,20,.55)]">
            <img src="/img/bvc-heritage-1893.webp" alt="Heritage building of Bengal Veterinary College, A.D. 1893" loading="lazy" decoding="async" width={1242} height={864} className="aspect-[4/3] w-full rounded-lg object-cover" />
            <figcaption className="absolute bottom-3 left-4 font-display text-sm italic text-ink-mute">Bengal Veterinary College · A.D. 1893</figcaption>
          </figure>
          <figure className="absolute bottom-0 right-0 w-[58%] rotate-3 rounded-2xl bg-sand-50 p-3 pb-10 shadow-[0_30px_60px_-25px_rgba(60,35,20,.55)]">
            <img src="/img/r53-bvc-lit.webp" alt="The heritage building lit up for the 53rd Reunion" loading="lazy" decoding="async" width={1280} height={720} className="aspect-[4/3] w-full rounded-lg object-cover" />
            <figcaption className="absolute bottom-3 left-4 font-display text-sm italic text-ink-mute">53rd Reunion · 2026</figcaption>
          </figure>
          <span className="absolute right-[8%] top-[6%] flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full border-2 border-dashed border-brick-500/70 font-display text-brick-500">
            <span className="text-[10px] uppercase tracking-[0.2em]">Est.</span><span className="text-2xl font-semibold">1893</span>
          </span>
        </motion.div>
      </div>

      <motion.ol variants={item} className="relative mt-24 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <span className="absolute left-0 right-0 top-[11px] hidden h-px bg-gradient-to-r from-brick-500/0 via-brick-500/40 to-brick-500/0 lg:block" aria-hidden="true" />
        {timeline[lang].map(([y, t], i) => (
          <li key={y} className="relative">
            <span className={`relative z-10 block h-6 w-6 rounded-full border-4 border-sand-100 ${i === 3 ? 'bg-marigold-400' : 'bg-brick-500'}`} aria-hidden="true" />
            <p className="mt-4 font-display text-5xl font-medium text-ink">{y}</p>
            <p className="mt-2 text-ink-soft">{t}</p>
          </li>
        ))}
      </motion.ol>
    </Section>
  );
}

/* ───── 02 venue ───── */
function Venue() {
  const { s } = useLang();
  return (
    <Section id="venue" className="!pt-0">
      <Heading n="02" kicker={s.venueKicker} title={s.venueTitle} />
      <motion.div variants={item} className="relative overflow-hidden rounded-[32px] bg-kohl-900">
        <img src="/img/reunion53-gate.webp" alt="Welcome gate of the Reunion at the Belgachia campus" loading="lazy" decoding="async" width={1280} height={960}
          className="h-[520px] w-full object-cover md:h-[620px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-kohl-950/90 via-kohl-950/20 to-transparent md:bg-gradient-to-r" />
        <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/15 bg-kohl-950/55 p-6 text-white backdrop-blur-md md:inset-x-auto md:bottom-8 md:left-8 md:max-w-md md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-kicker text-marigold-300">{s.dateLabel}</p>
          <p className="mt-3 font-display text-3xl font-medium md:text-4xl">{s.venueName}</p>
          <p className="mt-2 text-white/75">{s.venueLine}</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-white/80"><MapPin size={16} className="mt-0.5 shrink-0 text-marigold-300" />{site.address}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a {...tap} href="#reach" className="btn-marigold !py-2.5 text-sm"><Navigation size={16} /> {s.directions}</motion.a>
            <motion.a {...tap} href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5 text-sm text-white hover:bg-white/10">{s.openMaps} <ArrowUpRight size={15} /></motion.a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* ───── 03 programme ───── */
function Programme() {
  const { s, lang } = useLang();
  const strip = [
    ['/img/r53-flag-hoisting.webp', 'Hoisting of the Reunion Flag'], ['/img/r53-lamp-sm.webp', 'Lighting of the inaugural lamp'],
    ['/img/r53-sports-sm.webp', 'Sports on the campus ground'], ['/img/r53-cultural.webp', 'Cultural programme'],
  ];
  return (
    <Section id="programme" className="!pt-0">
      <Heading n="03" kicker={s.progKicker} title={s.progTitle} aside={programme.length === 0 ? s.progSoon : undefined} />
      {programme.length > 0 && (
        <motion.ol variants={item} className="card mb-10 divide-y divide-ink/10 px-6">
          {programme.map((p) => (
            <li key={p.time + p.title} className="flex gap-6 py-5"><span className="w-28 shrink-0 font-display text-lg text-brick-500">{p.time}</span><span className="text-lg text-ink">{p.title}</span></li>
          ))}
        </motion.ol>
      )}
      <motion.div variants={item} className="card overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="p-7 md:p-10 lg:col-span-5">
            <p className="kicker">{s.lastYear}</p>
            <p className="mt-3 font-display text-3xl font-medium">{lastReunion.title}</p>
            <p className="mt-1 text-ink-mute">{lastReunion.date}</p>
            <p className="mt-4 text-ink-soft">{lastReunion.symposium}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {(lang === 'bn' ? lastReunion.highlightsBn : lastReunion.highlights).map((h) => (
                <li key={h} className="rounded-full border border-ink/15 bg-sand-100 px-3 py-1.5 text-sm text-ink-soft">{h}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-1.5 p-1.5 lg:col-span-7">
            {strip.map(([src, alt]) => (
              <img key={src} src={src} alt={alt} loading="lazy" decoding="async" width={640} height={420} className="aspect-[4/3] h-full w-full rounded-[20px] object-cover" />
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* ───── 04 fees ───── */
function Fees() {
  const { s, lang } = useLang();
  return (
    <Section id="fees" className="bg-sand-200/70">
      <Heading n="04" kicker={s.feesKicker} title={s.feesTitle} aside={s.feesNote} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {fees.map((f, i) => (
          <motion.a key={f.label} href={REGISTER} variants={item} {...tap}
            className={`ticket block rounded-[24px] p-7 shadow-[0_24px_50px_-30px_rgba(60,35,20,.6)] ${i === 3 ? 'bg-brick-600 text-sand-50' : 'bg-sand-50 text-ink'}`}>
            <p className={`text-sm font-semibold ${i === 3 ? 'text-marigold-200' : 'text-brick-500'}`}>{lang === 'bn' ? f.bn : f.label}</p>
            <p className="mt-5 font-display text-5xl font-medium tabular-nums">₹{money(f.amount, lang)}</p>
            <p className={`mt-1 text-xs ${i === 3 ? 'text-sand-50/70' : 'text-ink-mute'}`}>{s.perDelegate}</p>
            <div className={`ticket-cut my-6 ${i === 3 ? 'opacity-60 invert' : ''}`} />
            <p className="flex items-center justify-between text-sm font-semibold">{s.register} <ArrowRight size={16} /></p>
          </motion.a>
        ))}
      </div>
      <motion.p variants={item} className="mt-8 text-sm text-ink-mute">
        <a href="/refund-and-cancellation-policy" className="underline underline-offset-2 hover:text-brick-500">{s.refundLink}</a>
      </motion.p>
    </Section>
  );
}

/* ───── 05 committee ───── */
const initials = (n: string) => n.replace(/^Dr\.\s*(\(Mrs\.\)\s*)?/, '').split(/\s+/).filter((w) => !w.endsWith('.')).map((w) => w[0]).slice(0, 2).join('');

function Committee() {
  const { s, lang } = useLang();
  return (
    <Section id="committee">
      <Heading n="05" kicker={s.commKicker} title={s.commTitle} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {officeBearers.map((o, i) => (
          <motion.div key={o.role} variants={item}
            className={`card p-7 ${i === 0 ? 'md:col-span-6 md:row-span-2 bg-kohl-900 text-sand-50 border-kohl-800' : i === 4 ? 'md:col-span-6' : 'md:col-span-3'}`}>
            <p className={`kicker ${i === 0 ? '!text-marigold-300' : ''}`}>{lang === 'bn' ? o.bn : o.role}</p>
            <ul className={`mt-4 ${i === 4 ? 'grid gap-3 sm:grid-cols-3' : 'space-y-3'}`}>
              {o.names.map((n) => (
                <li key={n} className="flex items-center gap-3">
                  <span className={`flex shrink-0 items-center justify-center rounded-full font-display font-semibold ${i === 0 ? 'h-16 w-16 bg-marigold-400 text-2xl text-kohl-900' : 'h-10 w-10 bg-brick-500/10 text-sm text-brick-600'}`}>{initials(n)}</span>
                  <span className={`font-display ${i === 0 ? 'text-3xl' : 'text-lg'} font-medium leading-tight`}>{n}</span>
                </li>
              ))}
            </ul>
            {o.note && <a href={`tel:+91${o.note}`} className="mt-3 inline-block text-sm text-ink-mute hover:text-brick-500">+91 {o.note}</a>}
            {i === 0 && <p className="mt-8 text-sand-200/70">{site.institutions}</p>}
          </motion.div>
        ))}
      </div>
      <motion.h3 variants={item} className="mt-20 font-display text-3xl font-medium">{s.subComm}</motion.h3>
      <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[24px] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
        {subCommittees.map((c, i) => (
          <motion.div key={c.name} variants={item} className="bg-sand-50 p-6 transition-colors hover:bg-sand-100">
            <p className="flex items-baseline gap-3"><span className="font-display text-sm italic text-brick-500/70">{bnDigits(String(i + 1).padStart(2, '0'), lang)}</span><span className="font-display text-xl font-medium">{lang === 'bn' ? c.bn : c.name}</span></p>
            <p className="mt-3 text-sm text-ink-mute">{s.chairman}</p><p className="text-ink">{c.chairman}</p>
            <p className="mt-2 text-sm text-ink-mute">{s.convenor}</p><p className="text-ink">{c.convenor}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ───── 06 song ───── */
function Song() {
  const { s } = useLang();
  const tracks = [[s.themeSong, site.themeSongUrl], [s.jingle, site.jingleUrl]] as const;
  return (
    <Section id="song" className="!pt-0">
      <Heading n="06" kicker={s.songKicker} title={s.songTitle} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {tracks.map(([name, url]) => (
          <motion.div key={name} variants={item} className="card flex items-center gap-6 p-7">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-kohl-900 text-marigold-300 ring-8 ring-sand-200"><Music2 size={30} /></span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-2xl font-medium">{name}</p>
              {url ? <audio controls preload="none" src={url} className="mt-3 w-full" /> : <p className="mt-1 text-ink-mute">{s.releasing}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ───── 07 gallery ───── */
function Gallery() {
  const { s, lang } = useLang();
  const [all, setAll] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const shown = all ? gallery : gallery.slice(0, 12);
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
    <Section id="gallery" className="bg-sand-200/70">
      <Heading n="07" kicker={s.galKicker} title={s.galTitle} />
      <div className="masonry">
        {shown.map((g, i) => (
          <motion.button key={g.src} variants={item} onClick={() => setOpen(i)} className="group relative block w-full overflow-hidden rounded-[20px] bg-sand-300 text-left">
            <img src={g.sm} alt={g.alt} loading="lazy" decoding="async" className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-kohl-950/80 to-transparent p-4 pt-10 text-sm text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">{g.caption}</span>
          </motion.button>
        ))}
      </div>
      {gallery.length > 12 && (
        <div className="mt-8 text-center">
          <motion.button {...tap} onClick={() => setAll(!all)} className="btn-ghost text-ink hover:bg-ink/5">{all ? s.showFewer : s.showAll(gallery.length)}</motion.button>
        </div>
      )}
      <AnimatePresence>
        {open !== null && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-kohl-950/92 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label={gallery[open].caption}>
            <motion.figure key={open} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease }} className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <img src={gallery[open].src} alt={gallery[open].alt} className="max-h-[80vh] w-auto rounded-2xl object-contain" />
              <figcaption className="mt-3 text-center text-sm text-sand-200">{gallery[open].caption} · {bnDigits(open + 1, lang)}/{bnDigits(gallery.length, lang)}</figcaption>
            </motion.figure>
            <button className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Close" onClick={() => setOpen(null)}><X /></button>
            <button className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + gallery.length) % gallery.length); }}><ChevronLeft /></button>
            <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % gallery.length); }}><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ───── 08 videos ───── */
function VideoCard({ v, big }: { v: (typeof videos)[number]; big?: boolean }) {
  const { s } = useLang();
  const [play, setPlay] = useState(false);
  const external = v.href ?? `https://www.youtube.com/watch?v=${v.id}`;
  const start = () => (v.embed ? setPlay(true) : window.open(external, '_blank', 'noopener,noreferrer'));
  return (
    <motion.div variants={item} className={`group ${big ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className="relative aspect-video overflow-hidden rounded-[22px] bg-kohl-900 shadow-[0_24px_50px_-30px_rgba(60,35,20,.7)]">
        {play ? (
          <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
            title={v.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        ) : (
          <button onClick={start} className="absolute inset-0 h-full w-full" aria-label={`${v.embed ? 'Play' : 'Open'}: ${v.title}`}>
            <img src={v.thumb} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <span className="absolute inset-0 bg-gradient-to-t from-kohl-950/70 to-transparent" />
            <span className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-marigold-400 text-kohl-900 shadow-2xl transition-transform duration-500 group-hover:scale-110 ${big ? 'h-20 w-20' : 'h-14 w-14'}`}>
              {v.embed ? <Play size={big ? 30 : 22} className="ml-1" fill="currentColor" /> : <ArrowUpRight size={big ? 30 : 22} />}
            </span>
            {big && <span className="absolute left-5 top-5 rounded-full bg-brick-600 px-3 py-1 text-xs font-semibold text-sand-50">{s.featured}</span>}
          </button>
        )}
      </div>
      <p className={`mt-3 font-medium leading-snug text-ink ${big ? 'text-xl font-display' : 'text-sm'}`}>{v.title}</p>
      {!v.embed && <p className="text-xs text-ink-mute">{v.href ? s.opensFB : s.opensYT}</p>}
    </motion.div>
  );
}

function Videos() {
  const { s } = useLang();
  return (
    <Section id="videos">
      <Heading n="08" kicker={s.vidKicker} title={s.vidTitle} aside={s.vidNote} />
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
        {videos.map((v, i) => <VideoCard key={v.id} v={v} big={i === 0} />)}
      </div>
    </Section>
  );
}

/* ───── 09 sponsors ───── */
function Sponsors() {
  const { s } = useLang();
  return (
    <Section id="sponsors" className="!pt-0">
      <Heading n="09" kicker={s.spKicker} title={s.spTitle} aside={s.spText} />
      {sponsors.length > 0 && (
        <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-8">{sponsors.map((sp) => <img key={sp.name} src={sp.logo} alt={sp.name} className="h-14 w-auto" loading="lazy" />)}</motion.div>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {sponsorTiers.map((t) => (
          <motion.div key={t.name} variants={item} className="card p-7">
            <p className="font-display text-2xl font-medium">{t.name}</p>
            <p className="mt-2 text-ink-soft">{t.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.a variants={item} {...tap} href={`mailto:${site.sponsorshipEmail}?subject=Sponsorship%20%E2%80%94%2054th%20Reunion`} className="btn-ghost mt-8 text-brick-600 hover:bg-brick-500/5">
        <Mail size={18} /> {s.enquire} · {site.sponsorshipEmail}
      </motion.a>
    </Section>
  );
}

/* ───── closing call ───── */
function Closing() {
  const { s } = useLang();
  return (
    <section className="relative overflow-hidden bg-kohl-950 px-5 py-28 text-center text-white md:py-40">
      <img src="/img/r53-banner-night.webp" alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-45" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-kohl-950/70 via-kohl-950/30 to-kohl-900" aria-hidden="true" />
      <motion.div className="relative mx-auto max-w-3xl" {...inView}>
        <motion.p variants={item} className="font-bn text-3xl leading-snug text-marigold-200 md:text-5xl">{site.tagline}</motion.p>
        <motion.p variants={item} className="mt-5 font-display text-xl text-white/80 md:text-2xl">{s.dateLabel}</motion.p>
        <motion.div variants={item} className="mt-10 flex justify-center">
          <motion.a {...tap} href={REGISTER} className="btn-marigold btn-pulse !px-8 !py-4 text-base">
            <span className="blink-dot h-2 w-2 rounded-full bg-brick-600" aria-hidden="true" /> {s.registerYourself}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <Shell overHero>
      <Hero />
      <Marquee />
      <About />
      <Venue />
      <Programme />
      <Fees />
      <Committee />
      <Song />
      <Gallery />
      <Videos />
      <Sponsors />
      <Closing />
    </Shell>
  );
}
