import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full " />
        <div className="flex items-center h-[100%] absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className="ms-20 text-white w-1/3 space-y-7">
         <h1 className="text-6xl font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className=" text-white ">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="">
            <button className="bg-orange-600 text-white p-4 rounded">
              Discover More
            </button>
            <button className="ms-2 border border-white text-white p-4 rounded">
              Latest Project
            </button>
          </div>
         </div>
        </div>
        <div className="absolute mb-4 flex justify-end transform-translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full " />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full " />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full " />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
