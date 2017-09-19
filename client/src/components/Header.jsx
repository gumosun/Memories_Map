import React from 'react';

const Header = (props) => {
  return (
    <header>
      <div className="logo">MemoryMap</div>
      <nav>
        <ul>
          <li onClick={() => props.setPage('home')}>Home</li>
          <li onClick={() => props.setPage('add')}>Add New</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;