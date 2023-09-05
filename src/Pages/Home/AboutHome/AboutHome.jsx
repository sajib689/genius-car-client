import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutHome = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
        <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
        <img src={parts} className="border-[10px] border-white absolute w-1/2 top-1/2 right-5 rounded-lg shadow-2xl" />
        </div>
        <div className="lg:w-1/2 space-y-5 ms-2">
          <p className="text-[20px] text-orange-400 font-bold">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.{" "}
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-orange-600 text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
