import React from "react"
import "../styles/TodoSearch.css"

export default function TodoSearch() {
    return (
        <div className="TodoSearch">
            <input placeholder='Busca tu Task' />
            <i>+</i>
        </div>
    )
}