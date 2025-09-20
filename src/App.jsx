import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Navbar } from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Article } from "./components/Article";
import { Video } from "./components/Video";
import { Store } from "./components/Store";
import { Testimonial } from "./components/Testimonial";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Copyright } from "./components/Copyright";

function App() {
  const [count, setCount] = useState(0);

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
}

export default App;
