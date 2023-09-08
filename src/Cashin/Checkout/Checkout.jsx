import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from './../../Providers/AuthProviders';
const backgroundStyle = {
  backgroundImage:
    'url("https://imagizer.imageshack.com/img924/6646/04vql1.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  /* Additional styles if needed */
};

const Checkout = () => {
  const {user} = useContext(AuthContext)
  const d = useLoaderData();
  const { _id, title, price } = d;
  const handleOrder = e => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value 
    const date = form.date.value
    const service = form.service.value 
    const price = form.price.value
    const phone = form.phone.value
    const email = form.email.value
    const address = form.address.value
    const order = {name, date, service, price, phone, email, address}
  
    fetch('http://localhost:3000/orders',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then( res => res.json())
    .then( data => {
        if(data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your order has been placed successfully!',
            showConfirmButton: false,
            timer: 1500
          })
        }
        form.reset()
    })
  }
  return (
    <div className="container mx-auto">
      <div className="hero h-[300px] " style={backgroundStyle}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Check Out</h1>
          </div>
        </div>
      </div>
      <form onSubmit={handleOrder} className="w-1/2 mx-auto mt-20">
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input
          name="name"
            type="text"
            placeholder="Enter you first name"
            className="input input-bordered w-full max-w-lg"
          />
          <label htmlFor="">Date</label>
          <input
          name="date"
            type="date"
            className="input input-bordered w-full max-w-lg"
          />
          <label htmlFor="">Service</label>
          <input
          name="service"
            type="text"
            defaultValue={title}
            className="input input-bordered w-full max-w-lg"
            readOnly
          />
          <label htmlFor="">Due Price</label>
          <input
          name="price"
            type="text"
            defaultValue={'$' +price}
            className="input input-bordered w-full max-w-lg"
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Phone</label>
          <input
          name="phone"
            type="text"
            placeholder="Enter your phone"
            className="input input-bordered w-full max-w-lg"
          />
          <label htmlFor="">Email</label>
          <input
          name="email"
            type="text"
            defaultValue={user.email}
            className="input input-bordered w-full max-w-lg"
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Address</label>
          <input
            className="max-w-lg w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            id="message"
            name="address"
            rows="4"
            placeholder="Type your address here..."
          />{" "}
        </div>
        <input
          type="submit"
          className="cursor-pointer mt-7 text-white bg-orange-600 input input-bordered w-full max-w-lg"
          value="Order Now"
        />
      </form>
    </div>
  );
};

export default Checkout;
