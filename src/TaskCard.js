import React from 'react'
import './MainContainer.css';
import editBtn from './image/edit.svg'

const TaskCard = ({title, display, description}) =>{
    return(
     <div className='card'>
      <div className='flex-box'>
        <span className='card-info'>{title}</span>
        <span className={display?'edit-btn': 'hidden edit-btn'}> <img src={editBtn} alt="edit button" width="30" height="30"/>
        </span>
        <input className='complete' value = "test" type = "checkbox" defaultChecked={!display} />
      </div>
     <div>{description}</div> 
</div>
 )
}
export default TaskCard