import React from "react";
import useTitle from "../hooks/useTitle";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./Provider/Provider";
import { useContext, useEffect, useState } from "react";


const Vector = () => {
  useTitle("Incourse");
  const dynamic = useLoaderData(); 
  const { user, logOut } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
  const [showCourse, setShowCourse] = useState(false); 

 
  const { category, course_name, fee, image, course_id, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14 } = dynamic;
  
  useEffect(() => {
    fetch("https://ra-physics-back.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  const useAdmin = allUsers.find((n) => n?.email == user?.email);


  const checkCredentialInterval = setInterval(()=>{
    
    if(useAdmin?.courseList){
      const allowed_courses = useAdmin?.courseList;
      // console.log(allowed_courses);
      if(allowed_courses.includes(course_id)) {
        setShowCourse(true); 
         clearInterval(checkCredentialInterval);
      }
      // console.log(useAdmin?.courseList);
      clearInterval(checkCredentialInterval);
    }
  }, 1000);


  return (
    <div>
      <div className="bg-gradient-to-r from-blue-200 to-green-100  h-80 ">
        <h2 className="text-3xl font-bold text-center lg:py-36">{course_name}</h2>
      </div>

      {showCourse ? (

          <div>
            <div className="grid lg:grid-cols-4 m-12 lg:mx-28 lg:my-12 gap-8">
                <Link to={`/Lecture/${course_id}-v1`}><h2 className="text-2xl font-semibold text-center">
                 
                  <span>
                    {v1 !== "" ? (
                        <span> Lecture-1 </span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

                  <Link to={`/Lecture/${course_id}-v2`}><h2 className="text-2xl font-semibold text-center">
                  
                  <span>
                    {v2 !== "" ? (
                        <span>Lecture-2</span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

                  <Link to={`/Lecture/${course_id}-v3`}><h2 className="text-2xl font-semibold text-center">
                 
                  <span>
                    {v3 !== "" ? (
                        <span> Lecture-3</span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

                  <Link to={`/Lecture/${course_id}-v4`}><h2 className="text-2xl font-semibold text-center">
                 
                  <span>
                    {v4 !== "" ? (
                        <span> Lecture-4</span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

           

          
          </div>
          <div className="grid lg:grid-cols-4 m-12 lg:mx-28 lg:my-12 gap-8">
                <Link to={`/Lecture/${course_id}-v5`}><h2 className="text-2xl font-semibold text-center">
                
                  <span>
                    {v5 !== "" ? (
                        <span>  Lecture-5 </span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

                  <Link to={`/Lecture/${course_id}-v6`}><h2 className="text-2xl font-semibold text-center">
                  
                  <span>
                    {v6 !== "" ? (
                        <span>Lecture-6</span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

                  <Link to={`/Lecture/${course_id}-v7`}><h2 className="text-2xl font-semibold text-center">
                
                  <span>
                    {v7 !== "" ? (
                        <span>  Lecture-7 </span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

                  <Link to={`/Lecture/${course_id}-v8`}><h2 className="text-2xl font-semibold text-center">
                
                  <span>
                    {v8 !== "" ? (
                        <span>   Lecture-8 </span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

          </div>
          <div className="grid lg:grid-cols-4 m-12 lg:mx-28 lg:my-12 gap-8">
                 <Link to={`/Lecture/${course_id}-v9`}><h2 className="text-2xl font-semibold text-center">
                
                  <span>
                    {v9 !== "" ? (
                        <span>  Lecture-9 </span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

                  <Link to={`/Lecture/${course_id}-v10`}><h2 className="text-2xl font-semibold text-center">
                 
                  <span>
                    {v10 !== "" ? (
                        <span> Lecture-10 </span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

                  <Link to={`/Lecture/${course_id}-v11`}><h2 className="text-2xl font-semibold text-center">
                  
                  <span>
                    {v11 !== "" ? (
                        <span> Lecture-11 </span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

                  <Link to={`/Lecture/${course_id}-v12`}><h2 className="text-2xl font-semibold text-center">
                  
                  <span>
                    {v12 !== "" ? (
                        <span>Lecture-12</span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>
          </div>
          <div className="grid lg:grid-cols-4 m-12 lg:mx-28 lg:my-12 gap-8">
                <Link to={`/Lecture/${course_id}-v13`}><h2 className="text-2xl font-semibold text-center">
                 
                  <span>
                    {v13 !== "" ? (
                        <span> Lecture-13</span>
                    ): (
                      <span></span>
                    )}
                  </span>
                </h2></Link>

                  <Link to={`/Lecture/${course_id}-v14`}><h2 className="text-2xl font-semibold text-center">
                
                  <span>
                    {v14 !== "" ? (
                        <span>  Lecture-14 </span>
                    ): (
                      <p></p>
                    )}
                  </span>
                </h2></Link>

                 
          </div>

      </div>

      ) : (

      <div className="bg-gradient-to-r from-blue-200 to-green-100  h-80 ">
        <p className="text-3xl font-bold text-center lg:py-36">Sorry You have not bought this course.</p>
      </div>

      )}
      

      
      {/* Lecture section end here */}
      {/* <div>
        <h2 className="text-2xl font-bold text-center m-12">Your Progress</h2>
        <div className="ms-12">
          <p className="text-2xl font-bold">Course Completed: 80%</p>
          <p className="text-2xl font-bold">Accuracy: 97%</p>
          <p className="text-2xl font-bold">Exam Participated: 56%</p>
        </div>
      </div> */}
    </div>
  );
};

export default Vector;
