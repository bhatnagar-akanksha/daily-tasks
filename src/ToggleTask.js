import React from 'react'
import './MainContainer.css'
import PreviousBtn from './image/left-arrow.svg'
import NextBtn from './image/right-arrow.svg'
import AddTasksBtn from './image/add-tasks.svg'
import TaskCard from './TaskCard';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./App.css"

const ToggleTaskDays = () =>{
return(
    <div className='toggle'>
      <a className='previous-task' href='#'> <img src={PreviousBtn} alt="previous button" width="80" height="80" /></a>
      <div className='task-date'>Today's Task</div>
      <a className='next-task' href='#'> <img src={NextBtn} alt="next button" width="80" height="80"/></a>
    </div>
);    
}
const CompletedTaskLists = () =>{
    return(
      <div>
         <div style={{fontSize: '25px', display:'inline-block', marginTop:"15px"}} >Completed Tasks:</div>
         <TaskCard title={"breakfast"} description="sample desc"/>
         <TaskCard title={"gym"} description="plank, squates,cardio,power yoga"/>
      </div>
    );    
    }
    const ToDoList = () =>{
        return(
        <div>
         <div style={{fontSize: '25px', display:'inline-block'}} > TO-DO:</div>
            <Popup  contentStyle={{ width: '30%',height:'fit-content' }} trigger=
                {<a className = 'add-task' href='#'><img src={AddTasksBtn} alt="next button" width="40" height="40" /> </a>}
                modal>   
                {
                    close => (
                        <div className='model'>
                           <div className='row-1'>
                               <span style={{flexGrow:'2'}}>Add Task </span>
                                 <button onClick={() => close()}>
                                   <span aria-hidden="true">×</span>
                                  </button>
                            </div>
                           <div className='add-task-inputs'>
                             <input type="text" id="taskName" className="form-control input-text" placeholder="Task Name" required="" />  
                             <textarea type="text" id="taskDescription" className="form-control input-text" placeholder="Task Description" required=""/>  
                             <button className='submit-new-task'>
                              <span aria-hidden="true">Submit</span>
                            </button>
                          </div>  
                        </div>
                    )
                }
            </Popup>        
            <TaskCard title={"routine"} description="important tasks for the day" display/>
            <TaskCard title={"office meeting"} description="Attend daily scrum call @11am and present new requirements" display/>
         </div>
        );    
        }
export {ToggleTaskDays,ToDoList,CompletedTaskLists}