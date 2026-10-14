import SliderControls from './SliderControls.jsx';

export default function ImageSlider() {
  return (
    <section aria-label="Galeria da vida selvagem">
      <p>EM DESTAQUE / PANDA-GIGANTE</p>

      <div>
        <img
          src="/images/image-3.jpg"
          alt="Pandas descansando em seu habitat"
          width="460"
        />
      </div>

      <h2>Panda-gigante</h2>
      <p>Uma das espécies mais carismáticas da China.</p>

      <SliderControls />
    </section>
  );
}