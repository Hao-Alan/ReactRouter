import React from "react";
import axios from "axios";

const TodoList = () => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        background: "cyan",
        padding: "30px",
        textAlign: "center",
        marginTop: "20px",
        borderRadius: "15px",
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_hiPyVRHG6EasNoC2epJoqzGLSVEH94vxQ&usqp=CAU"
        alt="hinh anh"
        style={{ width: "100%", height: "60px" }}
      />

      <h2>My Tasks</h2>
      <p>{Date()}</p>

      <div className="form-group d-flex mb-5">
        <input type="text" className="form-control" />
        <button className="btn btn-success">Add</button>
      </div>

      <div
        className="task d-flex justify-content-between"
        style={{
          maxWidth: "350px",
          background: "white",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <span className="me-3 p-1">go to sleep</span>
        <div>
          <button className="btn  me-2">
            <i class="fa fa-trash-alt"></i>
          </button>
          <button className="btn ">
            <i class="fa fa-check-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
