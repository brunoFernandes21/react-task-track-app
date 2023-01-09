import Task from "./Task";

const Tasks = (props) => {
  const { tasks, deleteButtonClick } = props;
  return (
    <>
      {tasks.map((task) => (
        <Task 
        key={task.id} 
        task={task} 
        deleteButtonClick={deleteButtonClick}/>
      ))}
    </>
  );
};

export default Tasks;
