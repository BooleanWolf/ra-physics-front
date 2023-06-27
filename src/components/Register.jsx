import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import avatar from "../assets/avatar.jpeg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "./Provider/Provider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  useTitle("Register");
  const { createUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const hsc_batch = form.hsc_batch.value;
    const phone_number = form.phone_number.value;

    if (password.length < 6) {
      Swal.fire({
        title: "Try Again!",
        text: "Password Must be 6 characters long",
        icon: "warning",
        imageWidth: 400,
        imageHeight: 200,
      });

      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        profileUpdate(name, photo, createdUser);
        navigate("/");

        const role = "students";
        const courseList = "";
        const newUsers = {
          displayName: name,
          email: createdUser.email,
          image: createUser.photoURL, // Unnecessary
          courseList,
          photoURL: photo,
          phoneNumber: phone_number,
          hscBatch: hsc_batch,
          role,
        };
        fetch(`https://physics-server.vercel.app/users`, {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(newUsers),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        if (createdUser) {
          Swal.fire({
            title: "Great!",
            text: "Successfully SignUp",
            icon: "success",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "Try Again",
            text: "Something Wrong",
            icon: "warning",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      });
  };

  const profileUpdate = (name, photo, createdUser) => {
    updateProfile(createdUser, {
      displayName: name,
      photoURL: photo,
    })
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">HSC-Batch</span>
                </label>
                <input
                  name="hsc_batch"
                  type="text"
                  placeholder="HSC Batch"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  name="phone_number"
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo (Optional)</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter Your Photo Url"
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
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-ghost mb-2">
                  Create Account
                </button>
              </div>
            </form>
            {/* <div className="form-control">
              <button onClick={handleGoogleLogin} className="btn btn-info">
                <FaGoogle className="text-white mr-1"> </FaGoogle>
                Sign in with Google
              </button>
            </div> */}
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
