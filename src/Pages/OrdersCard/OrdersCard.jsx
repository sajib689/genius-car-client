import React from "react";
import { Link } from "react-router-dom";
import del from '../../assets/icons/delete.svg'
const OrdersCard = ({ order ,handleDelete}) => {
  const { _id, service, price, img, date } = order;
  
  return (
    <tr>
      <th>
        <label>
          <Link onClick={() => handleDelete(_id)}><img  className="bg-orange-700 p-2 rounded" src={del} alt="" /></Link>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
    
      <td>{service}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        <button className="btn hover:bg-orange-700 bg-orange-600 text-white">Pending</button>
      </th>
    </tr>
  );
};

export default OrdersCard;
