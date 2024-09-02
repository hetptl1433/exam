import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import cp1 from "../assets/images/home/cp-1.jpg"; // Adjust the path according to your project structure
import cp2 from "../assets/images/home/cp-2.jpg";
import cp3 from "../assets/images/home/cp-3.jpg";
import cp4 from "../assets/images/home/cp-4.jpg";
import cp5 from "../assets/images/home/cp-5.jpg";
import {
  getIndustryUserMasterDetails,
  getUserGroup,
  listTestCategory,
} from "../Function/ExamIndex";
import { Link } from "react-router-dom";


const ExamIndex = () => {
  const [groupid, setGroupid]= useState("");
  const [userGroup, setUserGroup]= useState("");
    const [courses, setCourses] = useState([]);
  const handleLogout = () => {
    // Remove the token and user ID from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // Redirect to the login page
    window.location.replace("/login");
  };
  
const userId = localStorage.getItem("userId");

useEffect(()=>{
  getIndustryUserMasterDetails(userId).then((response) => {
    setGroupid(response.data.UserGroupCategory);
     getUserGroup(response.data.UserGroupCategory).then((response) => {
      setUserGroup(response.data.categoryName);
     });

    }); 
})
   useEffect(() => {
    listTestCategory(userGroup).then((response) => {
      // Filter the data based on userGroup
      const filteredData = response.data.filter(
        (course) => course.categoryName === userGroup
      );
      setCourses(filteredData);
    });
   }, [userGroup]);


  return (
    <div>
      <section className="news-style-two banner-style-18">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              {courses.map((course, index) => (
                <div
                  className="col-lg-6 col-md-6 col-sm-12 news-block"
                  key={index}
                >
                  <div
                    className="news-block-two wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <a href={course.categoryName}>
                          <img src={course.imageUrl} alt={course.altText} />
                        </a>
                      </figure>
                      <div className="lower-content">
                        <h3>
                          <a href={`examCourse/${course.categoryName}`}>
                            {course.categoryName}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamIndex;
