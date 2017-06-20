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
          <div className = "panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title text-center">Stocks you own</h3>
            </div>
            <AccountingInfo stocks={this.state.stocks}/>
          </div>
        </div>  
     </div>
    </div>
    );
  }
}

export default Portfolio;
