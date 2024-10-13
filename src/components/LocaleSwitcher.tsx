'use client';
import { useLocale } from 'next-intl';
import type { ChangeEventHandler } from 'react';
import { localesConfig } from '@/config/locales';
import { usePathname, useRouter } from '@/lib/i18nNavigation';
export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(pathname, { locale: event.target.value });
    router.refresh();
  };
  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="border border-gray-300 font-medium focus:outline-none focus-visible:ring"
      aria-label="lang-switcher">
      {localesConfig.locales.map((elt) => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
