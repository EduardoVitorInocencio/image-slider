import SliderControls from './SliderControls.jsx';

export default function ImageSlider() {
  return (
    <section aria-label="Galeria da vida selvagem" className="w-full min-w-0">
      <p className="mb-5 text-xs font-bold tracking-[.18em] text-violet-600">
        EM DESTAQUE / PANDA-GIGANTE
      </p>
      <div className="relative aspect-[1.17] rounded-[28px] bg-violet-100 p-6">
        <div className="absolute inset-10 rotate-[-7deg] rounded-3xl bg-violet-300/70" />
        <div className="absolute inset-9 rotate-[5deg] rounded-3xl bg-violet-200" />
        <img
          src="/images/image-3.jpg"
          alt="Pandas descansando em seu habitat"
          className="relative h-full w-full rounded-3xl object-cover shadow-2xl"
        />
      </div>
      <div className="mt-7">
        <h2 className="text-3xl font-bold">Panda-gigante</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-500">
          Uma das espécies mais carismáticas das florestas da China.
        </p>
      </div>
      <SliderControls />
    </section>
  );
}