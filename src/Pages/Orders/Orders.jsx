import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import OrdersCard from "../OrdersCard/OrdersCard";
import { AuthContext } from "../../Providers/AuthProviders";
const backgroundStyle = {
  backgroundImage:
    'url("https://imagizer.imageshack.com/img924/6646/04vql1.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  /* Additional styles if needed */
};
const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelete = (_id) => {
    fetch(`http://localhost:3000/orders/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
          const remaining = orders.filter(order => order._id !== _id)
          setOrders(remaining)
        }
      });
  };
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
                <label>Delete</label>
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
            {orders.map((order) => (
              <OrdersCard key={order._id} 
              order={order}
              handleDelete={handleDelete}></OrdersCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
