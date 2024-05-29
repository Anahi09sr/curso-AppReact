import './TodoItem.css'
//Componentes, comienza el nombre de la funcion con mayuscula
function TodoItem(props){
  return (
    <li className="TodoItem">
      
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
       onClick={props.onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

  export {TodoItem};