import React from "react";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";

const CourseInfo = () => {
  useTitle("CourseInfo");
  const dynamic = useLoaderData();

  const { image, title, price } = dynamic;

  return (
    <div className="grid lg:grid-cols-2 mt-16">
      <div className="lg:mx-auto">
        <h2 className="text-2xl font-bold">Course Info</h2>
        <p>Name: Vector</p>
        <p>
          Price: BDT-<span>9000</span>
        </p>
      </div>
      <div>
        <div>
          <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h2 className="text-2xl font-semibold px-8 py-2">
                Course Buying
              </h2>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Bkash Transaction ID</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Bkash"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    Add Course To Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
