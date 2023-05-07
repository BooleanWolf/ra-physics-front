import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-200  lg:px-32">
      <div className="flex-1 ">
        <img className="w-12" src={logo} alt="" />
        <a className="px-6 normal-case text-xl font-semibold">RA Physics</a>
      </div>

      <div className="flex-none gap-6">
        <div className="">
          <Link to="/" className="mr-5">
            Home
          </Link>
          <Link to="/course" className="mr-5">
            Dashboard
          </Link>
          <Link to="/demolecture" className="mr-5">
            DemoLecture
          </Link>
          <Link to="/Lecture" className="mr-5">
            CourseVideo
          </Link>
          <Link to="/vector" className="mr-5">
            Incourse
          </Link>

          <Link to="/courseAvailable" className="mr-5">
            Course
          </Link>
          <Link to="/youtube" className="mr-6">
            YouTube
          </Link>
        </div>
      </div>
      <div className="justify-end ">
        <Link to="/login">
          <button className=" btn btn-info me-6 ">Login</button>
        </Link>
        <Link to="/register">
          <button className=" btn btn-info">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
