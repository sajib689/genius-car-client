import React from "react";
const backgroundStyle = {
  backgroundImage:
    'url("https://imagizer.imageshack.com/img924/6646/04vql1.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  /* Additional styles if needed */
};
const AddNewService = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const service_id = form.service_id.value;
    const img = form.img.value;
    const description = form.description.value;
    const add = { title, price, img, description, service_id };
    fetch(`http://localhost:3000/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className="mx-auto container">
        <div className="hero h-[300px] " style={backgroundStyle}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-left text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">Add New Service</h1>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleAddService} className="container mx-auto mt-20">
        <div className="">
          <input
            name="title"
            type="text"
            placeholder="Type here service name"
            className="ms-10 input input-bordered w-full max-w-lg"
          />

          <input
            name="price"
            type="text"
            placeholder="Type here service price"
            className="ms-10 input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="mt-7">
          <input
            name="img"
            type="text"
            placeholder="Type here service URL"
            className="ms-10 input input-bordered w-full max-w-lg"
          />
          <input
            name="description"
            type="text"
            placeholder="Type here service description"
            className="ms-10 input input-bordered w-full max-w-lg"
          />
          <div className="mt-7">
            <input
              name="service_id"
              type="text"
              placeholder="Type here service ID"
              className="ms-10 input input-bordered w-full max-w-lg"
            />
          </div>
        </div>
        <input
          type="submit"
          className="cursor-pointer ms-10 mt-5 bg-orange-600 text-white hover:bg-orange-700 input input-bordered"
        />
      </form>
    </div>
  );
};

export default AddNewService;
