//Importar para los svg

import { ReactComponent as CheckSVG } from './img/check.svg';
import { ReactComponent as DeleteSVG } from './img/delete.svg';

import './TodoIcon.css'

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
  };
function TodoIcon({type,color,onClick}){ //tipo de icono que voy a utilizar 
    return(
        //tendra que usar clases dinamicas
        <span
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
      >
        {iconTypes[type](color)}
      </span>
    )
}

export  { TodoIcon };