import "./Navbar.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/logo/logo-primary.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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

          <a href="#contact" className="btn-navbar">
            {t("menu.button")}
          </a>

        </div>

        <button className="menu-mobile">
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;