
import React, { useState } from 'react'
import { AddTodoForm } from './Components/AddTodoForm';
import { TodoList } from './Components/TodoList';
import "./app.css"



const initialTodos: Array<Todo> = [
    {text: "walk the dog", complete: true},
    {text:"write app", complete: false}
];

const App: React.FC = () => {
    const [todos, setTodos]= useState(initialTodos)
    
    const toggleTodo: ToggleTodo= selectedTodo => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo){
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const addTodo: AddTodo= newTodo => {
        newTodo.trim()!== "" &&
            setTodos([...todos,{text: newTodo, complete: false}]);
        
    };

    return (
        
        <React.Fragment>
          <h1>What's the plan for today?</h1>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <AddTodoForm addTodo={addTodo}/>

        </React.Fragment>
    );
  }
  
  export default App;
  