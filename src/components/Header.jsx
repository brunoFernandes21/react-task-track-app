import React from 'react'
import Button from './Button'
const Header = () => {
    const handleClick = () => {
        console.log("btn clicked")
    }
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button color={"green"} text={"Add"} onClick={handleClick} />
    </header>
  )
}

export default Header