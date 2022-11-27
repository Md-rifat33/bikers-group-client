import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../Contexts/AuthProvider'
import styled from 'daisyui/dist/styled'

const MyOrders = () => {
  const { user } = useContext(AuthContext)
  const url = `http://localhost:8000/bookings?email=${user?.email}`

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url)
      const data = await res.json()
      return data
    },
  })

  return (
    <div className="ml-2">
      <h3 className="text-3xl mb-5">My Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>
                  <img
                    src={booking.productImage}
                    alt=""
                    style={{
                      width: '40px',
                      heigth: '20px',
                      borderRadius: '5px',
                    }}
                  />
                </td>
                <td>{booking.productName}</td>
                <td>{booking.resellPrice}</td>
                <td>
                  <button className="btn btn-primary w-20">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders
