import "./Contact.css";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Contact() {

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
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
        e.target.reset(); // Limpia el formulario después de enviar
      } else {
        alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión al enviar el mensaje.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        {/* HEADER */}
        <div className="section-header">

          <span className="section-tag">
            CONTACT US
          </span>

          <h2>
            Let's Create a More Beautiful
            <span> Home Together</span>
          </h2>

          <p>
            Ready to transform your home into a functional,
            organized and beautiful space? We'd love to hear
            about your project and help bring your vision to life.
          </p>

        </div>

        {/* CONTENT */}
        <div className="contact-wrapper">

          {/* LEFT */}
          <div className="contact-info">

            <div className="info-card">
              <Mail size={26} />
              <div>
                <h4>Email</h4>
                <p>info@k3homestyle.com</p>
              </div>
            </div>

            <div className="info-card">
              <Phone size={26} />
              <div>
                <h4>Phone</h4>
                <p>(409) 651-3454</p>
              </div>
            </div>

            <div className="info-card">
              <MapPin size={26} />
              <div>
                <h4>Headquarters</h4>
                <p>Beaumont, Texas</p>
              </div>
            </div>

            <div className="info-card">
              <Clock size={26} />
              <div>
                <h4>Business Hours</h4>
                <p>By Appointment</p>
                <p>Flexible Scheduling</p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="follow-us">

              <h4>Follow Us</h4>

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
              <label>Full Name</label>
              <input type="text" name="name" placeholder="John Doe" required />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="you@email.com" required />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="+1 000 000 0000" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button type="submit" className="contact-btn">
              <Send size={18} />
              <span>Send Message</span>
            </button>

          </form>

        </div>

        {/* MAP */}
        <div className="contact-map">

          <h3>
            Proudly Serving Texas
          </h3>

          <p>
            K3 Home Style provides professional home
            organization, decorating and styling services across our primary service areas, including:
            <br />
            {/* Aquí usamos la nueva clase que creamos en el CSS */}
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