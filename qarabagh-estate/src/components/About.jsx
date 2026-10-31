import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import advisory from '../assets/advisory.webp';
import { useLang } from '../i18n';
import { Reveal, SplitReveal, Swap } from './motion';

/** Each word brightens as the paragraph scrolls through the viewport. */
function ScrubText({ text, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 50%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 1 });
  const words = text.split(' ');
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word key={`${text}-${i}`} word={w} progress={progress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  );
}

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span aria-hidden="true" style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-9%', '9%']);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-obsidian py-32 md:py-44">
      <div className="gutter mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-12 lg:gap-12">
        {/* image: unveiled by a rising clip, drifting inside its frame */}
        <motion.figure
          className="relative lg:col-span-6"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true, margin: '0px 0px -15% 0px' }}
          transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative aspect-[4/5] max-w-full overflow-hidden md:aspect-[5/6]">
            <motion.img src={advisory} alt={a.caption} style={{ y: imgY }} className="absolute left-0 top-[-12.5%] h-[125%] w-full object-cover object-[50%_50%]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
          </div>
          <span className="pointer-events-none absolute -right-4 -top-4 hidden h-28 w-28 border-r border-t border-champagne/40 md:block" />
        </motion.figure>

        <div className="min-w-0 lg:col-span-5 lg:col-start-8">
          <Reveal as="p" className="eyebrow mb-8 flex items-center gap-4">
            <span className="gold-fill h-px w-10" />
            <Swap>{a.label}</Swap>
          </Reveal>
          <SplitReveal key={a.heading} text={a.heading} className="font-display text-[clamp(2.4rem,4.6vw,4rem)] font-semibold leading-[1.05] text-pearl" />

          <ScrubText key={a.lead} text={a.lead} className="mt-10 font-display text-[clamp(1.45rem,2.2vw,1.9rem)] font-medium italic leading-[1.4] text-champagne-light" />

          <Reveal delay={0.1} className="mt-8 max-w-[58ch] text-[15px] font-light leading-[1.9] text-pearl/65">
            <Swap>{a.body}</Swap>
          </Reveal>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-champagne/15 pt-10">
            {a.stats.map((s, i) => (
              <Reveal key={i} delay={0.12 * i} className="min-w-0">
                <dt className="gold-text font-display text-[clamp(2rem,3.4vw,3rem)] font-semibold tabular-nums">{s.value}</dt>
                <dd className="mt-2 text-[11px] leading-relaxed tracking-[0.06em] text-pearl/50">
                  <Swap>{s.label}</Swap>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
