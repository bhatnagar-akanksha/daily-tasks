import React, { useState } from "react";
import "./MainContainer.css";
import PreviousBtn from "./image/left-arrow.svg";
import NextBtn from "./image/right-arrow.svg";
import TaskCard from "./TaskCard";
import "reactjs-popup/dist/index.css";
import "./App.css";

const ToggleTaskDays = () => {
  return (
    <div className="toggle">
      <a className="previous-task" href="#">
        {" "}
        <img src={PreviousBtn} alt="previous button" width="80" height="80" />
      </a>
      <div className="task-date">Today's Task</div>
      <a className="next-task" href="#">
        {" "}
        <img src={NextBtn} alt="next button" width="80" height="80" />
      </a>
    </div>
  );
};
const CompletedTaskLists = () => {
  return (
    <div>
      <div
        style={{ fontSize: "25px", display: "inline-block", marginTop: "15px" }}
      >
        Completed Tasks:
      </div>
      <TaskCard title={"breakfast"} description="sample desc" />
      <TaskCard title={"gym"} description="plank, squates,cardio,power yoga" />
    </div>
  );
};
export { ToggleTaskDays, CompletedTaskLists };
