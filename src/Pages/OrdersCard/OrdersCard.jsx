import React from "react";

const OrdersCard = ({ order }) => {
  const { _id, service, price, img, date } = order;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
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
