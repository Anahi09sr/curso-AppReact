import React from 'react';  //Importar react para poder utilizar estados 
import './TodoSearch.css'
function TodoSearch() {
  //Inicializar estados 
  // serchValue es ek estadi que almacena el valor de busqueda
  // setSeatchValue  es la funcion que utiliza para actualizar ek valor de searchVaue, simpre se coloca set
//useState(') inicializa serchValue con una cadena vacia 
  const [searchValue, setSearchValue]= React.
useState ('');

  console.log('Los usuarios buscan todos de '+ searchValue);  
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