import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to include Bootstrap CSS

const ExamPage = () => {
  const [activeTab, setActiveTab] = useState("question-box-1");
  const [selectedOptions, setSelectedOptions] = useState({
    question1: "",
    question4: "",
    question7: "",
  });

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleRadioChange = (question, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [question]: value,
    }));
  };

  return (
    <section className="service-details banner-style-18">
      <div className="container">
        <div className="row exam-port">
          <div className="col-lg-12 col-md-12 col-sm-12 content-side">
            <div className="service-details-content">
              <div className="inner-box">
                <div className="top-content">
                  <div className="sec-title">
                    <h2>Study Habit Inventory</h2>
                    <p>
                      Welcome to the Study Habit Inventory! Please answer the
                      following questions to help us understand your study
                      habits and preferences.
                    </p>
                  </div>

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
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "question-box-2" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("question-box-2")}
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "question-box-3" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("question-box-3")}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">
                      {/* Question Box 1 */}
                      {activeTab === "question-box-1" && (
                        <div
                          className="tab-pane fade show active"
                          id="question-box-1"
                          role="tabpanel"
                          aria-labelledby="question-tab-1"
                        >
                          <div className="text question-box">
                            <p className="mb-1">Question : 1</p>
                            <p>
                              How would you describe your motivation towards
                              achieving significant goals?
                            </p>
                            <div className="row">
                              <div className="col-md-9 col-lg-7">
                                <ul>
                                  <li>
                                    (a) I would like to accomplish something of
                                    great significance.
                                  </li>
                                  <li>
                                    (b) I like to find out what great men have
                                    thought about various problems in which I am
                                    interested.
                                  </li>
                                  <li>
                                    (a) कोई अत्यधिक महत्व का कार्य करना मुझे
                                    पसंद है |
                                  </li>
                                  <li>
                                    (b) जिन प्रश्नों में मुझे रुचि है, उन पर
                                    महापुरुषों के विचार जानना मुझे अच्छा लगता है
                                    |
                                  </li>
                                  <li>
                                    (a) હું કોઈ અતિ મહત્વનું કાર્ય કરવાનું પસંદ
                                    કરીશ.
                                  </li>
                                  <li>
                                    (b) મને જે પ્રશ્નોમાં રસ છે તે પ્રશ્નો વિશે
                                    મહાન પુરૂષોએ શું વિચાર્યું છે તે જાણવાનું
                                    મને ગમે છે.
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-5">
                                <div className="ans-radio text-left">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="question1"
                                      id="inlineRadio1"
                                      value="option1"
                                      checked={
                                        selectedOptions.question1 === "option1"
                                      }
                                      onChange={() =>
                                        handleRadioChange(
                                          "question1",
                                          "option1"
                                        )
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineRadio1"
                                    >
                                      1 : I would like to accomplish something
                                      of great significance.
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="question1"
                                      id="inlineRadio2"
                                      value="option2"
                                      checked={
                                        selectedOptions.question1 === "option2"
                                      }
                                      onChange={() =>
                                        handleRadioChange(
                                          "question1",
                                          "option2"
                                        )
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineRadio2"
                                    >
                                      2 : I like to find out what great men have
                                      thought about various problems in which I
                                      am interested.
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Repeat similar blocks for additional questions in this tab */}
                        </div>
                      )}

                      {/* Question Box 2 */}
                      {activeTab === "question-box-2" && (
                        <div
                          className="tab-pane fade"
                          id="question-box-2"
                          role="tabpanel"
                          aria-labelledby="question-tab-2"
                        >
                          <div className="text question-box">
                            <p className="mb-1">Question : 4</p>
                            <p>
                              Which approach resonates more with your study
                              habits?
                            </p>
                            <div className="row">
                              <div className="col-md-9 col-lg-11">
                                <ul>
                                  <li>
                                    (a) I would like to accomplish something of
                                    great significance.
                                  </li>
                                  <li>
                                    (b) I like to find out what great men have
                                    thought about various problems in which I am
                                    interested.
                                  </li>
                                  <li>
                                    (a) कोई अत्यधिक महत्व का कार्य करना मुझे
                                    पसंद है |
                                  </li>
                                  <li>
                                    (b) जिन प्रश्नों में मुझे रुचि है, उन पर
                                    महापुरुषों के विचार जानना मुझे अच्छा लगता है
                                    |
                                  </li>
                                  <li>
                                    (a) હું કોઈ અતિ મહત્વનું કાર્ય કરવાનું પસંદ
                                    કરીશ.
                                  </li>
                                  <li>
                                    (b) મને જે પ્રશ્નોમાં રસ છે તે પ્રશ્નો વિશે
                                    મહાન પુરૂષોએ શું વિચાર્યું છે તે જાણવાનું
                                    મને ગમે છે.
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-1">
                                <div className="ans-radio">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="question4"
                                      id="inlineRadio4-1"
                                      value="option1"
                                      checked={
                                        selectedOptions.question4 === "option1"
                                      }
                                      onChange={() =>
                                        handleRadioChange(
                                          "question4",
                                          "option1"
                                        )
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineRadio4-1"
                                    >
                                      1
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="question4"
                                      id="inlineRadio4-2"
                                      value="option2"
                                      checked={
                                        selectedOptions.question4 === "option2"
                                      }
                                      onChange={() =>
                                        handleRadioChange(
                                          "question4",
                                          "option2"
                                        )
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineRadio4-2"
                                    >
                                      2
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Repeat similar blocks for additional questions in this tab */}
                        </div>
                      )}

                      {/* Question Box 3 */}
                      {activeTab === "question-box-3" && (
                        <div
                          className="tab-pane fade"
                          id="question-box-3"
                          role="tabpanel"
                          aria-labelledby="question-tab-3"
                        >
                          <div className="text question-box">
                            <p className="mb-1">Question : 7</p>
                            <p>
                              How do you prefer to approach solving problems?
                            </p>
                            <div className="row">
                              <div className="col-md-9 col-lg-11">
                                <ul>
                                  <li>
                                    (a) I would like to accomplish something of
                                    great significance.
                                  </li>
                                  <li>
                                    (b) I like to find out what great men have
                                    thought about various problems in which I am
                                    interested.
                                  </li>
                                  <li>
                                    (a) कोई अत्यधिक महत्व का कार्य करना मुझे
                                    पसंद है |
                                  </li>
                                  <li>
                                    (b) जिन प्रश्नों में मुझे रुचि है, उन पर
                                    महापुरुषों के विचार जानना मुझे अच्छा लगता है
                                    |
                                  </li>
                                  <li>
                                    (a) હું કોઈ અતિ મહત્વનું કાર્ય કરવાનું પસંદ
                                    કરીશ.
                                  </li>
                                  <li>
                                    (b) મને જે પ્રશ્નોમાં રસ છે તે પ્રશ્નો વિશે
                                    મહાન પુરૂષોએ શું વિચાર્યું છે તે જાણવાનું
                                    મને ગમે છે.
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-1">
                                <div className="ans-radio">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="question7"
                                      id="inlineRadio7-1"
                                      value="option1"
                                      checked={
                                        selectedOptions.question7 === "option1"
                                      }
                                      onChange={() =>
                                        handleRadioChange(
                                          "question7",
                                          "option1"
                                        )
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineRadio7-1"
                                    >
                                      1
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="question7"
                                      id="inlineRadio7-2"
                                      value="option2"
                                      checked={
                                        selectedOptions.question7 === "option2"
                                      }
                                      onChange={() =>
                                        handleRadioChange(
                                          "question7",
                                          "option2"
                                        )
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineRadio7-2"
                                    >
                                      2
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Repeat similar blocks for additional questions in this tab */}
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
    </section>
  );
};

export default ExamPage;
