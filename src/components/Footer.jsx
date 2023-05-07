import React from "react";
import logo from "../assets/logophysics.png";

const Footer = () => {
  return (
    <div className="bg-indigo-500 h-96">
      <div className="flex flex-col justify-center items-center  py-8">
        <img className="w-52" src={logo} alt="" />
        <h2 className="text-2xl text-white">
          RA Physics
          <br />
          Address
        </h2>
      </div>
    </div>
  );
};

export default Footer;
