import en from '../i18n/en.json';
import zh from '../i18n/zh.json';
import ja from '../i18n/ja.json';
import ko from '../i18n/ko.json';

export const SITE_URL = 'https://aicaricature.tech';
export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';

export const LOCALES = ['en', 'zh', 'ja', 'ko'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export type PageId =
  | 'home'
  | 'caricature-prompt'
  | 'caricature-generator'
  | 'caricature-trend'
  | 'caricature-maker'
  | 'caricature-from-photo'
  | 'privacy'
  | 'terms'
  | 'contact'
  | 'about';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PageMeta {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: string[];
  faq: FAQItem[];
}

export const PAGE_IDS: PageId[] = [
  'home',
  'caricature-prompt',
  'caricature-generator',
  'caricature-trend',
  'caricature-maker',
  'caricature-from-photo',
  'privacy',
  'terms',
  'contact',
  'about'
];

export const PAGE_META: Record<PageId, PageMeta> = {
  home: {
    slug: '',
    title:
      'AI Caricature - Free AI Caricature Generator Online | Create Caricature from Photo',
    description:
      'Create stunning AI caricature from your photo in seconds. Free online AI caricature generator with viral caricature prompts. Turn selfies into fun cartoon caricatures instantly.',
    h1: 'AI Caricature Generator - Create Your Caricature Online Free',
    intro:
      'Transform your photo into a fun caricature in seconds with our free AI caricature generator.',
    sections: [
      'Upload a photo, add your prompt, and generate an instant cartoon portrait.',
      'Works on desktop and mobile with no signup required.'
    ],
    faq: [
      {
        question: 'What is the AI caricature trend?',
        answer:
          'It is a viral social trend where people generate exaggerated cartoon portraits from real photos using AI.'
      },
      {
        question: 'Is this AI caricature generator free?',
        answer:
          'Yes. The website offers a free UI demo flow with no account needed.'
      },
      {
        question: 'Can I use it on mobile?',
        answer: 'Yes. The interface is mobile-first and responsive.'
      },
      {
        question: 'How fast is generation?',
        answer: 'The UI simulates instant results in a few seconds for demonstration.'
      }
    ]
  },
  'caricature-prompt': {
    slug: 'caricature-prompt',
    title: 'Caricature Prompt - Best AI Caricature Prompts for ChatGPT & Midjourney',
    description:
      'Discover the best caricature prompts for AI image generation. Copy viral caricature prompt templates for ChatGPT, Midjourney, and other AI tools. Updated daily.',
    h1: 'Best Caricature Prompts for AI Image Generation',
    intro: 'Explore proven caricature prompt templates optimized for viral-style results.',
    sections: [
      'Use short style directives, exaggerated facial cues, and role-based descriptors.',
      'Copy and adapt prompts for ChatGPT, Midjourney, and other image models.'
    ],
    faq: [
      {
        question: 'What makes a good caricature prompt?',
        answer: 'Clear style guidance, facial exaggeration details, and lighting/background direction.'
      },
      {
        question: 'Can I use the prompts commercially?',
        answer: 'Usually yes, but verify the usage policy of the AI model you use.'
      }
    ]
  },
  'caricature-generator': {
    slug: 'caricature-generator',
    title: 'Caricature Generator - Free Online AI Caricature Generator Tool',
    description:
      'Use our free caricature generator to create funny cartoon portraits. Best AI caricature generator online - no signup, instant results, unlimited generations.',
    h1: 'Free Caricature Generator - Create Cartoon Portraits Online',
    intro: 'Use a streamlined generator UI to turn any portrait into a cartoon caricature.',
    sections: [
      'Drag and drop your image, pick a style, and launch generation in one click.',
      'Designed for creators, marketers, and social profile upgrades.'
    ],
    faq: [
      {
        question: 'Do I need design skills?',
        answer: 'No. The workflow is built for non-designers.'
      },
      {
        question: 'What image formats are supported?',
        answer: 'JPG, PNG, and WebP in the UI mockup.'
      }
    ]
  },
  'caricature-trend': {
    slug: 'caricature-trend',
    title: 'Caricature Trend 2026 - The Viral AI Caricature Challenge Explained',
    description:
      'Learn about the viral caricature trend taking over social media. How to join the AI caricature trend on TikTok, Instagram. Step-by-step guide with examples.',
    h1: 'The Viral Caricature Trend - Everything You Need to Know',
    intro: 'Understand why AI caricatures exploded across social media and how creators use them.',
    sections: [
      'Trend momentum comes from short-form video reveal formats and prompt remix culture.',
      'Strong before/after visuals increase shares and repeat generation behavior.'
    ],
    faq: [
      {
        question: 'Where is the trend most active?',
        answer: 'TikTok, Instagram Reels, and creator communities.'
      },
      {
        question: 'How do I join quickly?',
        answer: 'Use a clear selfie, a job/hobby prompt, and publish a side-by-side reveal.'
      }
    ]
  },
  'caricature-maker': {
    slug: 'caricature-maker',
    title: 'Caricature Maker - AI Caricature Maker Online Free | No Signup',
    description:
      'Free caricature maker powered by AI. Create professional caricatures from photos in seconds. Best online caricature maker - easy to use, instant download.',
    h1: 'AI Caricature Maker - Create Caricatures Online Free',
    intro: 'Create profile-ready caricatures with a maker workflow designed for speed.',
    sections: [
      'Switch styles, refine prompts, and preview output in a single editor.',
      'Great for team avatars, social channels, and campaign visuals.'
    ],
    faq: [
      {
        question: 'Is there a watermark?',
        answer: 'The mockup flow presents clean preview output without watermarks.'
      },
      {
        question: 'Can teams use this tool?',
        answer: 'Yes. The workflow is ideal for batch-style team profile concepts.'
      }
    ]
  },
  'caricature-from-photo': {
    slug: 'caricature-from-photo',
    title: 'Caricature from Photo - Turn Photo into Caricature with AI Free',
    description:
      'Transform any photo into a caricature with AI. Free caricature from photo generator - upload selfie, get instant cartoon portrait. No skills required.',
    h1: 'Create Caricature from Photo - AI Photo to Caricature Converter',
    intro: 'Convert selfies into stylized caricatures with a simple upload-first experience.',
    sections: [
      'Best outputs start with clear face framing and natural lighting.',
      'Use style prompts to match classic cartoon, editorial, or comic looks.'
    ],
    faq: [
      {
        question: 'What photos work best?',
        answer: 'Front-facing photos with clear lighting and minimal blur.'
      },
      {
        question: 'Can I upload group photos?',
        answer: 'Single-person photos provide better consistency in this mockup.'
      }
    ]
  },
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy - AI Caricature',
    description: 'Read the privacy policy for AI Caricature and how we handle your data.',
    h1: 'Privacy Policy',
    intro: 'This page explains what information is collected and how it is used.',
    sections: [
      'Uploaded files in this demo are processed client-side for preview only and are not persisted by backend services.',
      'Analytics may collect anonymous usage signals to improve product experience.'
    ],
    faq: [
      {
        question: 'Do you store uploaded photos?',
        answer: 'No permanent server-side storage is implemented in this UI-only build.'
      }
    ]
  },
  terms: {
    slug: 'terms',
    title: 'Terms of Service - AI Caricature',
    description: 'Review the terms of service for using AI Caricature.',
    h1: 'Terms of Service',
    intro: 'These terms govern access and acceptable use of the website.',
    sections: [
      'This website is provided as-is for informational and creative exploration purposes.',
      'Users are responsible for ensuring legal rights to upload and transform source images.'
    ],
    faq: [
      {
        question: 'Can terms change?',
        answer: 'Yes. Terms may be updated as product functionality evolves.'
      }
    ]
  },
  contact: {
    slug: 'contact',
    title: 'Contact - AI Caricature',
    description: 'Contact the AI Caricature team for support or partnership inquiries.',
    h1: 'Contact Us',
    intro: 'Send your questions, feedback, and collaboration ideas to our team.',
    sections: [
      'Email: hello@aicaricature.tech',
      'Response time target: within 2 business days.'
    ],
    faq: [
      {
        question: 'Do you support API integrations?',
        answer: 'API support is planned for future iterations.'
      }
    ]
  },
  about: {
    slug: 'about',
    title: 'About - AI Caricature',
    description: 'Learn about AI Caricature and the mission behind this project.',
    h1: 'About AI Caricature',
    intro: 'AI Caricature helps people create expressive cartoon portraits in seconds.',
    sections: [
      'Our mission is to make high-quality caricature creation simple, fast, and accessible.',
      'This launch version focuses on SEO-ready pages and a polished UI mockup experience.'
    ],
    faq: [
      {
        question: 'Is this a production AI backend?',
        answer: 'No. This release intentionally ships UI-only generation simulation.'
      }
    ]
  }
};

