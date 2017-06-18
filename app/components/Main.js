
import React, {Component} from "react";

import navbar from "./navbar.js"; 
import footer from "./footer.js";


class Main extends Component {

  constructor(){
    super(); 

      
    }

 
  }


    // Here we render the function
  render() {
    return (
      <div className = "container"> 
        <navbar /> 
          {props.children}
        <footer /> 
      </div> 
    ); 
  }
}


export default Main;
