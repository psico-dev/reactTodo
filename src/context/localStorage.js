import React from "react";

function useLocalStorage (itemName, contain) {

    const [itemList, setItemList] = React.useState(contain)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
  
    React.useEffect(() => {
      setTimeout(() => {
  
        try {
          
          const localStorageItem = localStorage.getItem(itemName)
  
          let parsedItem
        
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(contain))
            parsedItem = []
          } else{
            parsedItem = JSON.parse(localStorageItem)
          }
  
          setItemList(parsedItem)
          setLoading(false)
        } catch (error){
          setError(error)
        }
      }, 1000)
    },[])
  
  
    const saveItem = newItem =>{
      try {
        const stringifidItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifidItem)
        setItemList(newItem)
      } catch (error){
        setError(error)
      }
    }
  
    return {
      itemList, 
      saveItem,
      loading,
      error
    }
  }

  
  export { useLocalStorage }