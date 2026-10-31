import emblem from '../assets/emblem.webp';
import wordmark from '../assets/wordmark.webp';
import logo from '../assets/logo.webp';

/** Horizontal lockup for the header: the brand's own emblem and lettering, cut from the master logo. */
export function Wordmark({ className = '' }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img src={emblem} alt="" width="420" height="199" className="h-8 w-auto md:h-10" />
      <img src={wordmark} alt="Qarabagh Estate" width="900" height="285" className="h-7 w-auto md:h-8" />
    </span>
  );
}

/** The full stacked logo on a transparent ground. */
export function FullLogo({ className = '' }) {
  return <img src={logo} alt="Qarabagh Estate" width="1200" height="767" className={className} />;
}

export { emblem };
