import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import Loading from '../pages/Loading/Loading';
import Modal from './Modal';

const MyProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    
    const closeModal = () => {
        setDeletingProduct(null);
    }


    const { data: addproduct, isLoading, refetch  } = useQuery({
        queryKey: ["addproduct"],
        queryFn: async () => {
          try {
            const res = await fetch("https://laptope-resale-market-server.vercel.app/addproduct", {
              headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
            });
            const data = await res.json();
            return data;
          } catch (error) {}
        },
      });

      const handleDeleteProduct = laptope =>{
        fetch(`https://laptope-resale-market-server.vercel.app/addproduct/${laptope._id}`, {
         method: "DELETE",
         headers: {
           authorization: `bearer ${localStorage.getItem("accessToken")}`
         }
        })
        .then(res => res.json())
        .then(data => {
           if(data.deletedCount > 0){
            refetch();
            toast.success(`Doctor ${laptope.name} deleted successfully`)
           }
        })
     }

     if(isLoading){
        return <Loading></Loading>
     }
    

    return (
        <div>
            <h2 className="text-3xl">My Products: {addproduct?.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Category</th>
        <th>Location</th>
        <th>Price</th>
        <th>Product Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            addproduct.map((product, i) => <tr key={product._id}>
                <th>{i + 1}</th>
                
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.location}</td>
                <td>{product.price}</td>
                <td></td>
                <td>
                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                </td>
              </tr>)
        }
    </tbody>
  </table>
</div>
     {
        deletingProduct && <Modal
        title={`Are you sure you want to delete`}
        message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
        successAction = {handleDeleteProduct}
        successButtonName="Delete"
        modalData = {deletingProduct}
        closeModal = {closeModal}
        >
        </Modal>
     }
 </div>
    );
};

export default MyProducts;