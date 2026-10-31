import { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import coastal from '../assets/coastal.webp';
import villa from '../assets/villa.webp';
import commercial from '../assets/commercial.webp';
import { useLang } from '../i18n';
import { Reveal, SPRING, SplitReveal, Swap } from './motion';

const IMAGES = [
  { src: coastal, pos: '30% 50%' },
  { src: villa, pos: '55% 50%' },
  { src: commercial, pos: '50% 50%' },
];
const TILT = { stiffness: 110, damping: 18, mass: 0.9 };

function TiltCard({ item, image, index, p }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [9, -9]), TILT);
  const rotateY = useSpring(useTransform(px, [0, 1], [-11, 11]), TILT);
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(460px circle at ${gx} ${gy}, rgba(232,214,168,0.22), transparent 45%)`;

  const onMove = (e) => {
    if (e.pointerType === 'touch') return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
    setOpen(false);
  };

  return (
    <Reveal delay={index * 0.14} y={80} className="[perspective:1400px]">
      <motion.article
        ref={ref}
        onPointerMove={onMove}
        onPointerEnter={(e) => e.pointerType !== 'touch' && setOpen(true)}
        onPointerLeave={onLeave}
        onClick={() => setOpen((o) => !o)}
        onFocus={() => setOpen(true)}
        onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
        tabIndex={0}
        animate={{ scale: open ? 1.035 : 1 }}
        transition={SPRING}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative aspect-[3/4] w-full max-w-full cursor-pointer overflow-hidden bg-obsidian-800 outline-none ring-1 ring-champagne/15 [box-shadow:0_50px_90px_-35px_rgba(0,0,0,.95)]"
      >
        <motion.img
          src={image.src}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: image.pos }}
          animate={{ scale: open ? 1.1 : 1.02, filter: open ? 'brightness(0.62) saturate(1.05)' : 'brightness(0.85) saturate(0.95)' }}
          transition={{ type: 'spring', stiffness: 40, damping: 20, mass: 1.6 }}
        />
        <motion.div className="pointer-events-none absolute inset-0 mix-blend-soft-light" style={{ background: glare }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian from-[6%] via-obsidian/55 via-[40%] to-obsidian/10" />
        <span className="pointer-events-none absolute inset-3 border border-champagne/0 transition-colors duration-700 group-hover:border-champagne/35" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 md:p-7" style={{ transform: 'translateZ(40px)' }}>
          <span className="font-caps text-[12px] tracking-[0.3em] text-pearl/80">
            <span className="text-champagne">0{index + 1}</span>
            <span className="mx-2 text-pearl/30">/</span>
            <Swap>{item.type}</Swap>
          </span>
          <span className="border border-champagne/40 bg-obsidian/40 px-2.5 py-1 font-caps text-[11px] tracking-[0.2em] text-champagne-light backdrop-blur-sm">{p.modes}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-7" style={{ transform: 'translateZ(60px)' }}>
          <p className="mb-3 flex items-center gap-2 text-[11px] tracking-[0.12em] text-pearl/70">
            <MapPin size={12} strokeWidth={1.4} className="text-champagne" />
            <Swap>{item.location}</Swap>
          </p>
          <h3 className="font-display text-[clamp(1.9rem,2.6vw,2.4rem)] font-semibold leading-[1.05] text-pearl">
            <Swap>{item.title}</Swap>
          </h3>

          <motion.div
            initial={false}
            animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
            transition={{ height: { type: 'spring', stiffness: 70, damping: 20, mass: 1 }, opacity: { duration: 0.5, delay: open ? 0.12 : 0 } }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-[13.5px] font-light leading-relaxed text-pearl/80">
              <Swap>{item.desc}</Swap>
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li key={tag} className="border border-champagne/30 px-2.5 py-1 text-[10px] tracking-[0.1em] text-champagne-light">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-end justify-between gap-4 border-t border-pearl/15 pt-4">
              <div>
                <p className="font-caps text-[11px] tracking-[0.24em] text-pearl/50">{p.price}</p>
                <p className="gold-text mt-1 font-display text-lg italic">{p.priceValue}</p>
              </div>
              <a
                href="#contact"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 font-caps text-[12px] tracking-[0.2em] text-pearl transition-colors duration-500 hover:text-champagne"
              >
                {p.request}
                <ArrowUpRight size={14} strokeWidth={1.4} />
              </a>
            </div>
          </motion.div>

          <motion.span className="gold-fill mt-5 block h-px origin-left" animate={{ scaleX: open ? 1 : 0.18 }} transition={{ type: 'spring', stiffness: 50, damping: 20 }} />
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Portfolio() {
  const { t } = useLang();
  const p = t.portfolio;

  return (
    <section id="portfolio" className="relative overflow-hidden bg-obsidian-800 py-32 md:py-44">
      <div className="gutter relative mx-auto max-w-[1440px]">
        <div className="mb-16 grid gap-8 md:mb-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal as="p" className="eyebrow mb-8 flex items-center gap-4">
              <span className="gold-fill h-px w-10" />
              <Swap>{p.label}</Swap>
            </Reveal>
            <SplitReveal key={p.heading} text={p.heading} className="max-w-[16ch] font-display text-[clamp(2.6rem,5.4vw,4.75rem)] font-semibold leading-[1.02] text-pearl" />
          </div>
          <Reveal as="p" delay={0.2} className="max-w-[40ch] text-[14px] font-light leading-[1.8] text-pearl/55 lg:col-span-4 lg:col-start-9">
            <Swap>{p.intro}</Swap>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {p.items.map((item, i) => (
            <div key={i} className={`min-w-0 ${i === 1 ? 'md:mt-24' : ''}`}>
              <TiltCard item={item} image={IMAGES[i]} index={i} p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
