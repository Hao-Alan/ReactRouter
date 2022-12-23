import React from "react";
import { useDispatch } from "react-redux";
import {
  changeStatusTask,
  deleteTask,
  fetchData,
} from "../features/counter/counterSlice";

const RenderTodox = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li
      className="task d-flex justify-content-between"
      style={{
        background: "white",
        borderRadius: "5px",
        padding: "5px",
        marginTop: "20px",
      }}
    >
      <span className="me-3 p-1 text-success">{item.taskName}</span>
      <div>
        <button
          className="btn btn-danger me-2"
          type="button"
          onClick={() => {
            dispatch(deleteTask(item.taskName)).then(() => {
              dispatch(fetchData());
            });
          }}
        >
          <i class="fa fa-trash-alt"></i>
        </button>
        <button
          className="btn btn-warning "
          type="button"
          onClick={() => {
            dispatch(changeStatusTask(item.taskName)).then(() => {
              dispatch(fetchData());
            });
          }}
        >
          <i class="fa fa-check-circle"></i>
        </button>
      </div>
    </li>
  );
};

export default RenderTodox;
