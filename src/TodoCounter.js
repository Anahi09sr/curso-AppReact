import './TodoCounter.css';
//La props son objetos, que tiene distintas propiedades 
//Podemos definir el nombre de la propiedad 
function TodoCounter({total,completed}){
    return(
      //{} se inserta codigo javaScript dentro  de la interfaz de los elemnetos JSX del componente
      <h1 className='TodoCounter'>
        Has Completado <span>{completed}</span> de <span>{total}</span> TODOs</h1>
      
    );
  }
//Se podria poner export default App; anque esto nos podria ocacionar problemas, 
//Se recomienda hacer export nombrados

  export {TodoCounter};