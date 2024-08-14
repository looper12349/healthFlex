import { faArrowsTurnToDots, faSearch, faSortDown, faSortUp, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useRecoilState } from 'recoil';
import { searchQueryState, sortOrderState } from '../store/store';

const sortUp = <FontAwesomeIcon icon={faSortUp} size='xl'/>
const sortDown = <FontAwesomeIcon icon={faSortDown} size='xl'/>
const search = <FontAwesomeIcon icon={faSearch} size='l'/>

const Navbar = ({ toggleTheme, icon}) => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const [sortOrder, setSortOrder] = useRecoilState(sortOrderState);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(prevOrder => prevOrder === 'new' ? 'old' : 'new');
  };

  return (
    <div className='navBar'>
      <input 
        type='text' 
        placeholder={`Search`} 
        value={searchQuery}
        onChange={handleSearch}
      />
      <div onClick={toggleTheme}>{icon}</div>
      <div className='sort' onClick={handleSort}> 
        {sortOrder === 'new' ? sortUp : sortDown}
        {`Sort ${sortOrder === 'new' ? 'new' : 'old'}`} 
      </div>
    </div>
  );
};

export default Navbar;