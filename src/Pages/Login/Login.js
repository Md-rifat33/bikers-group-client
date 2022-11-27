import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../Contexts/AuthProvider'
import { GoogleAuthProvider } from 'firebase/auth'

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const { signIn, googleLogIn } = useContext(AuthContext)
  const [loginError, setLoginError] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = (data) => {
    setLoginError('')
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user
        console.log(user)
        navigate(from, { replace: true })
      })
      .catch((err) => {
        console.error(err)
        setLoginError(err.message)
      })
  }

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleLogIn = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        const user = result.user
        console.log(user)
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-[470px] p-7">
        <h2 className="text-2xl font-bold text-center mb-5 mr-3">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">Email</span>
            </label>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="relative top-[44px] right-[189px]"
            />
            <input
              type="email"
              {...register('email', {
                required: `Email address is required`,
              })}
              className="input input-bordered w-full p-8"
              placeholder="email . . . ."
            />
            {errors?.email && <p className="mt-3">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full mt-3">
            <label className="label">
              <span className="label-text font-semibold text-lg">Password</span>
            </label>
            <FontAwesomeIcon
              icon={faLock}
              className="relative top-[43px] right-[190px]"
            />
            <input
              type="password"
              {...register('password', {
                required: `Password is required`,
                minLength: {
                  value: 6,
                  message: `Password must be 6 characters or longer`,
                },
              })}
              className="input input-bordered w-full p-8"
              placeholder="password. . . ."
            />
            {errors?.password && <p>{errors.password?.message}</p>}
            <label className="label mt-3">
              <Link to="/" className="label-text underline">
                Forget password
              </Link>
            </label>
          </div>

          <input
            className="btn btn-primary text-white w-full mt-4"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="mt-7">
          <span>New to Biker's Group</span>{' '}
          <Link to="/signup" className="btn-link font-bold ml-1">
            Create new Account
          </Link>
        </p>
        <div className="divider mt-6 font-bold">OR</div>
        <button
          onClick={handleGoogleLogIn}
          className="btn btn-outline w-full mt-3"
        >
          <FaGoogle className="mr-2 font-bold" />
          Continue With Google
        </button>
      </div>
    </div>
  )
}

export default Login
