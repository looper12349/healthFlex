import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSetRecoilState } from 'recoil';
import { Key } from '../store/store';

const SideBar = () => {
  const setKey = useSetRecoilState(Key);

  const setHome = () => {
    setKey(0);
  }

  const setPost = () => {
    setKey(1);
  }

  const setProfile = () => {
    setKey(2);
  }

  return (
    <div className='sideBar'>
      <h2>Navigation</h2>
      <div className='sideBar__item' onClick={setHome}>
        <FontAwesomeIcon icon={faHome} size='xl' />
        <span>Home</span>
      </div>
      <div className='sideBar__item' onClick={setPost}>
        <FontAwesomeIcon icon={faPlus} size='xl' />
        <span>New Post</span>
      </div>
      <div className='sideBar__item' onClick={setProfile}>
        <FontAwesomeIcon icon={faUser} size='xl' />
        <span>Profile</span>
      </div>
    </div>
  )
}

export default SideBar;