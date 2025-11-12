import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/content';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3]">
        <Image src={product.images[0]} alt={product.title} fill className="object-cover transition group-hover:scale-105" sizes="(min-width:768px) 25vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-semibold text-dark">{product.title}</h3>
        <p className="text-sm text-dark/70">{product.intro}</p>
        <span className="mt-auto text-sm font-semibold text-primary">צפו בפרטים →</span>
      </div>
    </Link>
  );
}

export default ProductCard;
