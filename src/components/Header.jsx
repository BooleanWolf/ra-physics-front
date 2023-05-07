import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800  ">
      <div className="lg:flex justify-between">
        <div>
          <div className="max-w-8xl mx-auto    sm:px-6 lg:px-20 ">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link className="flex-shrink-0">
                  <img className="h-8 w-8" src={logo} alt="Logo" />
                </Link>
                <Link className="flex-shrink-0">
                  <h2 className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    RA Physics
                  </h2>
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      to="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to="/course"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/demolecture"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      DemoLecture
                    </Link>
                    <Link
                      to="/Lecture"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      CourseVideo
                    </Link>
                    <Link
                      to="/vector"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Incourse
                    </Link>
                    <Link
                      to="/courseAvailable"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Course
                    </Link>
                    <Link
                      to="/youtube"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      YouTube
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mr-2  flex md:hidden lg:hidden">
                <button
                  onClick={toggleNavbar}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                >
                  <svg
                    className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex items-center hidden lg:visible me-20">
          <div>
            <Link
              to="/login"
              className=" text-white  px-3 py-2 rounded-md text-sm font-medium"
            >
              <button className="btn btn-outline btn-info">Login</button>
            </Link>
          </div>

          <div>
            <Link
              to="/register"
              className="  text-white  px-3 py-2 rounded-md text-sm font-medium"
            >
              <button className="btn btn-outline btn-info">Register</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/course"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Dashboard
          </Link>
          <Link
            to="/demolecture"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            DemoLecture
          </Link>
          <Link
            to="/Lecture"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            CourseVideo
          </Link>
          <Link
            to="/vector"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Incourse
          </Link>
          <Link
            to="/courseAvailable"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Course
          </Link>
          <Link
            to="/youtube"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            YouTube
          </Link>

          <Link
            to="/login"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
          >
            <button className="btn btn-info">Login</button>
          </Link>
          <Link
            to="/register"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
          >
            <button className="btn btn-info">Register</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
