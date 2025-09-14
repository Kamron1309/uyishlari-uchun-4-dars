import React from 'react';
import TodoItem from './TodoItem';
import { FaClipboardList } from 'react-icons/fa';

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <div className="empty-state">
          <FaClipboardList />
          <p>No tasks found. Add a new task or change your filters!</p>
        </div>
      ) : (
        tasks.map(task => (
          <TodoItem 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
            deleteTask={deleteTask} 
          />
        ))
      )}
    </div>
  );
};

export default TodoList;