import { create } from 'zustand'

const useTodoStore = create(set => ({
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
  submitStatus: false,

  addTodo: todo => set((state) => {
    return {
      submitStatus: true,
      todoList: [...state.todoList, todo],
    }
  }),

  updateTodo: id => set((state) => {
    const newTodoList = [...state.todoList]
    const index = newTodoList.findIndex(todo => todo.id === Number(id))
    newTodoList[index].status = !newTodoList[index].status
    return {
      submitStatus: true,
      todoList: newTodoList,
    }
  }),

  remoteAllTodo: () => set(() => {
    return {
      submitStatus: true,
      todoList: [],
    }
  }),
}))

export default useTodoStore
