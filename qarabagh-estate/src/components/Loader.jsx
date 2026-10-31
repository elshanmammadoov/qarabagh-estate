import { motion } from 'framer-motion';
import logo from '../assets/logo.webp';

/**
 * 1.5-second opening:
 * 0.00–0.70  logo surfaces from black (fade, de-blur, settle)
 * 0.45–1.05  a band of light sweeps across the gold lettering
 * 0.25–0.85  gold rule draws beneath
 * 1.00–1.50  curtain lifts
 */
const EASE = [0.22, 1, 0.36, 1];

export default function Loader({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian"
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      animate={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 1.0 }}
      onAnimationComplete={onDone}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_35%_at_50%_48%,rgba(201,169,106,0.14),transparent_70%)]" />

      <motion.div
        className="relative flex flex-col items-center"
        animate={{ y: -18, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1], delay: 1.0 }}
      >
        <motion.div
          className="relative aspect-[1200/767] w-60 md:w-80"
          initial={{ opacity: 0, scale: 1.06, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <img src={logo} alt="" className="absolute inset-0 h-full w-full" />
          {/* light sweep, masked to the logo's own shapes */}
          <motion.div
            className="absolute inset-0"
            style={{
              WebkitMaskImage: `url(${logo})`,
              maskImage: `url(${logo})`,
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
              backgroundImage: 'linear-gradient(105deg, transparent 38%, rgba(255,246,222,0.95) 50%, transparent 62%)',
              backgroundSize: '250% 100%',
            }}
            initial={{ backgroundPosition: '130% 0' }}
            animate={{ backgroundPosition: '-30% 0' }}
            transition={{ duration: 0.6, ease: [0.45, 0, 0.25, 1], delay: 0.45 }}
          />
        </motion.div>
        <motion.span
          className="gold-fill mt-8 block h-px w-36 origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1], delay: 0.25 }}
        />
      </motion.div>
    </motion.div>
  );
}
