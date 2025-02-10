import ListRedux from '@/components/ListRedux'
import { addTodo, remoteAllTodo } from '@/store/todoSlice'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Todo() {
  const todoList = useSelector(store => store.todo.todoList)
  const submitStatus = useSelector(store => store.todo.submitStatus)
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  const handleAddTodo = () => {
    const value = inputRef.current.value.trim()
    if (!value)
      return

    dispatch(addTodo({
      id: Date.now(),
      name: value,
      status: false,
    }))

    inputRef.current.value = ''
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  useEffect(() => {
    if (!submitStatus)
      return
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList, submitStatus])

  return (
    <div className="w-full">
      <div className="bg-indigo-500 p-5 h-screen">
        <div className="max-w-[768px] m-auto bg-white p-5">
          <h1 className="text-center text-2xl mb-4">React Redux</h1>

          <div className="flex">
            <input
              type="text"
              ref={inputRef}
              className="w-full rounded-l-lg border-0 pl-4"
              placeholder="請輸入你的代辦事項"
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              onClick={handleAddTodo}
              className="w-[50px] h-[50px] border-0 bg-sky-500 rounded-r-lg text-white"
            >
              +
            </button>
          </div>

          <ListRedux />

          <div className="flex justify-between items-center mt-5">
            <p>
              <span className="font-medium">{todoList.length}</span>
              {' '}
              個事項待完成
            </p>

            <button
              onClick={() => dispatch(remoteAllTodo())}
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
