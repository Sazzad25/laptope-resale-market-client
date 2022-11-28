import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const {data: buyers = [], refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
      fetch(`http://localhost:5000/buyers/admin/${id}`, {
        method: 'PUT',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0){
          toast.success('Make admin successfully')
          refetch();
        }
      })
    }

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
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        buyers.map((buyer, i) =>
        <tr key={buyer._id}>
        <th>{i+1}</th>
        <td>{buyer.name}</td>
        <td>{buyer.email}</td>
        <td>{ buyer?.role !== 'admin' && <button onClick={() => handleMakeAdmin(buyer._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
        <td><button className='btn btn-xs btn-danger'>Delete</button></td>
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