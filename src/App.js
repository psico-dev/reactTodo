import './App.css';
import React from 'react';
import { TodoCounter } from './todoCounter';
import TodoSearch from "./todoSearch"
import { TodoList } from "./todoList"
import TodoItem from "./todoItem"

const todos = [
  {
    text: "Cortar cebolla",
    completed: false,
  },
  {
    text: "Tomar agua",
    completed: false,
  },
  {
    text: "Hacer ejercicio",
    completed: false,
  }
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter/> 

      <TodoSearch/> 

      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/>
          ))
        }
      </TodoList> 

      {/* <TodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
