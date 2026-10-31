import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Check, Copy, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CONTACT, useLang } from '../i18n';
import { FullLogo } from './Brand';
import { Reveal, SplitReveal, Swap } from './motion';

function CopyButton({ value, labels }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      /* clipboard unavailable: the value stays selectable */
    }
  };
  return (
    <button onClick={copy} className="flex shrink-0 items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-pearl/40 transition-colors hover:text-champagne" aria-label={labels.copy}>
      {done ? <Check size={13} strokeWidth={1.5} /> : <Copy size={13} strokeWidth={1.3} />}
      <span className="hidden sm:inline">{done ? labels.copied : labels.copy}</span>
    </button>
  );
}

function Row({ icon: Icon, label, value, href, copy, labels, delay }) {
  return (
    <Reveal delay={delay} className="group flex items-center justify-between gap-4 border-b border-champagne/15 py-6">
      <div className="flex min-w-0 items-center gap-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/30 text-champagne transition-colors duration-500 group-hover:bg-champagne group-hover:text-obsidian">
          <Icon size={17} strokeWidth={1.2} />
        </span>
        <div className="min-w-0">
          <p className="font-caps text-[12px] tracking-[0.26em] text-pearl/45">
            <Swap>{label}</Swap>
          </p>
          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="mt-1 block select-all break-all font-display text-[clamp(1.35rem,2.4vw,2rem)] font-semibold tabular-nums text-pearl transition-colors hover:text-champagne-light">
            {value}
          </a>
        </div>
      </div>
      {copy ? <CopyButton value={value} labels={labels} /> : <ArrowUpRight size={18} strokeWidth={1.2} className="shrink-0 text-pearl/40" />}
    </Reveal>
  );
}

export default function Footer() {
  const { t } = useLang();
  const c = t.contact;
  const f = t.footer;

  return (
    <footer id="contact" className="relative overflow-hidden bg-obsidian" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(60%_60%_at_20%_0%,rgba(201,169,106,0.12),transparent_70%)]" />

      <div className="gutter relative mx-auto max-w-[1440px] pt-32 md:pt-44">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal as="p" className="eyebrow mb-8 flex items-center gap-4">
              <span className="gold-fill h-px w-10" />
              <Swap>{c.label}</Swap>
            </Reveal>
            <SplitReveal key={c.heading} text={c.heading} className="font-display text-[clamp(2.6rem,5.4vw,4.75rem)] font-semibold leading-[1.02] text-pearl" />
            <Reveal delay={0.15} className="mt-8 max-w-[42ch] text-[15px] font-light leading-[1.85] text-pearl/60">
              <Swap>{c.sub}</Swap>
            </Reveal>
            <Reveal delay={0.25} className="mt-10">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-champagne/60 px-8 py-4 font-caps text-[13px] tracking-[0.22em] text-pearl"
              >
                <span className="gold-fill absolute inset-0 origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-y-100" />
                <MessageCircle size={16} strokeWidth={1.3} className="relative transition-colors duration-500 group-hover:text-obsidian" />
                <span className="relative transition-colors duration-500 group-hover:text-obsidian">{c.whatsapp}</span>
              </a>
            </Reveal>
          </div>

          <div className="min-w-0 border-t border-champagne/15 lg:col-span-6 lg:col-start-7">
            <Row icon={Phone} label={c.phone} value={CONTACT.phone} href={CONTACT.phoneHref} copy labels={c} delay={0} />
            <Row icon={Mail} label={c.email} value={CONTACT.email} href={`mailto:${CONTACT.email}`} copy labels={c} delay={0.08} />
            <Row icon={Instagram} label={c.instagram} value={CONTACT.handle} href={CONTACT.instagram} labels={c} delay={0.16} />
            <Reveal delay={0.24} className="flex items-center gap-5 py-6 text-[14px] text-pearl/60">
              <MapPin size={17} strokeWidth={1.2} className="ml-[15px] text-champagne" />
              <span>
                <Swap>{f.address}</Swap>
                <span className="mx-3 text-pearl/25">·</span>
                <Swap>{f.hours}</Swap>
              </span>
            </Reveal>
          </div>
        </div>

        <div className="mt-28 flex flex-col items-center border-t border-champagne/15 pt-16 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}>
            <FullLogo className="h-auto w-56 md:w-72" />
          </motion.div>
          <p className="mt-8 max-w-[40ch] text-[13px] font-light leading-relaxed text-pearl/45">
            <Swap>{f.tagline}</Swap>
          </p>
          <a href={`https://${CONTACT.site}`} target="_blank" rel="noreferrer" className="mt-4 font-caps text-[13px] tracking-[0.3em] text-champagne/80 hover:text-champagne">
            {CONTACT.site}
          </a>
        </div>

        <div className="flex flex-col-reverse gap-5 py-10 text-[11px] tracking-[0.1em] text-pearl/35 sm:flex-row sm:items-center sm:justify-between">
          <Swap>{f.rights}</Swap>
          <a href="#top" className="group inline-flex items-center gap-3 font-caps tracking-[0.24em] transition-colors duration-500 hover:text-champagne">
            <Swap>{f.back}</Swap>
            <ArrowUp size={14} strokeWidth={1.3} className="transition-transform duration-500 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
