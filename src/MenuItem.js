import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css'

function MenuItem({ title, link }) {
  return (
    <div className='menuItem'>
      {/* <h4 onClick={onClick}>{title}</h4> */}
      <Link className='link' to='/chat'>{title}</Link>
    </div>
  )
}

export default MenuItem
