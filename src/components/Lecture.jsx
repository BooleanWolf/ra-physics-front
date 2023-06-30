import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import ReactPlayer from "react-player";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./Provider/Provider";
import { useContext, useEffect, useState } from "react";

import YouTube from 'react-youtube';


const Lecture = () => {
  useTitle("CourseVideo");

   const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

  const dynamic = useLoaderData(); 
  const { user, logOut } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
  const [showVideo, setShowVideo] = useState(false); 

  const [access_id, setAccessId] = useState(""); 

  const [video_number, setVideoNumber] = useState(0); 

  const [whichVideo, setWhichVideo] = useState("v1"); 

  const [videoCode, setVideoCode] = useState(""); 

  const [videoUrl, setVideoUrl] = useState(""); 


  const { category, course_name, fee, image, course_id, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14 } = dynamic;
  
  useEffect(() => {
    fetch("https://ra-physics-back.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  const useAdmin = allUsers.find((n) => n?.email == user?.email);

  useEffect(()=>{
    const urls = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14]; 
    const url_path = window.location.pathname;
    const url_arr = url_path.split('/'); 
    const loader_url = url_arr.at(-1);
    const loader_arr = loader_url.split('-'); 
    setAccessId(loader_arr[0]);
    const video_number = loader_arr[1][1]; 
    const index = parseInt(video_number) - 1; 
    const videoUrl = urls[index]; 
    setVideoUrl(videoUrl); 
    setWhichVideo(loader_arr[1]); 
    setVideoNumber(video_number); 

    let videoCode = videoUrl.split("v=")[1].split("&")[0];
    
    setVideoCode(videoCode); 

    // console.log(access_id);
  }, []); 

  const checkCredentialInterval = setInterval(()=>{
    
    if(useAdmin?.courseList){
      const allowed_courses = useAdmin?.courseList;
      console.log(allowed_courses);
      if(allowed_courses.includes(access_id)) {
        setShowVideo(true); 
        
         clearInterval(checkCredentialInterval);
      }
      console.log(useAdmin?.courseList);
      clearInterval(checkCredentialInterval);
    }
  }, 1000);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-200 to-green-100  h-80 ">
        <h2 className="text-3xl font-bold text-center py-36">
          Lecture <span>{video_number}</span> <br />
          {course_name}
        </h2>
      </div>
      {showVideo ? (
       <div className="w-2/3 mx-auto my-12">
              <ReactPlayer
                controls
                url={videoUrl}
                width="100%"
                height="450px"
              />
        </div>
      ) : (
           
           <p
        className="font-semibold mx-16 text-2xl
      "
      >
        You have no access to this course. 
      </p> 

      )}
   
      {/* <p
        className="font-semibold mx-16 text-2xl
      "
      >
        Lecture 1: Introduction to Vector
      </p> */}
      {/* <div className="card-actions justify-center my-12">
        <Link>
          <button className="btn bg-gradient-to-r from-blue-500 to-green-300 border-none ">
            Complete
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Lecture;
