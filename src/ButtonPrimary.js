import React from 'react'
import './ButtonPrimary.css'

function ButtonPrimary({ name, type, onClick }) {
  return (
    <a href={"https://www.renault.co.in/contact/buy-a-car.html"}>
    <button className='buttonPrimary' onClick={onClick} type={type} style={{marginTop:'25px',width:'164px'}}>
      {name}
    </button>
    </a>
  )
}

export default ButtonPrimary
