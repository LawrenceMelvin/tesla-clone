import React from 'react'
import MenuItem from './MenuItem'
import './Menu.css'
import {ChatEngine} from 'react-chat-engine'
import {Link} from 'react-router-dom'

const chatBox = () =>{
  // return(
  //   <ChatEngine
	// 		height='98vh' 
	// 		userName='Admin'
	// 		userSecret='1234567890'
	// 		projectID='1b2d60d1-e8c0-4431-9002-18740cc56ef3'
	// 	/>
  // )
  console.log("chat working")
  // return(
  //   <Link ></Link>
  // )
}
function Menu() {
  return (
    <div className='menu'>
      <MenuItem title='existing inventory' />
      <MenuItem  title='used inventory' />
      <MenuItem  title='Car chat' />
      <MenuItem title='Video chat' />
      <MenuItem title='test drive' />
      <MenuItem title='find us' />
      <MenuItem title='support' />
    </div>
  )
}

export default Menu
