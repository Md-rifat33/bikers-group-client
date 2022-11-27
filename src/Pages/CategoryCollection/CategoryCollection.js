import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import BookingModal from './BookingModal/BookingModal'
import CategoryCollectionCard from './CategoryCollectionCard'

const CategoryCollection = () => {
  const datas = useLoaderData()
  console.log(datas)
  const { products } = datas
  const [data, setData] = useState(null)

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-7">
        {products.map((product, i) => (
          <CategoryCollectionCard key={i} product={product} setData={setData} />
        ))}
      </div>
      {data && <BookingModal data={data} setData={setData} />}
    </section>
  )
}

export default CategoryCollection
