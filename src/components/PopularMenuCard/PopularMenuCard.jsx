/* eslint-disable react/prop-types */
const PopularMenuCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-3xl text-orange-400">{name}.......</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-400 text-xl font-bold">${price}</p>
    </div>
  );
};

export default PopularMenuCard;
