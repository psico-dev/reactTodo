import React from 'react';
import { AppUI } from "./AppUI"

/*

    array de objetos de prueba para la aplicacion

let defaultTodos = [
  {
    text: "Cortar cebolla",
    completed: true, },
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
*/


function App() {

  const localStorageTodos = localStorage.getItem("VERSION_V1")

  let parsedTodos

  if(!localStorageTodos){
    localStorage.setItem("VERSION_V1", JSON.stringify([]))
    parsedTodos = []
  } else{
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [searchValue, setSearchValue] = React.useState("")
  const [todosList, setTodosList] = React.useState(parsedTodos)

  const completedTodos = todosList.filter(todo => !!todo.completed).length
  const todosCountdow = todosList.length

  const todoListFilter = todosList.filter(todo => {
    const todosFiler = todo.text.toLowerCase()
    const searchFilter = searchValue.toLowerCase()
    return todosFiler.includes(searchFilter)
  })

  let searchTodos = []

  if(!searchValue.length >= 1){
    searchTodos = todosList
  }else{
    searchTodos = todoListFilter
  }

  const saveTodo = newTodo =>{
    const stringifidTodos = JSON.stringify(newTodo)
    localStorage.setItem("VERSION_V1", stringifidTodos)
    setTodosList(newTodo)
  }

  const completeTodos = (text) => {
    const todoIndex = todosList.findIndex(todo => todo.text === text)
    const newTodos = [...todosList]
    newTodos[todoIndex].completed = true
    saveTodo(newTodos)
  }

  const deleteTodos = (text) => {
    // const todoIndex = todosList.findIndex(todo => todo.text === text)
    const newTodo = todosList.filter(todo => todo.text != text)
    parsedTodos = [...newTodo]
    saveTodo(parsedTodos)
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
