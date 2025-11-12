import type { MetadataRoute } from 'next';
import { getCategories, getSubservicesByCategory, getProductsBySubservice } from '@/lib/content';

const baseUrl = 'https://www.hwood.example';

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = getCategories();
  const categoryEntries = categories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
  }));

  const subserviceEntries = categories.flatMap((category) =>
    getSubservicesByCategory(category.slug).map((subservice) => ({
      url: `${baseUrl}/subservice/${subservice.slug}`,
      lastModified: new Date(),
    })),
  );

  const productEntries = categories.flatMap((category) =>
    getSubservicesByCategory(category.slug).flatMap((subservice) =>
      getProductsBySubservice(subservice.slug).map((product) => ({
        url: `${baseUrl}/product/${product.slug}`,
        lastModified: new Date(),
      })),
    ),
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    ...categoryEntries,
    ...subserviceEntries,
    ...productEntries,
  ];
}
