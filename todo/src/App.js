import './App.css';
import React, { useReducer, createContext } from 'react';
import ToDoList from './ToDoList'

const Context = createContext();

function App() {

  const [state, dispatch] = useReducer(appReducer, []);

  function appReducer(state, action) {
    switch(action.type) {
      case 'add':
        return [
          ...state,
          {
            id: Date.now(),
            text: '',
            completed: false,
          }
        ]
      case 'delete':
        return state.filter((items) => items.id !== action.payload)
      case 'completed':
        return state.map((items) => {
          if(items.id === action.payload){
            return {
              ...items,
              completed : !items.completed,
            }
          };
          return items;
        })
      default:{
        return state;
      }
    }
  }
  
  return (
    <Context.Provider value={dispatch}>
    <div className="App">
      <button onClick={() => dispatch({type: 'add'})}>ADD</button>
      <ToDoList items={state}/>
    </div>
    </Context.Provider>
  );
}
export { Context };
export default App;

