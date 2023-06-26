import React, { useState } from "react";
import "./MainContainer.css";
import editBtn from "./image/edit.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./App.css";

const TaskCard = ({ id, title, isComplete, description, updateStatusHandler, editHandler}) => {
 const [isOpen, setOpen] = useState(false);

 const handleEditTask = (e) => {
    setOpen(true);
  };

 const editTaskHandler = (e) => {
  e.preventDefault()
  editHandler(e.target.firstChild.childNodes[0].value,e.target.firstChild.childNodes[1].value,id)
  setOpen(false)
 } 
  return (
    <div className="card">
      <div className="flex-box">
        <span className="card-info" value={title}>
          {title}
        </span>
        <Popup
          contentStyle={{ minWidth: "30%", width:"30%"}}
          trigger={
            <span className = {isComplete !== true ? "edit-btn" : "hidden edit-btn"}>
              {" "}
              <img
                onClick = {handleEditTask}
                src={editBtn}
                alt="edit button"
                width="30"
                height="30"
              />
            </span>
          }
          modal
          open={isOpen}
        >
          {(close) => (
            <div className="model">
              <div className="row-1">
                <span style={{ flexGrow: "2"}}>Edit Task </span>
                <button onClick={() => close()}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form onSubmit = {editTaskHandler} >
                <div className="add-task-inputs">
                  <input
                    type="text"
                    name="taskName"
                    defaultValue={title}
                    placeholder="Task Name"
                    required=""
                  />
                  <textarea
                    type="text"
                    name="taskDescription"
                    defaultValue={description}
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
        <input onClick = {()=> updateStatusHandler(id)}
          className="complete"
          value="test"
          type="checkbox"
          defaultChecked = {isComplete}
        />
      </div>
      <div value={description}>{description}</div>
    </div>
  );
};
export default TaskCard;
