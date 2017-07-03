import axios from "axios"; 

var apiHelper = {

	getDowPrice: function(){
		return axios.get("https://www.google.com/finance/info?q=NSE:MMM, AXP, AAPL, BA, CAT, CVX, CSCO, KO, DIS, DD, XOM, GE, GS, HD, IBM, INTC, GNG, JPM, MCD, MRK, MSFT, NKE, PFE, PG, TRV, UTX, UNH, VZ, V, WMT"); 
		
	},

	getInfo: function(){
		return axios.get("/getInfo");
	},

	updateAfterTrade: function(cash, stockPortfolio, tradeHistory){
		return axios.post("/api/update", {
			updatedCash: cash,
			updatedStockPortfolio: stockPortfolio,
			updatedTradeHistory: tradeHistory
		}); 
	},

	createLeagueID: function(){
		return axios.post("/api/createleague");
	}, 

	joinLeague: function(leagueid){
		return axios.post("/api/joinleague", {
			leagueID: leagueid
		}); 
	},

	getLeague: function(leagueid){
		return axios.post("/api/getleague", {
			leagueID: leagueid
		}); 
	}

};

export default apiHelper; 