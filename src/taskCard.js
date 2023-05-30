import './mainContainer.css';
import editBtn from './image/edit.png'

const TaskCard = (props) =>{
    return(
<div className='card'>
    <div className='cardInfo'>{props.title}</div>
    <div className='cardInfo'>{props.description}</div>
    <div className={props.display?'editBtn': 'hidden editBtn'}> <img src={editBtn} alt="next button" width="30" height="30"/></div>
    
    
</div>
 )
}
export default TaskCard