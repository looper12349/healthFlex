import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots, faBorderAll, faCircleCheck, faCircleChevronRight, faCirclePlay, faClock, faDownload, faFile, faHome, faMedal, faPerson, faPersonRifle, faPlus, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSetRecoilState } from 'recoil';
import { Key } from '../store/store';

const Home = <FontAwesomeIcon icon={faHome} size='xl'/>
const Post = <FontAwesomeIcon icon={faPlus} size='xl'/>
const Profile = <FontAwesomeIcon icon={faUser} size='xl' />
const BottomBar = () => {
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
    <div className='bottomBar'>
        
    <div className='home' onClick={setHome}>{Home}</div>
    <div className='postt' onClick={setPost}>{Post}</div>
    <div className='profile' onClick={setProfile}>{Profile}</div>
    
        
    </div>
  )
}

export default BottomBar