import { useEffect } from "react";
import "./App.css";
import Courses from "./Courses";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="app container">
      <h3>Course Enqiry Application</h3>
      <hr />
      <Outlet />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
