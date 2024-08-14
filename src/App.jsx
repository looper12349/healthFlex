
import { useEffect, useState } from 'react'
import './App.css'
import BottomBar from './components/BottomBar'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import Pages from './components/Pages'

function App() {
  
 

  return (
    <div className='app'>
      <SideBar/>
      
      <Pages/>
      <BottomBar/>
    </div>
  )
}

export default App
