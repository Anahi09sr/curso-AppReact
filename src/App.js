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

];
function App() {
  return (
    <>  
      {/* se puede colocar  <React.Fragment> o simplemente <>.
       se puede colocar asi  <React.Fragment>   o simplemente <>
      se indica cuales son las props en partiular que debe recibir  */}
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      
      <TodoList>
        {/* <TodoItem/>
        <TodoItem/>
        <TodoItem/> */}
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text}  
          text={todo.text}
          completed={todo.completed}
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
