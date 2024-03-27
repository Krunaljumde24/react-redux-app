import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./CourseReducer";
import { useNavigate } from "react-router-dom";

function Courses() {
  // const couseData = useSelector((state) => state.courses);
  // console.log(couseData);
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data);

  const navigate = useNavigate();

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Course Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((data, index) => {
              return (
                <tr id={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.courseName}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => {
                        navigate("/enquiry", {
                          state: { courseName: data.courseName },
                        });
                      }}
                    >
                      Enqiry
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
