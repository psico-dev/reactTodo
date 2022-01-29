import React from "react"
import "../styles/TodoSearch.css"
import { TodoContext } from "../context";


export default function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const searchLetters = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <div className="TodoSearch">
            <input 
              className="search_input"
              value={searchValue}
              placeholder='Busca tu Task'
              onChange={(change) => searchLetters(change)}
              />
            <i>+</i>
        </div>
    )
}