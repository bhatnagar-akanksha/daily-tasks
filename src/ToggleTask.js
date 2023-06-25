import React, { useState } from "react";
import "./MainContainer.css";
import PreviousBtn from "./image/left-arrow.svg";
import NextBtn from "./image/right-arrow.svg";
import "reactjs-popup/dist/index.css";
import "./App.css";

const ToggleTaskDays = () => {
  const current = new Date();
  const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
  const [todayDate, setPreviousDate] = useState(date);
  
  const getPreviousDates = () => { 
    let dateObj = new Date(todayDate);                    
    dateObj.setDate(dateObj.getDate() - 1);
    const prevDate = `${dateObj.getFullYear()}/${dateObj.getMonth()+1}/${dateObj.getDate()}`;
    console.log(prevDate )
    setPreviousDate(prevDate)
  } 
  const getNextDates = () => {
    let dateObj = new Date(todayDate);                    
    dateObj.setDate(dateObj.getDate() + 1);
    const  nextDate = `${dateObj.getFullYear()}/${dateObj.getMonth()+1}/${dateObj.getDate()}`;
    console.log(nextDate )
    setPreviousDate(nextDate)
  }
  return (
    <div className="toggle">
      <a className="previous-task" href="#">
        {" "}
        <img src={PreviousBtn} onClick={getPreviousDates} alt="previous button" width="80" height="80" />
      </a>
      <div className="task-date">{todayDate}</div>
      <a className="next-task" href="#">
        {" "}
        <img src={NextBtn} onClick={getNextDates} alt="next button" width="80" height="80" />
      </a>
    </div>
  );
};

export default ToggleTaskDays
