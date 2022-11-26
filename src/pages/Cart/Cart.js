import React from "react";
// import { Card, Image } from 'react-bootstrap';
// import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";

// details description of courses
const Cart = ({ topics }) => {
  const { title, image_url, total_view, rating, location, original_price, resale_price, uses_time, posted_date, sellers_name } = topics;
  return (
    //     <div className="card w-96 bg-base-100 shadow-xl">

    //     {/* <Card.Header className='d-flex justify-content-between align-items-center'>
    //         <div className='d-flex'>
    //             <Image
    //              roundedCircle
    //              className='me-2'
    //              src={author?.img}
    //              style={{height: '60px'}}
    //             ></Image>
    //             <div>
    //                 <p className='mb-0'>{author?.name}</p>
    //                 <p>{author?.published_date}</p>
    //             </div>
    //         </div>
    //         <div>
    //          <FaBookmark className='me-2'></FaBookmark>
    //          <FaShareAlt></FaShareAlt>
    //         </div>
    //     </Card.Header> */}
    //     <div className='card-body'>
    //       <h2 className="card-title">{title}</h2>
    //       <figure><img src={image_url} alt="" /></figure>
    //       {/* <Card.Img variant="top" src={image_url} /> */}
    //       <p>
    //         {
    //             details.length > 250 ?
    //             <>{details.slice(0, 250) + '...'} <Link to={`/topics/${_id}`}>Read More</Link></>
    //             :
    //             details
    //         }
    //       </p>
    //     </div>
    //     {/* <Card.Footer className="d-flex justify-content-between">
    //         <div>
    //             <FaStar className='text-warning me-2'></FaStar>
    //             <span>{rating?.number}</span>
    //         </div>
    //         <div>
    //             <FaEye className='me-2'></FaEye>
    //             <span>{total_view}</span>
    //         </div>
    //     </Card.Footer> */}
    //   </div>
    <div className="card w-96 bg-base-100 shadow-xl">
     
        <img src={image_url} alt="" />
     
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl">Location: {location}</p>
        <h3 className="text-1xl">Resale Price: {resale_price} TK</h3>
        <h3 className="text-1xl">Original Price: {original_price}</h3>
        <h3 className="text-1xl">Years of Use: {uses_time}</h3>
        <h3 className="text-1xl">Posted Date: {posted_date}</h3>
        <h3 className="text-1xl">Seller's Name: {sellers_name}</h3>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
