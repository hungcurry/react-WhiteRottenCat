import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: JSON.parse(localStorage.getItem('todoList')) || [],
    submitStatus: false,
  },
  reducers: {
    addTodo (state, action) {
      state.submitStatus = true
      state.todoList.push(action.payload);
    },
    updateTodo(state, action) {
      // console.log(`state` , state);
      // console.log(`action` , action);
      state.submitStatus = true
      const id = action.payload;

      const index = state.todoList.findIndex((todo) => todo.id === Number(id));
      state.todoList[index].status = !state.todoList[index].status;
    },
    remoteAllTodo(state, action) {
      state.submitStatus = true
      state.todoList = [];
    }
  },
});

export const { addTodo, updateTodo, remoteAllTodo } = todoSlice.actions;
export default todoSlice.reducer;
