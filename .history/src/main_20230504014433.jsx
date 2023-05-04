import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthProviders from './Context/AuthProviders'
import router from './Layout/router'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
