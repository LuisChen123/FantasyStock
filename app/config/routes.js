import React from "react"; 
import {Route, Indexroute, Router, browserHistory} from "react-router"; 

import Main from "../components/Main.js"; 

const routes = (
	<Router history = {browserHistory}>
		<Route path = "/" component = {Main}>
		<Route path = "/trade" component = {}/> 
			<Indexroute component = {}	/> 
		}
		</Route> 
	</Router>
); 

export default routes; 