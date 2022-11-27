import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthProvider'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err))
  }

  const menuItems = (
    <React.Fragment>
      <div className="sm:flex-col">
        <Link to="/" className="mr-14 lg:hover:border-b-2 pb-1">
          Home
        </Link>
        <Link to="/about" className="mr-14 lg:hover:border-b-2 pb-1">
          About Us
        </Link>
        <Link to="/contact" className="mr-14 lg:hover:border-b-2 pb-1">
          Contact Us
        </Link>
        <Link to="/blogs" className="mr-14 lg:hover:border-b-2 pb-1">
          Blogs
        </Link>
        {user?.uid ? (
          <>
            <Link to="/dashboard" className="mr-14 lg:hover:border-b-2 pb-1">
              Dashboard
            </Link>
            <Link
              onClick={handleLogOut}
              className="mr-14 lg:hover:border-b-2 pb-1"
            >
              Sign Out
            </Link>
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <div className="avatar">
                <div className="w-7 mr-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Link to="/login" className="mr-14 lg:hover:border-b-2 pb-1">
            Log in
          </Link>
        )}
      </div>
    </React.Fragment>
  )
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
          Biker's Group
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  )
}

export default Navbar
