import { createSlice, configureStore, current } from "@reduxjs/toolkit";

let todos: any = [];

if (typeof window !== "undefined") {
  try {
    todos = JSON.parse(localStorage.getItem("todos")!);
  } catch (err) {}
}

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: todos ? todos : [],
  },
  reducers: {
    addTodos: (state, action) => {
      state.todos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodos: (state, action) => {
      let arr = state.todos?.filter((ele: any) => ele.id !== action.payload);
      state.todos = arr;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodos, removeTodos } = todoSlice.actions;
export default todoSlice.reducer;
