import axios from "axios"; 

var apiHelper = {

	getDowPrice: function(){
		return axios.get("http://www.google.com/finance/info?q=NSE:MMM, AXP, AAPL, BA, CAT, CVX, CSCO, KO, DIS, DD, XOM, GE, GS, HD, IBM, INTC, GNG, JPM, MCD, MRK, MSFT, NKE, PFE, PG, TRV, UTX, UNH, VZ, V, WMT"); 
		
	},

	getInfo: function(){
		return axios.get("/getInfo");
	}

};

export default apiHelper; 