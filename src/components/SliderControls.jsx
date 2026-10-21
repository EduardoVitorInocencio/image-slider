export default function SliderControls({ current, total, onPrev, onNext }) {
  return (
    <div className="mt-8 flex items-center gap-3" role="group" aria-label="Controles do slider">
      <button
        type="button"
        aria-label="Imagem anterior"
        onClick={onPrev}
        className="grid size-13 place-items-center rounded-2xl border border-violet-100 bg-white text-mauve shadow-sm transition-colors hover:bg-violet-50"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Próxima imagem"
        onClick={onNext}
        className="grid size-13 place-items-center rounded-2xl bg-mauve text-white shadow-sm transition-colors hover:bg-violet-700"
      >
        →
      </button>
      <span className="ml-auto text-sm font-bold text-mauve" aria-live="polite">
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
}
