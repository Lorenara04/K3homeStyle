import "./Footer.css";

import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
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

              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
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

              <li>Home Organization</li>

              <li>Closet Organization</li>

              <li>Kitchen Organization</li>

              <li>Move-In & Move-Out</li>

              <li>Luxury Space Styling</li>

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