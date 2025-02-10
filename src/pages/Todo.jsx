import List from '@/components/List'
import TodoStore from '@/store/useTodoStore'
import { useEffect, useRef } from 'react'

function Todo() {
  const todoList = TodoStore(state => state.todoList)
  const addTodo = TodoStore(state => state.addTodo)
  const remoteAllTodo = TodoStore(state => state.remoteAllTodo)
  const submitStatus = TodoStore(state => state.submitStatus)
  const inputRef = useRef(null)

  const handleAddTodo = () => {
    if (inputRef.current.value === '')
      return
    addTodo({
      id: Date.now(),
      name: inputRef.current.value,
      status: false,
    })
    inputRef.current.value = ''
  }
  useEffect(() => {
    if (!submitStatus)
      return
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList, submitStatus])

  const handleRemoteAllTodo = () => {
    remoteAllTodo()
  }

  return (
    <div className="w-full">
      <div className="bg-indigo-500 p-5 h-screen">
        <div className="max-w-[768px] m-auto bg-white p-5">
          <h1 className="text-center text-2xl mb-4">React</h1>

          <div className="flex">
            <input
              type="text"
              ref={inputRef}
              className="w-full rounded-l-lg border-0 pl-4"
              placeholder="請輸入你的代辦事項"
            />
            <button
              type="button"
              onClick={handleAddTodo}
              className="w-[50px] h-[50px] border-0 bg-sky-500 rounded-r-lg text-white"
            >
              +
            </button>
          </div>

          <List />

          <div className="flex justify-between items-center mt-5">
            <p>
              <span className="font-medium">{todoList.length}</span>
              {' '}
              個事項待完成
            </p>

            <button
              onClick={handleRemoteAllTodo}
              type="button"
              className="bg-red-300 p-2 rounded-md hover:bg-red-400"
            >
              Clear All Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
