import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SubserviceCard } from '@/components/SubserviceCard';
import { getCategory, getSubservicesByCategory } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

interface CategoryPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);
  if (!category) {
    return buildMetadata({ title: 'קטגוריה לא נמצאה' });
  }
  return buildMetadata({
    title: `${category.title} | HWOOD`,
    description: category.excerpt,
  });
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);
  if (!category) {
    notFound();
  }
  const subservices = getSubservicesByCategory(params.slug);

  return (
    <div className="space-y-16 pb-24">
      <section className="bg-accent text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-white/80">קטגוריה</p>
            <h1 className="text-4xl font-semibold md:text-5xl">{category.title}</h1>
            <p className="text-lg leading-relaxed text-white/90">{category.excerpt}</p>
          </div>
          <div className="relative h-64 flex-1 overflow-hidden rounded-xl shadow-soft">
            <Image src={category.image} alt={category.title} fill className="object-cover" sizes="(min-width:768px) 40vw, 100vw" />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4">
          <h2 className="text-3xl font-semibold text-dark md:text-4xl">תתי שירות במסגרת {category.title}</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {subservices.length > 0 ? (
              subservices.map((subservice) => <SubserviceCard key={subservice.slug} subservice={subservice} />)
            ) : (
              <p className="text-dark/60">תתי שירות יעודכנו בקרוב.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
