import icon from '../../../assets/icons/arrow.png'

const ServiceCard = ({service}) => {
    console.log(service)
    const {title,img,price} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-[20px] font-bold">{title}</h2>
          <p className="text-[16px] text-orange-500 font-bold">Price: {price}</p>
          <div className="card-actions justify-end">
            <img src={icon} alt="" />
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;