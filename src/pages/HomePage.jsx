import { About } from "../components/About";
import { Article } from "../components/Article";
import { BackToTop } from "../components/BackToTop";
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
      <Carousel />
      <hr></hr>
      <About />
      {/* <Products /> */}
      <hr></hr>
      <Article />
      {/* <Video /> */}
      <hr></hr>
      <Store />
      <hr></hr>
      <Contact />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};
