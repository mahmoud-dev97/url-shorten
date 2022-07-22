import React from "react";

function Footer() {
  return (
    <>
      <div className="mt-5 py-5 text-center adva">
        <h2 className="fw-bold mb-4">Boost your links today</h2>
        <button className="btn btn-primary rounded-pill">Get Started</button>
      </div>
      <div className="foot">
        <div className="container">
          <div className="row justify-content-between pt-5">
            <div className="col-lg-3 col-12">
              <h1 className="mb-4">Shortly</h1>
            </div>
            <div className="col-lg-9 col-12">
              <div className="row p-0">
                <div className="col-lg-3 col-12">
                  <h5>Features</h5>
                  <br />
                  <p className="text-white-50">Link Shortening</p>
                  <p className="text-white-50">Branded Links</p>
                  <p className="text-white-50">Analytics</p>
                </div>
                <div className="col-lg-3 col-12">
                  <h5>Resources</h5>
                  <br />
                  <p className="text-white-50">Blog</p>
                  <p className="text-white-50">Developers</p>
                  <p className="text-white-50">Support</p>
                </div>
                <div className="col-lg-3 col-12">
                  <h5>Company</h5>
                  <br />
                  <p className="text-white-50">About</p>
                  <p className="text-white-50">Our Team</p>
                  <p className="text-white-50">Careers</p>
                  <p className="text-white-50">Contact</p>
                </div>
                <div className="col-lg-3 col-12 mb-5">
                  <img
                    className="me-3"
                    src="assets/images/icon-facebook.svg"
                    alt="icon"
                  />
                  <img
                    className="me-3"
                    src="assets/images/icon-twitter.svg"
                    alt="icon"
                  />
                  <img
                    className="me-3"
                    src="assets/images/icon-pinterest.svg"
                    alt="icon"
                  />
                  <img src="assets/images/icon-instagram.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
