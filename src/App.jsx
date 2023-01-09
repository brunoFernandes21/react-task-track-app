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

  const deleteButtonClick = () => {
    console.log("deletebtnclicked")
  }

  return (
    <Router>
      <Navbar/>
      <div className='container'>
       <Header/>
        <Tasks tasks={tasks} deleteButtonClick={deleteButtonClick}/>
      </div>
      <Footer/>
    </Router>
  )
}

export default App