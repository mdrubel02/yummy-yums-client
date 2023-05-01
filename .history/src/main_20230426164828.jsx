import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {UserContext} from './Context/User/UserContext'
// import UserContext from './Context/User/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <App />
      </UserContext>
  </React.StrictMode>,
)
