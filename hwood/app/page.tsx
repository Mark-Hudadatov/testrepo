import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { CategoryCard } from '@/components/CategoryCard';
import { getCategories } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'HWOOD | ייצור נגרות תעשייתית מותאמת',
  description: 'חברת HWOOD מספקת מערכי CNC, מודולים וחזיתות מותאמות לתעשיות המטבחים והמסחר.',
});

const trustLogos = [
  { name: 'Biesse', src: '/images/trust-biesse.svg' },
  { name: 'Siemens', src: '/images/trust-siemens.svg' },
  { name: 'ISO9001', src: '/images/trust-iso.svg' },
];

export default function HomePage() {
  const categories = getCategories();

  return (
    <div className="space-y-24">
      <Hero />
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-12 px-4">
          {trustLogos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-4 text-dark/60">
              <Image src={logo.src} alt={logo.name} width={120} height={48} className="object-contain" />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-light py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">תעשיות שאנו משרתים</h2>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-dark/70">
                מערכים מודולריים וגמישים שמייעלים זמני אספקה ומבטיחים חזרתיות מלאה בפרויקטים גדולים.
              </p>
            </div>
            <Link href="/services" className="rounded-full border border-dark/20 px-5 py-3 text-sm font-semibold text-dark transition hover:border-dark/40">
              כל השירותים
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
