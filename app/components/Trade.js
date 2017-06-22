import React, { Component } from "react";
import { Link } from "react-router";
import apiHelper from "../apiHelper/apiHelper.js"; 
import update from 'immutability-helper';

class Trade extends Component {
  constructor() {
    super();
    this.state = { DowJonesArray: [], interval: "" , cash: 0, amount:"", stockPortfolio: [], tradeHistory: []};

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
      this.setState({ cash: res.data.cash, stockPortfolio: res.data.portfolio, tradeHistory: res.data.tradeHistory})
      console.log(this.state.stockPortfolio, "      ATTENTION  line 34 trade.js");
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
    console.log("something");
    // if(this.state.cash >= cost){
    //     // will need to write this function: apiHelper.updatePurchase(); 
    //     // have an API function will have the person's stockprice, stockName, and the this.state.amount
    //     // 
    // }
    // else{
    //     console.log("did not work out")
    // }
  }

  handleCommit(stockName, newShareCount, newTradeHistoryObj, newCash) {
    var stockPortfolio = this.state.stockPortfolio;
    var stockPortfolioIndex = stockPortfolio.findIndex(function(c) { 
        return c.stockName == stockName; 
    });

    var updatedStockObj = update(stockPortfolio[stockPortfolioIndex], {shareCount: {$set: newShareCount}}); 

    var newStockPortfolio = update(stockPortfolio, {
        $splice: [[stockPortfolioIndex, 1, updatedStockObj]]
    });

    var newTradeHistory = this.state.tradeHistory; 
    newTradeHistory.push();  
        apiHelper.updateAfterTrade(); // pass in cash, stockportfolio, stockhistory
  }

  sell(stockName, stockPrice){
    // find if stock name exist in stockPortfolio, check to see if its a array
    console.log("trade.js, line 59");  
    var stockFound = false; 
    for(var x=0; x<this.state.stockPortfolio.length; x++){
    	if(this.state.stockPortfolio[x].stockName == stockName){
    		stockFound = true; 
    		if(this.state.stockPortfolio[x].stockCount>=this.state.amount){
    			// call api helper to sell 
    			var stocksLeftAfterSelling = this.state.stockPortfolio[x].stockCount - this.state.amount; 
    			var newCashValueAfterSell = stockPrice * this.state.amount; 
          var newTradeHistoryObj = {stockName: stockName, numberOfSharesSold: this.state.amount, sharePrice: {stockPrice}};
          handleCommit(stockName, stocksLeftAfterSelling, newTradeHistoryObj, newCashValueAfterSell); 

          //var newstockPortfolio = 
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
                            <button type="button" onClick={() => this.sell(el.stockName, el.stockPrice)} className="btn btn-default">Trade</button>
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