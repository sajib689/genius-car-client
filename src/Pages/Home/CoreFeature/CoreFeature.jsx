import React from "react";
import img1 from "../../../assets/icons/1.png";
import img2 from "../../../assets/icons/2.png";
import img3 from "../../../assets/icons/3.png";
import img4 from "../../../assets/icons/4.png";
import img5 from "../../../assets/icons/5.png";
import img6 from "../../../assets/icons/6.png";
const CoreFeature = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Core Features</h3>
        <h2 className="text-5xl">Why Choose Us</h2>
        <p className="mt-3">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-6 gap-2">
        <div className="p-5 hover:bg-orange-600 hover:text-white mt-20 card w-100 bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <p className="text-[15px]">Expert Team</p>
          </div>
        </div>
        <div className="p-5 hover:bg-orange-600 hover:text-white mt-20 card w-100 bg-base-100 shadow-xl">
          <figure>
            <img className="bg-orange-600" src={img2} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <p className="text-[15px]">Timely Delivery</p>
          </div>
        </div>
        <div className="p-5 hover:bg-orange-600 hover:text-white mt-20 card w-100 bg-base-100 shadow-xl">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <p className="text-[15px]">24/7 Support</p>
          </div>
        </div>
        <div className="p-5 hover:bg-orange-600 hover:text-white mt-20 card w-100 bg-base-100 shadow-xl">
          <figure>
            <img src={img4} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <p className="text-[15px]">Best Equipment</p>
          </div>
        </div>
        <div className="p-5 hover:bg-orange-600 hover:text-white mt-20 card w-100 bg-base-100 shadow-xl">
          <figure>
            <img src={img5} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <p className="text-[15px]">100% Guranty</p>
            <div className="card-actions justify-center "></div>
          </div>
        </div>
        <div className="p-5 hover:bg-orange-600 hover:text-white mt-20 card w-100 bg-base-100 shadow-xl">
          <figure>
            <img src={img6} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <p className="text-[15px]">Timely Delivery</p>
            <div className="card-actions justify-center "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
