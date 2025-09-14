import React from 'react';
import { FaPlus } from 'react-icons/fa';

const InputSection = ({ newTask, setNewTask, addTask, handleKeyPress }) => {
  return (
    <div className="input-section">
      <div className="input-group">
        <input 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..." 
        />
        <button onClick={addTask}><FaPlus /> Add</button>
      </div>
    </div>
  );
};

export default InputSection;