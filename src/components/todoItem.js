import React from "react";
import "../styles/TodoItem.css"
import images from "../assets/images"

function TodoItem (props){

    const checkGreen = images.checkGreen
    const checkBlack = images.checkBlack
    
    return(
        <li className="TodoItem">
            <div className="TodoItem__container">
              <img
                className="TodoItem__check"
                src={checkBlack}
                alt="check"
                onClick={props.onComplete}
              />
              <p
                className={`${props.completed && "TodoItem-p--complete"}`}
              >{props.text}</p>
              <span
                className="TodoItem__trash"
                onClick={props.onDelete}
              >X</span>
            </div>
        </li>
    )
}

export default TodoItem