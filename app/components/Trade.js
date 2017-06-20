import React, { Component } from "react";
import { Link } from "react-router";
import apiHelper from "../apiHelper/apiHelper.js"; 

class Trade extends Component {
  constructor() {
    super();
    this.state = 
    {
    	DowJonesArray : 
    	[
    		{
    			stockTicker: "AAPL",
    			currentPrice: 0
    		},
    		{
    			stockTicker : "AXP",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "BA",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "CAT",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "CSCO",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "CVX",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "DD",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "DIS",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "GE",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "GNG",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "GS",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "HD",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "IBM",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "INTC",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "JPM",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "KO",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "MCD",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "MRK",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "MSFT",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "NKE",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "PFE",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "PG",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "TRV",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "UNH",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "UTX",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "V",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "VZ",
    			currentPrice : 0
    		},
        	{
    			stockTicker : "WMT",
    			currentPrice : 0
    		},
        	{
          		stockTicker: "XOM",
          		currentPrice: 0
        	}      
    	]
    };

    this.getDowPrice = this.getDowPrice.bind(this);

  }

  componentDidMount() {
    this.getDowPrice(); 
  }
  
  getDowPrice(){
    apiHelper.getDowPrice()
    .then((response) =>{
      var unsortedResponse = [];
      for(var x=0; x<response.length; x++){
        unsortedResponse.push({ stockName: response.t, stockPrice: parseInt(response.l) });
      }
      var sortedResponse = unsortedResponse.sort(); 
      this.setState({
        DowJonesArray: 
          	[
    		    {
    			  // stockTicker: "AAPL",
    			  currentPrice: 0
    		    },
    		    {
    			  // stockTicker : "AXP",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "BA",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "CAT",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "CSCO",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "CVX",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "DD",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "DIS",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "GE",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "GNG",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "GS",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "HD",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "IBM",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "INTC",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "JPM",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "KO",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "MCD",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "MRK",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "MSFT",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "NKE",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "PFE",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "PG",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "TRV",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "UNH",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "UTX",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "V",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "VZ",
    			  currentPrice : 0
    		    },
            	{
    			  // stockTicker : "WMT",
    			  currentPrice : 0
    		    },
            	{
            	// stockTicker: "XOM",
            	currentPrice: 0
            	}      
    	    ]
      });
    })
    .catch(function(response){
    });
  }  

render() {
    return (
      <div className = "container">
        <div className ="row">
        <div className = "col-md-6">
          <div className = "panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title text-center">Stocks to Buy </h3>
            </div>
          </div>
        </div>  
      </div>
    </div>
    );
  }
}

export default Trade;
