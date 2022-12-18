import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoListAgain = () => {
  const [state, setState] = useState({
    taskList: [],
    tasks: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  });
  // console.log("xxx", state);
  const renderTodo = () => {
    return state.taskList
      .filter((item) => !item.status)
      .map((item, index) => {
        return (
          <li
            className="task d-flex justify-content-between"
            style={{
              background: "white",
              borderRadius: "5px",
              padding: "5px",
              marginTop: "20px",
            }}
            key={index}
          >
            <span className="me-3 p-1 text-success">{item.taskName}</span>
            <div>
              <button
                className="btn btn-danger me-2"
                type="button"
                onClick={() => {
                  deleteTask(item.taskName);
                }}
              >
                <i class="fa fa-trash-alt"></i>
              </button>
              <button
                className="btn btn-warning "
                type="button"
                onClick={() => {
                  changeStatusTask(item.taskName);
                }}
              >
                <i class="fa fa-check-circle"></i>
              </button>
            </div>
          </li>
        );
      });
  };

  const renderDone = () => {
    return state.taskList
      .filter((item) => item.status)
      .map((item, index) => {
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
            key={index}
          >
            <span className="me-3 p-1 text-success">{item.taskName}</span>
            <div>
              <button
                className="btn btn-danger me-2"
                type="button"
                onClick={() => {
                  deleteTask(item.taskName);
                }}
              >
                <i class="fa fa-trash-alt"></i>
              </button>
              <button
                className="btn btn-success "
                type="button"
                onClick={() => {
                  changeStatusTaskAgain(item.taskName);
                }}
              >
                <i class="fa fa-redo"></i>
              </button>
            </div>
          </li>
        );
      });
  };

  const fetchData = async () => {
    try {
      const result = await axios.get(
        "https://svcy.myclass.vn/api/ToDoList/GetAllTask"
      );
      setState({ ...state, taskList: result.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    let { value, name } = e.target;

    let newTasks = { ...state.tasks };
    newTasks = { ...newTasks, [name]: value };
    console.log(newTasks);

    let newError = { ...state.errors };
    if (value === "") {
      // alert([name] + "is invalid");
      newError = { ...newError, [name]: name + `không hợp lệ` };
    } else {
      newError = { ...newError, [name]: "" };
    }

    setState({ ...state, tasks: newTasks, errors: newError });
  };

  const postData = async () => {
    try {
      const resolve = await axios.post(
        "https://svcy.myclass.vn/api/ToDoList/AddTask",
        state.tasks
      );
      console.log(resolve);
      fetchData();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postData();
    let taskNews = { taskName: "" };

    setState({ ...state, tasks: taskNews });
    // fetchData();
  };

  const deleteTask = async (item) => {
    // console.log(item);
    try {
      const resolve = await axios.delete(`
      https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${item}`);
      console.log(resolve);
      fetchData();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const changeStatusTask = async (item) => {
    try {
      const result = await axios.put(
        `https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${item}`
      );
      fetchData();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const changeStatusTaskAgain = async (item) => {
    try {
      const result = await axios.put(
        `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${item}`
      );
      fetchData();
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <hr />
          <div className="form-group d-flex ">
            <input
              type="text"
              className=" form-control"
              name="taskName"
              value={state.tasks.taskName}
              onChange={handleChange}
            />
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
          <p className="text-danger">{state.errors.taskName}</p>
          <ul className="p-0">{renderTodo()}</ul>
          <hr />
          <ul className="p-0">{renderDone()}</ul>
        </div>
      </form>
    </div>
  );
};

export default TodoListAgain;
