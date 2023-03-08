import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./todoSlice";
import TodoItem from "./TODOITEM";

const ToDoList = () => {
  const [input, setInput] = useState("");

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    console.log("dispatch", dispatch(addTodo(input)));
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
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

export default ToDoList;
