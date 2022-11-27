import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Cart from '../Cart/Cart';

const SingleCard = () => {
    const [product, setProduct] = useState(null);
    const categoryNews = useLoaderData();
    return (
        <section> 
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             {/* <h2>This Categories has topic: {categoryNews.length}</h2> */}
            {
                categoryNews.map(topics =><Cart
                key={topics._id}
                topics={topics}
                setProduct={setProduct}
                >

                </Cart>)
            }
        </div>
        { 
        product &&
        <BookingModal
         product={product}
         ></BookingModal>}
        </section>
    );
};

export default SingleCard;