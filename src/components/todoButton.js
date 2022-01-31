import React from "react";
import "../styles/TodoButton.css"

export function TodoButton( {setOpenModal, openModal} ){

    const clickButton = () =>{
        if(!openModal){
            setOpenModal(true)
        } else{
            setOpenModal(false)
        }
    }
    
    return(
        <div 
          className="TodoButton"
          onClick={clickButton}
          >
          <button
            className="button-add-todos"
          >
              +
          </button>
        </div>
    )
}