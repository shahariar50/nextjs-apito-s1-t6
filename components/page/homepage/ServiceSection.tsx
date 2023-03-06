const ServiceSection = () => {
  return (
    <section className="py-8">
      <div
        className="bg-holder"
        style={{
          backgroundImage: "url(/img/illustrations/services-bg.png)",
          backgroundPosition: "center left",
          backgroundSize: "auto",
        }}
      ></div>

      <div
        className="bg-holder"
        style={{
          backgroundImage: "url(/img/illustrations/dot-2.png)",
          backgroundPosition: "center right",
          backgroundSize: "auto",
          marginLeft: "-180px",
          marginTop: "20px",
        }}
      ></div>

      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-3 text-center">
            <h2 className="fw-bold">Our services</h2>
            <hr className="w-25 mx-auto text-dark" style={{ height: "2px" }} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-9 col-xl-8 text-center">
            <p>
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment with our highly
              qualified doctors you can consult with us which type of service is
              suitable for your health
            </p>
          </div>
        </div>
        <div className="row justify-content-center h-100 pt-7 g-4">
          <div className="col-sm-9 col-md-4">
            <div className="card h-100 w-100 shadow rounded-lg p-3 p-md-2 p-lg-3 p-xl-5">
              <div className="card-body text-center text-md-start">
                <div className="py-3">
                  <picture>
                    <img
                      className="img-fluid"
                      src="/img/illustrations/search.png"
                      height="90"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="py-3">
                  <h4 className="fw-bold card-title">Search doctor</h4>
                  <p className="card-text">
                    Choose your doctor from thousands of specialist, general,
                    and trusted hospitals
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-md-4">
            <div className="card h-100 w-100 shadow rounded-lg p-3 p-md-2 p-lg-3 p-xl-5">
              <div className="card-body text-center text-md-start">
                <div className="py-3">
                  <picture>
                    <img
                      className="img-fluid"
                      src="/img/illustrations/online-pharmacy.png"
                      height="90"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="py-3">
                  <h4 className="fw-bold card-title">Online pharmacy</h4>
                  <p className="card-text">
                    Buy your medicines with our mobile application with a simple
                    delivery system
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-md-4">
            <div className="card h-100 w-100 shadow rounded-lg p-3 p-md-2 p-lg-3 p-xl-5">
              <div className="card-body text-center text-md-start">
                <div className="py-3">
                  <picture>
                    <img
                      className="img-fluid"
                      src="/img/illustrations/consultation.png"
                      height="90"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="py-3">
                  <h4 className="fw-bold card-title">Consultation</h4>
                  <p className="card-text">
                    Free consultation with our trusted doctors and get the best
                    recomendations
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-md-4">
            <div className="card h-100 w-100 shadow rounded-lg p-3 p-md-2 p-lg-3 p-xl-5">
              <div className="card-body text-center text-md-start">
                <div className="py-3">
                  <picture>
                    <img
                      className="img-fluid"
                      src="/img/illustrations/details-info.png"
                      height="90"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="py-3">
                  <h4 className="fw-bold card-title">Details info</h4>
                  <p className="card-text">
                    You can get 24/7 urgent care for yourself or your children
                    and your lovely family
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-md-4">
            <div className="card h-100 w-100 shadow rounded-lg p-3 p-md-2 p-lg-3 p-xl-5">
              <div className="card-body text-center text-md-start">
                <div className="py-3">
                  <picture>
                    <img
                      className="img-fluid"
                      src="/img/illustrations/emergency-care.png"
                      height="90"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="py-3">
                  <h4 className="fw-bold card-title">Emergency care</h4>
                  <p className="card-text">
                    Track and save your medical history and health data{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-md-4">
            <div className="card h-100 w-100 shadow rounded-lg p-3 p-md-2 p-lg-3 p-xl-5">
              <div className="card-body text-center text-md-start">
                <div className="py-3">
                  <picture>
                    <img
                      className="img-fluid"
                      src="/img/illustrations/tracking.png"
                      height="90"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="py-3">
                  <h4 className="fw-bold card-title">Tracking</h4>
                  <p className="card-text">
                    Track and save your medical history and health data{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <button
              className="btn btn-lg btn-outline-primary rounded-pill"
              type="submit"
            >
              Learn more{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
