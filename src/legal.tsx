import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig, motion } from 'framer-motion';
import { Shell, ease } from './shell';
import { pages } from './pages';
import { site, legalPages } from './content';
import './index.css';

const root = document.getElementById('root')!;
const slug = root.dataset.page ?? 'about-us';
const page = pages[slug];

function LegalPage() {
  return (
    <Shell>
      <section className="relative px-5 pb-20 pt-40">
        <div className="pointer-events-none absolute left-1/2 top-24 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[110px]" />
        <motion.div className="relative mx-auto max-w-3xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <nav aria-label="Breadcrumb" className="text-xs text-mist"><a href="/" className="hover:text-gold-300">Home</a> <span aria-hidden="true">/</span> {page.title}</nav>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">{page.title}</h1>
          <p className="mt-3 text-lg text-mist">{page.intro}</p>
          <p className="mt-2 text-xs text-mist">Last updated: {site.policiesUpdated}</p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-gold-500 to-transparent" />
          <article className="legal mt-10">{page.body}</article>
          <div className="mt-16 rounded-2xl border border-white/10 bg-navy-800/40 p-6">
            <p className="font-caps text-xs tracking-[0.25em] text-gold-400">Other policies</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {legalPages.filter((p) => p.slug !== slug).map((p) => (
                <li key={p.slug}><a href={`/${p.slug}`} className="inline-block rounded-full border border-white/10 px-3 py-1.5 text-sm text-ink hover:border-gold-500/60">{p.title}</a></li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
    </Shell>
  );
}

ReactDOM.createRoot(root).render(
  <React.StrictMode><MotionConfig reducedMotion="user"><LegalPage /></MotionConfig></React.StrictMode>
);
