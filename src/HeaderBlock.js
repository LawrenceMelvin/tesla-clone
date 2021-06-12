import React from 'react'
import './HeaderBlock.css'

function HeaderBlock() {
  let url = "https://renaultespace.littleworkshop.fr/"
  let url1 = "https://www.renault.co.in/book-your-renault.html"
  return (
    <div className='headerBlock'>
      <div className='headerBlock__info'>
        <div className='headerBlock__infoText'>
          {/* <h1>KWID</h1> */}
        </div>
        <div className='headerBlock__actions'>
          <a href={url1}>
            <button className='headerBlock__buttonPrimary' 
              style={{border:'none',textTransform:'uppercase',fontWeight:'600', width:'260px',outline:'none',borderRadius:'50px'}}>custom order</button>
          </a>
          <a href={url}>
            <button className='headerBlock__buttonSecondary' 
              style={{border:'none',textTransform:'uppercase',fontWeight:'600', width:'260px',outline:'none',borderRadius:'50px'}}>
              3d model
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderBlock
