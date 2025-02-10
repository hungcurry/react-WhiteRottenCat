import { updateTodo } from '@/store/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

function List() {
  // 取store值
  const todoList = useSelector(store => store.todo.todoList)
  const dispatch = useDispatch()

  const handleUpdateTodo = (event) => {
    const { id } = event.target.dataset
    dispatch(updateTodo(id))
  }

  const template = (todo) => {
    return (
      <li className="py-4" key={todo.id}>
        <input
          type="checkbox"
          className="mr-2"
          onChange={handleUpdateTodo}
          data-id={todo.id}
          checked={todo.status}
        />
        <label className={todo.status ? 'line-through' : ''}>
          { todo.name }
        </label>
      </li>
    )
  }

  return (
    <ul>
      {
        todoList.map((todo) => {
          return template(todo)
        })
      }
    </ul>
  )
}

export default List
