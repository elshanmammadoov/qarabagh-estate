import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, Phone } from 'lucide-react';
import heroImg from '../assets/hero-baku.webp';
import { CONTACT, useLang } from '../i18n';
import { Magnetic, SPRING, Swap } from './motion';

const ease = [0.22, 1, 0.36, 1];

function HeroTitle({ text, ready }) {
  const words = text.split(' ');
  return (
    <motion.h1
      key={text}
      className="max-w-[14ch] font-display text-[clamp(3rem,8.6vw,8.25rem)] font-semibold leading-[0.95] tracking-[-0.01em] text-pearl"
      initial="hidden"
      animate={ready ? 'show' : 'hidden'}
      transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom" aria-hidden="true">
          <motion.span
            className={`inline-block ${i === words.length - 1 ? 'gold-text italic' : ''}`}
            variants={{ hidden: { y: '110%' }, show: { y: '0%', transition: { ...SPRING, stiffness: 45 } } }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}

export default function Hero({ ready }) {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[680px] overflow-hidden bg-obsidian">
      {/* photo: scroll parallax (outer) + slow cinematic push-in (inner) */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <motion.img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover object-[50%_62%]"
          initial={{ scale: 1.22 }}
          animate={ready ? { scale: [1.22, 1.06, 1.14] } : {}}
          transition={{ duration: 40, times: [0, 0.25, 1], ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
          fetchpriority="high"
        />
      </motion.div>

      {/* colour grade: deepen the shadows, warm the highlights toward gold */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,10,.78)_0%,rgba(9,9,10,.3)_45%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_45%,transparent_35%,rgba(9,9,10,.6)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-obsidian/45" />
      <div className="pointer-events-none absolute inset-0 bg-[#c9a96a] opacity-[0.04] mix-blend-color" />
      <div className="grain pointer-events-none absolute inset-0 overflow-hidden" />

      <motion.div style={{ y: textY, opacity: fade }} className="gutter relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end pb-32 md:pb-36">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.6, ease, delay: 0.1 }}
          className="eyebrow mb-8 flex items-center gap-4"
        >
          <span className="gold-fill h-px w-12" />
          <Swap>{t.hero.eyebrow}</Swap>
        </motion.p>

        <HeroTitle text={t.hero.title} ready={ready} />

        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ ...SPRING, delay: 1.1 }}
            className="max-w-[44ch] text-[15px] font-light leading-[1.8] text-pearl/85 [text-shadow:0_1px_14px_rgba(0,0,0,.7)]"
          >
            <Swap>{t.hero.sub}</Swap>
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ ...SPRING, delay: 1.35 }}
          >
            <a href={CONTACT.phoneHref} className="group flex items-center gap-3 text-[13px] tabular-nums tracking-[0.06em] text-pearl/80 transition-colors hover:text-champagne">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-pearl/20 transition-colors group-hover:border-champagne">
                <Phone size={15} strokeWidth={1.3} />
              </span>
              {CONTACT.phone}
            </a>
            <Magnetic strength={0.4}>
              <a
                href="#portfolio"
                className="group relative flex items-center gap-5 overflow-hidden rounded-full border border-champagne/60 py-2 pl-8 pr-2 font-caps text-[13px] tracking-[0.24em] text-pearl"
              >
                <span className="gold-fill absolute inset-0 origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-y-100" />
                <span className="relative transition-colors duration-500 group-hover:text-obsidian">
                  <Swap>{t.hero.cta}</Swap>
                </span>
                <span className="gold-fill relative flex h-12 w-12 items-center justify-center rounded-full text-obsidian transition-colors duration-500 group-hover:bg-none group-hover:bg-obsidian group-hover:text-champagne">
                  <ArrowDownRight size={18} strokeWidth={1.4} className="transition-transform duration-700 group-hover:-rotate-45" />
                </span>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1.6, delay: 1.6 }}
        className="gutter absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-[1440px] items-center justify-between font-caps text-[12px] tracking-[0.3em] text-pearl/50"
        style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom, 0px))' }}
      >
        <span className="hidden tabular-nums sm:block">40.4093° N · 49.8671° E</span>
        <span className="flex items-center gap-3">
          <Swap>{t.hero.scroll}</Swap>
          <span className="relative h-10 w-px overflow-hidden bg-pearl/15">
            <motion.span
              className="gold-fill absolute left-0 top-0 h-1/2 w-px"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
            />
          </span>
        </span>
        <span>EST. 2024</span>
      </motion.div>
    </section>
  );
}
