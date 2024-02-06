import React from 'react';

const Card = ({ product }) => {
  return (
    <div className='my-4'>
      <div className="card md:w-96 bg-base-100 shadow-xl">
        <figure><img src={product.imageUrl} alt={product.name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.price}฿</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
