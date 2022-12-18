import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
  const [info, setInfo] = useState({
    taskList: [],
    values: {
      taskName: "",
    },
    error: {
      taskName: "",
    },
  });
  console.log(info);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://svcy.myclass.vn/api/ToDoList/GetAllTask"
      );
      // console.log(response);
      // console.log(response.data);
      let newObject = {
        taskList: response.data,
      };
      setInfo(newObject);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(info);

  const deleteTask = async (task) => {
    try {
      const taskDel = await axios.delete(
        `https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${task}`
      );
      console.log("bbb", taskDel);
      getData();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const changeToDone = async (task) => {
    try {
      const result = await axios.put(
        `https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${task}`
      );
      getData();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const changeReject = async (item) => {
    try {
      const result = await axios.put(
        `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${item}`
      );
      getData();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const renderTodo = () => {
    return info.taskList
      .filter((item) => !item.status)
      .map((item, index) => {
        return (
          <div
            className="task d-flex justify-content-between"
            style={{
              maxWidth: "350px",
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
                  changeToDone(item.taskName);
                }}
              >
                <i class="fa fa-check-circle"></i>
              </button>
            </div>
          </div>
        );
      });
  };

  const renderDone = () => {
    return info.taskList
      .filter((item) => item.status)
      .map((item, index) => {
        return (
          <div
            className="task d-flex justify-content-between"
            style={{
              maxWidth: "350px",
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
                className="btn btn-success "
                type="button"
                onClick={() => {
                  changeReject(item.taskName);
                }}
              >
                <i class="fa fa-redo"></i>
              </button>
            </div>
          </div>
        );
      });
  };

  const handleChange = (e) => {
    let { value, name } = e.target;
    // console.log(name, value);

    let newValues = { ...info.values };
    newValues = { ...newValues, [name]: value };

    let newErrors = { ...info.error };
    const regex = /^[a-zA-Z]*$/;

    if (!regex.test(value) || value.trim() === "") {
      newErrors[name] = name + " is in Valid";
    } else {
      newErrors[name] = "";
    }

    // newErrors = {...newErrors, }

    setInfo({ ...info, values: newValues, error: newErrors });
    // console.log(info);
  };

  const addTask = (e) => {
    e.preventDefault();

    const postData = async () => {
      try {
        const result = await axios.post(
          "https://svcy.myclass.vn/api/ToDoList/AddTask",
          {
            taskName: info.values.taskName,
          }
        );
        // console.log(result);
        getData();
      } catch (error) {
        console.log(error.response.data);
      }
    };
    postData();
  };

  return (
    <form
      onSubmit={(e) => {
        addTask();
      }}
    >
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

        <div className="form-group d-flex ">
          <input
            type="text"
            className=" form-control"
            name="taskName"
            onChange={handleChange}
          />
          <button className="btn btn-success" onClick={addTask} type="submit">
            Add
          </button>
        </div>
        <p className="text-danger">{info?.error?.taskName}</p>

        <>{renderTodo()}</>

        <hr />

        <>{renderDone()}</>
      </div>
    </form>
  );
};

export default TodoList;
