import { useState } from "react";
import { X, PercentCircle } from "lucide-react";
import "./FloatingPromo.css";

export default function FloatingPromo() {
  const [promoOpen, setPromoOpen] = useState(false);

  return (
    <>
      <button className="floating-promo-btn" onClick={() => setPromoOpen(true)}>
        <span className="promo-badge">15% OFF</span>
        <span className="promo-text">Summer Promo</span>
      </button>

      {promoOpen && (
        <div className="promo-modal-overlay" onClick={() => setPromoOpen(false)}>
          <button className="promo-modal-close" onClick={() => setPromoOpen(false)}>
            <X size={40} />
          </button>
          <div className="promo-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src="/promo-summer.jpeg" 
              alt="Summer Home Reset Promo" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/promo-summer.jpg";
                e.target.onerror = (e2) => {
                  e2.target.onerror = null;
                  e2.target.src = "/promo-summer.png";
                };
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
