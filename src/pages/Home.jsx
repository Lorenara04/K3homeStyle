import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FloatingPromo from "../components/Promo/FloatingPromo";
import Services from "../components/Services/Services";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Gallery from "../components/Gallery/Gallery";
import Baskets from "../components/Baskets/Baskets";
import Process from "../components/Process/Process";
import BeforeAfter from "../components/BeforeAfter/BeforeAfter";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhoWeAre />
      <Gallery />
      <Baskets />
      <Process />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingPromo />
    </>
  );
}

export default Home;