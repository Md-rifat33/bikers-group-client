import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../../Layout/DashboardLayout'
import Main from '../../Layout/Main'
import Blogs from '../../Pages/Blogs/Blogs'
import CategoryCollection from '../../Pages/CategoryCollection/CategoryCollection'
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard'
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders'
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
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <MyOrders />,
      },
    ],
  },
])
