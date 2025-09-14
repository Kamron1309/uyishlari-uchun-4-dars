import React, { useState } from 'react';
import Header from './Header';
import InputSection from './InputSection';
import FilterSection from './FilterSection';
import SearchSection from './SearchSection';
import ProgressSection from './ProgressSection';
import TodoList from './TodoList';
import Footer from './Footer';

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn ReactJS basics", completed: false, createdAt: "Jun 12, 2023", updatedAt: "Jun 13, 2023" },
    { id: 2, text: "Practice ReactJS", completed: false, createdAt: "Jun 13, 2023", updatedAt: "" },
    { id: 3, text: "Learn Redux", completed: true, createdAt: "Jun 10, 2023", updatedAt: "Jun 15, 2023" },
    { id: 4, text: "Code portfolio in React", completed: false, createdAt: "Jun 14, 2023", updatedAt: "" },
    { id: 5, text: "Learn React Native", completed: false, createdAt: "Jun 15, 2023", updatedAt: "" }
  ]);
  
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate progress and stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Filter tasks based on selected filter and search query
  const filteredTasks = tasks.filter(task => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'active' && !task.completed) || 
      (filter === 'completed' && task.completed);
    
    const matchesSearch = task.text.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Add a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: tasks.length + 1,
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        updatedAt: ""
      };
      
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
          updatedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
      }
      return task;
    }));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Clear completed tasks
  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  // Delete all tasks
  const deleteAll = () => {
    setTasks([]);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="container">
      <Header />
      
      <div className="main-content">
        <div className="left-panel">
          <InputSection 
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
            handleKeyPress={handleKeyPress}
          />
          
          <FilterSection 
            filter={filter}
            setFilter={setFilter}
          />
          
          <SearchSection 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          <ProgressSection 
            progress={progress}
            totalTasks={totalTasks}
            completedTasks={completedTasks}
          />
        </div>
        
        <div className="right-panel">
          <TodoList 
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
      
      <Footer 
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        clearCompleted={clearCompleted}
        deleteAll={deleteAll}
      />
    </div>
  );
};

export default TodoApp;