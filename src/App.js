import React from 'react';
import { AppUI } from "./AppUI"
import { TodoList } from './components/todoList';

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

function useLocalStorage (itemName, contain) {
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(contain))
    parsedItem = []
  } else{
    parsedItem = JSON.parse(localStorageItem)
  }

  const [itemList, setItemList] = React.useState(parsedItem)

  const saveItem = newItem =>{
  const stringifidItem = JSON.stringify(newItem)
  localStorage.setItem(itemName, stringifidItem)
  setItemList(newItem)
  }

  return [itemList, saveItem]
}


function App() {

  const [todosList, saveTodo] = useLocalStorage("VERSION_V1", [])
 
  const [searchValue, setSearchValue] = React.useState("")

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



  const completeTodos = (text) => {
    const todoIndex = todosList.findIndex(todo => todo.text === text)
    const newTodos = [...todosList]
    newTodos[todoIndex].completed = true
    saveTodo(newTodos)
  }

  const deleteTodos = (text) => {
    const todoIndex = todosList.findIndex(todo => todo.text === text)
    const newTodo = [...todosList]
    newTodo.splice(todoIndex, 1)
    saveTodo(newTodo)
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
