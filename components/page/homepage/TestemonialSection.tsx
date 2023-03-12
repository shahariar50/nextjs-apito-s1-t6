import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TestemonialSection = () => {
  return (
    <section className="py-8" id="testimonial">
      <div className="container">
        <div
          className="bg-holder z-index-1"
          style={{
            backgroundImage: "url(/img/illustrations/dot.png)",
            backgroundPosition: "right top",
            backgroundSize: "auto",
            marginLeft: "-30px",
            marginTop: "10px",
            filter: "contrast(1.5)",
          }}
        ></div>

        <div
          className="bg-holder z-index-1"
          style={{
            backgroundImage: "url(/img/illustrations/dot-2.png)",
            backgroundPosition: "left bottom",
            backgroundSize: "auto",
            marginLeft: "-35px",
            marginTop: "-65px",
            filter: "contrast(1.5)",
          }}
        ></div>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            prevEl: ".carousel-control-prev",
            nextEl: ".carousel-control-next",
          }}
          pagination
        >
          <SwiperSlide>
            <div className="row h-100">
              <div className="col-12">
                <div className="card text-white bg-primary-gradient">
                  <div className="card-body p-4 p-md-4 p-lg-7">
                    <h2 className="fw-bold text-white text-center">
                      What our customer are saying
                    </h2>
                    <hr
                      className="mx-auto"
                      style={{ height: "2px", width: "50px" }}
                    />
                    <div className="d-md-flex align-items-md-center mt-5 text-center text-md-start">
                      <picture>
                        <img
                          className="img-fluid me-4 me-md-3 me-lg-4"
                          src="/img/gallery/user-1.png"
                          width="100"
                          alt=""
                        />
                      </picture>
                      <div className="w-md-25 my-3">
                        <h5 className="mb-0 fw-medium text-white">
                          Edward Newgate
                        </h5>
                        <p className="fw-normal mb-0">Founder Circle</p>
                      </div>
                      <div className="w-md-75">
                        <p className="card-text ms-md-5">
                          “Our dedicated patient engagement app and web portal
                          allow you to access information instantaneously (no
                          tedeous form, long calls, or administrative hassle)
                          and securely”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row h-100">
              <div className="col-12">
                <div className="card text-white bg-primary-gradient">
                  <div className="card-body p-4 p-md-4 p-lg-7">
                    <h2 className="fw-bold text-white text-center">
                      Our dear customers said about us
                    </h2>
                    <hr
                      className="mx-auto"
                      style={{ height: "2px", width: "50px" }}
                    />
                    <div className="d-md-flex align-items-md-center mt-5 text-center text-md-start">
                      <picture>
                        <img
                          className="img-fluid me-4 me-md-3 me-lg-4"
                          src="/img/gallery/user-2.png"
                          width="100"
                          alt=""
                        />
                      </picture>
                      <div className="w-md-25 my-3">
                        <h5 className="mb-0 fw-medium text-white">Jhon Doe</h5>
                        <p className="fw-normal mb-0">UI/UX Designer</p>
                      </div>
                      <div className="w-md-75">
                        <p className="card-text ms-md-5">
                          “Our dedicated patient engagement app and web portal
                          allow you to access information instantaneously (no
                          tedeous form, long calls, or administrative hassle)
                          and securely”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row h-100">
              <div className="col-12">
                <div className="card text-white bg-primary-gradient">
                  <div className="card-body p-4 p-md-4 p-lg-7">
                    <h2 className="fw-bold text-white text-center">
                      Our dear customers said about us
                    </h2>
                    <hr
                      className="mx-auto"
                      style={{ height: "2px", width: "50px" }}
                    />
                    <div className="d-md-flex align-items-md-center mt-5 text-center text-md-start">
                      <picture>
                        <img
                          className="img-fluid me-4 me-md-3 me-lg-4"
                          src="/img/gallery/user-3.png"
                          width="100"
                          alt=""
                        />
                      </picture>
                      <div className="w-md-25 my-3">
                        <h5 className="mb-0 fw-medium text-white">Jeny Doe</h5>
                        <p className="fw-normal mb-0">Web Designer</p>
                      </div>
                      <div className="w-md-75">
                        <p className="card-text ms-md-5">
                          “Our dedicated patient engagement app and web portal
                          allow you to access information instantaneously (no
                          tedeous form, long calls, or administrative hassle)
                          and securely”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="row mt-4 flex-center navigation">
          <div className="col-4 col-sm-5 text-end position-relative z-index-2">
            <span
              className="carousel-control-prev carousel-icon z-index-2"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </span>
          </div>
          <div className="col-auto position-relative z-index-2"></div>
          <div className="col-4 col-sm-5 position-relative z-index-2">
            <span
              className="carousel-control-next carousel-icon z-index-2"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestemonialSection;
