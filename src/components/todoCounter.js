import React from "react";
import "../styles/todoCounter.css"
import { TodoContext } from "../context";


function TodoCounter (){
    const {todosCountdow, completedTodos} = React.useContext(TodoContext)
    return(
        <header>
            <h2 className="header__title--first">Your Tasks</h2>
            <h3 className="header__title--second">Has completado {completedTodos} de {todosCountdow} TODO's</h3>
        </header>
    )
}

export { TodoCounter }