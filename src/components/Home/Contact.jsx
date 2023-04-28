import React from "react";
import avatar from "../../assets/avatar.jpeg";

const Contact = () => {
  return (
    <div className="hero min-h-max mt-24 lg:px-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="items-center lg:text-left ">
          <img className="w-full lg:w-2/3 " src={avatar} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-2xl font-semibold px-8 py-2">Contact</h2>
          <p className="px-8">
            <small>Contact Ratul Vaia for Guidance</small>
          </p>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input
                type="text"
                placeholder="+00 5659 08496"
                className="input input-bordered"
              />
            </div>
            <fieldset>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Query</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="box-content  h-24 border rounded-lg px-2 "
                />
              </div>
            </fieldset>
            <div className="form-control  mt-6">
              <button className="btn  btn-info ">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
