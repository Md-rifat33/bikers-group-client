import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CategoryCollectionCard from './CategoryCollectionCard'

const CategoryCollection = () => {
  const datas = useLoaderData()
  const { products } = datas
  console.log(products)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-7">
      {products.map((product, i) => (
        <CategoryCollectionCard key={i} product={product} />
      ))}
    </div>
  )
}

export default CategoryCollection
