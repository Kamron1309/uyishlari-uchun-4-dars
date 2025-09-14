import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FilterSection />
    <Footer />
    <Header />
    <InputSection />
    <ProgressSection />
    <SearchSection />
    <TodoApp />
    <TodoItem />
    <TodoList />
  </React.StrictMode>,
)