import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import alanBtn from '@alan-ai/alan-sdk-web'
import Menu from './Menu'
import HeaderBlock from './HeaderBlock'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import Signup from './Signup'
import TeslaAccount from './TeslaAccount'
import { auth } from './firebase'
import Chat from './Chat'
import Video from './Video'

const alanKey = 'afb0ee3c8c3b1d7957110efe880d8d022e956eca572e1d8b807a3e2338fdd0dc/stage'
function App() {
  useEffect(() => {
    alanBtn({
        key: alanKey,
        onCommand: ({command}) => {
            if(command === 'test command'){
                alert('This part worked');
            }
            if(command === '3d model'){
                alert('opening 3d simulation')
            }
        } 
    })
  }, [])
  const user = useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
          <Route exact path='/login'>
            {user ? <Redirect to='/teslaaccount' /> : <Login />}
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/teslaaccount'>
            {!user ? (
              <Redirect to='/login' />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
          <Route exact path='/chat'>
          {!user ? (
              <Redirect to='/login' />
            ) : (
              <>
                <Chat/>
              </>
            )}
          </Route>
          <Route exact path='/video'>
          {!user ? (
              <Redirect to='/login' />
            ) : (
              <>
                <Video />
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
