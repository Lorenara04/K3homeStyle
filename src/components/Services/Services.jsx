import "./Services.css";
import {
  House,
  Sofa,
  ChefHat,
  Shirt,
  Car,
  ToyBrick,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Sofa size={36} />,
      title: t("services.s0.title"),
      description: t("services.s0.desc"),
    },
    {
      icon: <House size={36} />,
      title: t("services.s1.title"),
      description: t("services.s1.desc"),
    },
    {
      icon: <Shirt size={36} />,
      title: t("services.s2.title"),
      description: t("services.s2.desc"),
    },
    {
      icon: <ChefHat size={36} />,
      title: t("services.s3.title"),
      description: t("services.s3.desc"),
    },
    {
      icon: <ToyBrick size={36} />,
      title: t("services.s4.title"),
      description: t("services.s4.desc"),
    },
    {
      icon: <Car size={36} />,
      title: t("services.s5.title"),
      description: t("services.s5.desc"),
    },
  ];

  return (
    <section className="services section" id="services">
      <div className="container">

        <div className="services-header">

          <span className="section-tag">
            {t("services.tag")}
          </span>

          <h2>
            {t("services.title1")}
            <span> {t("services.title2")}</span>
          </h2>

          <p>
            {t("services.desc")}
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="service-btn">

                {t("services.button")}

                <ArrowRight size={18} />

              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}