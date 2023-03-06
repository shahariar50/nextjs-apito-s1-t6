const Footer = () => {
  return (
    <>
      <section className="py-6 pt-7 bg-primary-gradient">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(/img/illustrations/dot.png)",
            backgroundPosition: "left bottom",
            backgroundSize: "auto",
            filter: "contrast(1.5)",
          }}
        ></div>

        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(/img/illustrations/dot-2.png)",
            backgroundPosition: "right top",
            backgroundSize: "auto",
            marginTop: "-75px",
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 order-0 order-sm-0 pe-6">
              <a className="text-decoration-none" href="#">
                <picture>
                  <img
                    className="img-fluid me-2"
                    src="/img/icons/footer-logo.png"
                    alt=""
                  />
                </picture>
                <span className="fw-bold fs-1 text-light">Trafalgar</span>
              </a>
              <p className="mt-3 text-white">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
            </div>
            <div className="col-4 col-md-4 col-lg mb-3 order-2 order-sm-1">
              <h6 className="lh-lg fw-bold text-light">Company</h6>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    About
                  </a>
                </li>
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Find a doctor
                  </a>
                </li>
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Apps
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-md-4 col-lg mb-3 order-3 order-sm-2">
              <h6 className="lh-lg fw-bold text-light"> Region </h6>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Indonesia
                  </a>
                </li>
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Singapore
                  </a>
                </li>
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Guide
                  </a>
                </li>
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Hongkong
                  </a>
                </li>
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Canada
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-md-4 col-lg mb-3 order-1 order-sm-3">
              <h6 className="lh-lg fw-bold text-light">Help </h6>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Help center
                  </a>
                </li>
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Contact support
                  </a>
                </li>
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Guide
                  </a>
                </li>
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    Instructions
                  </a>
                </li>
                <li className="lh-lg">
                  <a
                    className="text-light fs--1 text-decoration-none"
                    href="#!"
                  >
                    How it works
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p className="mb-0">
                  &copy; This template is made with&nbsp;
                  <svg
                    className="bi bi-suit-heart-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#458FF6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                  </svg>
                  &nbsp;by&nbsp;
                  <a
                    className="text-black"
                    href="https://themewagon.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ThemeWagon{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
