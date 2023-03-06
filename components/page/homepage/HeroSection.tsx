const HeroSection = () => {
  return (
    <section className="py-0">
      <div
        className="bg-holder"
        style={{
          backgroundImage: "url(/img/illustrations/dot.png)",
          backgroundPosition: "left",
          backgroundSize: "auto",
          marginTop: "-105px",
        }}
      ></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-md-5 col-lg-6 order-md-1 pt-8">
            <picture>
              <img
                className="img-fluid"
                src="/img/illustrations/hero-header.png"
                alt=""
              />
            </picture>
          </div>
          <div className="col-md-7 col-lg-6 text-center text-md-start pt-5 pt-md-9">
            <h1 className="mb-4 display-3 fw-bold">
              Virtual healthcare <br className="d-block d-lg-none d-xl-block" />
              for you.
            </h1>
            <p className="mt-3 mb-4 fs-1">
              Trafalgar provides progressive, and affordable
              <br className="d-none d-lg-block" />
              healthcare, accessible on mobile and online
              <br className="d-none d-lg-block" />
              for everyone
            </p>
            <a
              className="btn btn-lg btn-primary rounded-pill hover-top"
              href="#"
              role="button"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
