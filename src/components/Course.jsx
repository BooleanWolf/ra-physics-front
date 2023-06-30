import React from "react";
import useTitle from "../hooks/useTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Provider/Provider";

import { Link } from "react-router-dom";

const Course = () => {
  useTitle("Dashboard");

  const [onLoadCourse, setOnLoadCourse] = useState("false"); 
  const [allUsers, setAllUsers] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const [AllCourses, setAllCourses] = useState([]); 
  const [userCourses, setUserCourses] = useState([]); 

  const [dummyCourses, setDummyCourses] = useState([]); 

  useEffect(() => {
    fetch("https://ra-physics-back.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  useEffect(() => {
    fetch("https://ra-physics-back.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);


  const userAdmin = allUsers.find((n) => n?.email == user?.email);

  
 
  
  useEffect(()=>{
      if(userAdmin?.courseList !== ""){
        setOnLoadCourse("true");
      }
  }, []); 


  var interval = setInterval(function () {
    if(onLoadCourse){
      
      const courseList = userAdmin?.courseList; 
      if(courseList){
          const course_array = courseList.split("%");
          course_array.map((e)=>{
            const singleCourse = AllCourses.find((n) => n?.course_id == e); 
            
            const a = {
              cname: singleCourse?.course_name,
              id: singleCourse?.course_id,
            }; 

           if(!dummyCourses.includes(singleCourse?.course_name)){
            setUserCourses([...userCourses, a]);
            setDummyCourses([...dummyCourses, singleCourse?.course_name]); 
           }
          })
      }

      console.log(userCourses)

      clearInterval(interval);
    }
  }, 1000);




  
  return (
    <>
      <div className="bg-gradient-to-r from-blue-200 to-green-100  h-80 ">
        <h2 className="text-3xl font-bold text-center py-36">
          Hello {userAdmin?.displayName}, Your Course Inventory
        </h2>
      </div>


      {userCourses.map((e)=>(
                <div className="card w-80 bg-base-100 shadow-xl mt-12 mx-8 mb-8">
                  {/* <figure className="h-24">
                    <h2 className="font-semibold">Video Coming Soon!</h2>
                  </figure> */}
                  <Link to={`/Vector/${e.id}`}>
                        <div className="card-body">
                          <h2 className="card-title">{e.cname}</h2>
                        </div>
                  </Link>
                  
                </div>
      ))}

    
    </>
  );
};

export default Course;
