import React from 'react';  //Importar react para poder utilizar estados 
import './TodoSearch.css'
function TodoSearch({
  //Recibir 
  searchValue,
  setSearchValue
}) {
  
    return (
    <div className="TodoSearch">
      <input id="todo-search-input" type="search" placeholder="Buscar tarea..." 
      value= {searchValue}  //Valor controlado por searchValue
      onChange={(event) =>{  
        setSearchValue(event.target.value);   //cada vez que el usaruo escribe, la funcion setSerachValue actualiza el estado con el valor del input 
       
      }} />
    </div>
  );
}
//Se podria poner export default App; anque esto nos podria ocacionar problemas, 
//Se recomienda hacer export nombrados

  export {TodoSearch};