import React from "react"; 
import {Route, Indexroute, Router, browserHistory} from "react-router"; 
// import Trade component here 
// import Portfolio component here 
import Main from "../components/Main.js"; 
import Portfolio from "../components/Portfolio.js";
// import Trade from "../components/Trade.js";

const routes = (
	<Router history = {browserHistory}>

	<Route path="/react" component = {Main}>
	</Route> 

	<Route path = "/" component = {Main} >
		{/*<Route path = "/trade" component = {Trade}/>*/}
		
	</Route> 

	</Router>
); 

export default routes; 