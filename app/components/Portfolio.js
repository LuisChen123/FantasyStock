import React, { Component } from "react";
import { Link } from "react-router";
import apiHelper from "../apiHelper/apiHelper.js"; 
import Info from "./children/Info.js"
import AccountingInfo from "./children/AccountingInfo.js"





class Porfolio extends Component {
  constructor() {
    super();
    
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      grade: "",
      cash: 0,
      stocks: []
    };
 
    
  }

  componentDidMount() {
    
  }
 


  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-md-6">
          <Info first={this.state.firstName} last={this.state.lastName} age={this.state.age} grade={this.state.grade}/>
        </div>

        <div className="col-md-6">
          <AccountingInfo />
        </div>  




      </div>
    </div>
    );
  }
}

export default Home;
