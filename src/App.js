import logo from './platzi.webp';
//De un objeto, se esta importando  a la prpiedad TodoCounter, esto nos permitira disminuir los errores al momento de escribir el nombre de  los componentes
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text:'cortar cebolla', completed:true},
  { text:'Tomar el curso de intro a React.js', completed:false},
  { text:'React es interesante ', completed:true},
  { text:'jajajaja', completed:false},
  { text:'usar estados derivados', completed:true},

];
function App() {
  const [todos, setTodos]= React.useState(defaultTodos);
  //Inicializar estados 
  // serchValue es ek estadi que almacena el valor de busqueda
  // setSeatchValue  es la funcion que utiliza para actualizar ek valor de searchVaue, simpre se coloca set
  //useState(') inicializa serchValue con una cadena vacia 
  const [searchValue, setSearchValue]= React.
  useState ('');
 ///estados derivados 
  const completedTodos = todos.filter(todo => !!todo.completed).length; //La prpiedad filter permirte  encontrar toas las coincidencias  
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) =>{
  
      //cuando este haciendo la validacion, toLowerCase() converira a minusculas , 
      //esto permite mostrar todas las coicnidencias en el buscador sin importar si son en mayuscula o minuscula 
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText); //nos mostrara todas las coicidencias, si incluye en  ese texto que tenga el estado searchValue
    }
   );
//Completando TODOs
  const completeTodo =(text) =>{
    const newTodos =[...todos]; //Crear una copia de array de los todos
    const todoIndex = newTodos.findIndex(// como saber cual todo queremos modificar, le colocamos un identificador unico
     (todo) => todo.text == text
  );
    newTodos[todoIndex].completed =true;
    setTodos(newTodos);
  };  //Llamamos el actualizador, y le mandamos la nueva lista de todos ya actualizada 


//Eliminado TODOS
const deleteTodo =(text) =>{
  const newTodos =[...todos]; 
  const todoIndex = newTodos.findIndex(
   (todo) => todo.text == text
);
  newTodos.splice(todoIndex, 1); //Eliminar, solo vamos a quitar un todo
  setTodos(newTodos);
};  

  console.log('Los usuarios buscan todos de '+ searchValue);  
  return (
    <>  
      {/* se puede colocar  <React.Fragment> o simplemente <>.
       se puede colocar asi  <React.Fragment>   o simplemente <>
      se indica cuales son las props en partiular que debe recibir  */}
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
       //Se tiene que enviar el estado y el actualizador de estados al componente todoSerach, esto se hace con props 
       searchValue={searchValue} //se puede  llamar igual que el estado
       setSearchValue = {setSearchValue}
       />
      
      <TodoList>
        {/* <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        vamos a renderizar los todo que estan gaudrados en el estado */}
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text}  
          text={todo.text}
          completed={todo.completed}
          //rncapular nuestras funciones en otras funciones, para no tener errores
          onComplete={() => completeTodo (todo.text)}  //completar un todo, actulizador
          onDelete={() => deleteTodo (todo.text)} 
          />
        ))}
        {/* lo anterior es lo mismo que 
        {defaultTodos.map(todo => (
          retun (
            <TodoItem/>
          )
        ))} */}
      </TodoList>
      {/* para comentar es con ctrl+k+u */}
      <CreateTodoButton/>
      </>
  
  
  );
}

//Priemro se puede realizar la estructura de la aplicacion, como se iran mostrando,
//posteriormente para pasar a estructurar cada componente, mismas que se estaran realizando en sus respectivos archivos


export default App;
