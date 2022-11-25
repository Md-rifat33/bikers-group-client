import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card'

const HomePageCard = () => {
  const data = useLoaderData()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-6">
      {data.map((category) => (
        <Card key={category._id} category={category} />
      ))}
    </div>
  )
}

export default HomePageCard
