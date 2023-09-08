import React from "react";
const backgroundStyle = {
    backgroundImage: 'url("https://imagizer.imageshack.com/img924/6646/04vql1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    /* Additional styles if needed */
  };
  
const Checkout = () => {
  return (
    <div className="container mx-auto">
      {/* banner */}
      <div
        className="hero h-[300px] "
        style={backgroundStyle}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Check Out</h1>
            
          </div>
         
        </div>
      </div>
      <div className="w-1/2 mx-auto mt-20">
        <div className="flex flex-col">
            <label htmlFor="">First Name</label>
        <input type="text" placeholder="Enter you first name" className="input input-bordered w-full max-w-lg" />
        <label htmlFor="">Last Name</label>
        <input type="text" placeholder="Enter you last name" className="input input-bordered w-full max-w-lg" />
        </div>
        <div className="flex flex-col">
        <label htmlFor="">Phone</label>
        <input type="text" placeholder="Enter your phone" className="input input-bordered w-full max-w-lg" />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-lg" />
        </div>
        <div className="flex flex-col">
        <label htmlFor="">Message</label>
        <textarea
        className="max-w-lg w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        id="message"
        name="message"
        rows="4"
        placeholder="Type your message here..."
      />            </div>
        <input type="submit"  className="mt-7 text-white bg-orange-600 input input-bordered w-full max-w-lg" value='Order Now'/>
      </div>
    </div>
  );
};

export default Checkout;
