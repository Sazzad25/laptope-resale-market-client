import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M6ofFEm0bBxRqJrjP8M7nrwlIuhRxHTFva2vlUQ2jI9JLPMsSd1wjXOednn49BZHlNkHj1u65OuUOGdXLL39yEd00EKfPYtua');

const Payment = () => {
    const booking = useLoaderData();
    const {title, resale_price, appointmentDate, slot} = booking;
    return (
        <div>
            <h4 className='text-3xl'>Payment for {title}</h4>
            <p className='text-xl'>Please pay <strong>${resale_price}</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;