import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        className="todo-checkbox" 
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <div className="todo-content">
        <div className="todo-text">{task.text}</div>
        <div className="todo-date">
          Added: {task.createdAt} 
          {task.updatedAt && ` | Updated: ${task.updatedAt}`}
        </div>
      </div>
      <div className="todo-actions">
        <button className="action-btn edit">
          <FaEdit />
        </button>
        <button 
          className="action-btn delete"
          onClick={() => deleteTask(task.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;