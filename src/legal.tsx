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
                <motion.div className="relative mx-auto max-w-3xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <nav aria-label="Breadcrumb" className="text-xs text-ink-mute"><a href="/" className="hover:text-brick-500">Home</a> <span aria-hidden="true">/</span> {page.title}</nav>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-6xl">{page.title}</h1>
          <p className="mt-3 text-lg text-ink-soft">{page.intro}</p>
          <p className="mt-2 text-xs text-ink-mute">Last updated: {site.policiesUpdated}</p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-brick-500 to-transparent" />
          <article className="legal mt-10">{page.body}</article>
          <div className="mt-16 rounded-2xl border border-ink/10 bg-sand-50/80 p-6">
            <p className="kicker">Other policies</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {legalPages.filter((p) => p.slug !== slug).map((p) => (
                <li key={p.slug}><a href={`/${p.slug}`} className="inline-block rounded-full border border-ink/15 px-3 py-1.5 text-sm text-ink hover:border-brick-500/60">{p.title}</a></li>
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
