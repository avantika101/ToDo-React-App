import React, { useContext } from 'react';
import { Context } from './App';

export default function ToDoItem({id, text, completed}) {
    //console.log(Context);
    const dispatch = useContext(Context);
    //console.log("dispatch is:"+{dispatch});
    //const [{text}, setInput] = useState({text})
    
    return (
      <div>
        <input type="checkbox" checked={completed} onChange={() => dispatch({type: 'completed', payload: id})}/>
        <input type="text" text={text} />
        <button onClick={() => dispatch({type: 'delete', payload: id})}>Delete</button>  
      </div>
    );
  }

  /*
  <input type="text" text={text} onChange={(e) => setInput(e.target.value)} /> 
  put another dispatch type to set the text of the input box?
  */

  
  
        