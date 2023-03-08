import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import ToDoList from "./ToDoList";

const AddToDo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(
        addTodo({
          id: Date.now(),
          text,
          completed: false,
        })
      );
      setText("");
    }
  };

  return (
    <div>
      <h1>TODO List</h1>
      <form className="App-form" onSubmit={handleAddTodo}>
        <input type="text" onInput={(e) => setInput(e.target.value)} />
        <button type="submit">+</button>
      </form>
      <div className="Todos">
        {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              id={todo.id}
              onCheck={handleTodoDone}
            />
          ))}
      </div>
    </div>
  );
};

export default AddToDo;
