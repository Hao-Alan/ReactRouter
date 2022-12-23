import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  fetchData,
  postDatax,
  selectTodo,
} from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import RenderTodox from "./RenderTodox";
import RenderDoneX from "./RenderDoneX";

const TodoListRedux = () => {
  const dispatch = useDispatch();
  const todo = useSelector(selectTodo);
  console.log("todo check", todo);

  const [state, setState] = useState({
    tasks: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  });

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderTodo = () => {
    return todo
      .filter((item) => !item.status)
      .map((hello, index) => <RenderTodox key={index} item={hello} />);
  };

  const renderDone = () => {
    return todo
      .filter((item) => item.status)
      .map((item, index) => <RenderDoneX key={index} todo={item} />);
  };

  const handleChange = (e) => {
    let { value, name } = e.target;

    let newTasks = { ...state.tasks };
    newTasks = { ...newTasks, [name]: value };
    console.log(newTasks);

    let newError = { ...state.errors };
    if (value === "") {
      newError = { ...newError, [name]: name + `không hợp lệ` };
    } else {
      newError = { ...newError, [name]: "" };
    }

    setState({ ...state, tasks: newTasks, errors: newError });
  };

  // const postData = async () => {
  //   try {
  //     const resolve = await axios.post(
  //       "https://svcy.myclass.vn/api/ToDoList/AddTask",
  //       state.tasks
  //     );
  //     console.log(resolve);
  //     fetchData();
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // postData();
    let taskNews = { ...state.tasks };
    dispatch(postDatax(taskNews)).then(() => {
      dispatch(fetchData());
    });

    // setState({ ...state, tasks: taskNews });
    // fetchData();
  };

  // const deleteTask = async (item) => {
  //   // console.log(item);
  //   try {
  //     const resolve = await axios.delete(`
  //     https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${item}`);
  //     console.log(resolve);
  //     fetchData();
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };

  // const changeStatusTask = async (item) => {
  //   try {
  //     const result = await axios.put(
  //       `https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${item}`
  //     );
  //     fetchData();
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };

  // const changeStatusTaskAgain = async (item) => {
  //   try {
  //     const result = await axios.put(
  //       `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${item}`
  //     );
  //     fetchData();
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };
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

export default TodoListRedux;
