import React from 'react'
import MenuItem from './MenuItem'
import './Menu.css'


function Menu() {
  return (
    <div className='menu'>
      <MenuItem link='/' title='existing inventory' />
      <MenuItem link='/' title='used inventory' />
      <MenuItem link='/chat' title='Car chat' />
      <MenuItem link='/video' title='Video chat' />
      <MenuItem link='/' title='test drive' />
      <MenuItem link='/' title='find us' />
      <MenuItem link='/' title='support' />
    </div>
  )
}

export default Menu
