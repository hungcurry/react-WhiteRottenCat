import TodoStore from '@/store/useTodoStore'

function List() {
  const todoList = TodoStore(state => state.todoList)
  const updateTodo = TodoStore(state => state.updateTodo)

  return (
    <div className="mt-4">
      {todoList.map(todo => (
        <div key={todo.id} className="flex items-center mb-4 bg-gray-100 p-2 rounded-lg">
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => updateTodo(todo.id)}
            className="w-4 h-4 mr-2"
          />
          <span className={todo.status ? 'line-through' : ''}>
            {todo.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default List
