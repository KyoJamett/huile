export const Contact = () => {
  return (
    <div id="contact" className="container-xxl contact py-5">
      <div className="container">
        <div
          className="section-title text-center mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-primary">Contacto</p>
          <h1 className="display-6">Comuníquese con nosotros</h1>
        </div>
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-lg-8">
            <p className="text-center mb-5">
              ¿Tienes dudas o quieres más información sobre nuestros productos
              naturales? Escríbenos y con gusto resolveremos tus dudas.
            </p>
            <div className="row g-5">
              <div
                className="col-md-4 text-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="btn-square mx-auto mb-3">
                  <i className="fa fa-envelope fa-2x text-white"></i>
                </div>
                <p className="mb-2">info@example.com</p>
                <p className="mb-0">support@example.com</p>
              </div>
              <div
                className="col-md-4 text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="btn-square mx-auto mb-3">
                  <i className="fa fa-phone fa-2x text-white"></i>
                </div>
                <p className="mb-2">+012 345 67890</p>
                <p className="mb-0">+012 345 67890</p>
              </div>
              <div
                className="col-md-4 text-center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="btn-square mx-auto mb-3">
                  <i className="fa fa-map-marker-alt fa-2x text-white"></i>
                </div>
                <p className="mb-2">123 Street</p>
                <p className="mb-0">New York, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
