import React from 'react';
import { FaTasks } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <h1><FaTasks /> Todo Master</h1>
      <p className="subtitle">Organize your tasks efficiently</p>
    </header>
  );
};

export default Header;