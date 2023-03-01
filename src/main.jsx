import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './screens/Home';
import Output from './screens/Output';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/output',
    element: <Output />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
