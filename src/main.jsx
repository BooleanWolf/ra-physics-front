import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Layout/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home/Home.jsx";
import Course from "./components/Course.jsx";

import CourseAvailable from "./components/CourseAvailable.jsx";
import CourseInfo from "./components/Home/CourseInfo.jsx";
import Vector from "./components/Vector.jsx";
import Lecture from "./components/Lecture.jsx";
import DemoLecture from "./components/DemoLecture.jsx";
import YouTube from "./components/YouTube.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/course",
        element: <Course></Course>,
      },
      {
        path: "/demoLecture",
        element: <DemoLecture></DemoLecture>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courseAvailable",
        element: <CourseAvailable></CourseAvailable>,
      },
      {
        path: "/courseInfo",
        element: <CourseInfo></CourseInfo>,
      },
      {
        path: "/vector",
        element: <Vector></Vector>,
      },
      {
        path: "/lecture",
        element: <Lecture></Lecture>,
      },
      {
        path: "/youtube",
        element: <YouTube></YouTube>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
