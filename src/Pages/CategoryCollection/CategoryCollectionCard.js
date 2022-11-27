import React from 'react'

const CategoryCollectionCard = ({ product, setData }) => {
  const {
    name,
    location,
    picture,
    originalPrice,
    resalePrice,
    sellerName,
    time,
    used,
    MobileNumber,
  } = product
  return (
    <div className="w-full">
      <div className="w-3/4 mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="font-bold">Seller Name : {sellerName}</p>
            <p className="font-semibold">Location : {location}</p>
            <p className="font-semibold">
              Original Price : {originalPrice} Taka
            </p>
            <p className="font-semibold">Resell Price : {resalePrice} Taka</p>
            <p className="font-semibold">Used Time : {used}</p>
            <p className="font-semibold"> Post Time : {time}</p>
            <p className="font-semibold">Phone : {MobileNumber}</p>
            <div className="card-actions justify-end  mt-5">
              <label
                htmlFor="booking_modal"
                className="btn btn-primary w-40 text-slate-300"
                onClick={() => setData(product)}
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCollectionCard
