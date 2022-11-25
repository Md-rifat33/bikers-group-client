import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main'
import Blogs from '../../Pages/Blogs/Blogs'
import CategoryCollection from '../../Pages/Home/CategoryCollection/CategoryCollection'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Login/Login'
import SignUp from '../../Pages/SignUp/SignUp'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:8000/'),
      },
      {
        path: '/category/:id',
        element: (
          <PrivateRoute>
            <CategoryCollection />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/category/${params.id}`),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
    ],
  },
])
