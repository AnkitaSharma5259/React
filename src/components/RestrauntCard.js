import { IMG_CDN_URL } from "./constant";
import { useContext } from "react";
import UserContext from "../utils/userContext";

// const RestrauntCard = ({ restraunt }) => {
// const { name, cuisines, lastMileTravelString, cloudinaryImageId } =
//   restraunt?.data;

const RestrauntCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines?.join(",")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5 className="font-bold">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default RestrauntCard;
