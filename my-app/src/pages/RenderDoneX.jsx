import React from "react";
import { useDispatch } from "react-redux";
import {
  changeStatusTaskAgain,
  deleteTask,
  fetchData,
} from "../features/counter/counterSlice";

const RenderDoneX = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li
      className="task d-flex justify-content-between"
      style={{
        background: "white",
        borderRadius: "5px",
        padding: "5px",
        marginTop: "20px",
        width: "100%",
      }}
    >
      <span className="me-3 p-1 text-success">{todo.taskName}</span>
      <div>
        <button
          className="btn btn-danger me-2"
          type="button"
          onClick={() => {
            dispatch(deleteTask(todo.taskName)).then(() => {
              dispatch(fetchData());
            });
          }}
        >
          <i class="fa fa-trash-alt"></i>
        </button>
        <button
          className="btn btn-success "
          type="button"
          onClick={() => {
            dispatch(changeStatusTaskAgain(todo.taskName)).then(() => {
              dispatch(fetchData());
            });
          }}
        >
          <i class="fa fa-redo"></i>
        </button>
      </div>
    </li>
  );
};

export default RenderDoneX;
