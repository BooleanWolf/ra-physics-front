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
import AuthProvider from "./components/Provider/Provider.jsx";
import PrivateRoute from "./components/Private/PrivateRoute.jsx";
import AllUsers from "./components/AllUsers/AllUsers.jsx";
import AllRequests from "./components/AllUsers/AllRequests.jsx";
import AddCourse from "./components/AllUsers/AddCourse.jsx";
import AllCourses from "./components/AllUsers/AllCourses.jsx";
import CourseUpdate from "./components/AllUsers/CourseUpdate.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
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
        path: "/demoLecture/:id",
        element: <DemoLecture></DemoLecture>,
        loader: ({ params }) => fetch(`https://ra-physics-back.vercel.app/courses/${params.id}`),
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
        element: (
       
            <CourseAvailable></CourseAvailable>
       
        ),
        // loader: () => fetch("courses.json"),
      },
      {
        path: "/courseInfo/:id",
        element: (
          <PrivateRoute>
              <CourseInfo></CourseInfo>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://ra-physics-back.vercel.app/courses/${params.id}`),
      },
      {
        path: "/vector/:id",
        element: <Vector></Vector>,
        loader: ({ params }) => fetch(`https://ra-physics-back.vercel.app/courses/${params.id}`),
      },
      {
        path: "/lecture/:id",
        element: <Lecture></Lecture>,
        loader: ({ params }) => fetch(`https://ra-physics-back.vercel.app/courses_single_video/${params.id}`),
      },
      {
        path: "/youtube",
        element: <YouTube></YouTube>,
      },
      {
        path: "/addCourse",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "/allUser",
        element: (
          <PrivateRoute>
            <AllUsers></AllUsers>
          </PrivateRoute>
        ),
      },
      {
        path: "/allCourses",
        element: <AllCourses></AllCourses>,
      },
      {
        path: "/courseUpdate/:id",
        element: <CourseUpdate></CourseUpdate>,
        loader: ({ params }) => fetch(`https://ra-physics-back.vercel.app/courses/${params.id}`),
      },

      {
        path: "/allrequests",
        element: (
          <PrivateRoute>
            <AllRequests></AllRequests>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
