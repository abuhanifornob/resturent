/* eslint-disable react/prop-types */
const ShopCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 uppercase">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
