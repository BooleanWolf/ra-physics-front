import useTitle from "../hooks/useTitle";

import AllCourseCard from "./AllCourseCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Provider/Provider";

const CourseAvailable = () => {
  useTitle("CourseAvailable");

  
  // const data = useLoaderData();
  const { loading } = useContext(AuthContext);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("courses.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  //   if (loading) {
  //     return <progress className="progress w-56 "></progress>;
  //   }
  // }, []);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://ra-physics-back.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-200 to-green-100  h-80 ">
        <h2 className="text-3xl font-bold text-center py-36">
          Shop
        </h2>
      </div>
      {courses.map((course) => (
        <AllCourseCard course={course} key={course._id}></AllCourseCard>
      ))}
    </div>
  );
};

export default CourseAvailable;
