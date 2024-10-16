import React, { useEffect } from 'react'
import "animate.css";
import WOW from "wowjs";
import { Link } from 'react-router-dom';

// Initialize WOW.js
new WOW.WOW().init();

const ExamResult = () => {
        useEffect(() => {
          new WOW.WOW().init();
        }, []);
  return (
    <div>
      <section className="organization-section centred banner-style-18">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
              <div
                className="single-item wow flipInY"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="left-layer"></div>
                  <div className="right-layer"></div>
                  <div className="icon-box">
                    <i className="flaticon-project"></i>
                  </div>
                  <h4>
                    <a className="text-decoration-none" href="#">
                      Thank you for Attending this exam. <br /> Exam result will
                      be declared shortly.
                    </a>
                  </h4>
                  <div className="text">Good Luck !</div>
                </div>
              </div>
            </div>
          </div>
          <div className="more-btn mt-3">
            <Link to="/examDashBoard" className="theme-btn-two">
              Home Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExamResult
