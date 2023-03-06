const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center fw-bold fs-2"
          href="#"
        >
          <picture>
            <img
              className="d-inline-block me-3"
              src="/img/icons/logo.png"
              alt=""
            />
          </picture>
          Trafalgar
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
            <li className="nav-item">
              <a
                className="nav-link fw-bold active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Find a doctor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Apps
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonial">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
