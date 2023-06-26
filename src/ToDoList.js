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
    isComplete: false,
  },
  {
    id: 2,
    taskName: "sample task",
    taskDescription: "sample description",
    isComplete: true, 
  },
];
const ToDoList = () => {
  const [isOpen, setOpen] = useState(false);
  const [taskList, setTaskCard] = useState(taskData);
 
  const updateStatusHandler = (id) => {
    var newTaskData = [];
    for (var i = 0; i < taskList.length; i++) {
      if (taskList[i].id === id) {
        taskList[i].isComplete = !taskList[i].isComplete;
      } 
      newTaskData.push(taskList[i]);
    }
    setTaskCard(newTaskData);
  };

  const handleAddTask = () => {
    setOpen(true);
  };

  const editHandler = (updatedTaskName,updatedTaskDescription,id) => {
   var newEditedTaskData = [];
   for (var i = 0; i < taskList.length; i++) {
     if (taskList[i].id === id) {
      taskList[i].taskName = updatedTaskName;
      taskList[i].taskDescription = updatedTaskDescription;
     }
      newEditedTaskData.push(taskList[i]);
  }
  setTaskCard(newEditedTaskData);
  }

  const handleAddTaskSubmit = (e) => {
    e.preventDefault();
    var id = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    let newTaskData = {
      id: id,
      taskName: e.target.firstChild.childNodes[0].value,
      taskDescription: e.target.firstChild.childNodes[1].value,
      isComplete: false,
    };
    setTaskCard([newTaskData, ...taskData]);
    taskData.unshift(newTaskData);
    setOpen(false);
  };
  return (
    <>
      <div className="to-do-tasks">
        <div style={{ fontSize: "25px", display: "inline-block" }}> TO-DO:</div>
        <Popup
          contentStyle={{ minWidth: "30%", width: "30%" }}
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
        {taskList
          .filter((taskItem) => taskItem.isComplete !== true)
          .map((taskList) => (
            <TaskCard
              key = {taskList.id}
              id = {taskList.id}
              updateStatusHandler = {updateStatusHandler}
              editHandler = {editHandler}
              title = {taskList.taskName}
              description = {taskList.taskDescription}
              isComplete = {taskList.isComplete}
            />
          ))}
      </div>
      <div className="completed-tasks">
        <div>
          <div
            style={{
              fontSize: "25px",
              display: "inline-block",
              marginTop: "15px",
            }}
          >
            Completed Tasks:
          </div>

          {taskList
            .filter((taskItem) => taskItem.isComplete == true)
            .map((taskList) => (
              <TaskCard
                key = {taskList.id}
                title = {taskList.taskName}
                description = {taskList.taskDescription}
                id = {taskList.id}
                updateStatusHandler = {updateStatusHandler}
                isComplete = {taskList.isComplete}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ToDoList;
