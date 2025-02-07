import Home from '@/pages/Home'
import Todo from '@/pages/Todo'
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
]

function AppRoutes() {
  return useRoutes(routes)
}
export default AppRoutes
