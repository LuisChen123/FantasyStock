import React, { Component } from "react";
import { Link } from "react-router";
import apiHelper from "../apiHelper/apiHelper.js"; 

class Trade extends Component {
  constructor() {
    super();
    this.state = { DowJonesArray: [], interval: "" , cash: 0, amount:"", stockPortfolio: []};

    this.getDowPrice = this.getDowPrice.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.buy = this.buy.bind(this); 
  }

  componentDidMount() {
    this.getDowPrice();
    this.getInfo();
    var intervalId = setInterval(this.getDowPrice, 3000);
    this.setState({interval: intervalId});
  }
  
  componentWillUnmount() {
       // use intervalId from the state to clear the interval
       clearInterval(this.state.interval);
  }

getInfo() {
    apiHelper.getInfo().then((res) =>{
      // console.log(res);
      // console.log(res.data.cash * 5, "            line 30 trade.js")
      this.setState({ cash: res.data.cash, stockPortfolio: res.data.portfolio})
      console.log(this.state.stockPortfolio, "        line 33 trade.js");
    });
  }

    // This function will respond to the user input
  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
                    
    console.log("Search amount ", this.state.amount);
  }

  buy(stockName, stockPrice) {
    var cost = stockPrice * this.state.amount; 
    console.log(cost, "   line 48", this.state.cash);
    // if(this.state.cash >= cost){
    //     // will need to write this function: apiHelper.updatePurchase(); 
    //     // have an API function will have the person's stockprice, stockName, and the this.state.amount
    //     // 
    // }
    // else{
    //     console.log("did not work out")
    // }
  }

  sell(stockName, stockPrice){
    // find if stock name exist in stockPortfolio
    // if true, we get index of where it is
    // 
    // use stockPortfolio[saved indexof].stockname to pull out the amount of shares they have called shares
    // if shares is greater than this.state.amount we are good to sell
    // 
  }


  getDowPrice(){
    apiHelper.getDowPrice()
    .then((response) =>{
      console.log("line 21"); 
      var unsortedStringResponse = response.data.slice(4, response.data.length); 
      var parsedUnsortedResponse = JSON.parse(unsortedStringResponse);
      console.log(parsedUnsortedResponse); 
      var unsortedResponse = [];
      for(var x=0; x<parsedUnsortedResponse.length; x++){
        unsortedResponse.push({stockName: parsedUnsortedResponse[x].t, stockPrice: parseFloat(parsedUnsortedResponse[x].l)});
      }
      console.log("line 29, Trade.js"); 
      var sortedResponse = unsortedResponse.sort(function(a, b) {
              if (a.stockName < b.stockName) {
                return -1;
              }
              if (a.stockName > b.stockName) {
                return 1;
              }
              return 0;
            }); 
      console.log("line 39"); 
      console.log(sortedResponse); 
      this.setState({DowJonesArray: sortedResponse});
    })
    .catch(function(response){
        console.log(response); // Needs to see what should go here
    });
  }  

render() {
        
    var mappedResults = this.state.DowJonesArray.map( (el, i) =>{
        return <div className ="container" key={el.stockName}>    
                <div className = "panel-body">
                    <h3>  
                        <span className = "label label-info">{el.stockName}</span> 
                    </h3>

                    <h3><span className="label label-danger">
                        Trading @ <span className ="badge">$ {el.stockPrice}</span>
                    </span></h3>

                    <div key={i} className="input-group">
                          <div className="input-group-btn">
                            <button onClick={() => this.buy(el.stockName, el.stockPrice)} className="btn btn-default">Buy</button>
                              <button type="button" className="btn btn-default">Trade</button>
                              <button type="button" className="btn btn-default">Info</button>
                          </div>
                    </div>

                </div> 
               </div>;
    }); 
    
    return (
          <div className = "container">
              <br/> 
              <br/> 
            <h5> Stock Amount </h5>
              <input
                value={this.state.amount}
                type="text"
                placeholder="Enter the number of stocks you want to Buy or Sell"
                className="form-control text-center"
                id="amount"
                onChange={this.handleChange}
                required
              />
               {mappedResults}
        </div>
    );
  }

}

export default Trade;