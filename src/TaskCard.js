import React from 'react'
import './MainContainer.css';
import editBtn from './image/edit.svg'

const TaskCard = (props) =>{
    let checkbox
    if(!props.display){
        checkbox = true
    }
    return(
     <div className='card'>
      <div className='flex-box'>
        <span className='card-info'>{props.title}</span>
        <span className={props.display?'edit-btn': 'hidden edit-btn'}> <img src={editBtn} alt="edit button" width="30" height="30"/>
        </span>
        <input className='complete' value = "test" type = "checkbox" defaultChecked={checkbox} />
      </div>
     <div>{props.description}</div>
    
    
    
</div>
 )
}
export default TaskCard