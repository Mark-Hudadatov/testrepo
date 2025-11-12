import type { Metadata } from 'next';

const defaultMeta = {
  title: 'HWOOD | פתרונות נגרות תעשייתית',
  description:
    'HWOOD מפתחת ומייצרת מערכי נגרות תעשייתיים לייצור סדרתי וגמיש: CNC, מודולים, חזיתות ועוד.',
};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const {
    openGraph: openGraphOverrides,
    twitter: twitterOverrides,
    title: overrideTitle,
    description: overrideDescription,
    ...rest
  } = overrides;

  const title = typeof overrideTitle === 'string' ? overrideTitle : defaultMeta.title;

  const description = overrideDescription ?? defaultMeta.description;

  return {
    ...rest,
  const title =
    typeof overrides.title === 'string'
      ? overrides.title
      : overrides.title?.default
        ? overrides.title
        : defaultMeta.title;

  const description = overrides.description ?? defaultMeta.description;

  return {
    title,
    description,
    openGraph: {
      title: typeof title === 'string' ? title : defaultMeta.title,
      description,
      type: 'website',
      locale: 'he_IL',
      url: 'https://www.hwood.example',
      siteName: 'HWOOD',
      ...openGraphOverrides,
      ...overrides.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: typeof title === 'string' ? title : defaultMeta.title,
      description,
      ...twitterOverrides,
    },
      ...overrides.twitter,
    },
    ...overrides,
  } satisfies Metadata;
}

export const defaultMetadata = buildMetadata();
