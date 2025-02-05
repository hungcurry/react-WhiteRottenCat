import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/assets/scss/all.scss'
import '@/assets/index.scss'
// reduex
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  // </React.StrictMode>
)
