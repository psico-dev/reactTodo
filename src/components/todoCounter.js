import React from "react";
import "../styles/todoCounter.css"

function TodoCounter ({total, completed}){
    return(
        <header>
            <h2 className="header__title--first">Your Tasks</h2>
            <h3 className="header__title--second">Has completado {completed} de {total} TODO's</h3>
        </header>
    )
}

export { TodoCounter }