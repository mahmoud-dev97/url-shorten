import React from "react";

function Statistics() {
  return (
    <>
      <div className="row my-5 justify-content-between py-5">
        <div className="mb-5 py-5 row justify-content-center pe-0 text-center">
          <h2 className="fw-bold">Advanced Statistics</h2>
          <p className="text-black-50 fw-lighter d-lg-block d-none w-75">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, expedita minima adipisicing elitam consectetur.
          </p>
          <p className="d-lg-none d-block text-black-50 fw-lighter">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis,
          </p>
        </div>

        <div className="col-12 card-wzz rounded">
          <img
            src="assets/images/icon-brand-recognition.svg"
            alt="circel-pic"
          />
          <h3>Brand Recognition</h3>
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque
            laboriosam sequi provident placeat nulla dolore facere itaque
          </p>
        </div>
        <div className="col-12 card-wzz rounded card-wzz2">
          <img src="assets/images/icon-detailed-records.svg" alt="circel-pic" />
          <h3>Detailed Records</h3>
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque
            laboriosam sequi provident placeat nulla dolore facere itaque
          </p>
        </div>
        <div className="col-12 card-wzz rounded">
          <img
            src="assets/images/icon-fully-customizable.svg"
            alt="circel-pic"
          />
          <h3>Fully Customizable</h3>
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque
            laboriosam sequi provident placeat nulla dolore facere itaque
          </p>
        </div>
      </div>
    </>
  );
}

export default Statistics;
