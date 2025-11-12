'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface Item {
  id: string;
  label: string;
}

interface SubnavActiveProps {
  items: Item[];
}

export function SubnavActive({ items }: SubnavActiveProps) {
  const [active, setActive] = useState<string>(items[0]?.id ?? '');
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    observer.current?.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.2,
      },
    );

    sections.forEach((section) => observer.current?.observe(section));

    return () => observer.current?.disconnect();
  }, [items]);

  return (
    <div className="sticky top-16 z-40 border-b border-light/60 bg-white/70 py-3 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl justify-center gap-6 text-sm font-medium">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`transition-colors ${active === item.id ? 'text-primary' : 'text-dark/60 hover:text-dark'}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default SubnavActive;
