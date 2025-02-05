import { useRoutes } from 'react-router-dom'
// ===================
// ... page ...
// ===================
import Home from '@/pages/Home'


const routes = [
  {
    path: '/',
    element: <Home />,
  },
]

const AppRoutes= () => {
  return useRoutes(routes)
}
export default AppRoutes
