import Task from "./Task";

const Tasks = (props) => {
  const { tasks, onDelete, onToggle } = props;
  return (
    <>
      {tasks.map((task) => (
        <Task 
        key={task.id} 
        task={task} 
        onDelete={onDelete}
        onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
