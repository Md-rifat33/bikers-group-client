import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main'
import Blogs from '../../Pages/Blogs/Blogs'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Login/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
    ],
  },
])
