//Componentes, comienza el nombre de la funcion con mayuscula
function TodoItem(props){
    return(
      <li>
        <samp>V</samp>
        <p>{props.text}</p>
        <samp>X</samp>
      </li>
    );
  }

  export {TodoItem};