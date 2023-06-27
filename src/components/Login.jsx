import React, { useContext } from "react";
import logo from "../assets/logophysics.png";
import useTitle from "../hooks/useTitle";
import Swal from "sweetalert2";
import { AuthContext } from "./Provider/Provider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  useTitle("Login");

  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        if (user) {
          Swal.fire({
            title: "Great!",
            text: "Successfully Login",
            icon: "success",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "Try Again!",
            text: "Something Wrong",
            icon: "warning",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      });
  };

  return (
    <div className="hero min-h-max mt-24 lg:px-32 mb-16">
      <div className="hero-content flex-col lg:flex-row">
        <div className="items-center lg:text-left ">
          <img className="w-full lg:w-2/3 " src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-2xl font-semibold px-8 py-2">Login</h2>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
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
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="mt-2">
                <h2 className="">
                  <span>Don't have an account? </span>
                  <Link className="underline" to="/register">
                    SignUp
                  </Link>
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
