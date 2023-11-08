import React, {useState} from "react";
import EditableText from "../functions/EditableText";
import Strikethrough from "../functions/Strikethrough";
import '../css/list.css';

const List = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [idCounter, setIdCounter] = useState(1);
    // const [checked, setChecked] = useState(false);

    // const addTodo = () => {
    //     if (todo !== "") {
    //     setTodos([...todos, todo]);
    //     setTodo("");
    //     }
    // };

    const addTodo = () => {
        if (todo !== "") {
          setTodos([...todos, { text: todo, id: idCounter}]);
          setTodo("");
          setIdCounter(idCounter + 1);
        }
      };

    // const deleteTodo = (index) => {
    //     const newTodos = todos.filter((_,i) => i !== index);
    //     setTodos(newTodos);
    // };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      };

    return (
        <div className="list">
            <div className="input-wrapper">
                <input
                type="text"
                name="todo"
                value={todo}
                placeholder="What's the task?"
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
                />
                <button className="add-button" type="submit" onClick={addTodo}>
                Add
                </button>
            </div>

            {todos?.length > 0 ? (
                <ul className="todo-list">
                    {todos.map((todoItem) => (
                        <div className="todo-item" key={todoItem.id}>
                            <div className="row">
                                <span className="text">
                                <Strikethrough text={<EditableText initialText={todoItem.text}/>}/>
                                </span>
                                <button className="delete-button" onClick={() => {deleteTodo(todoItem.id)}}>Delete</button>
                            </div>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="empty">
                <p>No task found</p>
                </div>
            )}
        </div>
    );
    }

export default List;