import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routerPaths } from './routes/routerPaths'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routerPaths} />
)
