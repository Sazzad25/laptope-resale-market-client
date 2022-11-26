import React, { useEffect, useState } from 'react';
import CategoryName from './CategoryName';

const Category = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='text-5xl font-semibold'>Our Second Hand Categories</h2>
                
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <h2>Total: {services.length}</h2>
              
                {
                   services.map(service => <CategoryName
                    key={service._id}
                    service={service}
                    ></CategoryName>)
                }
          
            </div>
   
        </div>
    );
};

export default Category;