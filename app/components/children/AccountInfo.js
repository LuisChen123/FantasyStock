import React, { Component } from "react";

class AccountInfo extends Component {
  constructor() {
    super();
  
  }
  render() {
    return (
        <div className="panel-body text-center">
          {/* Here we use a map function to loop through an array in JSX */}
            <select className="selectpicker" data-size="5" data-live-search="true">
            {this.props.stocks.map((item, i)=> {
            return (      
                <option key ={i}>{item.stockName}:{item.shareCount}shares</option>     
            );
          })}
          </select>
      </div>
    );
  }
}

export default AccountInfo;
