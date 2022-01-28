import React from "react";
import { TodoCounter } from './components/todoCounter';
import TodoSearch from "./components/todoSearch"
import { TodoList } from "./components/todoList"
import TodoItem from "./components/todoItem"
import {TodoButton} from "./components/todoButton"
import { TodoContext } from "./context";

function AppUI () {
  return(
    <React.Fragment>
      <TodoContext.Consumer>
        {({
          todosCountdow,
          completedTodos
        })=>
          <TodoCounter
          total = {todosCountdow}
          completed = {completedTodos}
          /> 
        }
      </TodoContext.Consumer>

      <TodoContext.Consumer>
        {({
          searchValue,
          setSearchValue
        })=>
          <TodoSearch
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
          /> 
        }
      </TodoContext.Consumer>
      

      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchTodos,
          completeTodos,
          deleteTodos
        })=>
        <TodoList>
          
          {error && <p>Desesperate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchTodos.length) && <h2>¡Crea tu primer Todo!</h2>}

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
        }
      </TodoContext.Consumer>

      <TodoButton />
    </React.Fragment>
  )
}

export { AppUI }