import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
      </p>
      <Profile name={"AnkitaClass"} xyz={"xyz"} />
      <ProfileFunctionalComponent name={"Ankita"} />
      {/* <Outlet /> // This is how we create nested route. */}
    </div>
  );
};

export default About;
