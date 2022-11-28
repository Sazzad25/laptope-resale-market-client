import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const MyOrders = () => {
    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                  }
            });
            const data = await res.json();
            return data;
        }
    })

  return (
    <div>
      <h3 className="text-3xl mb-5">My Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
             
              <th>Location</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
              {
                 bookings &&
                bookings?.map((booking, i) => 
                    <tr key={booking._id}>
                    <th>{i+1}</th>
                    <td>{booking.buyer}</td>
                    <td>{booking.title}</td>
                    <td>{booking.location} Taka</td>
                    <td>
                      {
                        booking.resale_price && !booking.paid && <Link 
                        to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                        </Link>
                      }
                      {
                       booking.resale_price && booking.paid && <span className="text-green-500">Paid</span>
                      }
                    </td>
                  </tr>
                    )
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
