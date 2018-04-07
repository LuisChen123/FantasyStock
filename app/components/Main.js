
import React, {Component} from "react";
import Navbar from "./navbar.js";
import Footer from "./footer.js";


class Main extends Component {
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
