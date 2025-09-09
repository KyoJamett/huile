import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
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
      <Carousel />
      <hr></hr>
      <About />
      <hr></hr>
      <Products />
      <hr></hr>
      <Article />
      <hr></hr>
      <h1>Video</h1>
      <Video />
      <hr></hr>
      <Store />
      <hr></hr>
      <Testimonial />
      <hr></hr>
      <Contact />
      <hr></hr>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
