import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "./CourseReducer.js";
import Enqiry from "./Enquiry.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Courses from "./Courses.jsx";

const courseStore = configureStore({
  reducer: {
    courses: CourseReducer,
  },
});

let courseRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Courses />} />
      <Route path="/enquiry" element={<Enqiry />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={courseStore}>
    <RouterProvider router={courseRouter}>
      <App />
    </RouterProvider>
  </Provider>
);
