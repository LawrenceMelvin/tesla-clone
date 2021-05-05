import React from 'react'
import './HeaderBlock.css'

function HeaderBlock() {
  return (
    <div className='headerBlock'>
      <div className='headerBlock__info'>
        <div className='headerBlock__infoText'>
          {/* <h1>KWID</h1> */}
        </div>
        <div className='headerBlock__actions'>
          <button className='headerBlock__buttonPrimary'>custom order</button>
          <button className='headerBlock__buttonSecondary'>
            3d model
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderBlock
