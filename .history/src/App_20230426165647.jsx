import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Layout/router'
import UserContext from './Context/User/UserContext'

function App() {
  return (
    <div >

        <RouterProvider router={router}></RouterProvider>
  
    </div>
  )
}

export default App
