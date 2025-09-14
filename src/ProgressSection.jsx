import React from 'react';

const ProgressSection = ({ progress, totalTasks, completedTasks }) => {
  return (
    <div className="progress-section">
      <div className="progress-text">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{width: `${progress}%`}}></div>
      </div>
      <div className="stats">
        <span>{totalTasks} tasks</span>
        <span>{completedTasks} completed</span>
      </div>
    </div>
  );
};

export default ProgressSection;