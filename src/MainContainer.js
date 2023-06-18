import React from 'react'
import './MainContainer.css'
import {ToggleTaskDays,CompletedTaskLists} from './ToggleTask'
import ToDoList from './ToDoList';

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