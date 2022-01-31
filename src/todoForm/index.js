import React from "react";
import { TodoContext } from "../context"
import "./todoForm.css"

function TodoForm () {

    const [newTodoValue, setNewTodoValue] = React.useState("")

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onAdd = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form>
            <label>
                Agrega un nuevo Todo
            </label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe un nuevo Todo"
            />
            <div
                className="TodoForm-buttonContainer"
            >
                <button 
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                    type="button"
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    onClick={onAdd}
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }