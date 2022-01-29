import React from "react";
import { TodoContext } from "./context";
import { TodoCounter } from './components/todoCounter';
import TodoSearch from "./components/todoSearch"
import { TodoList } from "./components/todoList"
import TodoItem from "./components/todoItem"
import {TodoButton} from "./components/todoButton"

function AppUI () {

  const {
    loading,
    error,
    searchTodos,
    completeTodos,
    deleteTodos,
    searchValue
  } = React.useContext(TodoContext)

  return(
    <React.Fragment>
      <TodoCounter/> 

      <TodoSearch/> 

      <TodoList>
        
        {error && <p>Desesperate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchTodos.length && !searchValue.length) && <h2>¡Crea tu primer Todo!</h2>}
        
        {/* {(!loading && !searchTodos.length && searchValue.length) && <h2>¡No encontramos Todos!</h2>} */}

        {searchTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={()=> completeTodos(todo.text)}
          onDelete={()=> deleteTodos(todo.text)}
          />
          ))
        }
      </TodoList> 

      <TodoButton />
    </React.Fragment>
  )
}

export { AppUI }