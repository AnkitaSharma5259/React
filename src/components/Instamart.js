import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false); // control has been taken by parent.
  return (
    <div style={{ border: "1px solid black", margin: "10px" }}>
      <h3 style={{ font: "bold" }}>{title}</h3>
      {isVisible ? (
        <button style={{ margin: "5px" }} onClick={() => setIsVisible(false)}>
          Hide
        </button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  //Now parent will control these sections.
  const [visibleSection, setVisibleSection] = useState("careers");
  return (
    <div>
      <Section
        title={"About Instamart"}
        description={
          "This is the about section of instamart.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(value) => {
          value ? setVisibleSection("about") : setVisibleSection("");
        }}
      />

      <Section
        title={"Teams Instamart"}
        description={
          "This is the Team section of instamart. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(value) => {
          value ? setVisibleSection("team") : setVisibleSection("");
        }}
      />

      <Section
        title={"Careers Instamart"}
        description={
          "This is the Team section of instamart. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={(value) => {
          value ? setVisibleSection("careers") : setVisibleSection("");
        }}
      />

      <h2>100s of Components inside it</h2>
    </div>
  );
};

export default Instamart;

// Suppose if my instamart has different components.
