import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n.js';

const languageCodes = languages.map((language) => language.code);

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const current = languages.find((language) => language.code === i18n.resolvedLanguage) ?? languages[0];
  const next = languages[(languageCodes.indexOf(current.code) + 1) % languages.length];

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(next.code)}
      aria-label={t('header.translateAria', { next: next.name, current: current.name })}
      title={t('header.translateAria', { next: next.name, current: current.name })}
      className="flex items-center gap-2 rounded-full border border-violet-100 bg-white px-3 py-2 text-xs font-bold tracking-widest text-mauve shadow-sm transition-colors hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve dark:border-violet-900 dark:bg-violet-950/60 dark:text-violet-200 dark:hover:bg-violet-900"
    >
      <Languages className="size-4" aria-hidden="true" />
      <span className="hidden sm:inline">{t('header.translate')}</span>
      <span aria-hidden="true" className="rounded-full bg-mauve px-2 py-0.5 text-[10px] text-white">
        {current.label}
      </span>
    </button>
  );
}
