import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import createRoutes from './router/router'
import { BrowserRouter as Router } from 'react-router-dom'
import {store} from './store/store'
import {Provider} from 'react-redux'

const routes = createRoutes()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {routes}
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
