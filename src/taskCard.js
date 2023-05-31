import './mainContainer.css';
import editBtn from './image/edit.svg'

const TaskCard = (props) =>{
    let checkbox
    if(!props.display){
        checkbox = true
    }
    return(
     <div className='card'>
      <div className='flexBox'>
        <span className='cardInfo'>{props.title}</span>
        <span className={props.display?'editBtn': 'hidden editBtn'}> <img src={editBtn} alt="next button" width="30" height="30"/>
        </span>
        <input className='isComplete' value = "test" type = "checkbox" defaultChecked={checkbox} />
      </div>
     <div>{props.description}</div>
    
    
    
</div>
 )
}
export default TaskCard