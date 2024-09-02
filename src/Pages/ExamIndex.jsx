import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import img from "../assets/images/background/8d1e764488f9483b97d3aa8d63851725.jpg"; // Adjust the path according to your project structure

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
                        <a href={`examCourse/${course.categoryName}`}>
                          <img src={img} alt={course.altText} />
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
