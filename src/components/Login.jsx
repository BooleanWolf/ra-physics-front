import React from "react";
import logo from "../assets/logophysics.png";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="hero min-h-max mt-24 lg:px-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="items-center lg:text-left ">
          <img className="w-full lg:w-2/3 " src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-2xl font-semibold px-8 py-2">Login</h2>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Usernama / E-mail"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover ">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="mt-8">
              <h2 className="text-center text-1xl font-semibold">Login With</h2>
              <div className="flex justify-center gap-5 m-4">
                <FaFacebook></FaFacebook>
                <FaApple></FaApple>
                <FaGoogle></FaGoogle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
