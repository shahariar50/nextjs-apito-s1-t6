const DownloadSection = () => {
  return (
    <section className="py-6 py-lg-8">
      <div className="container">
        <div className="row g-xl-0 align-items-center">
          <div className="col-md-6 order-md-1 text-md-end">
            <picture>
              <img
                className="img-fluid mb-5 mb-md-0"
                src="/img/illustrations/about-1.png"
                width="480"
                alt=""
              />
            </picture>
          </div>
          <div className="col-md-6 text-center text-md-start order-md-0">
            <h2 className="fw-bold lh-base">
              Download our <br />
              mobile apps
            </h2>
            <hr
              className="text-dark mx-auto mx-md-0"
              style={{ height: "2px", width: "50px" }}
            />
            <p className="pt-3">
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            <div className="py-3">
              <button
                className="btn btn-lg btn-outline-primary rounded-pill"
                type="submit"
              >
                Learn more
                <svg
                  className="bi bi-arrow-down-short"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
