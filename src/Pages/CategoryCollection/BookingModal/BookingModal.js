import React, { useContext } from 'react'
import { AuthContext } from '../../../Contexts/AuthProvider'

const BookingModal = ({ data }) => {
  const { name, resalePrice, location, MobileNumber } = data
  const { user } = useContext(AuthContext)

  const handleBooking = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.userName.value
    const email = form.userEmail.value
    const productName = form.productName.value
    const number = form.phone_number.value
    const address = form.address.value
    console.log(number, address)
    const booking = {
      number,
      address,
    }
    console.log(booking)
    if (number.length > 11) {
      alert(`Phone number must be 11 characters`)
    }
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
            />
            <input
              type="text"
              name="address"
              placeholder="Enter you location. . ."
              className="input input-bordered w-full p-6"
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
