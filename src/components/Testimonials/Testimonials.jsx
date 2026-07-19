import "./Testimonials.css";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("testimonials.t0.name"),
      role: t("testimonials.t0.role"),
      text: t("testimonials.t0.text"),
    },
    {
      name: t("testimonials.t1.name"),
      role: t("testimonials.t1.role"),
      text: t("testimonials.t1.text"),
    },
    {
      name: t("testimonials.t2.name"),
      role: t("testimonials.t2.role"),
      text: t("testimonials.t2.text"),
    },
  ];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">

        <div className="testimonials-header">

          <span className="section-tag">
            {t("testimonials.tag")}
          </span>

          <h2>
            {t("testimonials.title1")}
            <span> {t("testimonials.title2")}</span>
          </h2>

          <p>
            {t("testimonials.desc")}
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <div className="stars">

                {[1,2,3,4,5].map((star)=>

                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                  />

                )}

              </div>

              <p className="testimonial-text">
                "{item.text}"
              </p>

              <div className="client">

                <div className="client-avatar">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4>{item.name}</h4>

                  <span>{item.role}</span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}