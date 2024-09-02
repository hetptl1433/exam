import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listTestGroupByName } from "../Function/ExamIndex";

const ExamCourseList = () => {
  const { groupName } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    listTestGroupByName(groupName).then((response) => {
      setCourses(response.data);
    });
  }, [groupName]);

  return (
    <div>
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
                    data-wow-delay={`300ms`}
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <a href={`${course._id}`}>
                          <img
                            src={`${process.env.REACT_APP_API_URL_BPC}/${course.productImage}`}
                            alt={course.TestName}
                          />
                        </a>
                      </figure>
                      <div className="lower-content">
                        <h3>
                          <a href="course-details.html">{course.TestName}</a>
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
