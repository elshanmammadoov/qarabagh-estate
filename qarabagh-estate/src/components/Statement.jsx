import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import interior from '../assets/interior.webp';
import emblem from '../assets/emblem.webp';
import { useLang } from '../i18n';
import { SplitReveal, Reveal } from './motion';

export default function Statement() {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section ref={ref} className="relative flex min-h-[80vh] items-center overflow-hidden bg-obsidian py-32">
      <motion.img src={interior} alt="" style={{ y, scale }} className="absolute left-0 top-[-18%] h-[136%] w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-obsidian/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />

      <div className="gutter relative mx-auto flex max-w-[1100px] flex-col items-center text-center">
        <Reveal>
          <img src={emblem} alt="" className="mb-10 h-12 w-auto opacity-90" />
        </Reveal>
        <SplitReveal
          key={t.statement.text}
          as="blockquote"
          text={t.statement.text}
          stagger={0.04}
          className="font-display text-[clamp(2rem,4.4vw,3.75rem)] font-medium italic leading-[1.2] text-pearl"
        />
        <Reveal delay={0.3} className="mt-10 font-caps text-[13px] tracking-[0.4em] text-champagne">
          — {t.statement.sign}
        </Reveal>
      </div>
    </section>
  );
}
