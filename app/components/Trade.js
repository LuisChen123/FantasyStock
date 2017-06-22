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
    this.sell = this.sell.bind(this); 
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
      this.setState({ cash: res.data.cash})
      console.log(this.state.cash);
    });
  }

    // This function will respond to the user input
  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
                    
    console.log("Search amount ", this.state.amount);
  }

  buy(stockName, stockPrice){
    var cost = stockPrice * this.state.amount; 
    if(this.state.cash >= cost){
        // will need to write this function: apiHelper.updatePurchase(); 
    }
    else{
        // alert goes here
    }
  }

  sell(stockName, stockPrice){
    // find if stock name exist in stockPortfolio, check to see if its a array
    console.log("trade.js, line 59");  
    var stockFound = false; 
    for(var x=0; x<this.state.stockPortfolio.length; x++){
    	if(this.state.stockPortfolio[x].stockName == stockName){
    		stockFound = true; 
    		if(this.state.stockPortfolio[x].stockCount>=this.amount){
    			// call api helper to sell 
    			var stocksLeftAfterSelling = this.state.stockPortfolio[x].stockCount - this.amount; 
    			var newCashValueAfterSell = stockPrice * this.amount; 
          // call apiHelper.updateAfterTrade(); 
    			break; 
    		}
    		else{
    			// alert: Dont have enough shares to sell
    			break; 
    		}
    	}
    }
    if(stockFound == false){
    	// alert user: Dont have any shares under this name 
    }
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
        
    var mappedResults = this.state.DowJonesArray.map(function(el){
        return <div className ="container" key={el.stockName}>    
                <div className = "panel-body">
                    <h3>  
                        <span className = "label label-info">{el.stockName}</span> 
                    </h3>

                    <h3><span className="label label-danger">
                        Trading @ <span className ="badge">$ {el.stockPrice}</span>
                    </span></h3>

                    <div className="input-group">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-default">Buy</button>
                              <button type="button" className="btn btn-default">Trade</button>
                              <button type="button" className="btn btn-default">Info</button>
                          </div>
                          <input type="text" className="form-control"/>
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