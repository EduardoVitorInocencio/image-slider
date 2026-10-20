import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SliderControls() {
    return (
      <div className="mt-8 flex items-center gap-3" role="group" aria-label="Controles do slider">
        <button 
          className ="grid size-13 place-items-center 
          rounded-2xl border-border-violet-100 bg-white
          text-mauve shadow-sm" 
          type="button" aria-label="Imagem anterior"
        >
          ←
        </button>
        <button 
          className ="grid size-13 place-items-center 
          rounded-2xl bg-mauve text-white shadow-sm"
          type="button" aria-label="Próxima imagem">
          →
        </button>
        <span 
          className="ml-auto text-sm font-bold text-mauve"
          aria-live="polite">03 / 05</span>
      </div>
    );
  }