import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-subtitle">
            PROFESSIONAL HOME ORGANIZATION
          </span>

          <h1 className="hero-title">
            Transformamos espacios,
            <br />
            mejoramos vidas.
          </h1>

          <p className="hero-description">
            Creamos espacios funcionales, armoniosos y elegantes que
            transforman la forma en que disfrutas tu hogar.
          </p>

          <a href="#contact" className="hero-button">
            Agenda una asesoría
          </a>

        </div>

        <div className="hero-image">

          <div className="hero-placeholder">
            Próximamente imagen del Hero
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;