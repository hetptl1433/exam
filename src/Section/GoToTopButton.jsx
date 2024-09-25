// src/components/GoToTopButton.js
import React, { useState, useEffect } from "react";
import "./GoToTop.css";
import { IoMdArrowRoundUp } from "react-icons/io";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Calculate scroll percentage
  const calculateScrollPercent = () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercent(scrolled);
  };

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", calculateScrollPercent);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", calculateScrollPercent);
    };
  }, []);

  return (
    <div className="go-to-top">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="go-to-top-button"
          style={{ bottom: "20px" }}
        >
          <svg className="progress-ring" width="50" height="50">
            <circle
              className="progress-ring__circle"
              stroke="darkblue" 
              strokeWidth="8"
              fill="transparent"
              r="20"
              cx="26"
              cy="24"
              style={{
                strokeDasharray: `${2 * Math.PI * 20}`,
                strokeDashoffset: `${
                  2 * Math.PI * 20 * (1 - scrollPercent / 100)
                }`,
              }}
            />
          </svg>
          <span>
            <IoMdArrowRoundUp />{" "}
          </span>
        </div>
      )}
    </div>
  );
};

export default GoToTopButton;
