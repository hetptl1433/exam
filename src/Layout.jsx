import React from "react";
import { Outlet } from "react-router-dom";
import ExamNb from "./Section/ExamNb";
import ExamFooter from "./Section/ExamFooter";

function Layout() {
  return (
    <div>
    <ExamNb/>
      
        <Outlet />
      
      <ExamFooter/>
    </div>
  );
}

export default Layout;
