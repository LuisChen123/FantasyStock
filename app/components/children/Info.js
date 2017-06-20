import React, { Component } from "react";

class Info extends Component {
  constructor() {
    super();
  
  }
  render() {
    return (
      <div className="container-fluid">
            <div class="panel-group">
              <div class="panel panel-default">
                <div class="panel-heading">Porfolio Information</div>
                 <div class="panel-body">
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
