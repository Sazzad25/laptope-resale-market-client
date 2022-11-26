import React from 'react';
import { Link } from 'react-router-dom';

const CategoryName = ({service}) => {
    const {name} = service;
    return (
        <div>
            {/* <Link to={`/category/${category.id}`} className='text-3xl border-8 p-5 text-primary'>Name:{name}</Link> */}
        </div>
    );
};

export default CategoryName;