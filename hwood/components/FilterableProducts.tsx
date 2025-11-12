'use client';

import { useMemo, useState } from 'react';
import type { Product } from '@/lib/content';
import { ProductCard } from './ProductCard';

interface FilterableProductsProps {
  products: Product[];
}

export function FilterableProducts({ products }: FilterableProductsProps) {
  const allTags = useMemo(() => Array.from(new Set(products.flatMap((product) => product.tags ?? []))), [products]);
  const [selected, setSelected] = useState<string>('');

  const filtered = useMemo(() => {
    if (!selected) return products;
    return products.filter((product) => product.tags?.includes(selected));
  }, [products, selected]);

  if (products.length === 0) {
    return <p className="text-dark/70">כרגע אין מוצרים זמינים לקטגוריה זו.</p>;
  }

  return (
    <div className="space-y-6">
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setSelected('')}
            className={`rounded-full border px-4 py-2 text-sm transition ${selected === '' ? 'border-primary bg-primary text-white' : 'border-dark/20 text-dark hover:border-dark/40'}`}
          >
            הכל
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelected((prev) => (prev === tag ? '' : tag))}
              className={`rounded-full border px-4 py-2 text-sm transition ${selected === tag ? 'border-primary bg-primary text-white' : 'border-dark/20 text-dark hover:border-dark/40'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FilterableProducts;
