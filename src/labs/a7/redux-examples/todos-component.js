import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
    const todos
        = useSelector(state => state.todos);

    const [todo, setTodo] = useState({do: ''});

    const dispatch = useDispatch();

    // handle click event of button, call reducer function passing new todo as the payload in the action object
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }

    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }

    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }

    const todoChangeHandler = (event) => {
        const doValue = event.target.value;  // get data from input field
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25 float-end">
                        Create
                    </button>

                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control w-75"/>
                </li>
                {

                    todos.map((todo, index) =>
                        <li key={todo._id}
                            className="list-group-item">
                            <button onClick={() => deleteTodoClickHandler(index)}  //new Delete button sends index of todo to delete to handler. Note () => {} because we are passing index parameter otherwise gets into infinite loop
                                    className="btn btn-danger float-end ms-2">
                                Delete
                            </button>

                            <input type="checkbox"
                                   checked={todo.done}  // if todo.done is true
                                   onChange={() => toggleTodoDone(todo)} // if user changes checkbox, we'll pass the todo to reducer function to update todo's state
                                   className="me-2"/>

                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;