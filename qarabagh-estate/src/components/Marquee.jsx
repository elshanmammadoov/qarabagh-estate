import { motion } from 'framer-motion';
import { useLang } from '../i18n';

export default function Marquee() {
  const { t } = useLang();
  const row = [...t.marquee, ...t.marquee];
  return (
    <div className="relative overflow-hidden border-y border-champagne/15 bg-obsidian py-7" aria-hidden="true">
      <motion.div
        className="flex w-max items-center gap-14 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 48, ease: 'linear', repeat: Infinity }}
      >
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-14">
            <span className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium italic text-pearl/85">{w}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-champagne/70" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
