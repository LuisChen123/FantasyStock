import React from "react"; 
import {Link} from "react-router"; 

const navbar = () => (
  <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">UserName:XXXXX</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><Link to = "/react">Home</Link></li>
              <li><Link to = "/react/trade">Trade</Link></li>  
            </ul>
            <ul className="nav navbar-nav navbar-right">
             <li><a href="/">Log Out</a></li>
            </ul>
          </div>
        </div>
      </nav>

); 

export default navbar; 