import React from 'react'
import './MainContainer.css'
import {ToggleTaskDays,ToDoList,CompletedTaskLists} from './ToggleTask'

const MainContainer = () =>{
return(
  <div>
    <ToggleTaskDays/>
    <div className='task-lists'>
        <ToDoList/>
        <CompletedTaskLists/>
    </div>
  </div>
);    
}
export default MainContainer