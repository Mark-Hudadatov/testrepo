'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'בית' },
  { href: '/services', label: 'שירותים' },
  { href: '/category/cnc', label: 'קטגוריות' },
  { href: 'mailto:info@hwood.co.il', label: 'צור קשר', external: true },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-soft backdrop-blur' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold text-primary">
          HWOOD
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          {links.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} className="transition hover:text-primary" rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="transition hover:text-primary">
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
