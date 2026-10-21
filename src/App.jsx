import { useTranslation } from 'react-i18next';
import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import ThemeSwitcher from './components/ThemeSwitcher.jsx';

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="relative isolate min-h-screen overflow-hidden text-ink dark:text-violet-50">
      <Background />
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <header className="flex items-center justify-between border-b border-violet-100 py-8 dark:border-violet-900">
          <strong className="text-mauve tracking-[.24em] dark:text-violet-300">WILD / STORIES</strong>
          <div className="flex items-center gap-6">
            <nav aria-label="Navegação principal" className="hidden text-xs font-semibold tracking-widest text-slate-500 sm:block dark:text-violet-300">
              {t('header.nav')}
            </nav>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </header>
        <main className="grid gap-16 py-20 lg:grid-cols-2 lg:items-center lg:gap-20">
          <section aria-label={t('slider.presentationLabel')} className="space-y-7">
            <p className="text-xs font-bold tracking-[.2em] text-violet-600 dark:text-violet-400">
              {t('hero.kicker')}
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-slate-500 dark:text-violet-200/70">
              {t('hero.subtitle')}
            </p>
          </section>
          <ImageSlider />
        </main>
        <footer className="py-10 text-xs font-semibold tracking-widest text-slate-400 dark:text-violet-300/60">
          REACT • TAILWIND CSS • JAVASCRIPT
        </footer>
      </div>
    </div>
  );
}
