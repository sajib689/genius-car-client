import React from "react";
import { useLoaderData } from "react-router-dom";
import OrdersCard from "../OrdersCard/OrdersCard";
const backgroundStyle = {
  backgroundImage:
    'url("https://imagizer.imageshack.com/img924/6646/04vql1.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  /* Additional styles if needed */
};
const Orders = () => {
    const orders = useLoaderData()
  return (
    <div className="mx-auto container">
      <div className="hero h-[300px] " style={backgroundStyle}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Cart Details</h1>
            <p className="text-red-400 font-[400]">Home - Product Details</p>
          </div>
        </div>
      </div>
      {/* Table */}

      <div className="overflow-x-auto mt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            orders.map(order => <OrdersCard key={order._id} order={order}></OrdersCard>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
