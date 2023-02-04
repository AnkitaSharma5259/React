import React from "react";
/* u have to tell react that this is a class based component and not a normal js class.thats why u need to extend React.Component.
 Imp : Render method. u cannot create a class based comp without a render method.
 Render Method returns some jsx. which will be injected into the DOM.
 React about why do we use extends? It has to inherit some properties from parent class.
 We get props using this.props.
 What react did at the end of the day? It basically tracks ur class now that this is ur class based comp. Whenever there is a state change
 in the class, it will rerender the component.
 It will attach these properties to the this keyword.

 HW: Why do we do super(props)?
 Whenever the classes are invoked a constructor is called. And this is the best place to create ur state.
 React uses one big object to maintain the whole state.
 We not mutate state directly. setState takes the modified object. Never do this. this.setState = something.

 React LifeCycle: First constructor method is called then the component renders then render method then componentDidMount is called.
 useEffect is called after render method. 

 Output: 1. Constructor 2. render 3 Component Did Mount.
*/

class Profile extends React.Component {
  constructor(props) {
    //Contructor is a place which is used for initialization.
    super(props);
    // console.log("child-constructor");
    console.log("Child- Constructor" + this.props.name);
    //Create state
    this.state = {
      count1: 0,
      count2: 0,
    };
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
      },
    };
  }

  // async componentDidMount() {
  //   //  Make API calls here.
  //   console.log("Component Did Mount" + this.props.name);
  //   const data = await fetch("https://api.github.com/users/akshaymarch7");
  //   const json = await data.json();
  //   console.log(json);
  //   this.setState({
  //     userInfo: json,
  //   });
  // }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("Component Did Mount");
  }
  //componentDidMount() {
  //console.log("child - Component Did Mount");
  //console.log("Component Did Mount" + this.props.name);
  //Performance Loss. It will be called again and again on each and every component.
  // this.timer = setInterval(() => {
  //   console.log("Namaste React OP");
  // }, 1000);
  //}

  componentDidUpdate(prevProps, prevState) {
    // if (
    //   this.state.count1 !== prevState.count1 ||
    //   this.state.count2 !== prevState.count2
    // ) {
    //   //then do something. Code or write two ifs for each case. if code is different.
    // }
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component will unmount");
  }

  render() {
    // console.log("child-render");
    console.log("Child-render" + this.props.name);
    const { count1, count2 } = this.state; // we can destructure also.
    // console.log("Child- render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo?.avatar_url}></img>
        {/* <h2>Name: {this.props.name}</h2>
        <h2>XYZ: {this.props.xyz}</h2> */}
        <h2>Name: {this.state.userInfo?.name}</h2>
        <h2>Location: {this.state.userInfo?.location}</h2>

        {/* <h2>Count1: {count1}</h2>
        <h2>Count2: {count2}</h2> */}
        {/* <button
          onClick={() =>
            //We do not mutate state directly.
            //Never Do this.state = something
            this.setState({
              count1: 1, // You can update only one count and react will not update another count.
              count2: 2,
            })
          }
        >
          SetCount
        </button> */}
      </div>
    );
  }
}

export default Profile;
