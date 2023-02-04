import { IMG_CDN_URL } from "./constant";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{description}</h4>
      <h5>Rupees: {price / 100}</h5>
    </div>
  );
};

export default FoodItem;
