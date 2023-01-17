import {useState, useEffect} from 'react'
import usefetch from '../usefetch'
import Header from './Header'
import AddTask from './AddTask'
import Tasks from './Tasks'


const Home = () => {
    const [showForm, setShowForm] = useState(false)
    const [error, setError] = useState("");
    const [tasks, setTasks] = useState(null)
    // const {tasks, setTasks} = usefetch('http://localhost:5000/tasks')
    const [isLoading, setIsLoading] = useState(false)

    //get tasks from server
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      getTasks()
    }, [])

    const fetchTasks = async () => {
      const response = await fetch("http://localhost:8000/tasks")
      const data = await response.json()
      return data
    }
    //fetch task
    const fetchTask = async(id) => {
        const resp = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = resp.json()
        return data
  }
  //Add tasks
  const addTask = async (task) => {
    //add new task to server
      const resp = await fetch("http://localhost:8000/tasks", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(task),
    })
    const data = await resp.json()
    console.log(data)
    setTasks([...tasks, data])
    console.log("Task added")
  }
  //delete Task
  const deleteTask = async (id) => {
    //delete task from server
    try {
      await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'DELETE',
    })
    } catch (error) {
      setError("Could delete task")
    }
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(filteredTasks)
  }
  //toggleReminder
  const toggleReminder = async (id) => {
    //get fetched task
    const taskToToggle = await fetchTask(id)
    console.log(taskToToggle)
    //update reminder property from task obj
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder }
    console.log(updatedTask)
    //add this updated task to backend
    const resp = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    //
    const data = await resp.json()
    //update UI with new task
    const toggledTasks = tasks.map((task) => (
      task.id === id ? {...task, reminder: data.reminder} : task
    ))
    setTasks(toggledTasks)
  }
    const showAddForm = () => {
        setShowForm(!showForm)
      }
  return (
    <div className='content'>
        <Header onAdd={showAddForm} showForm={showForm}/>
        {showForm && <AddTask addTask={addTask} setShowForm={setShowForm}/>}
        {tasks && <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> }

    </div>
  )
}

export default Home