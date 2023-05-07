import React from "react";
import { FaGoogle } from "react-icons/fa";
import avatar from "../assets/avatar.jpeg";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  return (
    <div className="hero min-h-max mt-24 lg:px-32 mb-16">
      <div className="hero-content flex-col lg:flex-row">
        <div className="items-center lg:text-left ">
          <img className="w-full lg:w-2/3 " src={avatar} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-2xl font-semibold px-8 py-2">
            Create an Account
          </h2>
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="E-mail"
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
              <button className="btn btn-outline btn-ghost mb-2">
                Create Account
              </button>
              <button className="btn btn-info">
                <FaGoogle className="text-white mr-1"> </FaGoogle>
                Sign up with Google
              </button>
            </div>
            <div className="mt-8">
              <h2 className="text-center text-1xl font-semibold">
                Already have an account?
                <Link to="/login"> Sign in</Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
