import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLock,
  faUser,
  faImagePortrait,
} from '@fortawesome/free-solid-svg-icons'
import { FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../Contexts/AuthProvider'
import { toast } from 'react-toastify'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { createUser } = useContext(AuthContext)
  const handleSignUp = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => toast.error(error))
  }
  return (
    <div className="h-[800px] flex justify-center items-center mb-12">
      <div className="w-[470px] p-7">
        <h2 className="text-2xl font-bold text-center mb-5 mr-3">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">Name</span>
            </label>
            <FontAwesomeIcon
              icon={faUser}
              className="relative top-[43px] right-[189px]"
            />
            <input
              type="text"
              {...register('name', {
                required: 'Name is required',
              })}
              className="input input-bordered w-full p-8"
              placeholder="name . . . ."
            />
            {errors?.name && <p>{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Photo URL
              </span>
            </label>
            <FontAwesomeIcon
              icon={faImagePortrait}
              className="relative top-[43px] right-[189px]"
            />
            <input
              type="text"
              {...register('image', {
                required: 'Image is required',
              })}
              className="input input-bordered w-full p-8"
              placeholder="User image . . . ."
            />
            {errors?.image && <p>{errors.image?.message}</p>}
          </div>
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
                required: 'Email is required',
              })}
              className="input input-bordered w-full p-8"
              placeholder="email . . . ."
            />
            {errors?.email && <p>{errors.email?.message}</p>}
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
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message:
                    'Password must have uppercase number and special characters',
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: 'Password must be strong',
                },
              })}
              className="input input-bordered w-full p-8"
              placeholder="password. . . ."
            />
            {errors?.password && <p>{errors.password?.message}</p>}
          </div>
          <input
            className="btn btn-primary text-white w-full mt-6"
            value="Sign Up"
            type="submit"
          />
        </form>
        <p className="mt-7">
          <span>Already have an Account.</span>{' '}
          <Link to="/login" className="btn-link font-semibold ml-1">
            Please Login
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

export default SignUp
