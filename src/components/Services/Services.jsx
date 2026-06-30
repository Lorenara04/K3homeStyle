import "./Services.css";
import {
  Home,
  ChefHat,
  Shirt,
  Package,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Home size={36} />,
    title: "Home Organization",
    description:
      "Create functional, organized and peaceful living spaces tailored to your lifestyle.",
  },
  {
    icon: <Shirt size={36} />,
    title: "Closet Organization",
    description:
      "Maximize your closet space with practical systems that make everyday life easier.",
  },
  {
    icon: <ChefHat size={36} />,
    title: "Kitchen Organization",
    description:
      "Transform your kitchen into an efficient, elegant and easy-to-maintain space.",
  },
  {
    icon: <Package size={36} />,
    title: "Move-In & Move-Out",
    description:
      "Professional unpacking, organization and setup so your new home feels complete from day one.",
  },
  {
    icon: <Sparkles size={36} />,
    title: "Luxury Styling",
    description:
      "Beautiful finishing touches that combine functionality with sophisticated interior styling.",
  },
  {
    icon: <Home size={36} />,
    title: "Custom Organization",
    description:
      "Every project is personalized to meet your family's unique needs and routines.",
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">

        <div className="services-header">

          <span className="section-tag">
            OUR SERVICES
          </span>

          <h2>
            Beautiful Spaces Start
            <span> With Smart Organization</span>
          </h2>

          <p>
            Every home is different. That's why we create customized
            organization solutions that combine beauty, comfort and
            functionality.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button className="service-btn">
                Learn More
                <ArrowRight size={18} />
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}