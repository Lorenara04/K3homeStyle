import "./Gallery.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const { t } = useTranslation();

  const galleryItems = [
    {
      title: t("gallery.i0.title"),
      category: t("gallery.i0.cat"),
      image: "/Gallery/closet.jpeg",
      description: t("gallery.i0.desc")
    },
    {
      title: t("gallery.i1.title"),
      category: t("gallery.i1.cat"),
      image: "/Gallery/kitchen.png",
      description: t("gallery.i1.desc")
    },
    {
      title: t("gallery.i2.title"),
      category: t("gallery.i2.cat"),
      image: "/Gallery/living.png",
      description: t("gallery.i2.desc")
    },
    {
      title: t("gallery.i3.title"),
      category: t("gallery.i3.cat"),
      image: "/Gallery/pantry.jpeg",
      description: t("gallery.i3.desc")
    },
    {
      title: t("gallery.i4.title"),
      category: t("gallery.i4.cat"),
      image: "/Gallery/bedroom.jpeg",
      description: t("gallery.i4.desc")
    },
    {
      title: t("gallery.i5.title"),
      category: t("gallery.i5.cat"),
      image: "/Gallery/office.png",
      description: t("gallery.i5.desc")
    },
    {
      title: t("gallery.i6.title"),
      category: t("gallery.i6.cat"),
      image: "/Gallery/bathroom.jpeg",
      description: t("gallery.i6.desc")
    },
  ];

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-tag">{t("gallery.tag")}</span>

          <h2>
            {t("gallery.title1")}
            <span> {t("gallery.title2")}</span>
          </h2>

          <p>
            {t("gallery.desc")}
          </p>
        </div>

        <div className="gallery-slider-wrapper">
          <button className="gallery-prev">
            <ChevronLeft size={22} />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".gallery-prev",
              nextEl: ".gallery-next",
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            speed={800}
            spaceBetween={30}
            slidesPerView={1.15}
            breakpoints={{
              768: {
                slidesPerView: 1.6,
              },
              1024: {
                slidesPerView: 2.2,
              },
              1400: {
                slidesPerView: 2.6,
              },
            }}
            className="gallery-swiper"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="project-card">
                  <div className="project-image">
                    
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      <div className="placeholder">{t("gallery.placeholder")}</div>
                    )}

                    {/* ESTA ES LA CAPA BEIGE QUE APARECE AL HACER HOVER */}
                    <div className="project-overlay">
                      <p>{item.description}</p>
                    </div>

                  </div>

                  <div className="project-info">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    {/* Botón eliminado a petición para mayor limpieza */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="gallery-next">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}