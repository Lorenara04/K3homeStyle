import "./Baskets.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

export default function Baskets() {
  const { t } = useTranslation();
  const [modalImg, setModalImg] = useState(null);

  const collections = [
    { icon: "🌿", name: t("baskets.c0.name"), desc: t("baskets.c0.desc") },
    { icon: "🍽️", name: t("baskets.c1.name"), desc: t("baskets.c1.desc") },
    { icon: "🧸", name: t("baskets.c2.name"), desc: t("baskets.c2.desc") },
    { icon: "🧺", name: t("baskets.c3.name"), desc: t("baskets.c3.desc") },
    { icon: "🛋️", name: t("baskets.c4.name"), desc: t("baskets.c4.desc") },
    { icon: "🏡", name: t("baskets.c5.name"), desc: t("baskets.c5.desc") },
  ];

  return (
    <section className="baskets-section" id="baskets">
      <div className="baskets-container">
        
        <div className="baskets-header">
          <h2>{t("baskets.title")}</h2>
          <p>
            {t("baskets.desc")}
          </p>
        </div>

        <div className="collections-list">
          {collections.map((item, index) => (
            <div className="collection-item" key={index}>
              <span>{item.icon}</span>
              <span>{item.name} {item.desc && `(${item.desc})`}</span>
            </div>
          ))}
        </div>

        <div className="baskets-slider-wrapper">
          <button className="baskets-prev">
            <ChevronLeft size={22} />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".baskets-prev",
              nextEl: ".baskets-next",
            }}
            pagination={{
              clickable: true,
            }}
            loop={false}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="baskets-swiper"
          >
            <SwiperSlide>
              <div className="showcase-card">
                <img src="/Baskets/slide1.jpeg" alt="K3 Collection 1" className="showcase-img" />
                <div className="showcase-content">
                  <h3>{t("baskets.s1.title")}</h3>
                  <p>{t("baskets.s1.desc")}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="showcase-card">
                <img src="/Baskets/slide2.jpeg" alt="K3 Collection 2" className="showcase-img" />
                <div className="showcase-content">
                  <h3>{t("baskets.s2.title")}</h3>
                  <p>{t("baskets.s2.desc")}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="showcase-card">
                <img src="/Baskets/slide3.jpeg" alt="K3 Collection 3" className="showcase-img" />
                <div className="showcase-content">
                  <h3>{t("baskets.s3.title")}</h3>
                  <p>{t("baskets.s3.desc")}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="showcase-card">
                <img src="/Baskets/slide4.jpeg" alt="K3 Collection 4" className="showcase-img" />
                <div className="showcase-content">
                  <h3>{t("baskets.s4.title")}</h3>
                  <p>{t("baskets.s4.desc")}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="showcase-card">
                <img src="/Baskets/slide5.jpeg" alt="K3 Collection 5" className="showcase-img" />
                <div className="showcase-content">
                  <h3>{t("baskets.s5.title")}</h3>
                  <p>{t("baskets.s5.desc")}</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <button className="baskets-next">
            <ChevronRight size={22} />
          </button>
        </div>

        {/* CATALOG SECTION: THUMBNAILS */}
        <div className="catalogs-grid">
          <div className="catalog-thumb" onClick={() => setModalImg("/Baskets/catalogo1.jpeg")}>
            <img src="/Baskets/catalogo1.jpeg" alt="Catálogo K3 1" />
            <div className="thumb-overlay"><span>Ver Detalles</span></div>
          </div>
          <div className="catalog-thumb" onClick={() => setModalImg("/Baskets/catalogo2.jpeg")}>
            <img src="/Baskets/catalogo2.jpeg" alt="Catálogo K3 2" />
            <div className="thumb-overlay"><span>Ver Detalles</span></div>
          </div>
          <div className="catalog-thumb" onClick={() => setModalImg("/Baskets/catalogo3.jpeg")}>
            <img src="/Baskets/catalogo3.jpeg" alt="Catálogo K3 3" />
            <div className="thumb-overlay"><span>Ver Detalles</span></div>
          </div>
          <div className="catalog-thumb" onClick={() => setModalImg("/Baskets/catalogo4.jpeg")}>
            <img src="/Baskets/catalogo4.jpeg" alt="Catálogo K3 4" />
            <div className="thumb-overlay"><span>Ver Detalles</span></div>
          </div>
          <div className="catalog-thumb" onClick={() => setModalImg("/Baskets/catalogo5.jpeg")}>
            <img src="/Baskets/catalogo5.jpeg" alt="Catálogo K3 5" />
            <div className="thumb-overlay"><span>Ver Detalles</span></div>
          </div>
        </div>

        <div className="baskets-cta">
          <a 
            href="https://wa.me/14096513454?text=Hello!%20I%20would%20like%20to%20get%20a%20quote"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-baskets"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <FaWhatsapp size={20} />
            {t("baskets.button")}
          </a>
        </div>

      </div>

      {/* MODAL (LIGHTBOX) */}
      {modalImg && (
        <div className="catalog-modal" onClick={() => setModalImg(null)}>
          <button className="modal-close" onClick={() => setModalImg(null)}>
            <X size={32} />
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImg} alt="Catálogo Ampliado" />
          </div>
        </div>
      )}
    </section>
  );
}
