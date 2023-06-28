import React from 'react'
import './MainContainer.css'
import ToggleTaskDays from './ToggleTask'
import ToDoList from './ToDoList';

const MainContainer = () =>{
return(
  <div>
    <ToggleTaskDays/>
    <div className='task-lists'>
        <ToDoList/>

    </div>
  </div>
);    
}
export default MainContainer