import './TodoSearch.css'
function TodoSearch() {
  return (
    <div className="TodoSearch">
      <input id="todo-search-input" type="search" placeholder="Buscar tarea..." 
      onChange={(event) =>{
        console.log(event); 
        console.log('Escribiste en el TodoSearch');
        console.log(event.target);
        console.log(event.target.value);  //El input en este caso es target
      }} />
    </div>
  );
}
//Se podria poner export default App; anque esto nos podria ocacionar problemas, 
//Se recomienda hacer export nombrados

  export {TodoSearch};