const DICTIONARIES = { en, zh, ja, ko };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? en;
}

export function getSlugByPageId(pageId: PageId): string {
  return PAGE_META[pageId].slug;
}

export function getPageIdFromSlug(slug: string): PageId {
  const normalized = slug.replace(/^\/+|\/+$/g, '');
  const hit = PAGE_IDS.find((id) => PAGE_META[id].slug === normalized);
  return hit ?? 'home';
}

export function getPath(locale: Locale, pageId: PageId): string {
  const slug = getSlugByPageId(pageId);
  if (locale === DEFAULT_LOCALE) {
    return slug ? `/${slug}/` : '/';
  }
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

export function getLocalizedTitle(locale: Locale, pageId: PageId): string {
  const base = PAGE_META[pageId].title;
  if (locale === 'en') return base;
  return `${base} (${locale.toUpperCase()})`;
}

export function getLocalizedDescription(locale: Locale, pageId: PageId): string {
  const base = PAGE_META[pageId].description;
  if (locale === 'en') return base;
  return `${base} Available in ${locale.toUpperCase()}.`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const cleaned = pathname.replace(/^\/+|\/+$/g, '');
  const parts = cleaned ? cleaned.split('/') : [];

  let currentLocale: Locale = DEFAULT_LOCALE;
  let slugParts = parts;

  if (parts.length > 0 && LOCALES.includes(parts[0] as Locale)) {
    currentLocale = parts[0] as Locale;
    slugParts = parts.slice(1);
  }

  const slug = slugParts.join('/');
  const pageId = getPageIdFromSlug(slug);

  if (!LOCALES.includes(targetLocale)) {
    return getPath(currentLocale, pageId);
  }

  return getPath(targetLocale, pageId);
}

export function getAlternateLinks(pageId: PageId): Array<{ locale: Locale; href: string }> {
  return LOCALES.map((locale) => ({ locale, href: `${SITE_URL}${getPath(locale, pageId)}` }));
}
