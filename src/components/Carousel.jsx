import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export const Carousel = () => {
  return (
    <div id="home" className="container-fluid px-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="img/carousel-1-huile.jpg" alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7 text-center">
                    <motion.p
                      className="fs-4 text-white"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      Aceite de palta{" "}
                      <strong className="text-dark">Huile de Beauté</strong>
                    </motion.p>
                    <motion.h1
                      className="display-1 text-dark mb-4"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      Tu rutina de belleza, inspirada en la naturaleza
                    </motion.h1>
                    <HashLink
                      smooth
                      to="#store"
                      className="btn btn-light rounded-pill py-3 px-5"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Ver productos
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="img/carousel-2-huile.jpg" alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7 text-center">
                    <motion.p
                      className="fs-4 text-white"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      Belleza natural con{" "}
                      <strong className="text-dark">Huile de Beauté</strong>
                    </motion.p>
                    <motion.h1
                      className="display-1 text-dark mb-4"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      Tu rutina de belleza, inspirada en la naturaleza
                    </motion.h1>
                    <HashLink
                      smooth
                      to="#store"
                      className="btn btn-light rounded-pill py-3 px-5"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Ver productos
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
