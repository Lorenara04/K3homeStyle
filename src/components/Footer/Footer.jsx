import "./Footer.css";

import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* Logo */}
          <div className="footer-column">

            <h2 className="footer-logo">
              K3 <span>Home Style</span>
            </h2>

            <p className="footer-description">
              We transform homes into calm, functional and beautiful spaces
              through personalized organization and interior styling.
            </p>

            <div className="footer-social">

              <a href="https://www.facebook.com/k3homestyle/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="https://www.instagram.com/k3homestyle/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="https://www.tiktok.com/@k3homestyle?_r=1&_t=ZS-97gVjaGaFmC" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok />
              </a>

              <a href="https://wa.me/14096513454?text=Hello!%20I%20would%20like%20to%20get%20a%20quote" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-column">

            <h3>Quick Links</h3>

            <ul>

              <li><a href="#home">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#gallery">Gallery</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div className="footer-column">

            <h3>Services</h3>

            <ul>

              <li><a href="#services">Home Organization</a></li>

              <li><a href="#services">Closet Organization</a></li>

              <li><a href="#services">Kitchen Organization</a></li>

              <li><a href="#services">Move-In & Move-Out</a></li>

              <li><a href="#services">Luxury Space Styling</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div className="footer-column">

            <h3>Contact</h3>

            <div className="footer-contact">

              <div>
                <Mail size={18} />
                <span>info@k3homestyle.com</span>
              </div>

              <div>
                <Phone size={18} />
                <span>+1 (409) 651-3454</span>
              </div>

              <div>
                <MapPin size={18} />
                <span>Serving your local area</span>
              </div>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} K3 Home Style. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}