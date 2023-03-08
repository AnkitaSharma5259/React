import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: [{ id: 1, text: "ankita" }] },
  reducers: {
    // "todos/addTodo":
    addTodo: (state, action) => {
      console.log("name is", action.payload);
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
