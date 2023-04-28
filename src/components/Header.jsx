import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-200  lg:px-32">
      <div className="flex-1 ">
        <img className="w-12" src={logo} alt="" />
        <a className="btn btn-ghost normal-case text-xl">RA Physics</a>
      </div>

      <div className="flex-none gap-6">
        <div className="">
          <Link to="/" className="mr-6">
            Home
          </Link>
          <Link to="/course" className="mr-12">
            Course
          </Link>
        </div>
        <div className="form-control ">
          <FaSearch></FaSearch>
        </div>
        <div className="justify-end ">
          <Link to="/login">
            <button className=" btn btn-info">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
