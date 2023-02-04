import { useContext } from "react";
import UserContext from "../utils/userContext";

export const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h4>
        This site is developed by {user.name} - {user.email}
      </h4>
      <h4>Footer</h4>
    </>
  );
};
