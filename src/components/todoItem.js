import React from "react";
import "../styles/TodoItem.css"

function TodoItem (props){
    return(
        <li className="TodoItem">
            <div className="TodoItem__container">
              <img
                className="TodoItem__check"
                src="../assets/check.png"
                alt="check"
                onClick={() => {
                    alert("Tarea Realizada")
                }}
              />
              <p>{props.text}</p>
              <span
                onClick={() => {
                    alert("Borrar tarea")
                }}
              >X</span>
            </div>
        </li>
    )
}

export default TodoItem