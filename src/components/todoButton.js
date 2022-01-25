import React from "react";
import "../styles/TodoButton.css"

export function TodoButton(){

    const clickButton = () =>{
        alert("Ahora tendra que salir un agregar Todo")
    }
    
    return(
        <div 
          className="TodoButton"
          onClick={clickButton}
          >
          <button>
              +
          </button>
        </div>
    )
}