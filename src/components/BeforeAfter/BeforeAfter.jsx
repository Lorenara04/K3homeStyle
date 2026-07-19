import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeftRight } from "lucide-react";
import "./BeforeAfter.css";

export default function BeforeAfter() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const sliderRef = useRef(null);

  const tabs = [
    { id: "t0", title: t("beforeAfter.tabs.t0"), img: "/BeforeAfter/before&after1.png" },
    { id: "t1", title: t("beforeAfter.tabs.t1"), img: "/BeforeAfter/before&after2.png" },
    { id: "t2", title: t("beforeAfter.tabs.t2"), img: "/BeforeAfter/before&after3.png" },
    { id: "t3", title: t("beforeAfter.tabs.t3"), img: "/BeforeAfter/before&after4.png" },
    { id: "t4", title: t("beforeAfter.tabs.t4"), img: "/BeforeAfter/before&after5.jpg" },
    { id: "t5", title: t("beforeAfter.tabs.t5"), img: "/BeforeAfter/before&after6.jpg" }
  ];

  return (
    <section className="before-after-section section" id="transformations">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t("beforeAfter.tag")}</span>
          <h2>
            {t("beforeAfter.title1")} <span>{t("beforeAfter.title2")}</span>
          </h2>
          <p>{t("beforeAfter.desc")}</p>
        </div>

        {/* TABS */}
        <div className="tabs-container">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* SINGLE IMAGE VIEWER */}
        <div className="comparison-wrapper">
          <div className="simple-image-container">
            <img 
              src={tabs[activeTab].img} 
              alt={`${tabs[activeTab].title} Before and After`} 
              className="combined-img"
              onError={(e) => { e.target.src = "https://via.placeholder.com/1200x800?text=Please+upload+" + tabs[activeTab].img.split('/').pop() + "+to+public/BeforeAfter"; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
