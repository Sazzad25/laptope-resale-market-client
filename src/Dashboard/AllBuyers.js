import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const {data: buyers = [], refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl'>All Buyers</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        buyers.map((buyer, i) =>
        <tr key={buyer._id}>
        <th>{i+1}</th>
        <td>{buyer.name}</td>
        <td>{buyer.email}</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>
        )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllBuyers;