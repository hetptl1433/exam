import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Pages from "./Pages";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import ExamIndex from "./Pages/ExamIndex";
import "./assets/css/animate.css"

import "./assets/css/font-awesome-all.css";
import "./assets/css/imagebg.css";
import "./assets/css/responsive.css";
import PrivateRoute from "./Middleware/PrivateRoute";

import ExamCourseList from "./Pages/ExamCourseList";
import ExamPage from "./Pages/ExamPage";
import ExamResult from "./Pages/ExamResult";
import ExamLogin from "./Pages/ExamLogin";
import ExamFront from "./Pages/ExamFront";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ExamLogin />} />
          <Route
            path="/exam-dashboard"
            element={<PrivateRoute component={ExamIndex} />}
          />
          <Route
            path="examCourse/:groupName"
            element={<PrivateRoute component={ExamCourseList} />}
          />
          <Route path="examCourse/test/:id" element={<ExamFront />} />
          <Route path="examPage" element={<ExamPage />} />
          <Route path="examResult" element={<ExamResult />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
