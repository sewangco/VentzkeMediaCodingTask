import React, {ChangeEvent, FormEvent, useState} from 'react'
import "../app.css"


interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("")

    const handleChange= (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    };

    return ( 
    <React.Fragment>
    <form>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
            Add Todo
        </button>
    </form>
    </React.Fragment>
 )
}