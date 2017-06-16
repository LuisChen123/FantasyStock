// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;




var Main = React.createClass({

    // Here we render the function
  render: function() {

    return (
<div class="container">  
  <nav className="navbar navbar-inverse">
  <div className="container-fulid">
  <div className="navbar-header">
    <a href="#" className="navbar-brand"></a>
  </div>
  
  <div>
    <ul className="nav navbar-nav">
      <li><a><Link to="/saved">Saved</Link></a></li>
      <li><a><Link to="/search">Search</Link></a></li>      
    </ul>
    </div>


    </div>
</nav>

        <div className="row">

          {/* This code will dump the correct Child Component {this.props.children} */}
          {this.props.children} 
          
        </div>

</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
