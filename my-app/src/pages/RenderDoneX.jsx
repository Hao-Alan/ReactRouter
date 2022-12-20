import React from "react";

const RenderDoneX = ({ todo }) => {
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
          // onClick={() => {
          //   deleteTask(item.taskName);
          // }}
        >
          <i class="fa fa-trash-alt"></i>
        </button>
        <button
          className="btn btn-success "
          type="button"
          // onClick={() => {
          //   changeStatusTaskAgain(item.taskName);
          // }}
        >
          <i class="fa fa-redo"></i>
        </button>
      </div>
    </li>
  );
};

export default RenderDoneX;
