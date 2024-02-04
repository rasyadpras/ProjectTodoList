import React from "react";
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <div className='todo-app'>
        <TodoList />
      </div>
      <h2>Project ReactJS by Rasyad</h2>
    </div>
  );
}

export default App;