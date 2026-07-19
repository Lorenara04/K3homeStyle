import "./Promo.css";
import { useTranslation } from "react-i18next";
import { CheckCircle2, Tag, CalendarHeart, Sparkles } from "lucide-react";

export default function Promo() {
  const { t } = useTranslation();

  return (
    <section className="promo-section section" id="promotions">
      <div className="promo-container container">
        
        <div className="promo-image-wrapper">
          <img 
            src="/promo-summer.jpeg" 
            alt="Summer Home Reset Promo" 
            className="promo-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/promo-summer.jpg";
              e.target.onerror = (e2) => {
                e2.target.onerror = null;
                e2.target.src = "/promo-summer.png";
              };
            }}
          />
        </div>

        <div className="promo-content">
          <span className="section-tag promo-tag">{t("promo.tag")}</span>
          
          <h2 className="promo-title">
            {t("promo.title1")} <br />
            <span>{t("promo.title2")}</span>
          </h2>
          
          <p className="promo-desc">
            {t("promo.desc")}
          </p>

          <ul className="promo-benefits">
            <li>
              <div className="benefit-icon"><Tag size={20} /></div>
              <span>{t("promo.b1")}</span>
            </li>
            <li>
              <div className="benefit-icon"><CheckCircle2 size={20} /></div>
              <span>{t("promo.b2")}</span>
            </li>
            <li>
              <div className="benefit-icon"><CalendarHeart size={20} /></div>
              <span>{t("promo.b3")}</span>
            </li>
            <li>
              <div className="benefit-icon"><Sparkles size={20} /></div>
              <span>{t("promo.b4")}</span>
            </li>
          </ul>

          <div className="promo-focus">
            <p><strong>{t("promo.focus")}</strong></p>
            <p className="promo-areas">{t("promo.areas")}</p>
          </div>

          <a href="#contact" className="promo-btn">
            {t("promo.button")}
          </a>

        </div>

      </div>
    </section>
  );
}
