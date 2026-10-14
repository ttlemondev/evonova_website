'use client';

import { useRef, useState } from 'react';
import { Arrow, BrandMark } from './Icons';
import styles from './company.module.css';

const links = [['Products', '#products'], ['Our approach', '#approach'], ['Company', '#company']] as const;

export default function CompanyNav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className={styles.header} onKeyDown={(event) => {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    <div className={styles.navbar}>
      <a href="#top" className={styles.brand} aria-label="EVONOVA home"><BrandMark />EVONOVA</a>
      <nav className={styles.desktopNav} aria-label="Main navigation">
        {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a href="#contact" className={styles.navContact}>Meet Evonova <Arrow diagonal /></a>
      <button ref={toggle} className={styles.menuToggle} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
        <span className={open ? styles.menuOpen : ''}><i /><i /></span>
      </button>
    </div>
    <nav id="mobile-navigation" className={styles.mobileNav} aria-label="Mobile navigation" hidden={!open}>
      {[...links, ['Meet Evonova', '#contact']].map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}<Arrow /></a>)}
    </nav>
  </header>;
}
