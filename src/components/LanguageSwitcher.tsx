import { useMemo, useState } from 'react';
import { LOCALES, type Locale, switchLocalePath } from '../lib/site';

type Props = {
  currentLocale: Locale;
  pathname: string;
};

export default function LanguageSwitcher({ currentLocale, pathname }: Props) {
  const [selected, setSelected] = useState<Locale>(currentLocale);

  const options = useMemo(
    () => [
      { value: 'en' as Locale, label: 'EN' },
      { value: 'zh' as Locale, label: '中文' },
      { value: 'ja' as Locale, label: '日本語' },
      { value: 'ko' as Locale, label: '한국어' }
    ],
    []
  );

  return (
    <label className="inline-flex items-center gap-2 text-sm text-muted" htmlFor="language-switcher">
      <span className="hidden sm:inline">Language</span>
      <select
        id="language-switcher"
        className="h-10 rounded-action border border-border bg-white px-3 text-sm font-medium text-ink"
        value={selected}
        onChange={(event) => {
          const nextLocale = event.target.value as Locale;
          if (!LOCALES.includes(nextLocale)) return;
          setSelected(nextLocale);
          if (typeof window !== 'undefined') {
            window.gtag?.('event', 'language_switch', { from: currentLocale, to: nextLocale });
            window.location.href = switchLocalePath(pathname, nextLocale);
          }
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
