import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store'
import '@/assets/scss/all.scss'
import '@/assets/index.scss'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

// 添加 future flags 配置
const router = createHashRouter(
  [
    {
      path: '/*',
      element: <App />
    }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
