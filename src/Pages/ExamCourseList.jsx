import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { listTestGroupByName } from "../Function/ExamIndex";
import axios from "axios";

const ExamCourseList = () => {
  const navigate = useNavigate();
  const { groupName } = useParams();
  const [courses, setCourses] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    listTestGroupByName(groupName).then((response) => {
      setCourses(response.data);
    });
  }, [groupName]);

      const checkUserData = async (courseId) => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/ResultData/${courseId}/${userId}`
          );

          // If data is found, proceed with navigation
          if (response.status === 200 && response.data) {
            toast.error(
              "You can only give test once"
            );
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            navigate(`/examCourse/test/${courseId}`);
            
          } else {
            toast.error("An error occurred while checking the data.");
          }
        }
      };



  return (
    <div>
      <ToastContainer/>
      <section className="news-style-two banner-style-18">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              {courses.map((course, index) => (
                <div
                  key={course._id}
                  className="col-lg-6 col-md-6 col-sm-12 news-block"
                >
                  <div
                    className="news-block-two wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <a onClick={() => checkUserData(`${course._id}`)}>
                          <img
                            src={`${process.env.REACT_APP_API_URL_BPC}/${course.productImage}`}
                            alt={course.TestName}
                          />
                        </a>
                      </figure>
                      <div className="lower-content">
                        <h3>
                          <a onClick={() => checkUserData(`${course._id}`)}>
                            {course.TestName}
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

export default ExamCourseList;
