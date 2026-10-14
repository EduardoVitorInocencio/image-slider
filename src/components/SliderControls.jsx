export default function SliderControls() {
    return (
      <div role="group" aria-label="Controles do slider">
        <button type="button" aria-label="Imagem anterior">
          ←
        </button>
        <button type="button" aria-label="Próxima imagem">
          →
        </button>
        <span aria-live="polite">03 / 05</span>
      </div>
    );
  }