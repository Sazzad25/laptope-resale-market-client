import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  // const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://laptope-resale-market-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="bg-base-200 p-2 ml-2 mr-2">
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold mb-2">Our Second Hand Categories</h2>
      </div>
      <div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-2xl text-primary">
                {categories.map((category) => (
                <p className="" key={category.id}>
                <Link className="ml-14 btn btn-primary mb-3 transition duration-150 ease-in-out" to="/category">{category.name} </Link>{" "}
                </p>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Category;