import React, { useState } from 'react';
import './App.css';


function App() {
    //initiate state
  const [todos, setTodos] = useState([{text: "hiii"}, {text: "tomorrow"}, {text: "sunshine"}] );

  const TodoForm = ( { addTodo }) => {
      const [value, setValue] = useState("");
      const handleSubmit = (event) => {
          event.preventDefault();
          if(!value) return;
          addTodo(value);
          setValue("")
      }
      return (
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => {setValue(e.target.value)}}/>
          </form>
      )
  }

  const addTodo = ( text ) => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos)
  }

  // build component with state variable
    const Todo = ({ todo }) => <div className={"todo"}>{todo.text}</div>;
    //render

    return (
        <div className={"app"}>
            <div className={"todo-list"}>
                {
                    todos.map((todo, index)=> (
                        <Todo todo={todo} index={index}/>
                    ))
                }
            </div>
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}
export default App;
