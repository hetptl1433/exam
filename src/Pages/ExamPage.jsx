import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { createTestData, createTestResult, getTestCatMasterDetails, getTestQuestions } from "../Function/ExamIndex";
import GoToTopButton from "../Section/GoToTopButton";
const ExamPage = () => {
   const navigate = useNavigate();

  const { id, Language } = useParams();
  const [questionData, setQuestionData] = useState([]);
  const [activeTab, setActiveTab] = useState("question-box-1");
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [remainingTime, setRemainingTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  
  const [IsActive, setIsActive] = useState(true);

  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const userId = localStorage.getItem("userId");

  const questionsPerPage = 10;

  useEffect(() => {
    // Fetch questions and total time
    const fetchData = async () => {
      try {
        const res = await getTestQuestions(id);
        const sortedQuestions = res.data.sort(
          (a, b) => a.SortOrder - b.SortOrder
        );
        setQuestionData(sortedQuestions);
        const testRes= await getTestCatMasterDetails(id);
        
       const totalTimeInSeconds = testRes.data.TotalTime;
       const totalTimeInMinutes = totalTimeInSeconds * 60;
       setTotalTime(totalTimeInMinutes);
       console.log(totalTimeInMinutes);
        const totalTime = totalTimeInMinutes; 
        setRemainingTime(totalTime);

        // Start countdown timer
        const timer = setInterval(() => {
          setRemainingTime((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(timer);
              handleSubmit(); // Automatically submit when time runs out
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on component unmount
      } catch (error) {
        console.error("Error fetching test questions:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
const handleRadioChange = (questionId, value, pointMasterId) => {
  setSelectedOptions((prevOptions) => {
    const newOptions = {
      ...prevOptions,
      [questionId]: { value, pointMasterId },
    };

    // Determine the index of the current question
    const currentQuestionIndex = questionData.findIndex(
      (q) => q._id === questionId
    );

    // Incremental question number, considering the page
    const questionNumber = startIdx + currentQuestionIndex + 1;

    setCurrentQuestionNumber(questionNumber);
    return newOptions;
  });
};




  const handleNextPage = () => {
    if (validatePage()) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      window.alert(
        "Please select an option for all questions before proceeding."
      );
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

const handleSubmit = async () => {
  if (validatePage()) {
    const currentDate = new Date().toISOString();
    console.log(currentDate);
    const usedTime = totalTime - remainingTime;

    // Prepare data for creating test result
    const testResultData = {
      userId,
      id,
      TotalTime: usedTime,
      ExamDate: currentDate,
      IsActive,
    };

    // Create the test result
    try {
      await createTestResult(testResultData);
      console.log("Test result created successfully.");
    } catch (error) {
      console.error("Error creating test result:", error);
      return;
    }

    // Prepare submission data in one array
    const submissionData = Object.entries(selectedOptions).map(
      ([questionId, { value, pointMasterId }]) => {
        const questionIndex = questionData.findIndex(
          (q) => q._id === questionId
        );
        const questionNumber = questionIndex + 1;

        return {
          userId,
          id,
          Language,
          questionId,
          selectedOption: value,
          pointMasterId,
          questionNumber,
          IsActive,
        };
      }
    );

    // Log the submission data
    console.log("Form submitted with the following answers:", submissionData);

    // Send the entire array of entries to createTestData in one API call
    try {
      await createTestData(submissionData); // Send all data at once
      console.log("All test results sent successfully.");
    } catch (error) {
      console.error("Error sending test results:", error);
    }

    console.log(
      "Time remaining:",
      remainingTime,
      "seconds",
      usedTime,
      totalTime
    );

    navigate("/examResult");
  } else {
    window.alert(
      "Please select an option for all questions before submitting."
    );
  }
};






  const validatePage = () => {
    const startIdx = (currentPage - 1) * questionsPerPage;
    const endIdx = startIdx + questionsPerPage;
    const currentQuestions = questionData.slice(startIdx, endIdx);

    return currentQuestions.every((question) => selectedOptions[question._id]);
  };

  const startIdx = (currentPage - 1) * questionsPerPage;
  const endIdx = startIdx + questionsPerPage;
  const currentQuestions = questionData.slice(startIdx, endIdx);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section className="service-details banner-style-18">
      <GoToTopButton />

      <div className="container">
        <div className="row exam-port">
          <div className="col-lg-12 col-md-12 col-sm-12 content-side">
            <div className="service-details-content">
              <div className="inner-box">
                <div className="top-content">
                  <div className="sec-title d-flex justify-content-between align-items-center">
                    <h2>Study Habit Inventory</h2>
                    <p>Time Remaining: {formatTime(remainingTime)}</p>
                  </div>
                  <p>
                    Welcome to the Study Habit Inventory! Please answer the
                    following questions to help us understand your study habits
                    and preferences.
                  </p>

                  <div id="page-wrap">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "question-box-1" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("question-box-1")}
                        >
                          Home
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">
                      {currentQuestions.map((question) => (
                        <div
                          key={question._id}
                          className={`tab-pane fade ${
                            activeTab === "question-box-1" ? "show active" : ""
                          }`}
                          role="tabpanel"
                          aria-labelledby="question-tab-1"
                        >
                          <div className="text question-box">
                            <div className="row">
                              <div className="col-md-7">
                                <p className="mb-1">
                                  Question : {question.SortOrder}
                                </p>
                                <div className="">
                                  {Language === "english" && (
                                    <>
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: question.EngQues,
                                        }}
                                      ></div>
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: question.HinQues,
                                        }}
                                      ></div>
                                    </>
                                  )}
                                  {Language === "hindi" && (
                                    <>
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: question.HinQues,
                                        }}
                                      ></div>
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: question.EngQues,
                                        }}
                                      ></div>
                                    </>
                                  )}
                                  {Language === "gujarati" && (
                                    <>
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: question.GujQues,
                                        }}
                                      ></div>
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: question.EngQues,
                                        }}
                                      ></div>
                                    </>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-3 col-lg-5 p-5">
                                <div className="ans-radio text-left">
                                  {["A", "B", "C", "D", "E"].map(
                                    (option, index) => {
                                      const answerKey = `EngAns${option}`;
                                      const pointMasterIdKey = `PointSelID${option}`;
                                      const selectedValue = `PointSelID${option}`;

                                      if (question[answerKey]) {
                                        return (
                                          <div
                                            className="form-check"
                                            key={index}
                                          >
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              name={question._id}
                                              id={`inlineRadio${question._id}-${
                                                index + 1
                                              }`}
                                              value={option} // Pass 'option' directly as value
                                              checked={
                                                selectedOptions[question._id]
                                                  ?.value === option
                                              }
                                              onChange={() =>
                                                handleRadioChange(
                                                  question._id,
                                                  option,
                                                  question[pointMasterIdKey] // Pass pointMasterId
                                                )
                                              }
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor={`inlineRadio${
                                                question._id
                                              }-${index + 1}`}
                                            >
                                              <div
                                                dangerouslySetInnerHTML={{
                                                  __html:
                                                    Language === "english"
                                                      ? question[answerKey]
                                                      : Language === "hindi"
                                                      ? question[
                                                          `HinAns${option}`
                                                        ]
                                                      : question[
                                                          `GujAns${option}`
                                                        ],
                                                }}
                                              ></div>
                                            </label>
                                          </div>
                                        );
                                      }

                                      return null;
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="pagination-controls mt-3 d-flex  justify-content-end">
                        {currentPage > 1 && (
                          <div className="justify-content-start mr-3">
                            <button
                              type="button"
                              className="theme-btn-two prev"
                              onClick={handlePrevPage}
                            >
                              Prev Page
                            </button>
                          </div>
                        )}
                        {endIdx < questionData.length ? (
                          <div className=" d-flex justify-content-end">
                            <button
                              type="button"
                              className="theme-btn-two next"
                              onClick={handleNextPage}
                            >
                              Next Page
                            </button>
                          </div>
                        ) : (
                          <div className="justify-content-center">
                            <button
                              onClick={handleSubmit}
                              className="theme-btn-two "
                            >
                              Submit
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamPage;
