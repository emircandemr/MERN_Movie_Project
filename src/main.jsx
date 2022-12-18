import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import createRoutes from './router/router'
import { BrowserRouter as Router } from 'react-router-dom'

const routes = createRoutes()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      {routes}
    </Router>
    <App />
  </React.StrictMode>,

  

)
