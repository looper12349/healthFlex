import React from 'react'
import MainBar from './MainBar'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Key } from '../store/store';
import Post from './Post';
import Profile from './Profile';

const Pages = () => {

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
        {children}
    </div>
  )
}

export default Pages