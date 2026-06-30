import "./Contact.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">CONTACT US</span>

          <h2>
            Let's Create a More Beautiful
            <span> Home Together</span>
          </h2>

          <p>
            Whether you're ready to transform your home or simply have a
            question about our services, we'd love to hear from you.
          </p>
        </div>

        <div className="contact-wrapper">

          <div className="contact-info">

            <div className="info-card">
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <p>hello@k3homestyle.com</p>
              </div>
            </div>

            <div className="info-card">
              <Phone size={24} />
              <div>
                <h4>Phone</h4>
                <p>+1 (000) 000-0000</p>
              </div>
            </div>

            <div className="info-card">
              <MapPin size={24} />
              <div>
                <h4>Location</h4>
                <p>Serving your local area</p>
              </div>
            </div>

          </div>

          <form className="contact-form">

            <div className="input-group">
              <input
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                placeholder="Phone Number"
              />
            </div>

            <div className="input-group">
              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            <button className="contact-btn">
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}