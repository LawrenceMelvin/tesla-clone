import React from 'react'
import MenuItem from './MenuItem'
import './Menu.css'


function Menu() {
  return (
    <div className='menu'>
      <MenuItem link='/teslaaccount' title='existing inventory' />
      <MenuItem link='/chat' title='Car chat' />
      <MenuItem link='/video' title='Video chat' />
      <MenuItem link='/teslaaccount' title='test drive' />
      <MenuItem link='/teslaaccount' title='find us' />
      <MenuItem link='/teslaaccount' title='support' />
      <MenuItem link='/feedback' title='feedback' />
    </div>
  )
}

export default Menu
