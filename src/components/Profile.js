import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    //API Call.
  });

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("UseEffect");
    return () => {
      //This function is basically called when u r unmounting this component.
      clearInterval(timer);
      // this function is called when component is unmounted.// so clear timeout here.
      console.log("UseEffect return"); // Unmounting Phase.
    };
  }, []);

  console.log("render inside Profile JS");

  //suppose two useEffects in count1 and count2.
  // console.log("render"); //Output. 1. render 2. UseEffect 3. returns

  return (
    <div>
      <h2>Profile Functional Component</h2>
      <h2>Name: {props.name}</h2>
      <h3>Count1: {count1}</h3>
      <h3>Count2: {count2}</h3>
      <button
        onClick={() => {
          setCount1(1);
          setCount2(2);
        }}
      >
        Button
      </button>
    </div>
  );
};

export default Profile;
