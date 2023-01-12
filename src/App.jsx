import React, {useState} from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        title: 'Doctors Appointment', 
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2, 
        title: 'Meeting at School', 
        day: 'May 10th at 1:30pm',
        reminder: true
    },
    {
        id: 3, 
        title: 'Food Shopping', 
        day: 'Feb 9th at 4:00pm',
        reminder: false
    },
  ]);

  //Add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id,  ...task}
    setTasks([...tasks, newTask])
    console.log("Task added")
  }

  //delete Task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(filteredTasks)
  }
  //toggleReminder
  const toggleReminder = (id) => {
    const toggledTasks = tasks.map((task) => (
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))
    setTasks(toggledTasks)
  }

  const showAddForm = () => {
    // console.log("Button clicked")
    setShowForm(!showForm)
  }

  return (
    <Router>
      <Navbar/>
      <div className='container'>
       <Header onAdd={showAddForm} showForm={showForm}/>
        {showForm && <AddTask addTask={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : <h3>Sorry there are no tasks to show</h3>}
        {/* {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : <h3>Sorry there are no tasks to show</h3>}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : <h3>Sorry there are no tasks to show</h3>} */}
      </div>
      <Footer/>
    </Router>
  )
}

export default App