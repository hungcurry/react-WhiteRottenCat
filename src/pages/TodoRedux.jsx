import ListRedux from '@/components/ListRedux'
import { addTodo, remoteAllTodo } from '@/store/todoSlice'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Todo() {
  // 取store值
  const todoList = useSelector(state => state.todo.todoList)
  const submitStatus = useSelector(state => state.todo.submitStatus)
  // 設定action 需要打dispatch
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  const handleAddTodo = () => {
    if (inputRef.current.value === '')
      return
    dispatch(addTodo({
      id: Date.now(),
      name: inputRef.current.value,
      status: false,
    },
    ))
    inputRef.current.value = ''
  }

  useEffect(() => {
    // 防止重新整理useEffect 重新觸發讓資料變空
    if (!submitStatus)
      return

    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList, submitStatus])

  const handleRemoteAllTodo = () => {
    dispatch(remoteAllTodo([]))
  }

  return (
    <div className="w-full">
      <div className="bg-indigo-500 p-5 h-screen">
        <div className="max-w-[768px] m-auto bg-white p-5">
          <h1 className="text-center text-2xl mb-4">React Redux</h1>

          <div className="flex">
            <input type="text" ref={inputRef} className="w-full rounded-l-lg border-0 pl-4" placeholder="請輸入你的代辦事項" />

            <button type="button" onClick={handleAddTodo} className="w-[50px] h-[50px] border-0 bg-sky-500  rounded-r-lg text-white">+</button>
          </div>

          <ListRedux />

          <div className="flex justify-between items-center mt-5">
            <p>
              <span className="font-medium">{ todoList.length }</span>
              {' '}
              個事項待完成
            </p>

            <button onClick={handleRemoteAllTodo} type="button" className="bg-red-300 p-2 rounded-md hover:bg-red-400">Clear All Todo</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Todo
