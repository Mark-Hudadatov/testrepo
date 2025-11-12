import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  background?: 'white' | 'light' | 'dark';
  className?: string;
  children: ReactNode;
}

export function Section({ id, background = 'white', className = '', children }: SectionProps) {
  const bgClass =
    background === 'dark' ? 'bg-dark text-white' : background === 'light' ? 'bg-light text-dark' : 'bg-white text-dark';

  return (
    <section id={id} className={`snap flex min-h-screen items-center ${bgClass} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 lg:py-24">{children}</div>
    </section>
  );
}

export default Section;
