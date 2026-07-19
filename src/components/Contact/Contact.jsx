import "./Contact.css";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Recolecta la información que escribió el cliente
    const formData = new FormData(e.target);
    
    // Aquí está tu clave secreta de Web3Forms (¡Ya la puse por ti!)
    formData.append("access_key", "a778ca23-bcc4-4561-ab16-778f301a35f5");

    try {
      // Envía los datos de forma segura
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert(t("contact.success"));
        e.target.reset(); // Limpia el formulario después de enviar
      } else {
        alert(t("contact.error"));
      }
    } catch (error) {
      console.error(error);
      alert(t("contact.conn_error"));
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        {/* HEADER */}
        <div className="section-header">
          <span className="section-tag">{t("contact.tag")}</span>
          <h2>
            {t("contact.title1")}
            <span> {t("contact.title2")}</span>
          </h2>
          <p>{t("contact.desc")}</p>
        </div>

        {/* CONTENT */}
        <div className="contact-wrapper">

          {/* LEFT */}
          <div className="contact-info">

            <div className="info-card">
              <Mail size={26} />
              <div>
                <h4>{t("contact.email")}</h4>
                <p>info@k3homestyle.com</p>
              </div>
            </div>

            <div className="info-card">
              <Phone size={26} />
              <div>
                <h4>{t("contact.phone")}</h4>
                <p>(409) 651-3454</p>
              </div>
            </div>

            <div className="info-card">
              <MapPin size={26} />
              <div>
                <h4>{t("contact.hq")}</h4>
                <p>{t("contact.hq_city")}</p>
              </div>
            </div>

            <div className="info-card">
              <Clock size={26} />
              <div>
                <h4>{t("contact.hours")}</h4>
                <p>{t("contact.hours_1")}</p>
                <p>{t("contact.hours_2")}</p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="follow-us">
              <h4>{t("contact.follow")}</h4>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/k3homestyle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <FaInstagram size={30} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@k3homestyle?_r=1&_t=ZS-97gVjaGaFmC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <FaTiktok size={30} />
                  <span>TikTok</span>
                </a>
                <a
                  href="https://www.facebook.com/k3homestyle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <FaFacebookF size={30} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <label>{t("contact.form.name")}</label>
              <input type="text" name="name" placeholder={t("contact.form.name_ph")} required />
            </div>

            <div className="input-group">
              <label>{t("contact.form.email")}</label>
              <input type="email" name="email" placeholder={t("contact.form.email_ph")} required />
            </div>

            <div className="input-group">
              <label>{t("contact.form.phone")}</label>
              <input type="tel" name="phone" placeholder={t("contact.form.phone_ph")} />
            </div>

            <div className="input-group">
              <label>{t("contact.form.msg")}</label>
              <textarea
                name="message"
                rows={6}
                placeholder={t("contact.form.msg_ph")}
                required
              />
            </div>

            <button type="submit" className="contact-btn">
              <Send size={18} />
              <span>{t("contact.form.send")}</span>
            </button>

          </form>

        </div>

        {/* MAP */}
        <div className="contact-map">
          <h3>{t("contact.map_title")}</h3>
          <p>
            {t("contact.map_desc")}
            <br />
            <span className="service-cities">
              Beaumont • Nederland • Houston • Orange • China • Port Acres • Port Neches • Austin
            </span>
          </p>

          <iframe
            title="K3 Home Style Service Area"
            src="https://www.google.com/maps?q=Houston,Texas&z=10&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>
    </section>
  );
}