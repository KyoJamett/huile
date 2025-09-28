import { About } from "../components/About";
import { Article } from "../components/Article";
import { Carousel } from "../components/Carousel";
import { Contact } from "../components/Contact";
import { Copyright } from "../components/Copyright";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
import { Store } from "../components/Store";
import { Testimonial } from "../components/Testimonial";
import { Video } from "../components/Video";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <hr></hr>
      <h2>Carousel</h2>
      <Carousel />
      <h2>Fin Carousel</h2>
      <hr></hr>
      <h2>About</h2>
      <About />
      <h2>Fin About</h2>
      <hr></hr>
      <h2>Products</h2>
      <Products />
      <h2>Fin Products</h2>
      <hr></hr>
      <h2>Article</h2>
      <Article />
      <h2>Fin Article</h2>
      <hr></hr>
      <h2>Video</h2>
      <Video />
      <h2>Fin Video</h2>
      <hr></hr>
      <h2>Store</h2>
      <Store />
      <h2>Fin Store</h2>
      <hr></hr>
      <h2>Testimonial</h2>
      <Testimonial />
      <h2>Fin Testimonial</h2>
      <hr></hr>
      <h2>Contact</h2>
      <Contact />
      <h2>Fin Contact</h2>
      <hr></hr>
      <Footer />
      <Copyright />
    </>
  );
};
