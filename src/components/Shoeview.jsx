const Shoeview = ({ shoe }) => {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={shoe.imageUrl} alt={shoe.name} /></figure>
      </div>
    );
  };
  export default Shoeview;