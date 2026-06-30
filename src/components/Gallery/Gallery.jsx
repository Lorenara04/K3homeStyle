import "./Gallery.css";

const galleryItems = [
  {
    title: "Luxury Closet",
    category: "Closet Organization",
  },
  {
    title: "Modern Kitchen",
    category: "Kitchen Organization",
  },
  {
    title: "Living Room",
    category: "Home Styling",
  },
  {
    title: "Pantry",
    category: "Space Planning",
  },
  {
    title: "Bedroom",
    category: "Organization",
  },
  {
    title: "Home Office",
    category: "Workspace",
  },
];

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">

        <div className="gallery-header">

          <span className="section-tag">
            OUR WORK
          </span>

          <h2>
            Spaces Designed With
            <span> Purpose & Elegance</span>
          </h2>

          <p>
            Every project is tailored to create calm, functional and
            beautifully organized environments that fit each client's
            lifestyle.
          </p>

        </div>

        <div className="gallery-grid">

          {galleryItems.map((item, index) => (

            <div
              className="gallery-card"
              key={index}
            >

              <div className="gallery-image">

                <div className="placeholder">

                  Image

                </div>

              </div>

              <div className="gallery-overlay">

                <h3>{item.title}</h3>

                <span>{item.category}</span>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}