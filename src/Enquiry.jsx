import React, { useState } from "react";
import "./App.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Enquiry() {
  const [enqiryDetails, setEnqiryDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  let handleDetailChange = (event) => {
    let key = event.target.name;
    let val = event.target.value;

    if (key === "name") setEnqiryDetails({ ...enqiryDetails, name: val });
    if (key === "email") setEnqiryDetails({ ...enqiryDetails, email: val });
    if (key === "mobile") setEnqiryDetails({ ...enqiryDetails, mobile: val });
    if (key === "message") setEnqiryDetails({ ...enqiryDetails, message: val });
  };

  const location = useLocation();
  const courseName = location.state.courseName;

  let handleSave = (event) => {
    event.preventDefault();
    console.log(enqiryDetails);

    // if (
    //   enqiryDetails.name != "" &&
    //   enqiryDetails.email != "" &&
    //   enqiryDetails.mobile != "" &&
    //   enqiryDetails.message != ""
    // ) {
    //   axios
    //     .post("http://localhost:3001/users", JSON.stringify(enqiryDetails))
    //     .then((resp) => {
    //       console.log(resp);
    //       if (resp.status === 201) toast.success("Data Saved!");
    //     })
    //     .catch((err) => {
    //       throw err;
    //     });
    // } else {
    //   toast.error("Please fill all the input details.");
    // }
  };

  return (
    <div className="enqiry">
      <form>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="name">
            Your Name
          </span>
          <input
            type="text"
            className="form-control"
            name="name"
            required
            value={enqiryDetails.name}
            onChange={(event) => handleDetailChange(event)}
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="email">
            Email Id
          </span>
          <input
            type="text"
            name="email"
            required
            className="form-control"
            value={enqiryDetails.email}
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="mobile">
            Mobile No.
          </span>
          <input
            type="text"
            name="mobile"
            required
            className="form-control"
            value={enqiryDetails.mobile}
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="message">
            Your mesage
          </span>
          <input
            type="text"
            name="message"
            required
            className="form-control"
            value={enqiryDetails.message}
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="courseName">
            Your Selected Course
          </span>
          <input
            type="text"
            name="couserName"
            className="form-control"
            value={courseName}
            readOnly
          />
        </div>

        <button
          type="submit"
          className="btn btn-sm btn-success"
          onClick={(event) => handleSave(event)}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Enquiry;
