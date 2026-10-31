import { useRef } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useLang } from '../i18n';

/* Heavy, deliberate springs: high mass, low stiffness, enough damping to never wobble. */
export const SPRING = { type: 'spring', stiffness: 55, damping: 20, mass: 1.4 };
export const SPRING_SOFT = { type: 'spring', stiffness: 40, damping: 22, mass: 1.8 };
export const SPRING_UI = { type: 'spring', stiffness: 260, damping: 30, mass: 0.9 };

/** Scroll-triggered reveal: rises from below with a slight blur, once. */
export function Reveal({ children, delay = 0, y = 48, className = '', as = 'div', ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ ...SPRING, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Line-by-line masked reveal for headlines: each word slides up out of a clipped line. */
export function SplitReveal({ text, className = '', delay = 0, stagger = 0.06, as = 'h2' }) {
  const Tag = motion[as];
  const words = text.split(' ');
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: '110%', rotate: 4 }, show: { y: '0%', rotate: 0, transition: SPRING } }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Cross-fades its children whenever the language changes. */
export function Swap({ children, className = '' }) {
  const { lang } = useLang();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={lang}
        className={className}
        initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: 'inline-block' }}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
}

/** Magnetic wrapper: the element drifts toward the cursor, its label drifts further. */
export function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 14, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 14, mass: 0.6 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
