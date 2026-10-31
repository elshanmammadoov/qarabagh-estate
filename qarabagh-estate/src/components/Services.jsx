import { motion } from 'framer-motion';
import { Building2, Handshake, KeyRound, TrendingUp } from 'lucide-react';
import { useLang } from '../i18n';
import { Reveal, SPRING, SplitReveal, Swap } from './motion';

const ICONS = [Handshake, Building2, KeyRound, TrendingUp];

export default function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section id="services" className="relative bg-obsidian-800 py-32 md:py-44">
      <div className="gutter mx-auto max-w-[1440px]">
        <div className="mb-20 grid gap-8 lg:grid-cols-12">
          <Reveal as="p" className="eyebrow flex items-center gap-4 lg:col-span-4">
            <span className="gold-fill h-px w-10" />
            <Swap>{s.label}</Swap>
          </Reveal>
          <SplitReveal
            key={s.heading}
            text={s.heading}
            className="font-display text-[clamp(2.4rem,4.8vw,4.25rem)] font-semibold leading-[1.05] text-pearl lg:col-span-8"
          />
        </div>

        <motion.ul
          className="grid border-t border-champagne/15 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -15% 0px' }}
          transition={{ staggerChildren: 0.18, delayChildren: 0.1 }}
        >
          {s.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
                  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: SPRING },
                }}
                className={`group relative min-w-0 border-b border-champagne/15 py-12 md:px-8 md:py-14 xl:border-b-0 ${i % 2 === 1 ? 'md:border-l' : ''} ${i > 0 ? 'xl:border-l' : ''} xl:first:pl-0`}
              >
                <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 gold-fill transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />
                <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-full border border-champagne/30 text-champagne transition-all duration-700 group-hover:border-champagne group-hover:bg-champagne group-hover:text-obsidian">
                  <Icon size={20} strokeWidth={1.1} />
                </div>
                <h3 className="font-display text-[1.85rem] font-semibold leading-tight text-pearl">
                  <Swap>{item.title}</Swap>
                </h3>
                <p className="mt-5 max-w-[38ch] text-[14.5px] font-light leading-[1.85] text-pearl/55 transition-colors duration-700 group-hover:text-pearl/80">
                  <Swap>{item.desc}</Swap>
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
