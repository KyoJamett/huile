export const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid bg-white w-100"
                  data-aos="fade"
                  data-aos-delay="100"
                  src="img/about-1.jpg"
                  alt=""
                />
                <img
                  className="img-fluid bg-white w-50"
                  data-aos="fade"
                  data-aos-delay="200"
                  src="img/about-3.jpg"
                  alt=""
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid bg-white w-50 mb-3"
                  data-aos="fade"
                  data-aos-delay="300"
                  src="img/about-4.jpg"
                  alt=""
                />
                <img
                  className="img-fluid bg-white w-100"
                  data-aos="fade"
                  data-aos-delay="400"
                  src="img/about-2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade" data-aos-delay="500">
            <div className="section-title">
              <p className="fs-5 fw-medium fst-italic text-primary">About Us</p>
              <h1 className="display-6">
                The success history of TEA House in 25 years
              </h1>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <img
                  className="img-fluid bg-white w-100"
                  src="img/about-5.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-8">
                <h5>Our tea is one of the most popular drinks in the world</h5>
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit
                </p>
              </div>
            </div>
            <div className="border-top mb-4"></div>
            <div className="row g-3">
              <div className="col-sm-8">
                <h5>Daily use of a cup of tea is good for your health</h5>
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit
                </p>
              </div>
              <div className="col-sm-4">
                <img
                  className="img-fluid bg-white w-100"
                  src="img/about-6.jpg"
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
