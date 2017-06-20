
import React, {Component} from "react";
import navbar from "./navbar.js";
import footer from "./footer.js";

// req.cookie.SSID

class Main extends Component {
    // Here we render the function
  render() {
    return (
      <div className = "container"> 
       <navbar /> 
          {props.children}
          <p> This is some text </p>
       <footer /> 
      </div> 
    ); 
  }
}

export default Main;
