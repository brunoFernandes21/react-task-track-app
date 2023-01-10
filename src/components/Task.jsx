import {FaTimes, FaRegTrashAlt} from 'react-icons/fa'
const Task = (props) => {
    const {task, onDelete, onToggle} = props
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=> onToggle(task.id)}>
      <h3>{task.title} 
      <FaRegTrashAlt 
      onClick={()=> 
      onDelete(task.id)} 
      style={{color: 'red'}}/>
      </h3>
      <p>{task.day}</p>
      {/* <input type="checkbox" /> */}
    </div>
  );
};

export default Task;
