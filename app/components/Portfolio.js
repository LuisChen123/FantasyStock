import React, { Component } from "react";
import { Link } from "react-router";
import apiHelper from "../apiHelper/apiHelper.js"; 
// import { instanceOf } from 'prop-types';
// import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import Info from "./children/Info.js"
// import AccountingInfo from "./children/AccountInfo.js"



class Portfolio extends Component {

// static propTypes = {
//     cookies: instanceOf(Cookies).isRequired
//   }; 


  constructor() {


    super();
    
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      grade: "",
      cash: 0,
      stocks: []
    };
  
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() { 
    // console.log(req.cookies);
    this.getInfo();
  //   const { cookies } = this.props;
  //   this.state = {
  //     name: cookies.getAll()
  //   }
  //   console.log(this.state.name);
  // } 
}
  getInfo() {
    apiHelper.getInfo().then((res) =>{
      // console.log(res);
      // console.log(res.data.firstName)
      this.setState({ firstName: res.data.firstName,
                      lastName: res.data.lastName,
                      age: res.data.age,
                      grade: res.data.grade})
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-md-6">
          <Info first={this.state.firstName} last={this.state.lastName} age={this.state.age} grade={this.state.grade}/>
        </div>

        <div className="col-md-6">
          <div className = "panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title text-center">Stocks you own</h3>
            </div>
            {/*<AccountingInfo stocks={this.state.stocks}/>*/}
            <p> This is a paragraph </p>
          </div>
        </div>  
     </div>
    </div>
    );
  }
}

export default Portfolio;
