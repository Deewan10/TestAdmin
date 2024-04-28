import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';

function Header() {
  return (
    <header className="header">
      <div className="search-bar">
       <FiSearch style={{ color: '#3326AE' }}/>
        <input type="text" placeholder="Search" />
        
      </div>
      <ul className="header-links">
        <li><a href="#">Feedback</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Help</a></li>
      </ul>
      <div className='noti'>
        <FiBell />
        
      </div>
      

    </header>
  );
}

export default Header;
