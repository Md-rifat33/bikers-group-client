import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ category }) => {
  const { title, img, _id } = category
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-xl font-bold">{title}</h2>
        <p className="text-center text-lg">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <Link to={`/category/${_id}`} className="w-full">
            <button className="btn btn-primary w-full font-bold text-slate-300">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
