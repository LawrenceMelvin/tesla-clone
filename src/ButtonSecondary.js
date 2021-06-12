import React from 'react'
import './ButtonSecondary.css'

function ButtonSecondary({ name, type, onClick }) {
  return (
    <a href={"https://www.renault.co.in/contact/book-a-test-drive.html?modelAdminId=triber-xbc-ph1"}>
    <button className='buttonSecondary' type={type} onClick={onClick}>
      {name}
    </button>
    </a>
  )
}

export default ButtonSecondary
