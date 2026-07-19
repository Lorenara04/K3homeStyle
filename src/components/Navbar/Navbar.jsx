import "./Navbar.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/logo/logo-primary.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">

        <a href="/" className="logo">
          <img src={logo} alt="K3 Home Style" />
        </a>

        <nav className="nav-menu">
          <a href="#home">{t("menu.home")}</a>
          <a href="#about">{t("menu.about")}</a>
          <a href="#services">{t("menu.services")}</a>
          <a href="#baskets">{t("menu.baskets")}</a>
          <a href="#transformations">{t("menu.beforeAfter")}</a>
          <a href="#gallery">{t("menu.gallery")}</a>
          <a href="#contact">{t("menu.contact")}</a>
        </nav>

        <div className="navbar-right">

          <select
            className="language-select"
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue={i18n.language.substring(0,2)}
          >
            <option value="en">🇺🇸 EN</option>
            <option value="es">🇪🇸 ES</option>
            <option value="fr">🇫🇷 FR</option>
          </select>

          <a 
            href="https://wa.me/14096513454?text=Hello!%20I%20would%20like%20to%20get%20a%20quote" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-navbar"
          >
            {t("menu.button")}
          </a>

        </div>

        <button className="menu-mobile" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        <nav className="mobile-links">
          <a href="#home" onClick={() => setMenuOpen(false)}>{t("menu.home")}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t("menu.about")}</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>{t("menu.services")}</a>
          <a href="#baskets" onClick={() => setMenuOpen(false)}>{t("menu.baskets")}</a>
          <a href="#transformations" onClick={() => setMenuOpen(false)}>{t("menu.beforeAfter")}</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>{t("menu.gallery")}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t("menu.contact")}</a>
        </nav>
        
        <div className="mobile-actions">
          <select
            className="language-select mobile-lang"
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
              setMenuOpen(false);
            }}
            defaultValue={i18n.language.substring(0,2)}
          >
            <option value="en">🇺🇸 EN</option>
            <option value="es">🇪🇸 ES</option>
            <option value="fr">🇫🇷 FR</option>
          </select>

          <a 
            href="https://wa.me/14096513454?text=Hello!%20I%20would%20like%20to%20get%20a%20quote" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-navbar" 
            onClick={() => setMenuOpen(false)}
          >
            {t("menu.button")}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;