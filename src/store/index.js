import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer, // 變成 `store.todo`
    // user: userReducer, // 變成 `store.user`
  },
})

export default store
