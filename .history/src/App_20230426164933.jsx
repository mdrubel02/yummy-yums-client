import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Layout/router'
import UserContext from './Context/User/UserContext'

function App() {
  return (
    <div >
      <UserContext>
        <RouterProvider router={router}></RouterProvider>
      </UserContext>
    </div>
  )
}

export default App
