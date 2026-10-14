import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';

export default function App() {
  return (
    <div className="app">
      <Background />

      <header>
        <strong>WILD / STORIES</strong>
        <nav aria-label="Navegação principal">
          <span>EXPLORAR</span> · <span>SOBRE</span>
        </nav>
      </header>

      <main>
        <section className="intro" aria-label="Apresentação">
          <small>EXPLORAÇÃO • VIDA SELVAGEM</small>
          <h1>A natureza em cada detalhe.</h1>
          <p>
            Descubra espécies extraordinárias em uma
            experiência visual interativa.
          </p>
        </section>

        <ImageSlider />
      </main>

      <footer>REACT • TAILWIND CSS • JAVASCRIPT</footer>
    </div>
  );
}