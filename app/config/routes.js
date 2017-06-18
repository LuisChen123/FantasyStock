import React from "react"; 
import {Route, Indexroute, Router, browserHistory} from "react-router"; 
// import Trade component here 
// import Portfolio component here 
import Main from "../components/Main.js"; 
import Portfolio from "../components/Portfolio.js"

const routes = (
	<Router history = {browserHistory}>
		<Route path = "/" component = {Main} >
			<Route path = "/trade" component = {Trade} /> 
			<Indexroute component = {Portfolio}	/> 
		</Route> 
	</Router>
); 

export default routes; 