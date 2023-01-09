import React, {useState} from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
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
        reminder: true
    },
  ]);

  //delete Task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(filteredTasks)
  }
  //toggleReminder
  const toggleReminder = (id) => {
    const toggledTasks = tasks.map((task) => {
      return task.id === id ? {...task, reminder: !task.reminder} : task
    })
    setTasks(toggledTasks)
  }

  return (
    <Router>
      <Navbar/>
      <div className='container'>
       <Header/>
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : <h3>Sorry there are no tasks to show</h3>}
      </div>
      <Footer/>
    </Router>
  )
}

export default App