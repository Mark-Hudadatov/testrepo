import { notFound } from 'next/navigation';
import FilterableProducts from '@/components/FilterableProducts';
import { getSubservice, getProductsBySubservice } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

interface SubservicePageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: SubservicePageProps) {
  const subservice = getSubservice(params.slug);
  if (!subservice) {
    return buildMetadata({ title: 'שירות לא נמצא' });
  }
  return buildMetadata({
    title: `${subservice.title} | HWOOD`,
    description: subservice.description,
  });
}

export default function SubservicePage({ params }: SubservicePageProps) {
  const subservice = getSubservice(params.slug);
  if (!subservice) {
    notFound();
  }
  const products = getProductsBySubservice(params.slug);

  return (
    <div className="bg-light py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-dark/60">תת שירות</p>
          <h1 className="text-4xl font-semibold text-dark md:text-5xl">{subservice.title}</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-dark/70">{subservice.description}</p>
        </header>
        <FilterableProducts products={products} />
      </div>
    </div>
  );
}
