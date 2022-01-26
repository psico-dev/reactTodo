import React from 'react';
import { AppUI } from "./AppUI"

let defaultTodos = [
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
    completed: false,
  }
]


function App() {

  const [searchValue, setSearchValue] = React.useState("")
  const [todosList, setTodosList] = React.useState(defaultTodos)

  const completedTodos = defaultTodos.filter(todo => !!todo.completed).length
  const todosCountdow = defaultTodos.length

  const todoListFilter = defaultTodos.filter(todo => {
    const todosFiler = todo.text.toLowerCase()
    const searchFilter = searchValue.toLowerCase()
    return todosFiler.includes(searchFilter)
  })

  let searchTodos = []

  if(!searchValue.length >= 1){
    searchTodos = defaultTodos
  }else{
    searchTodos = todoListFilter
  }

  const completeTodos = (text) => {
    const todoIndex = todosList.findIndex(todo => todo.text === text)
    const newTodos = [...defaultTodos]
    newTodos[todoIndex].completed = true
    setTodosList(newTodos)
  }

  const deleteTodos = (text) => {
    // const todoIndex = todosList.findIndex(todo => todo.text === text)
    const newTodo = defaultTodos.filter(todo => todo.text != text)
    defaultTodos = [...newTodo]
    setTodosList(defaultTodos)
  }

  return (
    <AppUI 
      todosCountdow = {todosCountdow}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchTodos = {searchTodos}
      completeTodos = {completeTodos}
      deleteTodos = {deleteTodos}
    />
  );
}

export default App;
