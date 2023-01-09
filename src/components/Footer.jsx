import React from 'react'

const Footer = () => {
    let today = new Date()
  return (
    <footer>
      <div>
        <span> React Task Tracker - {today.getFullYear()}</span>
      </div>        
    </footer>
  )
}

export default Footer