import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";



const BookingModal = ({product, setProduct}) => {
    const {title, resale_price} = product;
    const {user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
       
        const booking = {
          
            // product: name,
            title,
            buyer: name,
            location,
            email,
            phone,
            resale_price
           
        }
        
        fetch('http://localhost:5000/bookings', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.acknowledged) {
            setProduct(null);
            toast.success('Your Booking Confirm')
          }
        })
       
    }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {title}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
          <input name="name" type="text"
              defaultValue={user?.displayName}
              disabled placeholder="Your Name" className="input w-full input-bordered" />
          <input name="email" type="email"
               defaultValue={user?.email}
               disabled
              placeholder="Email" className="input w-full input-bordered" />
              <h3 className="text-lg font-bold">
              Resale Price: {resale_price}
              </h3>
          <input name="phone" type="text" placeholder="Phone Number" className="input w-full max-w-xs input-bordered" />
          <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
         
          <br />
          <input  className="btn btn-accent w-full max-w-xs" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
