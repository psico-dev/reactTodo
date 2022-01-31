import React from "react";
import TodoItem from "./components/todoItem"
import TodoSearch from "./components/todoSearch"
import { TodoContext } from "./context";
import { TodoCounter } from './components/todoCounter';
import { TodoList } from "./components/todoList"
import { TodoButton } from "./components/todoButton"
import { Modal } from "./Modal"
import { TodoForm } from "./todoForm"

function AppUI () {

  const {
    loading,
    error,
    searchTodos,
    completeTodos,
    deleteTodos,
    searchValue,
    openModal,
    setOpenModal
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

      <TodoButton 
        openModal = {openModal}
        setOpenModal = {setOpenModal}
      />

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </React.Fragment>
  )
}

export { AppUI }