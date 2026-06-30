import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Gallery from "../components/Gallery/Gallery";
import Process from "../components/Process/Process";
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
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;