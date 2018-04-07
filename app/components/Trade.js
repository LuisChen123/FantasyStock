import React, {Component} from "react";
import {Link} from "react-router";
import apiHelper from "../apiHelper/apiHelper.js";
import update from 'immutability-helper';


class Trade extends Component {
  constructor() {
    super();
    this.state = {
      DowJonesArray: [],
      interval: "",
      cash: 0,
      amount: "",
      stockPortfolio: [],
      tradeHistory: []
    };

    this.getDowPrice = this
      .getDowPrice
      .bind(this);
    this.getInfo = this
      .getInfo
      .bind(this);
    this.handleChange = this
      .handleChange
      .bind(this);
    this.buy = this
      .buy
      .bind(this);
    this.sell = this
      .sell
      .bind(this);
    this.handleCommitSell = this
      .handleCommitSell
      .bind(this);
    this.handleCommitBuy = this
      .handleCommitBuy
      .bind(this);
  }

  componentDidMount() {
    this.getDowPrice();
    this.getInfo();
    var intervalId = setInterval(this.getDowPrice, 30000);
    this.setState({interval: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  getInfo() {
    apiHelper
      .getInfo()
      .then((res) => {
        this.setState({cash: res.data.cash, stockPortfolio: res.data.portfolio, tradeHistory: res.data.tradeHistory, amount: ""})
        console.log(this.state.stockPortfolio, "      ATTENTION  line 34 trade.js");
      });
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleCommitBuy(stockName, newShareCount, newTradeHistoryObj, newCash) {
    var stockPortfolio = this.state.stockPortfolio;
    var newTradeHistory = this.state.tradeHistory;
    newTradeHistory.push(newTradeHistoryObj);
    var stockPortfolioIndex = stockPortfolio.findIndex(function (c) {
      return c.stockName == stockName;
    });
     if (stockPortfolioIndex == -1) {
      var newArray = this.state.stockPortfolio;
      newArray.push({stockName: stockName, shareCount: this.state.amount});
      var stockPortfolioUpdate = newArray;
    
       apiHelper
        .updateAfterTrade(newCash, stockPortfolioUpdate, newTradeHistory)
        .then((response) => {
          this.getInfo();
        })
        .catch(function (response) {
        });
    } else {
      var updatedStockObj = update(stockPortfolio[stockPortfolioIndex], {
        shareCount: {
          $set: newShareCount
        }
      });
      console.log(updatedStockObj, "                updated stock obj if stock is there");
      var newStockPortfolio = update(stockPortfolio, {
        $splice: [
          [stockPortfolioIndex, 1, updatedStockObj]
        ]
      });
      console.log(newStockPortfolio, "              line 129");

      apiHelper
        .updateAfterTrade(newCash, newStockPortfolio, newTradeHistory)
        .then((response) => {
          this.getInfo();
        })
        .catch(function (response) {
          console.log(response, "trade.js ...............line 83");
        });
    }
  }

  handleCommitSell(stockName, newShareCount, newTradeHistoryObj, newCash) {
    var stockPortfolio = this.state.stockPortfolio;
    var stockPortfolioIndex = stockPortfolio.findIndex(function (c) {
      return c.stockName == stockName;
    });
    console.log(newShareCount);

    var updatedStockObj = update(stockPortfolio[stockPortfolioIndex], {
      shareCount: {
        $set: newShareCount
      }
    });

    var newStockPortfolio = update(stockPortfolio, {
      $splice: [
        [stockPortfolioIndex, 1, updatedStockObj]
      ]
    });
    console.log("+++++++++++", newStockPortfolio);
    var newTradeHistory = this.state.tradeHistory;
    newTradeHistory.push(newTradeHistoryObj);
    console.log("trade.js  .....................line 77");
    apiHelper
      .updateAfterTrade(newCash, newStockPortfolio, newTradeHistory)
      .then((response) => {
        console.log(response, "..............trade.js, line 80");
        this.getInfo();
      })
      .catch(function (response) {
        console.log(response, "trade.js ...............line 83");
      }); 
  }

  buy(stockName, stockPrice) {

    var cost = stockPrice * this.state.amount; 
    console.log("this is the cost at line 135" , cost);

    var stockPrice = stockPrice;
    console.log(stockPrice);
    var newCash;
    if (this.state.cash >= cost) {
      newCash = this.state.cash - cost;
      if (!this.state.stockPortfolio.length) {
        var stocksAddedAfterBuying = parseInt(this.state.amount);
        var newCashValueAfterBuy = parseFloat(this.state.cash) - parseFloat(stockPrice) * parseFloat(this.state.amount);
        var newTradeHistoryObj = {
          stockName: stockName,
          numberOfSharesPurchased: parseInt(this.state.amount),
          sharePrice: parseFloat(stockPrice)
        }
        this.handleCommitBuy(stockName, stocksAddedAfterBuying, newTradeHistoryObj, newCashValueAfterBuy);
      } else if (this.state.stockPortfolio.length) {
        var stockThere = false;
        for (var i = 0; i < this.state.stockPortfolio.length; i++) {
          if (this.state.stockPortfolio[i].stockName.trim() == stockName.trim()) {
            stockThere = true;
            var stocksAddedAfterBuying = parseInt(this.state.stockPortfolio[i].shareCount) + parseInt(this.state.amount);
            var newCashValueAfterBuy = parseFloat(this.state.cash) - parseFloat(stockPrice) * parseFloat(this.state.amount);
            var newTradeHistoryObj = {
              stockName: stockName,
              numberOfSharesPurchased: parseInt(this.state.amount),
              sharePrice: parseFloat(stockPrice)
            };
            this.handleCommitBuy(stockName, stocksAddedAfterBuying, newTradeHistoryObj, newCashValueAfterBuy);
            break;
          }
        }
        if (!stockThere) {
          console.log("stocks were not here at all so we added them");
          var stocksAddedAfterBuying = parseInt(this.state.amount);
          var newCashValueAfterBuy = parseFloat(this.state.cash) - parseFloat(stockPrice) * parseFloat(this.state.amount);
          var newTradeHistoryObj = {
            stockName: stockName,
            numberOfSharesPurchased: parseInt(this.state.amount),
            sharePrice: parseFloat(stockPrice)
          }
          this.handleCommitBuy(stockName, stocksAddedAfterBuying, newTradeHistoryObj, newCashValueAfterBuy);
        }
      }
  } else{
  
    this.getInfo();
  }
    
  }

  sell(stockName, stockPrice) {
    console.log("trade.js, line 84");
    var stockFound = false;
    var stockPrice = stockPrice;
    for(var x=0; x<this.state.stockPortfolio.length; x++){
    	if(this.state.stockPortfolio[x].stockName == stockName){
        console.log("trade.js  ................ LIne  89"); 
    		stockFound = true; 
    		if(this.state.stockPortfolio[x].shareCount>=this.state.amount){
    			var stocksLeftAfterSelling = parseInt(this.state.stockPortfolio[x].shareCount) - parseInt(this.state.amount); 
    			var newCashValueAfterSell = parseFloat(this.state.cash) + (parseFloat(stockPrice) * parseFloat(this.state.amount)); 
          var newTradeHistoryObj = {stockName: stockName, numberOfSharesSold: parseInt(this.state.amount), sharePrice: parseFloat(stockPrice)};
          this.handleCommitSell(stockName, stocksLeftAfterSelling, newTradeHistoryObj, newCashValueAfterSell); 
    			break; 
    		}
    		else{
          this.getInfo();
    			break; 
    		}
    	}
    }

    if(stockFound == false){
      console.log("do not have this share to sell")
      this.getInfo();
    }
  }

  getDowPrice() {
    apiHelper
      .getDowPrice()
      .then((response) => {
        console.log("line 118");
        var unsortedStringResponse = response
          .data
          .slice(4, response.data.length);
        var parsedUnsortedResponse = JSON.parse(unsortedStringResponse);
        console.log(parsedUnsortedResponse);
        var unsortedResponse = [];
        for (var x = 0; x < parsedUnsortedResponse.length; x++) {
          unsortedResponse.push({
            stockName: parsedUnsortedResponse[x].t,
            stockPrice: parseFloat(parsedUnsortedResponse[x].l)
          });
        }
        var sortedResponse = unsortedResponse.sort(function (a, b) {
          if (a.stockName < b.stockName) {
            return -1;
          }
          if (a.stockName > b.stockName) {
            return 1;
          }
          return 0;
        }); 
        this.setState({DowJonesArray: sortedResponse});
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  render() {

    var mappedResults = this
      .state
      .DowJonesArray
      .map((el, i) => {
        return <div className="container" key={el.stockName}>
          <div className="panel-body" key={el.stockName}>
            <h3>
              <span className="label label-info">{el.stockName}</span>
            </h3>

            <h3>
              <span className="label label-danger">
                Trading @
                <span className="badge">$ {el.stockPrice}</span>
              </span>
            </h3>

            <div key={i} className="input-group">
              <div className="input-group-btn">
                <button
                  onClick={() => this.buy(el.stockName, el.stockPrice)}
                  className="btn btn-default">Buy</button>
                <button
                  type="button"
                  onClick={() => this.sell(el.stockName, el.stockPrice)}
                  className="btn btn-default">Trade</button>
                <button type="button" className="btn btn-default">Info</button>
              </div>
            </div>
          </div>
        </div>;
      });

    return (
      <div className="container">
        <br/>
        <br/>
        <h5>
          Stock Amount
        </h5>
        <input
          value={this.state.amount}
          type="text"
          placeholder="Enter the number of stocks you want to Buy or Sell"
          className="form-control text-center"
          id="amount"
          onChange={this.handleChange}
          required/>
        <div className="container">{mappedResults}</div>
       
      </div>
    );
  }
}

export default Trade;
