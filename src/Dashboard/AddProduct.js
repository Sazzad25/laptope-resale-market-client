import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
    const navigate = useNavigate();

      const handleAddProduct = data =>{
        const product = {
            name: data.name,
            price: data.price,
            type: data.type,
            phone: data.phone,
            location: data.location,
            category: data.category,
            description: data.description,
            purchase: data.purchase
        }

        fetch('https://laptope-resale-market-server.vercel.app/addproduct', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
          })
          .then(res => res.json())
          .then(result =>{
            console.log(result);
            toast.success(`${data.name} is added successfully`)
            navigate('/dashboard/myproducts');
          })


      }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Please type your product name",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              {...register("price", {
                required: "price needed",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.price && (
              <p className="text-red-600">{errors.price?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <select
              {...register("type")}
              className="select input-bordered w-full max-w-xs"
            >
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              {...register("phone", {
                required: "please type your number",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.phone && (
              <p className="text-red-600">{errors.phone?.message}</p>
            )}
          </div>
         
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Please Select a Category</span>
            </label>
            <select
              {...register("category")}
              className="select input-bordered w-full max-w-xs"
            >
              <option>Walton Laptops</option>
              <option>Toshiba Laptops</option>
              <option>Dell Laptops</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              {...register("description", {
                required: "Please type products description",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.description && (
              <p className="text-red-600">{errors.description?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Year of Purchase</span>
            </label>
            <input
              type="text"
              {...register("purchase", {
                required: " Please type year of purchase",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.purchase && (
              <p className="text-red-600">{errors.purchase?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: "Please type your amazing name",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.location && (
              <p className="text-red-600">{errors.location?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-6"
            value="Submit"
            type="submit"
          />
        </form>
        </div>
    );
};

export default AddProduct;