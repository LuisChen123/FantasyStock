import React from "react"; 
import {Link} from "react-router"; 

const navbar = () => (
	<nav className="navbar navbar-default navbar-fixed-top">
  		<div className="container-fluid">
  			<Link to = "/react"> 
   				<button type="button" className="btn btn-default navbar-btn">Home</button>
   			</Link>
   			<Link to = "/react/trade">
   				<button type="button" className="btn btn-default navbar-btn">Trade</button>
   			</Link> 
  		</div>
	</nav>
); 

export default navbar; 