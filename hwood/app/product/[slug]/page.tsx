import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/ProductGallery';
import SpecsTable from '@/components/SpecsTable';
import FinalCTA from '@/components/FinalCTA';
import { getProduct } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

interface ProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProduct(params.slug);
  if (!product) {
    return buildMetadata({ title: 'מוצר לא נמצא' });
  }
  return buildMetadata({
    title: `${product.title} | HWOOD`,
    description: product.intro,
    openGraph: {
      images: product.images.map((url) => ({
        url,
        alt: product.title,
      })),
    },
  });
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.slug);
  if (!product) {
    notFound();
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.intro,
    image: product.images,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'ILS',
      price: '0.0',
    },
    brand: {
      '@type': 'Brand',
      name: 'HWOOD',
    },
  };

  return (
    <div className="space-y-24 bg-white pb-24">
      <section className="bg-light py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row">
          <div className="flex-1">
            <ProductGallery images={product.images} title={product.title} />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-dark/60">מוצר</p>
            <h1 className="text-4xl font-semibold text-dark md:text-5xl">{product.title}</h1>
            <p className="text-lg leading-relaxed text-dark/70">{product.intro}</p>
            <a
              href={product.pdf}
              className="inline-flex items-center gap-2 rounded-full border border-dark/20 px-5 py-3 text-sm font-semibold text-dark transition hover:border-primary hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              הורדת מפרט PDF
            </a>
            <SpecsTable specs={product.specs} />
            <div className="flex gap-3">
              <Link
                href="mailto:info@hwood.co.il"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                תיאום הדגמה
              </Link>
              <a
                href="https://wa.me/972523001234"
                className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
                target="_blank"
                rel="noreferrer"
              >
                שיחה עם מהנדס
              </a>
            </div>
          </div>
        </div>
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      </section>
      <FinalCTA />
    </div>
  );
}
