
import { useEffect, useState } from 'react'
import './App.css'
import BottomBar from './components/BottomBar'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import Pages from './components/Pages'

const Sun = <FontAwesomeIcon icon={faSun} size='l'/>
const Night = <FontAwesomeIcon icon={faMoon} size='l'/>
function App() {
  
  const [theme, setTheme] = useState('light');
  const [icon, setIcon] = useState(Sun);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    setIcon(preIcon => (preIcon === Sun ? Night : Sun));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className='app'>
      <SideBar/>
      <Navbar toggleTheme={toggleTheme} icon={icon}/>
      <Pages/>
      <BottomBar/>
    </div>
  )
}

export default App
