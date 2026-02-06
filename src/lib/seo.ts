import type { PageId, Locale } from './site';
import {
  PAGE_META,
  SITE_URL,
  getAlternateLinks,
  getLocalizedDescription,
  getLocalizedTitle,
  getPath
} from './site';

export interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  alternates: Array<{ locale: Locale; href: string }>;
  h1: string;
}

export function getSEO(locale: Locale, pageId: PageId): SEOConfig {
  return {
    title: getLocalizedTitle(locale, pageId),
    description: getLocalizedDescription(locale, pageId),
    canonical: `${SITE_URL}${getPath(locale, pageId)}`,
    alternates: getAlternateLinks(pageId),
    h1: PAGE_META[pageId].h1
  };
}
