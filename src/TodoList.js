import './TodoList.css'
//Para que los compinentes de TODOItem se renderizen TODOList 
//por dentro  del elemento ul
function TodoList({children}){
    return(
      <ul className="TodoList">
        {children}
        </ul>
    );
  }

  export {TodoList};

  