import './mainContainer.css'
import previousBtn from './image/left-arrow.svg'
import nextBtn from './image/right-arrow.svg'
import addTasksBtn from './image/add-tasks.svg'
import TaskCard from './taskCard';

const ToggleTaskDays = () =>{
return(
    <div className='toggle'>
    <a className='previousTask'> <img src={previousBtn} alt="previous button" width="80" height="80" /></a>
    <div className='taskDate'>Today's Task</div>
    <a className='nextTask'> <img src={nextBtn} alt="next button" width="80" height="80"/></a>
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
            <a className= 'addTask'> <img src={addTasksBtn} alt="next button" width="40" height="40"/></a>
           <TaskCard title={"routine"} description="important tasks for the day" display/>
           <TaskCard title={"office meeting"} description="Attend daily scrum call @11am and present new requirements" display/>
            </div>
        );    
        }
export {ToggleTaskDays,ToDoList,CompletedTaskLists}