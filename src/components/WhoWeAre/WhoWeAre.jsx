import "./WhoWeAre.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// ===============================
// IMÁGENES
// ===============================

import photo1 from "../../assets/about/foto_1.jpeg";
import photo3 from "../../assets/about/foto_3.jpeg";

// ===============================
// GALERÍA
// ===============================

const photos = [
  photo1,
  photo3,
];

function WhoWeAre() {

  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {

    if (!photos.length) return;

    const timer = setInterval(() => {

      setCurrentImage((current) => (current + 1) % photos.length);

    }, 5000);

    return () => clearInterval(timer);

  }, []);

  return (

    <section
      className="who-we-are"
      id="about"
    >

      <div className="who-container">

        {/* ==========================
            IMAGEN
        ========================== */}

        <div className="who-image">

          {photos.length ? (

            <img
              src={photos[currentImage]}
              alt="Founder of K3 Home Style"
              className="who-photo"
              loading="lazy"
            />

          ) : (

            <div className="image-placeholder">

              {t("whoWeAre.placeholder")}

            </div>

          )}

        </div>

        {/* ==========================
            CONTENIDO
        ========================== */}

        <div className="who-content">

          <span className="section-subtitle">

            {t("whoWeAre.subtitle")}

          </span>

          <h2>

            {t("whoWeAre.title")}

          </h2>

          <p>

            {t("whoWeAre.p1")}

          </p>

          <p>

            {t("whoWeAre.p2")}

          </p>

          <a
            href="#contact"
            className="btn-primary"
          >

            {t("whoWeAre.button")}

          </a>

        </div>

      </div>

    </section>

  );

}

export default WhoWeAre;