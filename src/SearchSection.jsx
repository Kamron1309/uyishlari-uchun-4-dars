import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-section">
      <div className="search-box">
        <FaSearch />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks..." 
        />
      </div>
    </div>
  );
};

export default SearchSection;