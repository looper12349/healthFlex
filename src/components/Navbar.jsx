import { faArrowsTurnToDots, faSearch, faSortDown, faSortUp, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const sortUp = <FontAwesomeIcon icon={faSortUp} size='xl'/>
const sortDown = <FontAwesomeIcon icon={faSortDown} size='xl'/>
const search = <FontAwesomeIcon icon={faSearch} size='l'/>
const Navbar = ({ toggleTheme, icon}) => {

  const [sort, setSort] = useState(sortUp);
  const [text, setText] = useState('new');
  const Sort = () => {
    setSort(prevSort => (prevSort === sortUp ? sortDown : sortUp));
    setText(prevText => (prevText === 'new' ? 'old' : 'new'));
  };
  return (
    <div className='navBar'>
      <input type='text' placeholder={`Search`} />
      <div onClick={toggleTheme}>{icon}</div>
      <div className='sort' onClick={Sort}> {sort}
        {`Sort ${text}`} </div>
    </div>
  );
};

export default Navbar;