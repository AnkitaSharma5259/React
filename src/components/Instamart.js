import { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="text-3xl p-2 m-2 font-bold">
      <h3 className="font-bold p-2 m-2 text-3xl">{title}</h3>
      <button onClick={setIsVisible(true)}>Show</button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  return (
    <div>
      {/* <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"This is the about section of instamart"}
      />

      <Section
        title={"Team Instamart"}
        description={"This is the Team section of instamart"}
      /> */}

      <h2>100s of Components inside it</h2>
    </div>
  );
};

export default Instamart;

// Suppose if my instamart has different components.
