import React, { Component } from "react";

class Info extends Component {
  constructor() {
    super();
  
  }
  render() {
    return (
      <div className="container-fluid">
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">Porfolio Information</div>
                 <div className="panel-body">
                   <p>First Name: {this.props.first} </p>
                    <p> Last Name:{this.props.last} </p>
                    <p> Age: {this.props.age} </p>
                    <p> Grade: {this.props.grade}</p>
                  </div>
              </div>
            </div>

    </div>
    );
  }
}

export default Info;
