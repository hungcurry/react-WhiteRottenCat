import Home from '@/pages/Home'
import Todo from '@/pages/Todo'
import TodoRedux from '@/pages/TodoRedux'
import { useRoutes } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
  {
    path: '/todo-redux',
    element: <TodoRedux />,
  },
]

function AppRoutes() {
  return useRoutes(routes)
}
export default AppRoutes
