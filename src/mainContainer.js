import './mainContainer.css'
import {ToggleTaskDays,ToDoList,CompletedTaskLists} from './toggleTask'


const MainContainer = () =>{
return(
  <div>
    <ToggleTaskDays/>
    <div className='taskLists'>
        <ToDoList/>
        <CompletedTaskLists/>
    </div>
  </div>
);    
}
export default MainContainer