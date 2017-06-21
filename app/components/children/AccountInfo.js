import React, { Component } from "react";

class AccountInfo extends Component {
  constructor() {
    super();
  
  }

  render() {
    return (
        <div className="panel-body text-center">
          {/* Here we use a map function to loop through an array in JSX */}
          <h1> Stocks you own </h1>
          <ul className="list-unstyled">
            {this.props.stocks.map((item, i)=> {
            return (
              <li key ={i} className="col-md-3"> 
                  <p>{item.stockName} {item.shareCount}</p>
              </li>
            );
          })}
       </ul>
      </div>
    );
  }
}

export default AccountInfo;
