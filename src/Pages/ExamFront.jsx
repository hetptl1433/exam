import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTestCatMasterDetails } from "../Function/ExamIndex";
import GoToTopButton from "../Section/GoToTopButton";

const ExamFront = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [testdata, setTestData] = useState(null);
  const { id } = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    getTestCatMasterDetails(id).then((res) => {
      setTestData(res.data);
    });
  }, [id]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSubmit = () => {
    let language = "";

    // Determine the language based on the selected tab
    switch (activeTab) {
      case "tab-1":
        language = "english";
        break;
      case "tab-2":
        language = "hindi";
        break;
      case "tab-3":
        language = "gujarati";
        break;
      default:
        language = "";
    }

    // Navigate to the new URL
    navigate(`/examCourse/test/${id}/${language}`);
  };

  if (!testdata) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div>
      <GoToTopButton/>
      <section className="news-style-two banner-style-18">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 news-block">
                <div id="content_block_43">
                  <div className="content-box wall-box">
                    <div className="tabs-box">
                      <div className="tab-btn-box">
                        <ul className="tab-btns tab-buttons clearfix resMob "> 

                          <li
                            className={`tab-btn ${
                              activeTab === "tab-1" ? "active-btn" : ""
                            }`}
                            onClick={() => handleTabClick("tab-1")}
                          >
                            English
                          </li>
                          <li
                            className={`tab-btn ${
                              activeTab === "tab-2" ? "active-btn" : ""
                            }`}
                            onClick={() => handleTabClick("tab-2")}
                          >
                            Hindi
                          </li>
                          <li
                            className={`tab-btn ${
                              activeTab === "tab-3" ? "active-btn" : ""
                            }`}
                            onClick={() => handleTabClick("tab-3")}
                          >
                            Gujarati
                          </li>
                        </ul>
                      </div>
                      <div className="tabs-content box-deion">
                        <div className="tab d-block transform-none">
                          <div className="row align-items-center">
                            <div className="col-md-8">
                              <h4 className="cource-title">
                                {testdata.TestName}
                              </h4>
                            </div>
                            <div className="col-md-4">
                              <table className="table table-bordered table-timing">
                                <tbody>
                                  <tr>
                                    <td>Total Questions</td>
                                    <td>{testdata.TotalQues}</td>
                                  </tr>
                                  <tr>
                                    <td>Total Minutes</td>
                                    <td>{testdata.TotalTime} Min</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        {/* Tab 1 Content */}
                        <div
                          className={`tab ${
                            activeTab === "tab-1" ? "active-tab" : ""
                          }`}
                          id="tab-1"
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: testdata.EngDesc,
                            }}
                          />
                        </div>

                        {/* Tab 2 Content */}
                        <div
                          className={`tab ${
                            activeTab === "tab-2" ? "active-tab" : ""
                          }`}
                          id="tab-2"
                        >
                          <div
                            className="hindi-text"
                            dangerouslySetInnerHTML={{
                              __html: testdata.HindiDesc,
                            }}
                          />
                        </div>

                        {/* Tab 3 Content */}
                        <div
                          className={`tab ${
                            activeTab === "tab-3" ? "active-tab" : ""
                          }`}
                          id="tab-3"
                        >
                          <div
                            className="gujarati-text"
                            dangerouslySetInnerHTML={{
                              __html: testdata.GujDesc,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab d-block transform-none">
            <div className="text-center form-group message-btn mt-4">
              <button
                type="button"
                className="theme-btn-two"
                onClick={handleSubmit}
              >
                Start Exam
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamFront;
