import React from 'react';
import { FaList, FaCircle, FaCheckCircle } from 'react-icons/fa';

const FilterSection = ({ filter, setFilter }) => {
  return (
    <div className="filter-section">
      <button 
        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        <FaList /> All Tasks
      </button>
      <button 
        className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
        onClick={() => setFilter('active')}
      >
        <FaCircle /> To Do
      </button>
      <button 
        className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => setFilter('completed')}
      >
        <FaCheckCircle /> Completed
      </button>
    </div>
  );
};

export default FilterSection;