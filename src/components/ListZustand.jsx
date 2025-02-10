import TodoStore from '@/store/useTodoStore'

function TodoItem({ id, status, name }) {
  const { updateTodo } = TodoStore()

  return (
    <div key={id} className="flex items-center mb-4 bg-gray-100 p-2 rounded-lg">
      <input
        type="checkbox"
        checked={status}
        onChange={() => updateTodo(id)}
        className="w-4 h-4 mr-2"
      />
      <span className={status ? 'line-through' : ''}>
        {name}
      </span>
    </div>
  )
}

function List() {
  const { todoList } = TodoStore()

  return (
    <div className="mt-4">
      {
        todoList.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))
      }
    </div>
  )
}

export default List
