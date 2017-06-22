import React from "react"; 
import {Link} from "react-router"; 

const navbar = () => (
	// <nav classNameName="navbar navbar-default navbar-fixed-top">
  	// 	<div classNameName="container-fluid">
  	// 		<Link to = "/react"> 
   	// 			<button type="button" classNameName="btn btn-default navbar-btn">Home</button>
   	// 		</Link>
   	// 		<Link to = "/react/trade">
   	// 			<button type="button" classNameName="btn btn-default navbar-btn">Trade</button>
   	// 		</Link> 
  	// 	</div>
	// </nav>

	<nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">UserName:XXXXX</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><Link to = "/react">Home</Link></li>
            <li><Link to = "/react/trade">trade</Link></li>
            <li><a href="/">Log Out</a></li>
          </ul>
        </div>
      </div>
    </nav>

); 

export default navbar; 