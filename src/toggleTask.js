import './mainContainer.css'
import previousBtn from './image/left-arrow.svg'
import nextBtn from './image/right-arrow.svg'

const ToggleTaskDays = () =>{
return(
    <div className='toggle'>
    <a className='previousTask'> <img src={previousBtn} alt="previous button" width="80" height="80"/></a>
    <div className='taskDate'>Today's Task</div>
    <a className='nextTask'> <img src={nextBtn} alt="next button" width="80" height="80"/></a>
    </div>
);    
}
const CompletedTaskLists = () =>{
    return(
        <div className='toggle'>
        <a className='previousTask'> <img src={previousBtn} alt="previous button" width="80" height="80"/></a>
        <div className='taskDate'>Today's Task</div>
        <a className='nextTask'> <img src={nextBtn} alt="next button" width="80" height="80"/></a>
        </div>
    );    
    }
    const ToDoList = () =>{
        return(
            <div className='toggle'>
            <a className='previousTask'> <img src={previousBtn} alt="previous button" width="80" height="80"/></a>
            <div className='taskDate'>Today's Task</div>
            <a className='nextTask'> <img src={nextBtn} alt="next button" width="80" height="80"/></a>
            </div>
        );    
        }
export {ToggleTaskDays,ToDoList,CompletedTaskLists}