import React from "react";

const BookingModal = ({product, setProduct}) => {
    const {title} = product;

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
       
        const booking = {
          
            product: name,
            seller: name,
            location,
            email,
            phone,
            price
        }
        console.log(booking);
        setProduct(null);
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
          <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
          <input name="email" type="email" placeholder="Email" className="input w-full input-bordered" />
          <input name="price" type="text" placeholder="Price" className="input w-full input-bordered" />
          <input name="phone" type="text" placeholder="Phone Number" className="input w-full max-w-xs" />
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
