import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme.js';

export default function ThemeSwitcher() {
  const { t } = useTranslation();
  const { theme, toggle, isDark } = useTheme();

  const label = isDark ? t('header.themeToLight') : t('header.themeToDark');

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex items-center gap-2 rounded-full border border-violet-100 bg-white px-3 py-2 text-xs font-bold tracking-widest text-mauve shadow-sm transition-colors hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve dark:border-violet-900 dark:bg-violet-950/60 dark:text-violet-200 dark:hover:bg-violet-900"
    >
      {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
      <span className="hidden sm:inline">{t('header.theme')}</span>
    </button>
  );
}