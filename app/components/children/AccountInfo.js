import React, { Component } from "react";

class Info extends Component {
  constructor() {
    super();
  
  }

  render() {
    return (
        <div className="panel-body text-center">
          {/* Here we use a map function to loop through an array in JSX */}
          <ul className="list-unstyled">
            {this.props.results.map((item, i)=> {
            return (
              <li key ={i} className="col-md-2"> 
                  <p>{item.stockName}</p>
                  <p> {item.shareCount}</p>
              </li>
            );
          })}
       </ul>
      </div>
    );
  }
}

export default Home;
