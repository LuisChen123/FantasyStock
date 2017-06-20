import React, { Component } from "react";
import { Link } from "react-router";
import apiHelper from "../apiHelper/apiHelper.js"; 


class Trade extends Component {
  constructor() {
    super();
    
    this.state = {

    };
 
    
  }

  componentDidMount() {
    
  }
 

  render() {
    return (
      <div className="container">
        <div className="row">

        <div className="col-md-6">
          <div className = "panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title text-center">Stocks to Buy/h3>
            </div>
            
          </div>
        </div>  




      </div>
    </div>
    );
  }
}

export default Trade;
