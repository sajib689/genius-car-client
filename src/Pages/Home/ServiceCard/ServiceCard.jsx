import { Link } from 'react-router-dom';
import icon from '../../../assets/icons/arrow.png'

const ServiceCard = ({service}) => {
   
    const {_id,title,img,price} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-[20px] font-bold">{title}</h2>
          <p className="text-[16px] text-orange-500 font-bold">Price: {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}><img src={icon}/></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;