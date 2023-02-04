import React from "react";
import { useRouteError } from "react-router-dom";
// useRouteError:  this is a hook.
//Wont throw red errors on console. It catches all routing errors.
//this hooks gives us the access to the error.

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err; //destructuring
  console.log(err);
  return (
    <div>
      <h1>oops!! Something went wrong!!</h1>
      <h2>{status + ":" + statusText}</h2>
    </div>
  );
};

export default Error;
