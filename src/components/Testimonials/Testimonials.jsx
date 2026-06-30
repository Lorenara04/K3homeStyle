import "./Testimonials.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    text: "K3 Home Style completely transformed my home. Every room feels more functional, elegant and organized than I ever imagined.",
  },
  {
    name: "Emily Carter",
    role: "Interior Design Client",
    text: "The attention to detail was incredible. The entire process was smooth, professional and exceeded all my expectations.",
  },
  {
    name: "Michael Brown",
    role: "Home Organization",
    text: "I never thought organization could completely change the way we live. Our home feels bigger, calmer and much easier to maintain.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">

        <div className="testimonials-header">

          <span className="section-tag">
            TESTIMONIALS
          </span>

          <h2>
            What Our Clients
            <span> Say About Us</span>
          </h2>

          <p>
            Our greatest satisfaction comes from helping families create
            organized, functional and beautiful homes they truly enjoy.
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <div className="stars">

                {[1,2,3,4,5].map((star)=>

                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                  />

                )}

              </div>

              <p className="testimonial-text">
                "{item.text}"
              </p>

              <div className="client">

                <div className="client-avatar">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4>{item.name}</h4>

                  <span>{item.role}</span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}