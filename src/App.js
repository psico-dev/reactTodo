import './App.css';
import React from 'react';
import { TodoCounter } from './components/todoCounter';
import TodoSearch from "./components/todoSearch"
import { TodoList } from "./components/todoList"
import TodoItem from "./components/todoItem"
import {TodoButton} from "./components/todoButton"

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

      <TodoButton />
    </React.Fragment>
  );
}

export default App;
