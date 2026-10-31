import { useEffect, useMemo, useState } from 'react';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { LANGS, LangContext, translations } from './i18n';
import Loader from './components/Loader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Statement from './components/Statement';
import Services from './components/Services';
import Pledge from './components/Pledge';
import Footer from './components/Footer';

const STORAGE_KEY = 'qe-lang';

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    /* storage unavailable */
  }
  return 'az';
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.6 });
  return <motion.div style={{ scaleX }} className="gold-fill fixed inset-x-0 top-0 z-[70] h-px origin-left" />;
}

export default function App() {
  const [lang, setLangState] = useState(initialLang);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // content starts animating as the curtain begins to lift
    const id = setTimeout(() => setReady(true), 1050);
    return () => clearTimeout(id);
  }, []);

  const setLang = (l) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, t: translations[lang], setLang }), [lang]);

  return (
    <LangContext.Provider value={value}>
      <MotionConfig reducedMotion="user">
        {loading && <Loader onDone={() => setLoading(false)} />}
        <ScrollProgress />
        <Nav ready={ready} />
        <main>
          <Hero ready={ready} />
          <Marquee />
          <About />
          <Portfolio />
          <Statement />
          <Services />
          <Pledge />
        </main>
        <Footer />
      </MotionConfig>
    </LangContext.Provider>
  );
}
