import { nikeShoes } from "../data/ProductCarddata"
const ProductCard = ({ shoe }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-4">
      <figure><img src={shoe.imageUrl} alt={shoe.name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{shoe.name}</h2>
        <p>{shoe.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Price: ฿{shoe.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard