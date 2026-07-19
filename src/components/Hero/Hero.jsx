import "./Hero.css";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "/images/hero/hero1.jpeg",
    "/images/hero/hero2.jpeg",
    "/images/hero/hero3.jpeg",
    "/images/hero/hero4.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      <div className="hero-overlay"></div>
    </section>
  );
}