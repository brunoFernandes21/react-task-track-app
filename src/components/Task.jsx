import {FaTimes, FaRegTrashAlt} from 'react-icons/fa'
const Task = (props) => {
    const {task, deleteButtonClick} = props
  return (
    <div className="task">
      <h3>{task.title} <FaRegTrashAlt onClick={deleteButtonClick} style={{color: 'red'}}/></h3>
      <p>{task.day}</p>
      <input type="checkbox" />
    </div>
  );
};

export default Task;
