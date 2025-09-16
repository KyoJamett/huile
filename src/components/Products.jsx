import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Products = () => {
  return (
    <div className="container-fluid product py-5 my-5">
      <div className="container py-5">
        <div
          className="section-title text-center mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-primary">Our Products</p>
          <h1 className="display-6">
            Tea has a complex positive effect on the body
          </h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          loop={true}
          centeredSlides={true}
          className="product-carousel"
          data-aos="fade-up"
          data-aos-delay="500"
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <a href="" className="d-block product-item rounded">
              <img src="img/product-1.jpg" alt="" />
              <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                <h4 className="text-primary">Green Tea</h4>
                <span className="text-body">
                  Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                  ipsum
                </span>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="d-block product-item rounded">
              <img src="img/product-2.jpg" alt="" />
              <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                <h4 className="text-primary">Black Tea</h4>
                <span className="text-body">
                  Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                  ipsum
                </span>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="d-block product-item rounded">
              <img src="img/product-3.jpg" alt="" />
              <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                <h4 className="text-primary">Spiced Tea</h4>
                <span className="text-body">
                  Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                  ipsum
                </span>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="d-block product-item rounded">
              <img src="img/product-4.jpg" alt="" />
              <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                <h4 className="text-primary">Organic Tea</h4>
                <span className="text-body">
                  Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                  ipsum
                </span>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
