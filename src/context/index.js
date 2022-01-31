import React from "react";
import { useLocalStorage } from "./localStorage"

const TodoContext = React.createContext()

function TodoProvider (props) {

    const {
        itemList: todosList, 
        saveItem: saveTodo, 
        loading, 
        error
      } = useLocalStorage("VERSION_V1", [])
     
      const [searchValue, setSearchValue] = React.useState("")

      const [openModal, setOpenModal] = React.useState(false)
    
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
    
      const addTodo = (text) => {
        const newTodos = [...todosList]
        newTodos.push({
          completed: false,
          text: text,
        })
        saveTodo(newTodos)
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
    return(
        <TodoContext.Provider value={{
            error,
            loading,
            todosCountdow,
            completedTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoProvider, TodoContext }