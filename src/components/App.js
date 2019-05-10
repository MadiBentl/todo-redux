import React from 'react';
import List from './list';
import AddTodo from './AddTodo';

function App() {
  return (
    <div className = "App ui three column centered grid" >
      <div className="column">
        <List / >
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
