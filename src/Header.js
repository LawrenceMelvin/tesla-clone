import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <img
            className='header__logoImg'
            src='https://car-logos.net/wp-content/uploads/2018/09/renault-logo.jpg'
            alt=''
          />
        </Link>
      </div>
      <div className='header__links'>
        <Link to='/teslaaccount'>Duster</Link>
        <Link to='/teslaaccount'>Kiger</Link>
        <Link to='/teslaaccount'>Triber</Link>
      </div>
      <div className='header__right'>
        <Link to='/' className={isMenuOpen && 'header__link--hidden'}>
          Shop
        </Link>
        <Link to='/login' className={isMenuOpen && 'header__link--hidden'}>
          Renult Account
        </Link>
        <div
          className='header__menu'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  )
}

export default Header
