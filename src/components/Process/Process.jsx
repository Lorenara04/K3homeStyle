import "./Process.css";
import {
  MessageCircle,
  ClipboardList,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: <MessageCircle size={32} />,
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your lifestyle, goals and the challenges of your space.",
  },
  {
    icon: <ClipboardList size={32} />,
    number: "02",
    title: "Personalized Planning",
    description:
      "A customized organization plan is created specifically for your home and needs.",
  },
  {
    icon: <Sparkles size={32} />,
    number: "03",
    title: "Transformation Day",
    description:
      "Our team organizes, styles and optimizes every area with attention to every detail.",
  },
  {
    icon: <CheckCircle size={32} />,
    number: "04",
    title: "Final Walkthrough",
    description:
      "Together we review the completed project and ensure everything exceeds expectations.",
  },
];

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="container">

        <div className="process-header">

          <span className="section-tag">
            OUR PROCESS
          </span>

          <h2>
            How We Transform
            <span> Your Space</span>
          </h2>

          <p>
            A simple and personalized experience designed to make your home
            more functional, beautiful and stress-free.
          </p>

        </div>

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