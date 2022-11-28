import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../../Layout/DashboardLayout'
import Main from '../../Layout/Main'
import Aboutus from '../../Pages/Aboutus/Aboutus'
import Blogs from '../../Pages/Blogs/Blogs'
import CategoryCollection from '../../Pages/CategoryCollection/CategoryCollection'
import ContactUs from '../../Pages/ContactUs/ContactUs'
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers'
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Login/Login'
import SignUp from '../../Pages/SignUp/SignUp'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Page404 from '../../Pages/page404/page404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://bikers-group-server.vercel.app/'),
      },
      {
        path: '/category/:id',
        element: (
          <PrivateRoute>
            <CategoryCollection />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bikers-group-server.vercel.app/category/${params.id}`),
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
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/about',
        element: <Aboutus />,
      },
      {
        path: '*',
        element: <Page404 />,
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
      {
        path: '/dashboard/allusers',
        element: <AllUsers />,
      },
    ],
  },
])
