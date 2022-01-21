import React from "react";
import "../styles/todoCounter.css"

function TodoCounter (){
    return(
        <header>
            <h2 className="header__title--first">Your Tasks</h2>
            <h3 className="header__title--second">2 de 3 TODO's</h3>
        </header>
    )
}

export { TodoCounter }