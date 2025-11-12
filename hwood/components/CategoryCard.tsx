import Image from 'next/image';
import Link from 'next/link';
import type { Category } from '@/lib/content';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3]">
        <Image src={category.image} alt={category.title} fill className="object-cover transition group-hover:scale-105" sizes="(min-width:768px) 33vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-2xl font-semibold text-dark">{category.title}</h3>
        <p className="text-sm text-dark/70">{category.excerpt}</p>
        <span className="mt-auto text-sm font-semibold text-primary">למדו עוד →</span>
      </div>
    </Link>
  );
}

export default CategoryCard;
