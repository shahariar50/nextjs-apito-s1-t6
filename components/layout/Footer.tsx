const Footer = () => {
  return (
    <>
      <section className="bg-900 pb-4 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0">
              <a className="text-decoration-none" href="#">
                <picture>
                  <img src="/img/gallery/footer-logo.png" height="51" alt="" />
                </picture>
              </a>
              <p className="text-500 my-4">
                The most trusted Courier
                <br />
                company in your area.
              </p>
            </div>
            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
              <h5 className="lh-lg fw-bold mb-4 text-light font-sans-serif">
                Other links{" "}
              </h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-500" href="#!">
                    Blogs
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-500" href="#!">
                    Movers website
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-500" href="#!">
                    Traffic Update
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
              <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">
                Services
              </h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-500" href="#!">
                    Corporate goods
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-500" href="#!">
                    Artworks
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-500" href="#!">
                    Documents
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
              <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">
                {" "}
                Customer Care
              </h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-500" href="#!">
                    About Us
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-500" href="#!">
                    Contact US
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-500" href="#!">
                    Get Update
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-0 bg-1000">
        <div className="container">
          <div className="row justify-content-md-between justify-content-evenly py-4">
            <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
              <p className="fs--1 my-2 fw-bold text-200">
                All rights Reserved &copy; Your Company, 2021
              </p>
            </div>
            <div className="col-12 col-sm-8 col-md-6">
              <p className="fs--1 my-2 text-center text-md-end text-200">
                {" "}
                Made with&nbsp;
                <svg
                  className="bi bi-suit-heart-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="#F95C19"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                </svg>
                &nbsp;by&nbsp;
                <a
                  className="fw-bold text-primary"
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
      </footer>
    </>
  );
};

export default Footer;
