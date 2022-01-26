import React from "react";
import { TodoCounter } from './components/todoCounter';
import TodoSearch from "./components/todoSearch"
import { TodoList } from "./components/todoList"
import TodoItem from "./components/todoItem"
import {TodoButton} from "./components/todoButton"

function AppUI ({
      todosCountdow,
      completedTodos,
      searchValue,
      setSearchValue,
      searchTodos,
      completeTodos,
      deleteTodos,
}) {
    return(
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