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
    completed: true,
  },
  {
    text: "Tomar agua",
    completed: false,
  },
  {
    text: "Hacer ejercicio",
    completed: false,
  },
  {
    text: "Hacer Tareas",
    completed: true,
  }
]


function App() {

  const [searchValue, setSearchValue] = React.useState("")
  const [todosList, setTodosList] = React.useState("")

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const todosCountdow = todos.length

  const todoListFilter = todos.filter(todo => {
    const todosFiler = todo.text.toLowerCase()
    const searchFilter = searchValue.toLowerCase()
    return todosFiler.includes(searchFilter)
  })

  let searchTodos = []

  if(!searchValue.length >= 1){
    searchTodos = todos
  }else{
    searchTodos = todoListFilter
  }

  return (
    <React.Fragment>
      <TodoCounter
        total = {todosCountdow}
        completed = {completedTodos}
      /> 

      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      /> 

      <TodoList>
        {
          searchTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}/>
          ))
        }
      </TodoList> 

      <TodoButton />
    </React.Fragment>
  );
}

export default App;
