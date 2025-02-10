import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer, // 變成 `state.todo`
    // user: userReducer, // 變成 `state.user`
  },
})

export default store
