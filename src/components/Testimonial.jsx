import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Testimonial = () => {
  return (
    <div id="testimonial" className="container-fluid testimonial py-5 my-5">
      <div className="container py-5">
        <div
          className="section-title text-center mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-white">Testimonial</p>
          <h1 className="display-6">What our clients say about our tea</h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="testimonial-carousel"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <SwiperSlide>
            <div className="testimonial-item p-4 p-lg-5">
              <p className="mb-4">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/testimonial-1.jpg"
                  alt=""
                />
                <div className="text-start ms-3">
                  <h5>Client Name</h5>
                  <span className="text-primary">Profession</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item p-4 p-lg-5">
              <p className="mb-4">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/testimonial-2.jpg"
                  alt=""
                />
                <div className="text-start ms-3">
                  <h5>Client Name</h5>
                  <span className="text-primary">Profession</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item p-4 p-lg-5">
              <p className="mb-4">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  className="img-fluid flex-shrink-0"
                  src="img/testimonial-3.jpg"
                  alt=""
                />
                <div className="text-start ms-3">
                  <h5>Client Name</h5>
                  <span className="text-primary">Profession</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
