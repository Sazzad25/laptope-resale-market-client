import React from 'react';
import { Link } from 'react-router-dom';
// import laptop2 from '../../../assets/images/laptop2.jpg';

const Banner = () => {
    return (
    <div className="hero min-h-screen p-2" style={{ backgroundImage: `url("https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome To Laptops Resale Market</h1>
      <p className="mb-5 font-medium">The importance of laptops is immense in the current digital era. The use of laptops is now increasing in every country of the world. There is no alternative to using a laptop to keep up with the modern world.</p>
      <Link to="/range" className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;