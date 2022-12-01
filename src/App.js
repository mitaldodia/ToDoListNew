import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <div className='todo-details'>
      <div className='todo-app'>
          <TodoList />
        </div>
        <div className='todo-img'>
          <img src='to-do.png'/>
        </div>
    </div>
    </>
    
  );
}

export default App;
