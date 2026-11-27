import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig, motion } from 'framer-motion';
import { Clock, Mail, Phone, MessageCircle, Lock, ArrowUpRight } from 'lucide-react';
import { Shell, ease, tap, wa } from './shell';
import { useLang, bnDigits } from './i18n';
import { site, fees } from './content';
import './index.css';

function Field({ label, type = 'text', wide }: { label: string; type?: string; wide?: boolean }) {
  return (
    <label className={`block text-sm font-medium text-ink-soft ${wide ? 'sm:col-span-2' : ''}`}>
      {label}
      <input type={type} disabled aria-disabled="true" className="field" />
    </label>
  );
}

function Register() {
  const { s, lang } = useLang();
  const f = s.regFields;
  return (
    <section className="relative px-5 pb-24 pt-40">
      <motion.div className="mx-auto max-w-5xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
        <nav aria-label="Breadcrumb" className="text-xs text-ink-mute"><a href="/" className="hover:text-brick-500">Home</a> <span aria-hidden="true">/</span> {s.regTitle}</nav>
        <p className="kicker mt-6">{s.dateLabel}</p>
        <h1 className="mt-3 font-display text-5xl font-medium tracking-tight md:text-7xl">{s.regTitle}</h1>

        {/* coming-soon notice */}
        <div className="mt-10 flex flex-col gap-5 rounded-[28px] bg-kohl-900 p-7 text-sand-50 md:flex-row md:items-center md:p-9">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-marigold-400 text-kohl-900"><Clock size={28} /></span>
          <div className="flex-1">
            <p className="font-display text-3xl font-medium md:text-4xl"><span className="blink-text">{s.regSoon}</span></p>
            <p className="mt-2 text-sand-200/80">{s.regSoonText}</p>
          </div>
          {site.registrationUrl && (
            <motion.a {...tap} href={site.registrationUrl} target="_blank" rel="noopener noreferrer" className="btn-marigold shrink-0">{s.register} <ArrowUpRight size={16} /></motion.a>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* form preview (switched off) */}
          <form className="card relative p-7 md:p-9 lg:col-span-8" aria-label={s.regPreview} onSubmit={(e) => e.preventDefault()}>
            <p className="kicker flex items-center gap-2"><Lock size={13} /> {s.regPreview}</p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label={f.name} wide />
              <Field label={f.email} type="email" />
              <Field label={f.mobile} type="tel" />
              <Field label={f.whatsapp} type="tel" />
              <label className="block text-sm font-medium text-ink-soft">
                {f.category}
                <select disabled className="field">{fees.map((x) => <option key={x.label}>{lang === 'bn' ? x.bn : x.label} — ₹{x.amount}</option>)}</select>
              </label>
              <Field label={f.institution} />
              <Field label={f.batch} />
              <Field label={f.address} wide />
            </div>
            <button type="button" disabled className="btn-marigold mt-8 w-full cursor-not-allowed opacity-50">{f.pay}</button>
            <p className="mt-4 text-xs text-ink-mute">
              {s.readFirst} <a href="/terms-and-conditions" className="underline hover:text-brick-500">Terms</a> · <a href="/refund-and-cancellation-policy" className="underline hover:text-brick-500">Refund Policy</a> · <a href="/privacy-policy" className="underline hover:text-brick-500">Privacy Policy</a>
            </p>
          </form>

          <aside className="space-y-6 lg:col-span-4">
            <div className="card p-7">
              <p className="kicker">{s.feesTitle}</p>
              <ul className="mt-4 divide-y divide-ink/10">
                {fees.map((x) => (
                  <li key={x.label} className="flex items-center justify-between py-3">
                    <span className="text-ink-soft">{lang === 'bn' ? x.bn : x.label}</span>
                    <span className="font-display text-xl font-medium">₹{bnDigits(x.amount.toLocaleString('en-IN'), lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-7">
              <p className="kicker">{s.regNeedHelp}</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href={`mailto:${site.registrationEmail}`} className="flex items-center gap-2 break-all hover:text-brick-500"><Mail size={15} className="shrink-0 text-brick-500" /> {site.registrationEmail}</a></li>
                <li><a href={`tel:+91${site.contactPhone}`} className="flex items-center gap-2 hover:text-brick-500"><Phone size={15} className="text-brick-500" /> +91 {site.contactPhone} · {site.contactName}</a></li>
                <li><a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brick-500"><MessageCircle size={15} className="text-brick-500" /> {s.whatsapp}</a></li>
              </ul>
            </div>
            <a href="/" className="inline-block text-sm text-ink-mute underline underline-offset-2 hover:text-brick-500">{s.back}</a>
          </aside>
        </div>
      </motion.div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><MotionConfig reducedMotion="user"><Shell><Register /></Shell></MotionConfig></React.StrictMode>
);
