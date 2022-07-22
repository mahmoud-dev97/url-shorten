function Main() {
  return (
    <div className="row main mt-5 align-items-center">
      <div className="col-lg-6 col-12 mb-3 mb-lg-0">
        <h1>More than just shorter links</h1>
        <p className="text-black-50 fw-lighter d-lg-block d-none">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          expedita minima.amet consectetur adipisicing elitam consectetur.
        </p>
        <p className="d-lg-none d-block text-black-50 fw-lighter">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        </p>
        <a className="btn btn-primary rounded-pill" href="#">
          Get Started
        </a>
      </div>
      <div className="col-lg-6 col-12">
        <img
          className="img-fluid"
          src="assets/images/illustration-working.svg"
          alt="pic"
        />
      </div>
    </div>
  );
}

export default Main;
