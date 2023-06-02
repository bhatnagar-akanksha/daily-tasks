import React from 'react'
import './MainContainer.css';
import editBtn from './image/edit.svg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TaskCard = ({title, display, description}) =>{
    return(
     <div className='card'>
      <div className='flex-box'>
        <span className='card-info'>{title}</span>
        <Popup  contentStyle={{ width: '30%',height:'fit-content'}} open={true} trigger=
                {<span className={display?'edit-btn': 'hidden edit-btn'}> <img src={editBtn} alt="edit button" width="30" height="30"/></span>}
                modal>   
                {
                close => (                              
                        <div className='model'>
                           <div className='row-1'>
                               <span style={{flexGrow:'2'}}>Edit Task </span>
                               <button onClick={() => close()}>
                                <span aria-hidden="true">×</span></button>
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
        <input className='complete' value = "test" type = "checkbox" defaultChecked={!display} />
      </div>
     <div>{description}</div> 
</div>
 )
}
export default TaskCard