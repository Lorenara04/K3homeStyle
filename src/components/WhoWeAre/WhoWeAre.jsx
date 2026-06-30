import "./WhoWeAre.css";

function WhoWeAre() {
  return (
    <section className="who-we-are" id="about">

      <div className="who-container">

        <div className="who-image">

          <div className="image-placeholder">
            Imagen K3
          </div>

        </div>

        <div className="who-content">

          <span className="section-subtitle">
            WHO WE ARE
          </span>

          <h2>
            Diseñamos hogares
            para vivir mejor.
          </h2>

          <p>
            En K3 Home Style creemos que un hogar organizado
            no solo luce mejor, también mejora la tranquilidad,
            la productividad y la calidad de vida de quienes lo habitan.
          </p>

          <p>
            Cada proyecto es personalizado, funcional y pensado
            para adaptarse al estilo de vida de cada cliente.
          </p>

          <a href="#contact" className="btn-primary">
            Conoce más
          </a>

        </div>

      </div>

    </section>
  );
}

export default WhoWeAre;