import "./Process.css";
import {
  MessageCircle,
  ClipboardList,
  Sparkles,
  CheckCircle,
  Home,
  HeartHandshake,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Process() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <MessageCircle size={32} />,
      number: "01",
      title: t("process.s0.title"),
      description: t("process.s0.desc"),
    },
    {
      icon: <ClipboardList size={32} />,
      number: "02",
      title: t("process.s1.title"),
      description: t("process.s1.desc"),
    },
    {
      icon: <Sparkles size={32} />,
      number: "03",
      title: t("process.s2.title"),
      description: t("process.s2.desc"),
    },
    {
      icon: <CheckCircle size={32} />,
      number: "04",
      title: t("process.s3.title"),
      description: t("process.s3.desc"),
    },
    {
      icon: <Home size={32} />,
      number: "05",
      title: t("process.s4.title"),
      description: t("process.s4.desc"),
    },
    {
      icon: <HeartHandshake size={32} />,
      number: "06",
      title: t("process.s5.title"),
      description: t("process.s5.desc"),
    },
  ];

  return (
    <section className="process section" id="process">
      <div className="container">

        {/* ================= HEADER ================= */}

        <div className="process-header">

          <span className="section-tag">
            {t("process.tag")}
          </span>

          <h2>
            {t("process.title1")}
            <span> {t("process.title2")}</span>
          </h2>

          <p>
            {t("process.desc")}
          </p>

        </div>

        {/* ================= TIMELINE ================= */}

        <div className="timeline">

          {steps.map((step, index) => (

            <div className="timeline-item" key={index}>

              <div className="timeline-icon">
                {step.icon}
              </div>

              <div className="timeline-content">

                <span className="step-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}