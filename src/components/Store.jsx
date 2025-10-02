export const Store = () => {
  return (
    <div id="store" className="container-xxl py-5">
      <div className="container">
        <div
          className="section-title text-center mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-primary">
            Tienda Online
          </p>
          <h1 className="display-6">
            ¿Cuidado para la piel? Escoge tu producto
          </h1>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="store-item position-relative text-center">
              <img
                className="img-fluid"
                src="img/store-product-huile.jpeg"
                alt=""
              />
              <div className="p-4">
                <div className="text-center mb-3">
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                </div>
                <h4 className="mb-3">Huile de Beauté 1 unidad</h4>
                <p>
                  Cosmético Natural. Uso dermatológico para aplicar en piel y
                  cabello.
                </p>
                <h4 className="text-primary">$19.00</h4>
              </div>
              <div className="store-overlay">
                <a
                  href="https://wa.me/967694921?text=Hola, deseo comprar Huile de Beauté 1 unidad por favor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-pill py-2 px-4 m-2"
                >
                  Hacer pedido <i className="fa fa-cart-plus ms-2"></i>
                </a>
                {/* <a href="" className="btn btn-dark rounded-pill py-2 px-4 m-2">
                  Add to Cart <i className="fa fa-cart-plus ms-2"></i>
                </a> */}
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="store-item position-relative text-center">
              <img
                className="img-fluid"
                src="img/store-product-huile.jpeg"
                alt=""
              />
              <div className="p-4">
                <div className="text-center mb-3">
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                </div>
                <h4 className="mb-3">Huile de Beauté 3 unidades</h4>
                <p>
                  Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum
                  lorem sit sed
                </p>
                <h4 className="text-primary">$19.00</h4>
              </div>
              <div className="store-overlay">
                <a
                  href="https://wa.me/967694921?text=Hola, deseo comprar Huile de Beauté 3 unidades por favor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-pill py-2 px-4 m-2"
                >
                  Hacer pedido <i className="fa fa-cart-plus ms-2"></i>
                </a>
                {/* <a href="" className="btn btn-dark rounded-pill py-2 px-4 m-2">
                  Add to Cart <i className="fa fa-cart-plus ms-2"></i>
                </a> */}
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="store-item position-relative text-center">
              <img
                className="img-fluid"
                src="img/store-product-huile.jpeg"
                alt=""
              />
              <div className="p-4">
                <div className="text-center mb-3">
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                </div>
                <h4 className="mb-3">Huile de Beauté 5 unidades</h4>
                <p>
                  Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum
                  lorem sit sed
                </p>
                <h4 className="text-primary">$19.00</h4>
              </div>
              <div className="store-overlay">
                <a
                  href="https://wa.me/967694921?text=Hola, deseo comprar Huile de Beauté 5 unidades por favor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-pill py-2 px-4 m-2"
                >
                  Hacer pedido <i className="fa fa-cart-plus ms-2"></i>
                </a>
                {/* <a href="" className="btn btn-dark rounded-pill py-2 px-4 m-2">
                  Add to Cart <i className="fa fa-cart-plus ms-2"></i>
                </a> */}
              </div>
            </div>
          </div>
          {/* <div
            className="col-12 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a href="" className="btn btn-primary rounded-pill py-3 px-5">
              View More Products
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
