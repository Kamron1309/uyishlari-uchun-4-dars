import React from 'react';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';

const Footer = ({ totalTasks, completedTasks, clearCompleted, deleteAll }) => {
  return (
    <div className="footer">
      <div>
        <span>{totalTasks - completedTasks} tasks to do, {completedTasks} completed</span>
      </div>
      <div style={{display: 'flex', gap: '12px'}}>
        <button className="delete-btn" onClick={clearCompleted}>
          <FaCheckCircle /> Clear Completed
        </button>
        <button className="delete-btn" onClick={deleteAll}>
          <FaTrash /> Delete All
        </button>
      </div>
    </div>
  );
};

export default Footer;