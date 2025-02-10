import Home from '@/pages/Home'
import TodoRedux from '@/pages/TodoRedux'
import TodoZustand from '@/pages/TodoZustand'
import { useRoutes } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/todo',
    element: <TodoZustand />,
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
