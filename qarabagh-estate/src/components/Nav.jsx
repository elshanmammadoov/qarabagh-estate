import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { CONTACT, LANGS, useLang } from '../i18n';
import { Wordmark } from './Brand';
import { SPRING_UI, Swap } from './motion';

function LangSwitch({ id }) {
  const { lang, setLang } = useLang();
  return (
    <div role="radiogroup" aria-label="Language" className="relative flex items-center rounded-full border border-champagne/20 bg-obsidian/30 p-1 backdrop-blur-md">
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            role="radio"
            aria-checked={active}
            onClick={() => setLang(l)}
            className={`relative z-10 w-10 py-1.5 font-caps text-[10px] tracking-[0.2em] transition-colors duration-500 ${
              active ? 'text-obsidian' : 'text-pearl/60 hover:text-pearl'
            }`}
          >
            {active && <motion.span layoutId={`lang-${id}`} transition={SPRING_UI} className="gold-fill absolute inset-0 -z-10 rounded-full" />}
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default function Nav({ ready }) {
  const { t } = useLang();
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, 'change', (v) => setSolid(v > 40));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const links = [
    ['#portfolio', t.nav.portfolio],
    ['#about', t.nav.about],
    ['#services', t.nav.services],
    ['#contact', t.nav.contact],
  ];

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 1.2, delay: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-700 ${
          solid ? 'border-b border-champagne/10 bg-obsidian/80 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="gutter mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 md:h-24">
          <a href="#top" aria-label="Qarabagh Estate">
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {links.map(([href, label]) => (
              <a key={href} href={href} className="group relative py-2 font-caps text-[13px] tracking-[0.22em] text-pearl/75 transition-colors duration-500 hover:text-pearl">
                <Swap>{label}</Swap>
                <span className="gold-fill absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a href={CONTACT.phoneHref} className="hidden items-center gap-2 text-[12px] tabular-nums tracking-[0.08em] text-pearl/80 transition-colors hover:text-champagne xl:flex">
              <Phone size={13} strokeWidth={1.3} className="text-champagne" />
              {CONTACT.phone}
            </a>
            <div className="hidden sm:block">
              <LangSwitch id="desk" />
            </div>
            <button onClick={() => setOpen(true)} className="flex h-10 w-10 items-center justify-center text-pearl lg:hidden" aria-label={t.nav.menu}>
              <Menu size={22} strokeWidth={1.2} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-obsidian lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{ paddingTop: 'env(safe-area-inset-top, 0px)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
          >
            <div className="gutter flex h-20 items-center justify-between">
              <LangSwitch id="mobile" />
              <button onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center" aria-label={t.nav.close}>
                <X size={22} strokeWidth={1.2} />
              </button>
            </div>
            <nav className="gutter flex flex-1 flex-col justify-center gap-7" aria-label="Mobile">
              {links.map(([href, label], i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.35 + i * 0.08 }}
                  className="font-display text-5xl font-semibold text-pearl"
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <div className="gutter flex flex-col gap-2 pb-10 text-[13px] text-pearl/60">
              <a href={CONTACT.phoneHref} className="tabular-nums text-champagne">{CONTACT.phone}</a>
              <span>{CONTACT.email}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
