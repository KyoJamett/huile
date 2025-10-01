export const About = () => {
  return (
    <div id="about" className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid bg-white w-100"
                  data-aos="fade"
                  data-aos-delay="100"
                  src="img/about-1-huile.jpeg"
                  alt=""
                />
                <img
                  className="img-fluid bg-white w-50"
                  data-aos="fade"
                  data-aos-delay="200"
                  src="img/about-3-huile.jpeg"
                  alt=""
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid bg-white w-50 mb-3"
                  data-aos="fade"
                  data-aos-delay="300"
                  src="img/about-4-huile.jpeg"
                  alt=""
                />
                <img
                  className="img-fluid bg-white w-100"
                  data-aos="fade"
                  data-aos-delay="400"
                  src="img/about-2-huile.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade" data-aos-delay="500">
            <div className="section-title">
              <p className="fs-5 fw-medium fst-italic text-primary">
                Quienes somos
              </p>
              <h1 className="display-6">
                Ofrecemos productos que hidratan, protegen y realzan la belleza
                natural
              </h1>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <img
                  className="img-fluid bg-white w-100"
                  src="img/about-5-huile.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-8">
                <h5>Producto 100% puro</h5>
                <p className="mb-0">
                  Alto contenido de vitaminas A, E y complejo B, ácidos grasos y
                  antioxidantes
                </p>
              </div>
            </div>
            <div className="border-top mb-4"></div>
            <div className="row g-3">
              <div className="col-sm-8">
                <h5>Uso dermatológico para piel y cabello</h5>
                <p className="mb-0">
                  Efecto hidratante, reparador de la piel y revitaliza cabello
                  seco, teñido o dañado. Repara puntas partidas y el frizz.
                </p>
              </div>
              <div className="col-sm-4">
                <img
                  className="img-fluid bg-white w-100"
                  src="img/about-6-huile.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
