import React from "react"; 
import {Link} from "react-router"; 

const navbar = () => (
	<nav class="navbar navbar-default navbar-fixed-top">
  		<div class="container-fluid">
  			<Link to = "/"> 
   				<button type="button" class="btn btn-default navbar-btn">Home</button>
   			</Link>
   			<Link to = "/trade">
   				<button type="button" class="btn btn-default navbar-btn">Trade</button>
   			</Link> 
  		</div>
	</nav>
); 

export default navbar; 