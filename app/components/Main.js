
import React, {Component} from "react";
import Navbar from "./navbar.js";
import Footer from "./footer.js";

// req.cookie.SSID
class Main extends Component {
    // Here we render the function
  render() {
    return (
      <div className = "container"> 
       <Navbar /> 
          {this.props.children}
       <Footer />
      </div> 
    ); 
  }
}
export default Main;
