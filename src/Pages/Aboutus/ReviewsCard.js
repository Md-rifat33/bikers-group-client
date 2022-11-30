import React from 'react'

const ReviewsCard = ({ review }) => {
  const { name, img, reviews } = review
  return (
    <div className="card w-96 bg-base-100  shadow-xl">
      <div className="card-body">
        <h2 className="text-xl">{reviews}</h2>
        <div className="flex items-center mt-5 ">
          <h3>{name}</h3>
          <div className="avatar">
            <div className="w-8 ml-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCard
