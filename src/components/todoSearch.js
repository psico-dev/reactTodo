import React from "react"
import "../styles/TodoSearch.css"

export default function TodoSearch({searchValue, setSearchValue}) {

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