import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../../../Contexts/AuthProvider'

const BookingModal = ({ data, setData }) => {
  console.log(data.picture)
  const { name, resalePrice, picture } = data
  const { user } = useContext(AuthContext)

  const handleBooking = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.userName.value
    const email = form.userEmail.value
    const productName = form.productName.value
    const productImage = form.picture.value
    const resellPrice = form.resellPrice.value
    const number = form.phone_number.value
    const location = form.address.value
    const booking = {
      name,
      email,
      productName,
      number,
      location,
      productImage,
      resellPrice,
    }
    console.log(booking)
    fetch('https://bikers-group-server.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          setData(null)
          toast.success('Booking Confirmed')
        } else {
          toast.error(data.message)
        }
      })
  }
  return (
    <>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              name="userName"
              placeholder="Type here"
              className="input input-bordered w-full mb-4 p-6"
              value={user.displayName}
              disabled
            />
            <input
              type="email"
              name="userEmail"
              placeholder="Type here"
              className="input input-bordered w-full mb-4 p-6"
              value={user.email}
              disabled
            />
            <input
              type="text"
              name="productName"
              placeholder="Type here"
              className="input input-bordered w-full mb-4 p-6"
              value={name}
              disabled
            />
            <input
              type="text"
              name="resellPrice"
              placeholder="Type here"
              className="input input-bordered w-full mb-4 p-6"
              value={resalePrice}
              disabled
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Your phone Number. . . "
              className="input input-bordered w-full mb-4 p-6"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Enter you location. . ."
              className="input input-bordered w-full p-6"
              required
            />
            <input
              type="text"
              name="picture"
              value={picture}
              placeholder="product image"
              className="input input-bordered w-full p-6"
              disabled
              required
            />

            <br />

            <input className="btn w-full" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  )
}

export default BookingModal
