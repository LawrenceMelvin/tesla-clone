import React from 'react'
import './TeslaAccount.css'
import { Link, useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import Car from './Car'
import { auth } from './firebase'

function TeslaAccount({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const history = useHistory()

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout())
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className='teslaAccount'>
      <div className='teslaAccount__header'>
        <div className='teslaAccount__logo'>
          <Link to='/'>
            <img
              src='https://car-logos.net/wp-content/uploads/2018/09/renault-logo.jpg'
              alt=''
            />
          </Link>
        </div>
        <div className='teslaAccount__links'>
          <Link to='/teslaaccount'>Duster</Link>
          <Link to='/teslaaccount'>Triber</Link>
          <Link to='/teslaaccount'>Kiger</Link>
          <Link to='/teslaaccount'>City K-ZE</Link>
          <Link to='/teslaaccount'>Shop</Link>
          <Link to='/teslaaccount'>Renult Account</Link>
          <Link onClick={logoutOfApp}>Log out</Link>
          <div
            className='teslaAccount__menu'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon className='teslaAccount__closeMenu' />
            ) : (
              <MenuIcon />
            )}
          </div>
        </div>
      </div>
      <div className='teslaAccount__info'>
        <div className='teslaAccount__person'>
          <h4>{user?.displayName + "'s"} Renult</h4>
        </div>
        <div className='teslaAccount__infoRight'>
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logoutOfApp}>Sign out</Link>
        </div>
      </div>
      <div className='teslaAccount__car'>
        <Car
          imgSrc='https://imgd.aeplcdn.com/0x0/n/cw/ec/47146/renault-city-k-ze-front-view0.jpeg'
          model='K-ZE'
          testDrive
        />
        <Car
          imgSrc="https://imgd.aeplcdn.com/1280x720/cw/ec/39217/Renault-Captur-Right-Front-Three-Quarter-153590.jpg?wm=0&q=85"
          model='Triber'
        />
      </div>
    </div>
  )
}

export default TeslaAccount
