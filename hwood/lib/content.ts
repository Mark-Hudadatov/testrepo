import categoriesData from '@/data/categories.json';
import subservicesData from '@/data/subservices.json';
import productsDataRaw from '@/data/products.json';

export type Category = (typeof categoriesData)[number];
export type Subservice = (typeof subservicesData)[number];
export type Product = Omit<(typeof productsDataRaw)[number], 'tags'> & { tags?: string[] };

const productsData: Product[] = productsDataRaw.map((product) => ({
  ...product,
  tags: product.tags ?? [],
}));

export function getCategories(): Category[] {
  return categoriesData;
}

export function getCategory(slug: string): Category | undefined {
  return categoriesData.find((category) => category.slug === slug);
}

export function getSubservicesByCategory(categorySlug: string): Subservice[] {
  return subservicesData.filter((subservice) => subservice.category === categorySlug);
}

export function getSubservice(slug: string): Subservice | undefined {
  return subservicesData.find((subservice) => subservice.slug === slug);
}

export function getProductsBySubservice(subSlug: string): Product[] {
  return productsData.filter((product) => product.subservice === subSlug);
}

export function getProduct(slug: string): Product | undefined {
  return productsData.find((product) => product.slug === slug);
}
