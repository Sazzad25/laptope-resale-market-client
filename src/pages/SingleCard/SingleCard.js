import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const SingleCard = () => {
    const categoryNews = useLoaderData();
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             {/* <h2>This Categories has topic: {categoryNews.length}</h2> */}
            {
                categoryNews.map(topics =><Cart
                key={topics._id}
                topics={topics}
                >

                </Cart>)
            }
        </div>
    );
};

export default SingleCard;