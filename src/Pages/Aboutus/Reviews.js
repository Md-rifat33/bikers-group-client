import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ReviewsCard from './ReviewsCard'

const Reviews = () => {
  const reviews = useLoaderData()
  return (
    <div>
      <h3 className="text-3xl font-bold text-center">Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-7 gap-7 mb-8">
        {reviews.map((review) => (
          <ReviewsCard key={review.name} review={review} />
        ))}
      </div>
    </div>
  )
}

export default Reviews
