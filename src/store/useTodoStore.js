import { create } from 'zustand'

const useTodoStore = create(set => ({
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
  submitStatus: false,

  addTodo: todo => set((store) => {
    // eslint-disable-next-line no-console
    console.log('store', store)

    return {
      submitStatus: true,
      todoList: [...store.todoList, todo],
    }
  }),

  updateTodo: id => set((store) => {
    const newTodoList = [...store.todoList]
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
