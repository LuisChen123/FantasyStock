import React, { Component } from "react";

class AccountInfo extends Component {
  constructor() {
    super();
  
  }
  render() {
    return (
        <div className="panel-body text-center">
          {/* Here we use a map function to loop through an array in JSX */}
            <select class="selectpicker dropup">
            {this.props.stocks.map((item, i)=> {
            return (      
                <option>{item.stockName}:{item.shareCount}shares</option>     
            );
          })}
          </select>
      </div>
    );
  }
}

export default AccountInfo;
