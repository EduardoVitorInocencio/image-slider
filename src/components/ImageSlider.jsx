import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { slides } from '../data/slides.js';
import SliderControls from './SliderControls.jsx';

export default function ImageSlider() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(2);
  const active = slides[index];
  const total = slides.length;

  const goTo = (newIndex) => setIndex((newIndex + total) % total);
  const handlePrev = () => goTo(index - 1);
  const handleNext = () => goTo(index + 1);

  return (
    <section aria-label={t('slider.sectionLabel')} className="w-full min-w-0">
      <p className="mb-5 text-xs font-bold tracking-[.18em] text-violet-600">
        {t('slider.featuredPrefix')}
        {t(`slides.${active.id}.badge`)}
      </p>
      <div className="relative aspect-[1.17] rounded-[28px] bg-violet-100 p-6">
        {slides.map((item, i) => (
          <img
            key={item.id}
            src={item.image}
            alt={t(`slides.${item.id}.alt`)}
            aria-hidden={i !== index}
            className={`absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] rounded-3xl object-cover shadow-2xl transition-all duration-500 ${i === index ? 'z-10 opacity-100' : 'pointer-events-none opacity-0'}`}
          />
        ))}
      </div>
      <div className="mt-7 min-h-28" aria-live="polite">
        <h2 className="text-3xl font-bold">{t(`slides.${active.id}.animal`)}</h2>
        <p className="mt-2 font-medium text-mauve">{t(`slides.${active.id}.summary`)}</p>
        <p className="mt-3 text-base leading-relaxed text-slate-500">{t(`slides.${active.id}.description`)}</p>
      </div>
      <SliderControls current={index + 1} total={total} onPrev={handlePrev} onNext={handleNext} />
    </section>
  );
}
