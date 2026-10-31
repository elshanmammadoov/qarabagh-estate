import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLang } from '../i18n';
import { Reveal, Swap } from './motion';

const INTERVAL = 7000;

/**
 * Auto-playing carousel. It carries the firm's own commitments for now;
 * swap `t.promise.items` for real client reviews (quote + name) once you have them.
 */
export default function Pledge() {
  const { t, lang } = useLang();
  const items = t.promise.items;
  const [[index, dir], setState] = useState([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = (d) => setState(([i]) => [(i + d + items.length) % items.length, d]);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused]); // eslint-disable-line react-hooks/exhaustive-deps

  const item = items[index];

  return (
    <section
      className="relative overflow-hidden bg-obsidian py-32 md:py-44"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none font-display text-[18rem] leading-none text-champagne/[0.07] md:text-[24rem]">
        “
      </span>

      <div className="gutter relative mx-auto max-w-[1100px]">
        <Reveal as="p" className="eyebrow mb-6 flex items-center justify-center gap-4">
          <span className="gold-fill h-px w-10" />
          <Swap>{t.promise.label}</Swap>
          <span className="gold-fill h-px w-10" />
        </Reveal>
        <Reveal as="h2" className="mb-16 text-center font-display text-[clamp(1.8rem,3vw,2.5rem)] font-semibold text-pearl/80">
          <Swap>{t.promise.heading}</Swap>
        </Reveal>

        <div className="relative grid min-h-[280px] place-items-center text-center md:min-h-[230px]" aria-live="polite">
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.figure
              key={`${lang}-${index}`}
              custom={dir}
              variants={{
                enter: (d) => ({ opacity: 0, x: d * 60, filter: 'blur(10px)' }),
                center: { opacity: 1, x: 0, filter: 'blur(0px)' },
                exit: (d) => ({ opacity: 0, x: d * -60, filter: 'blur(10px)' }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 45, damping: 20, mass: 1.3 }}
              className="max-w-[44ch]"
            >
              <blockquote className="font-display text-[clamp(1.6rem,3vw,2.5rem)] font-medium italic leading-[1.35] text-pearl">{item.quote}</blockquote>
              <figcaption className="gold-text mt-10 font-caps text-[14px] tracking-[0.3em]">{item.title}</figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex items-center justify-center gap-8">
          <button onClick={() => go(-1)} aria-label={t.promise.prev} className="flex h-11 w-11 items-center justify-center rounded-full border border-pearl/15 text-pearl/70 transition-colors duration-500 hover:border-champagne hover:text-champagne">
            <ArrowLeft size={16} strokeWidth={1.3} />
          </button>
          <div className="flex items-center gap-3">
            {items.map((_, i) => (
              <button key={i} onClick={() => setState([i, i > index ? 1 : -1])} aria-label={`${i + 1} / ${items.length}`} aria-current={i === index} className="relative flex h-8 w-12 items-center">
                <span className="relative block h-px w-full overflow-hidden bg-pearl/15">
                  {i === index && (
                    <motion.span
                      key={`${lang}-${index}-${paused}`}
                      className="gold-fill absolute inset-y-0 left-0"
                      initial={{ width: paused ? '100%' : '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: paused ? 0 : INTERVAL / 1000, ease: 'linear' }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          <button onClick={() => go(1)} aria-label={t.promise.next} className="flex h-11 w-11 items-center justify-center rounded-full border border-pearl/15 text-pearl/70 transition-colors duration-500 hover:border-champagne hover:text-champagne">
            <ArrowRight size={16} strokeWidth={1.3} />
          </button>
        </div>
      </div>
    </section>
  );
}
