// import React from "react";

import { Component } from "react";
import UserContext from "../utils/userContext";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

class AboutClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
      },
    };
    console.log("Parent - Constructor");
  }

  componentDidMount() {
    //Best place to make an API call.
    console.log("Parent- Component Did Mount");
  }

  render() {
    console.log("Parent- render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => {
            <h1>
              {user.name}- {user.email}
            </h1>;
          }}
        </UserContext.Consumer>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <Outlet /> // This is how we create nested route.
        <Profile name={"First Child"} xyz={"xyz"} />
      </div>
    );
  }
}

export default AboutClass;

// // Order of call
// // Contructor => render => ComponentDidMount
// // where do we initialize state: Contructor.
// // Whenever the class is initialized , ur constructor is called first so first we need to do initialization.
// // When it will encounter child component in parent component so it will call all lifecycle methods of child component.
// // 1. Parent Constructor. 2. Parent -render 3. Child Constructor 4. Child - render 5.Child-ComponentDidMount
// // 6. Parent-ComponentDidMount.

// // 1. Parent Constructor 2.Parent Render 3.First Child Constructor 4. First Child Render 5.Second child constructor
// // 6. Second Child Render 7. First Child Component Did Mount 8. Second Child Component Did Mount 9. Parent Component Did Mount.

// //Phase.
// /*
// 1. Render Phase (includes constructor and render method) (render phase is fast than commit phase)
// DOM Upated for children.

// 2. Commit Phase (place where actually react is modifying/updates  ur dom) (Component Did Mount is called after the initial render is finished)
//    after my component is rendered.
// 3.
// */

// /* Render Phase
// Parent Constructor
// Parent Render
// child constructor
// child render

// Commit Phase
// DOM is updated
// json is logged in console : (Child constructor is called but it will delay because we put async so it will call parent
//   first then child).

// Parent ComponentDidMount called before making an API call. Beacuse in the commit phase it will some time to load the data from API.
// so it will call it in commit phase.

// setState trigger reconcialition process and will renreder the componetn so it will call the render method again.

// child ComponentDidMount

// This rerender cycle is known as updating.
// child render method.

// */

// /*
//  * child contructor
//  * child render
//  * child componentDidMount
//  *
//  * API call inside componentDidMount
//  * After API call it will setState (When u make an API call, the component is already mounted)
//  * And it will call render method
//  *
//  * API call
//  * setState
//  *
//  * Render.
//  * React DOM Updated and ref.
//  * ComponentDidUpdate.
//  *
//  * ComponentWillUnmount (Will we go to some other page and component destroys)
//  * /

// //Mount will be called after first render and update will be called after every next render.
// // Thats why we have useEffect in functional component
