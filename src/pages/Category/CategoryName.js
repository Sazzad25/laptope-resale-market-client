import React from 'react';

const CategoryName = ({service}) => {
    const {name} = service;
    return (
        <div>
            <h1 className='text-3xl border-8 p-5 text-primary'>Name:{name}</h1>
        </div>
    );
};

export default CategoryName;