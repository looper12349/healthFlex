import React, { useEffect, useState } from 'react'
import MainBar from './MainBar'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Key } from '../store/store';
import Post from './Post';
import Profile from './Profile';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Sun = <FontAwesomeIcon icon={faSun} size='l'/>
const Night = <FontAwesomeIcon icon={faMoon} size='l'/>

const Pages = () => {

    const [theme, setTheme] = useState('light');
    const [icon, setIcon] = useState(Sun);
  
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      setIcon(preIcon => (preIcon === Sun ? Night : Sun));
    };
  
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const key = useRecoilValue(Key);

    let children = MainBar;
    if(key === 0){
        children = <MainBar/>
    }

    else if(key === 1){
        children = <Post/>
    }

    else if(key === 2){
        children = <Profile/>
    }
    

    
  return (

    <div className='pages'>
        <Navbar toggleTheme={toggleTheme} icon={icon}/>
        {children}
    </div>
  )
}

export default Pages