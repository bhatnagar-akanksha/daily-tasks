import React, { useState } from "react";
import "./MainContainer.css";
import AddTasksBtn from "./image/add-tasks.svg";
import TaskCard from "./TaskCard";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./App.css";

let taskData = [
  {
    id: 1,
    taskName: "sample task",
    taskDescription: "sample description",
  },
];

const ToDoList = () => {
  const [isOpen, setOpen] = useState(false);
  const [taskCard, setTaskCard] = useState(taskData);
  const handleAddTask = () => {
    setOpen(true);
  };
  const handleAddTaskSubmit = (e) => {
    e.preventDefault();
    var id = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    if (taskData[0].id == 1) {
      taskData.pop();
    }
    let newTaskData = {
      id: id,
      taskName: e.target.firstChild.childNodes[0].value,
      taskDescription: e.target.firstChild.childNodes[1].value,
    };
    setTaskCard([newTaskData, ...taskData]);
    taskData.unshift(newTaskData);
    setOpen(false);
  };
  return (
    <div>
      <div style={{ fontSize: "25px", display: "inline-block" }}> TO-DO:</div>
      <Popup
        contentStyle={{ width: "30%", height: "fit-content" }}
        trigger={
          <a className="add-task" href="#">
            <img
              onClick={handleAddTask}
              src={AddTasksBtn}
              alt="next button"
              width="40"
              height="40"
            />{" "}
          </a>
        }
        modal
        open={isOpen}
      >
        {(close) => (
          <div className="model">
            <div className="row-1">
              <span style={{ flexGrow: "2" }}>Add Task </span>
              <button onClick={() => close()}>
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form onSubmit={handleAddTaskSubmit}>
              <div className="add-task-inputs">
                <input
                  type="text"
                  className="form-control input-text"
                  placeholder="Task Name"
                  required=""
                />
                <textarea
                  type="text"
                  className="form-control input-text"
                  placeholder="Task Description"
                  required=""
                />
                <button type="submit" className="submit-new-task">
                  <span aria-hidden="true">Submit</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </Popup>
      {taskCard.map((taskCard) => (
        <TaskCard
          key={taskCard.id}
          title={taskCard.taskName}
          description={taskCard.taskDescription}
          display
        />
      ))}
    </div>
  );
};
export default ToDoList;
