import './TodoSearch.css'
function TodoSearch() {
  return (
    <div className="TodoSearch">
      <input id="todo-search-input" type="search" placeholder="Buscar tarea..." />
    </div>
  );
}
//Se podria poner export default App; anque esto nos podria ocacionar problemas, 
//Se recomienda hacer export nombrados

  export {TodoSearch};