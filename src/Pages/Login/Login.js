import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState('')
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-[470px] p-7">
        <h2 className="text-2xl font-bold text-center mb-5 mr-3">Login</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
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
              {...register('email')}
              className="input input-bordered w-full p-8"
              placeholder="email . . . ."
            />
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
              {...register('password')}
              className="input input-bordered w-full p-8"
              placeholder="password. . . ."
            />
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
        </form>
        <p className="mt-7">
          <span>New to Biker's Group</span>{' '}
          <Link to="/signup" className="btn-link font-bold ml-1">
            Create new Account
          </Link>
        </p>
        <div className="divider mt-6 font-bold">OR</div>
        <button className="btn btn-outline w-full mt-3">
          <FaGoogle className="mr-2 font-bold" />
          Continue With Google
        </button>
      </div>
    </div>
  )
}

export default Login
