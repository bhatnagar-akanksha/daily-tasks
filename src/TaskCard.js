import React, { useState } from "react";
import "./MainContainer.css";
import editBtn from "./image/edit.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./App.css";

const TaskCard = ({ title, display, description }) => {
  console.log(title, description);
  const [taskName, setTaskName] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);
  const [isOpen, setOpen] = useState(false);

  // const updateTaskName =(e) =>{
  //   setTaskName(e.target.firstChild.childNodes[1].value)
  // }
  // const updateTaskDescription =(e) =>{
  //   setTaskDescription(e.target.value)
  // }
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setTaskName(e.target.firstChild.childNodes[0].value);
    setTaskDescription(e.target.firstChild.childNodes[1].value);
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };
  return (
    <div className="card">
      <div className="flex-box">
        <span className="card-info" value={taskName}>
          {taskName}
        </span>
        <Popup
          contentStyle={{ width: "30%", height: "fit-content" }}
          trigger={
            <span className={display ? "edit-btn" : "hidden edit-btn"}>
              {" "}
              <img src={editBtn} alt="edit button" width="30" height="30" />
            </span>
          }
          modal
          open={isOpen}
        >
          {(close) => (
            <div className="model">
              <div className="row-1">
                <span style={{ flexGrow: "2" }}>Edit Task </span>
                <button onClick={() => close()}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="add-task-inputs">
                  <input
                    type="text"
                    name="taskName"
                    // className="form-control input-text"
                    // onChange={updateTaskName}
                    placeholder="Task Name"
                    required=""
                  />
                  <textarea
                    type="text"
                    name="taskDescription"
                    // onChange ={updateTaskDescription}
                    placeholder="Task Description"
                  />
                  <button type="submit" className="submit-edited-task">
                    <span aria-hidden="true">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </Popup>
        <input
          className="complete"
          value="test"
          type="checkbox"
          defaultChecked={!display}
        />
      </div>
      <div value={taskDescription}>{taskDescription}</div>
    </div>
  );
};
export default TaskCard;
