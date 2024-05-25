import './CreateTodoButton.css'
function CreateTodoButton(){
    return(
     <button className="CreateTodoButton"
      onClick={
        (event) =>{
         console.log ('Le diste click') //Todo lo que comience con on en react va a ser un evento transfroandolo en un AddEventListener. 
         console.log(event)
         console.log(event.target)
        }
        }
     >+</button>
    );
  }

  export {CreateTodoButton};