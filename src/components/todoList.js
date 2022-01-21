import React from "react";
import "../styles/TodoList.css"

function TodoList(props) {
    return (
        <section className="TodoList">
            <ul className="TodoList__list">
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList }