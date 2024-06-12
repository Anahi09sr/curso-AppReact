import './TodoCounter.css';
//La props son objetos, que tiene distintas propiedades 
//Podemos definir el nombre de la propiedad 
function TodoCounter({ total, completed }) {
  return (
      completed === total 
          ? <h1 className='TodoCounter'>Has completado todos tus TODOS 🥳</h1> 
          :<h1 className='TodoCounter'>Has completado <span> {completed} </span>de <span>{total}</span> TODOS</h1>
  );
}

  //{} se inserta codigo javaScript dentro  de la interfaz de los elemnetos JSX del componente
//Se podria poner export default App; anque esto nos podria ocacionar problemas, 
//Se recomienda hacer export nombrados

  export {TodoCounter};