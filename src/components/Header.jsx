import React from 'react'
import Button from './Button'

const Header = (props) => {
  const {onAdd, showForm} = props

  return (
    <header className='header'>
        <h1 className='font-bold text-lg'>Task Tracker</h1>
        <Button color={showForm ? "red" : "green"} text={showForm ? 'Close' : 'Add'} showAddForm={onAdd}/>
    </header>
  )
}

export default Header