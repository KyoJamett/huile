export const Products = () => {
  return (
    <div className="container-fluid product py-5 my-5">
      <div className="container py-5">
        <div
          className="section-title text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          // style="max-width: 500px;" comentado por error: react-dom_client.js?v=c5276a87:2236 Uncaught Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
        >
          <p className="fs-5 fw-medium fst-italic text-primary">Our Products</p>
          <h1 className="display-6">
            Tea has a complex positive effect on the body
          </h1>
        </div>
        <div
          className="owl-carousel product-carousel wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <a href="" className="d-block product-item rounded">
            {/* <img src="img/product-1.jpg" alt=""> */}
            <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
              <h4 className="text-primary">Green Tea</h4>
              <span className="text-body">
                Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                ipsum
              </span>
            </div>
          </a>
          <a href="" className="d-block product-item rounded">
            {/* <img src="img/product-2.jpg" alt=""> */}
            <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
              <h4 className="text-primary">Black Tea</h4>
              <span className="text-body">
                Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                ipsum
              </span>
            </div>
          </a>
          <a href="" className="d-block product-item rounded">
            {/* <img src="img/product-3.jpg" alt=""> */}
            <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
              <h4 className="text-primary">Spiced Tea</h4>
              <span className="text-body">
                Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                ipsum
              </span>
            </div>
          </a>
          <a href="" className="d-block product-item rounded">
            {/* <img src="img/product-4.jpg" alt=""> */}
            <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
              <h4 className="text-primary">Organic Tea</h4>
              <span className="text-body">
                Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                ipsum
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
