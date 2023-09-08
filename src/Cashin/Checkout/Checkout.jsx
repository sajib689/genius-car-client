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
    </div>
  );
};

export default Checkout;
