import React from 'react';
import nikeProducts from "../data/nikeProducts";

const Card = ({ product }) => {
  return (
    <div className=''>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={product.imageUrl} alt={product.name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.price}฿</div>
            <button className="bg-[#424343] button-theme text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;
