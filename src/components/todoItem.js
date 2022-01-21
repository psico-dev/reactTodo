import React from "react";
import "../styles/TodoItem.css"

function TodoItem (props){
    return(
        <li className="TodoItem">
            <div className="TodoItem__container">
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
            </div>
        </li>
    )
}

export default TodoItem