import { updateTodo } from '@/store/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

function List() {
  const todoList = useSelector(state => state.todo.todoList)
  // const _submitStatus = useSelector(state => state.todo.submitStatus) // 添加下划线前缀
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

  // return ( <ul> { todoList.map((todo) => template(todo)) } </ul> )
  return (
    <ul>
      { todoList.map((todo) => {
        return template(todo)
      }) }
    </ul>
  )
}

export default List
